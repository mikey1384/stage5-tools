import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";
import { getVideoUploadDate, isVideoUploadDate } from "../lib/watch/publication-date.mjs";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const originalLoader = require.extensions[".ts"];
require.extensions[".ts"] = (module, filename) => {
  const source = require("node:fs").readFileSync(filename, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
    fileName: filename,
  }).outputText;
  module._compile(output, filename);
};

const { parseWatchCatalog, getCatalogEntrySync, getAllCatalogSlugsSync, loadWatchCatalog } = require("../lib/watch/catalog-loader.ts");
const { getPostCardForLocale, getVideoLanguages } = require("../lib/watch/catalog.ts");

if (originalLoader) require.extensions[".ts"] = originalLoader;
else delete require.extensions[".ts"];

function validCopy() {
  return {
    title: "SEO title",
    description: "A complete description.",
    keywords: ["captions"],
    h1: "Heading",
    intro: "Introduction.",
    section1Title: "First section",
    section1Body: ["First body."],
    section2Title: "Second section",
    section2Body: ["Second body."],
    howToTitle: "How to",
    howToBody: "Instructions.",
    howToSteps: [{ title: "Open", body: "Open it." }],
    pricingTitle: "Pricing",
    pricingFree: "Preview.",
    pricingPaid: "Processing.",
    downloadTitle: "Download",
    downloadBody: "Get Translator.",
    aboutTitle: "About",
    aboutBody: ["About this video."],
  };
}

function validEntry() {
  return {
    slug: "runtime-catalog-entry",
    videoId: "U9DyHthJ6LA",
    vttSlug: "runtime-catalog-entry",
    sourceLang: "en",
    tracks: ["en", "es", "ja"],
    supportedLocales: ["en", "es", "ja"],
    language: "English",
    topic: "Interview",
    showName: "Example Show",
    datePublished: "2026-08-22",
    copy: {
      en: validCopy(),
      es: validCopy(),
      ja: validCopy(),
    },
  };
}

test("runtime parsing strips unsupported page locales but preserves caption tracks", () => {
  const [entry] = parseWatchCatalog([validEntry()]);
  assert.deepEqual(entry.supportedLocales, ["en", "es"]);
  assert.deepEqual(Object.keys(entry.copy), ["en", "es"]);
  assert.deepEqual(entry.tracks, ["en", "es", "ja"]);
});

test("mixed spoken languages survive catalog parsing without inventing caption tracks", () => {
  const source = validEntry();
  source.sourceLang = "ko";
  source.structuredDataAbout = [{ "@type": "VideoObject", inLanguage: ["ko", "ja", "ko"] }];
  const [parsed] = parseWatchCatalog([source]);
  assert.deepEqual(getVideoLanguages(parsed), ["ko", "ja"]);
  assert.deepEqual(parsed.tracks, source.tracks);
  for (const invalid of [[], ["ko", "invalid"], 1, null]) {
    parsed.structuredDataAbout[0].inLanguage = invalid;
    assert.equal(getVideoLanguages(parsed), "ko");
  }
});

test("runtime catalog preserves the source publication offset across a UTC day boundary", () => {
  const source = validEntry();
  source.datePublished = "2022-12-06";
  source.structuredDataAbout = [{ "@type": "VideoObject", uploadDate: "2022-12-05T17:00:08-08:00" }];
  const [parsed] = parseWatchCatalog([source]);
  assert.equal(parsed.datePublished, "2022-12-06");
  assert.equal(getVideoUploadDate(parsed), "2022-12-05T17:00:08-08:00");
});

test("legacy or invalid optional video dates retain the real calendar date without inventing a time", () => {
  for (const uploadDate of [undefined, "2026-08-22", "2026-02-30T12:00:00Z", "2026-08-22T12:00:00", "2026-08-22T24:00:00Z", "2026-08-22T12:00:00+14:30", "not a date"]) {
    const source = validEntry();
    source.structuredDataAbout = [{ "@type": "VideoObject", uploadDate }];
    const [parsed] = parseWatchCatalog([source]);
    assert.equal(getVideoUploadDate(parsed), source.datePublished);
    assert.equal(isVideoUploadDate(uploadDate), false);
  }
  assert.equal(getVideoUploadDate(validEntry()), "2026-08-22");
});

