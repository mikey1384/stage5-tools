import assert from "node:assert/strict";
import test from "node:test";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createServer } from "node:http";
import { spawn } from "node:child_process";
import { once } from "node:events";
import {
  expectedVttFileNames,
  loadValidatedWatchVtts,
  validateWatchCatalog,
  validateWatchEntry,
  validateWatchVtt,
} from "../scripts/watch-catalog-validation.mjs";

const captions = (body) => `WEBVTT\n\nNOTE Existing sample provenance.\n\n${body}\n`;

test("publication accepts documented timestamps and legacy dates but rejects malformed video times", () => {
  for (const uploadDate of [undefined, "2026-08-22", "2022-12-05T17:00:08-08:00", "2024-02-29T12:00:00Z"]) {
    const entry = validEntry();
    entry.structuredDataAbout = [{ "@type": "VideoObject", uploadDate }];
    assert.equal(validateWatchEntry(entry), entry);
  }
  for (const uploadDate of [null, "2026-02-30T12:00:00Z", "2026-08-22T12:00:00", "2026-08-22T24:00:00Z", "2026-08-22T12:00:00+99:00"]) {
    const entry = validEntry();
    entry.structuredDataAbout = [{ "@type": "VideoObject", uploadDate }];
    assert.throws(() => validateWatchCatalog([entry]), /invalid VideoObject uploadDate/);
  }
});

test("rejects the real 19ms caption flash before publication", () => {
  assert.throws(() => validateWatchVtt(captions(
    "00:00:07.859 --> 00:00:07.878\nThank you.",
  ), "sample.en.30s.vtt"), /cue 1 lasts 19ms/);
});

test("uses exact millisecond arithmetic at the publication floor", () => {
  assert.deepEqual(validateWatchVtt(captions(
    "00:00:07.859 --> 00:00:07.959\nYes.",
  )), { cueCount: 1 });
});

test("accepts localized multiline captions, cue IDs and CRLF", () => {
  assert.deepEqual(validateWatchVtt(captions(
    "first\n00:00:00.000 --> 00:00:01.500\n안녕하세요.\nXin chào.",
  ).replaceAll("\n", "\r\n")), { cueCount: 1 });
});

test("rejects blank and punctuation-only cards", () => {
  for (const text of ["", "...", "—…？！"]) {
    assert.throws(() => validateWatchVtt(captions(
      `00:00:00.000 --> 00:00:01.000\n${text}`,
    )), /empty or punctuation-only/);
  }
});

test("rejects corrupt timing, overlap and cues outside the preview", () => {
  for (const timing of [
    "00:00:02.000 --> 00:00:01.000",
    "00:00:29.000 --> 00:00:30.001",
    "00:00:00.000 --> 00:60:01.000",
    "00:01.000 --> 00:02.000",
  ]) assert.throws(() => validateWatchVtt(captions(`${timing}\nHello.`)));
  assert.throws(() => validateWatchVtt(captions(
    "00:00:00.000 --> 00:00:01.000\nHello.\n\n00:00:00.999 --> 00:00:02.000\nAgain.",
  )), /overlapping/);
});

test("rejects a missing header or a file with no cues", () => {
  assert.throws(() => validateWatchVtt("not captions"), /header/);
  assert.throws(() => validateWatchVtt(captions("")), /no caption cues/);
});

