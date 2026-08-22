import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

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

const { parseWatchCatalog } = require("../lib/watch/catalog-loader.ts");
const { getPostCardForLocale } = require("../lib/watch/catalog.ts");

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
    tracks: ["en", "es"],
    supportedLocales: ["en", "es", "ja"],
    language: "English",
    topic: "Interview",
    showName: "Example Show",
    datePublished: "2026-08-22",
    copy: {
      en: validCopy(),
      es: validCopy(),
      ja: {},
    },
  };
}

test("runtime parsing strips placeholder locales instead of serving blank pages", () => {
  const [entry] = parseWatchCatalog([validEntry()]);
  assert.deepEqual(entry.supportedLocales, ["en", "es"]);
  assert.deepEqual(Object.keys(entry.copy), ["en", "es"]);
});

test("runtime parsing rejects impossible publication dates", () => {
  const entry = validEntry();
  entry.datePublished = "2026-02-31";
  assert.throws(() => parseWatchCatalog([entry]), /no valid entries/);
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
