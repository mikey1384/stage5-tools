import assert from "node:assert/strict";
import test from "node:test";
import {
  expectedVttFileNames,
  validateWatchCatalog,
  validateWatchEntry,
} from "../scripts/watch-catalog-validation.mjs";

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
