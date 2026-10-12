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

test("each domain advertises only its own canonical route inventory", async () => {
  const priorBase = process.env.WATCH_ASSETS_BASE;
  const priorUrl = process.env.WATCH_CATALOG_URL;
  delete process.env.WATCH_ASSETS_BASE;
  delete process.env.WATCH_CATALOG_URL;
  try {
    const translator = await buildSiteSitemap("translator");
    const stage5 = await buildSiteSitemap("stage5");
    // 149 routes minus the 63 localized pages Google declines to index
    // (NOINDEXED_LOCALIZED_PAGES in lib/locales.ts).
    assert.equal(translator.length, 86);
    const translatorUrls = translator.map(entry => entry.url);
    for (const kept of ["https://translator.tools/pt/video-downloader", "https://translator.tools/vi/translate/japanese", "https://translator.tools/ko/pricing", "https://translator.tools/zh/translate/chinese", "https://translator.tools/pricing"]) {
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
