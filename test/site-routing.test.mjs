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

const { canonicalRedirectUrl, canonicalSiteUrl, siteForHostname } = require("../lib/site-routing.ts");
const { isProductionHostname } = require("../lib/third-party-script-bootstrap.ts");
const { buildMetadata } = require("../lib/seo.ts");
const { buildSiteSitemap } = require("../app/sitemap.ts");
const { translationLandingPages } = require("../lib/translation-landing-content.ts");
if (originalLoader) require.extensions[".ts"] = originalLoader;
else delete require.extensions[".ts"];

test("Watch moves to Stage5 without moving Translator product URLs", () => {
  for (const locale of ["", "/ko", "/es", "/pt", "/vi"]) {
    const watch = `${locale}/watch/example?lang=es&utm_source=test`;
    assert.equal(canonicalRedirectUrl("translator.tools", watch), `https://stage5.tools${watch}`);
    assert.equal(canonicalRedirectUrl("www.translator.tools", watch), `https://stage5.tools${watch}`);
    assert.equal(canonicalRedirectUrl("www.stage5.tools", watch), `https://stage5.tools${watch}`);
    assert.equal(canonicalRedirectUrl("stage5.tools", watch), undefined);
    const product = `${locale}/video-downloader?utm_source=watch`;
    assert.equal(canonicalRedirectUrl("stage5.tools", product), `https://translator.tools${product}`);
    assert.equal(canonicalRedirectUrl("translator.tools", product), undefined);
    assert.equal(canonicalSiteUrl(`${locale}/watch/example`), `https://stage5.tools${locale}/watch/example`);
  }
});

test("the named Stage5 preview stays outside production routing and telemetry", () => {
  const prior = process.env.STAGE5_PREVIEW_HOST;
  const preview = "stage5-web.mikey1384.workers.dev";
  try {
    process.env.STAGE5_PREVIEW_HOST = preview;
    assert.equal(siteForHostname(preview), "stage5");
    assert.equal(isProductionHostname(preview), false);
    assert.equal(canonicalRedirectUrl(preview, "/watch/example"), undefined);
    assert.equal(siteForHostname("other.mikey1384.workers.dev"), "translator");
    assert.equal(siteForHostname("stage5.tools"), "stage5");
    assert.equal(siteForHostname("translator.tools"), "translator");
    process.env.STAGE5_PREVIEW_HOST = "translator.tools";
    assert.equal(siteForHostname("translator.tools"), "translator");
  } finally {
    if (prior === undefined) delete process.env.STAGE5_PREVIEW_HOST;
    else process.env.STAGE5_PREVIEW_HOST = prior;
  }
});

test("unknown pages, service URLs, and preview hosts retain their own behavior", () => {
  for (const path of ["/", "/missing-page", "/api/watch-vtt/example.en.30s.vtt", "/ads.txt", "/sitemap.xml", "/robots.txt", "/translator-icon.png"]) {
    assert.equal(canonicalRedirectUrl("stage5.tools", path), undefined, path);
    assert.equal(canonicalRedirectUrl("www.stage5.tools", path), `https://stage5.tools${path}`, path);
  }
  for (const host of ["localhost", "stage5-tools.pages.dev", "preview.stage5.tools", "translator.tools.evil.example"]) {
    assert.equal(canonicalRedirectUrl(host, "/watch/example"), undefined);
  }
  for (const locale of ["ja", "zh", "fr", "de"]) {
    assert.equal(canonicalRedirectUrl("stage5.tools", `/${locale}`), undefined);
    assert.equal(canonicalRedirectUrl("translator.tools", `/${locale}`), undefined);
  }
});

test("Watch metadata and locale alternates credit Stage5 while product metadata stays Translator", () => {
  const fields = { title: "Example | Translator", description: "Description", keywords: [], locale: "es" };
  const watch = buildMetadata({ ...fields, path: "/watch/example", availableLocales: ["en", "es"] });
  assert.equal(watch.alternates.canonical, "https://stage5.tools/es/watch/example");
  assert.equal(watch.alternates.languages["x-default"], "https://stage5.tools/watch/example");
  assert.equal(watch.openGraph.siteName, "Stage5");
  assert.equal(watch.title, "Example | Stage5");
  assert.equal(watch.openGraph.title, watch.title);
  assert.equal(watch.twitter.title, watch.title);
  const product = buildMetadata({ ...fields, path: "/video-downloader" });
  assert.equal(product.alternates.canonical, "https://translator.tools/es/video-downloader");
  assert.equal(product.title, fields.title);
  const reference = buildMetadata({ ...fields, title: "How Translator works", path: "/watch/example" });
  assert.equal(reference.title, "How Translator works");
});