test("source timestamps accept UTC, fractional seconds and real non-hour offsets", () => {
  for (const uploadDate of ["2024-02-29T00:00:00Z", "2026-08-22T12:15:30.125+05:45", "2026-08-22T12:15:30-03:30"]) {
    assert.equal(isVideoUploadDate(uploadDate), true);
  }
});

test("runtime parsing rejects impossible publication dates", () => {
  const entry = validEntry();
  entry.datePublished = "2026-02-31";
  assert.throws(() => parseWatchCatalog([entry]), /no valid entries/);
});

test("unavailable source videos cannot reappear through R2 or bundled fallback", async () => {
  const unavailable = { ...validEntry(), slug: "unavailable", videoId: "AcGwBcHPMPQ" };
  assert.deepEqual(parseWatchCatalog([unavailable]), []);
  assert.deepEqual(parseWatchCatalog([validEntry(), unavailable]).map((entry) => entry.slug), [validEntry().slug]);
  for (const slug of ["pique-la-resistencia", "park-chan-wook-lee-dong-jin"]) {
    assert.equal(getCatalogEntrySync(slug), undefined);
    assert.equal(getAllCatalogSlugsSync().includes(slug), false);
  }
  const priorBase = process.env.WATCH_ASSETS_BASE;
  const priorUrl = process.env.WATCH_CATALOG_URL;
  try {
    delete process.env.WATCH_ASSETS_BASE;
    delete process.env.WATCH_CATALOG_URL;
    assert.equal((await loadWatchCatalog()).some((entry) => ["AcGwBcHPMPQ", "CjVz6F62T4w"].includes(entry.videoId)), false);
  } finally {
    if (priorBase === undefined) delete process.env.WATCH_ASSETS_BASE;
    else process.env.WATCH_ASSETS_BASE = priorBase;
    if (priorUrl === undefined) delete process.env.WATCH_CATALOG_URL;
    else process.env.WATCH_CATALOG_URL = priorUrl;
  }
});

test("localizes fallback language and topic labels on Watch cards", () => {
  const entry = validEntry();
  entry.language = "English";
  entry.topic = "Film";
  const [parsed] = parseWatchCatalog([entry]);

  assert.deepEqual(
    {
      language: getPostCardForLocale(parsed, "es")?.language,
      topic: getPostCardForLocale(parsed, "es")?.topic,
    },
    { language: "Inglés", topic: "Cine" },
  );
});


test("runtime catalog outages preserve recent inventory but never publish a bundled replacement", async () => {
  const priorFetch = globalThis.fetch;
  const priorNow = Date.now;
  const priorBase = process.env.WATCH_ASSETS_BASE;
  const priorUrl = process.env.WATCH_CATALOG_URL;
  let now = 2_000_000;
  process.env.WATCH_ASSETS_BASE = "https://catalog-test.invalid/watch";
  Date.now = () => now;
  try {
    globalThis.fetch = async (_url, options) => {
      assert(options.signal instanceof AbortSignal);
      return new Response("unavailable", { status: 503 });
    };
    await assert.rejects(loadWatchCatalog(), /temporarily unavailable/);
    globalThis.fetch = async () => Response.json([validEntry()]);
    const catalog = await loadWatchCatalog();
    assert.equal(catalog[0].slug, "runtime-catalog-entry");
    assert.match(catalog[0].copy.en.howToNote, /send the required audio or text/);
    now += 61_000;
    globalThis.fetch = async () => { throw new Error("simulated network outage"); };
    assert.deepEqual(await loadWatchCatalog(), catalog);
    now += 15 * 60_000;
    await assert.rejects(loadWatchCatalog(), /temporarily unavailable/);
  } finally {
    globalThis.fetch = priorFetch;
    Date.now = priorNow;
    if (priorBase === undefined) delete process.env.WATCH_ASSETS_BASE;
    else process.env.WATCH_ASSETS_BASE = priorBase;
    if (priorUrl === undefined) delete process.env.WATCH_CATALOG_URL;
    else process.env.WATCH_CATALOG_URL = priorUrl;
  }
});