test("preflights the complete batch and returns the exact checked bytes", async () => {
  const directory = await mkdtemp(join(tmpdir(), "watch-vtt-preflight-"));
  try {
    const valid = join(directory, "sample.en.30s.vtt");
    const invalid = join(directory, "sample.ko.30s.vtt");
    const good = captions("00:00:00.000 --> 00:00:01.000\nHello.");
    await writeFile(valid, good);
    await writeFile(invalid, captions("00:00:00.000 --> 00:00:00.021\n안녕."));
    await assert.rejects(loadValidatedWatchVtts([valid, invalid]), /21ms/);
    await writeFile(invalid, captions("00:00:00.000 --> 00:00:01.000\n안녕."));
    const checked = await loadValidatedWatchVtts([valid, invalid]);
    assert.equal(checked.length, 2);
    assert.deepEqual(checked[0], { fileName: "sample.en.30s.vtt", content: good });
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test("the publisher makes no storage writes when the last caption fails", async () => {
  const directory = await mkdtemp(join(tmpdir(), "watch-publish-preflight-"));
  const writes = [];
  const server = createServer((request, response) => {
    if (request.method === "PUT") writes.push(request.url);
    response.setHeader("Content-Type", "application/json");
    response.end("[]");
  });
  try {
    server.listen(0, "127.0.0.1");
    await once(server, "listening");
    const entry = validEntry();
    const entryPath = join(directory, "entry.json");
    await writeFile(entryPath, JSON.stringify(entry));
    await writeFile(join(directory, "example-watch-video.en.30s.vtt"),
      captions("00:00:00.000 --> 00:00:01.000\nHello."));
    await writeFile(join(directory, "example-watch-video.es.30s.vtt"),
      captions("00:00:00.000 --> 00:00:00.019\nGracias."));
    const child = spawn(process.execPath, [
      "scripts/publish-watch.mjs", "add", entryPath, directory,
    ], {
      cwd: new URL("..", import.meta.url),
      env: { ...process.env,
        R2_ENDPOINT: `http://127.0.0.1:${server.address().port}`,
        R2_BUCKET: "local-test",
        AWS_ACCESS_KEY_ID: "local-test-only",
        AWS_SECRET_ACCESS_KEY: "local-test-only",
      },
      stdio: ["ignore", "ignore", "pipe"],
    });
    let error = "";
    child.stderr.on("data", chunk => { error += chunk; });
    const [code] = await once(child, "close");
    assert.equal(code, 1);
    assert.match(error, /cue 1 lasts 19ms/);
    assert.deepEqual(writes, []);
  } finally {
    server.closeAllConnections();
    await new Promise(resolve => server.close(resolve));
    await rm(directory, { recursive: true, force: true });
  }
});

function validCopy() {
  return {
    title: "SEO title",
    description: "A useful localized description.",
    keywords: ["captions", "translation"],
    h1: "Localized heading",
    intro: "Localized introduction.",
    section1Title: "First section",
    section1Body: ["First section body."],
    section2Title: "Second section",
    section2Body: ["Second section body."],
    howToTitle: "How it works",
    howToBody: "Follow these steps.",
    howToSteps: [{ title: "Open", body: "Open the video." }],
    pricingTitle: "Pricing",
    pricingFree: "Preview captions.",
    pricingPaid: "AI processing.",
    downloadTitle: "Use Translator",
    downloadBody: "Download the app.",
    aboutTitle: "About this page",
    aboutBody: ["This page demonstrates translated captions."],
  };
}

function validEntry() {
  return {
    slug: "example-watch-video",
    videoId: "U9DyHthJ6LA",
    vttSlug: "example-watch-video",
    sourceLang: "en",
    tracks: ["en", "es"],
    supportedLocales: ["en", "es"],
    language: "English",
    topic: "Interview",
    showName: "Example Show",
    datePublished: "2026-08-22",
    copy: {
      en: validCopy(),
      es: validCopy(),
    },
  };
}

test("accepts a complete entry and derives its required VTT files", () => {
  const entry = validEntry();
  assert.equal(validateWatchEntry(entry), entry);
  assert.deepEqual(expectedVttFileNames(entry), [
    "example-watch-video.en.30s.vtt",
    "example-watch-video.es.30s.vtt",
  ]);
});

test("rejects a declared locale with placeholder copy", () => {
  const entry = validEntry();
  entry.copy.es = {};
  assert.throws(() => validateWatchEntry(entry), /incomplete es copy/);
});

test("rejects page locales that the Watch router does not expose", () => {
  const entry = validEntry();
  entry.supportedLocales.push("ja");
  entry.copy.ja = validCopy();
  assert.throws(
    () => validateWatchEntry(entry),
    /supported Watch page locales/,
  );

  entry.supportedLocales.pop();
  entry.tracks.push("ja");
  assert.equal(validateWatchEntry(entry), entry);
});

test("rejects impossible publication dates and incomplete optional sections", () => {
  const badDate = validEntry();
  badDate.datePublished = "2026-02-31";
  assert.throws(() => validateWatchEntry(badDate), /datePublished/);

  const incompleteSection = validEntry();
  incompleteSection.copy.en.contentTitle = "Extra context";
  assert.throws(
    () => validateWatchEntry(incompleteSection),
    /contentTitle and contentBody/,
  );
});

test("rejects duplicate catalog slugs", () => {
  const entry = validEntry();
  assert.throws(
    () => validateWatchCatalog([entry, structuredClone(entry)]),
    /duplicate slug/,
  );
});