test("the Vietnamese and Portuguese translation pages have reciprocal indexable alternates", async () => {
  const fields = { title: "Dịch phụ đề", description: "Dịch phụ đề video", keywords: [], path: "/translate" };
  const vietnamese = buildMetadata({ ...fields, locale: "vi" });
  assert.equal(vietnamese.alternates.canonical, "https://translator.tools/vi/translate");
  assert.equal(vietnamese.robots, undefined);
  assert.deepEqual(Object.keys(vietnamese.alternates.languages).sort(), ["en", "es", "ko", "pt", "vi", "x-default", "zh"]);
  for (const locale of ["en", "ko", "es", "zh", "pt", "vi"]) {
    const alternate = buildMetadata({ ...fields, locale });
    assert.deepEqual(alternate.alternates.languages, vietnamese.alternates.languages);
  }
  for (const locale of ["ja", "fr", "de"]) {
    assert.equal(buildMetadata({ ...fields, locale }).robots.index, false);
  }
  const sitemap = await buildSiteSitemap("translator");
  const entry = sitemap.find(item => item.url === "https://translator.tools/vi/translate");
  assert(entry);
  assert.deepEqual(entry.alternates.languages, vietnamese.alternates.languages);
  assert.equal(canonicalRedirectUrl("stage5.tools", "/vi/translate"), entry.url);
  assert.equal(canonicalRedirectUrl("www.translator.tools", "/vi/translate"), entry.url);
});

test("hreflang joins only translation pages that translate in the same direction", async () => {
  const sitemap = await buildSiteSitemap("translator");
  const languagesOf = (url) => sitemap.find(entry => entry.url === url)?.alternates.languages;
  const keys = (url) => Object.keys(languagesOf(url)).sort();
  const t = (locale, slug) => `https://translator.tools${locale === "en" ? "" : `/${locale}`}/translate/${slug}`;

  // Viewer pages: foreign-language video -> subtitles in the reader's language.
  assert.deepEqual(keys(t("en", "korean")), ["en", "vi", "x-default"]);
  assert.deepEqual(keys(t("vi", "korean")), ["en", "vi", "x-default"]);
  assert.deepEqual(keys(t("en", "japanese")), ["en", "vi", "x-default"]);
  assert.deepEqual(keys(t("en", "german")), ["en", "x-default"]);
  assert.deepEqual(keys(t("es", "portuguese")), ["es"]);
  // The "translate into X" pages keep their own group, without English.
  assert.deepEqual(keys(t("ko", "korean")), ["de", "es", "ko", "zh"]);
  assert.deepEqual(keys(t("ko", "japanese")), ["ko", "zh"]);
  assert.deepEqual(keys(t("ko", "german")), ["fr", "ja", "ko", "pt", "vi", "zh"]);
  assert.deepEqual(keys(t("en", "portuguese")), ["de", "en", "ja", "ko", "x-default", "zh"]);
  // Unaffected groups are unchanged.
  assert.deepEqual(keys(t("en", "spanish")), ["en", "es", "ja", "ko", "pt", "vi", "x-default", "zh"]);

  for (const entry of sitemap) {
    const metadataLocale = new URL(entry.url).pathname.split("/")[1];
    const locale = ["ko", "es", "ja", "zh", "fr", "de", "pt", "vi"].includes(metadataLocale) ? metadataLocale : "en";
    const path = new URL(entry.url).pathname.replace(new RegExp(`^/${locale}(?=/|$)`), "") || "/";
    const metadata = buildMetadata({ title: "t", description: "d", keywords: [], path, locale });
    assert.equal(metadata.alternates.canonical, entry.url);
    assert.deepEqual(metadata.alternates.languages, entry.alternates.languages, entry.url);
  }
  for (const page of translationLandingPages) {
    if (page.path !== "/translate") assert.match(page.direction ?? "", /^[a-z]+>[a-z]+$/, `${page.locale}:${page.path}`);
  }
});

test("English pair pages do not share template FAQs or steps", () => {
  const pairs = translationLandingPages.filter(page => page.locale === "en" && page.path !== "/translate");
  assert.equal(pairs.length, 6);
  const seen = new Map();
  for (const page of pairs) {
    assert(page.sources && page.pitfalls, page.path);
    for (const text of [...page.faqs.map(faq => faq.question), ...page.steps.map(step => step.body), ...page.pitfalls.items.map(item => item.title)]) {
      assert(!seen.has(text), `${page.path} repeats "${text}" from ${seen.get(text)}`);
      seen.set(text, page.path);
    }
  }
});

test("each domain advertises only its own canonical route inventory", async () => {
  const priorBase = process.env.WATCH_ASSETS_BASE;
  const priorUrl = process.env.WATCH_CATALOG_URL;
  delete process.env.WATCH_ASSETS_BASE;
  delete process.env.WATCH_CATALOG_URL;
  try {
    const translator = await buildSiteSitemap("translator");
    const stage5 = await buildSiteSitemap("stage5");
    // The Vietnamese and Portuguese subtitle task pages are eligible; other
    // localized exclusions in NOINDEXED_LOCALIZED_PAGES remain in place.
    assert.equal(translator.length, 88);
    const translatorUrls = translator.map(entry => entry.url);
    for (const kept of ["https://translator.tools/pt/translate", "https://translator.tools/pt/video-downloader", "https://translator.tools/vi/translate/japanese", "https://translator.tools/ko/pricing", "https://translator.tools/zh/translate/chinese", "https://translator.tools/pricing"]) {
      assert(translatorUrls.includes(kept), kept);
    }
    for (const dropped of ["https://translator.tools/de/pricing", "https://translator.tools/ja/faq", "https://translator.tools/fr/subtitle-editor", "https://translator.tools/de/translate/chinese", "https://translator.tools/es"]) {
      assert(!translatorUrls.includes(dropped), dropped);
    }
    assert(translator.every(entry => entry.url.startsWith("https://translator.tools/")));
    assert(translator.every(entry => !/\/(watch|echo|reflect)(?:\/|$)/.test(new URL(entry.url).pathname)));
    assert(stage5.every(entry => entry.url.startsWith("https://stage5.tools/")));
    assert(stage5.some(entry => entry.url === "https://stage5.tools/ko"));
    assert(stage5.some(entry => entry.url === "https://stage5.tools/watch"));
    for (const locale of ["", "/ko", "/es", "/ja", "/zh", "/fr", "/de", "/pt", "/vi"]) {
      for (const path of ["/", "/echo", "/reflect"]) {
        const url = `https://stage5.tools${locale}${path === "/" && locale ? "" : path}`;
        assert(stage5.some(entry => entry.url === url), url);
      }
    }
    assert(stage5.every(entry => !/\/echo\//.test(new URL(entry.url).pathname)));
    assert(stage5.every(entry => !entry.url.includes("video-downloader")));
    assert(stage5.every(entry => Object.values(entry.alternates.languages).every(url => url.startsWith("https://stage5.tools/"))));
  } finally {
    if (priorBase !== undefined) process.env.WATCH_ASSETS_BASE = priorBase;
    if (priorUrl !== undefined) process.env.WATCH_CATALOG_URL = priorUrl;
  }
});

test("Echo and Reflect preserve locale and attribution when moving to Stage5", () => {
  for (const prefix of ["", "/ko", "/es", "/ja", "/zh", "/fr", "/de", "/pt", "/vi"]) {
    for (const route of ["/echo", "/reflect", "/echo/privacy", "/echo/terms", "/echo/support"]) {
      const path = `${prefix}${route}?utm_source=echo`;
      for (const host of ["translator.tools", "www.translator.tools", "www.stage5.tools"]) {
        assert.equal(canonicalRedirectUrl(host, path), `https://stage5.tools${path}`);
      }
      assert.equal(canonicalRedirectUrl("stage5.tools", path), undefined);
      assert.equal(canonicalSiteUrl(`${prefix}${route}`), `https://stage5.tools${prefix}${route}`);
    }
  }
  for (const path of ["/reflect-other", "/echo-other"]) assert.equal(canonicalRedirectUrl("translator.tools", path), undefined);
});
