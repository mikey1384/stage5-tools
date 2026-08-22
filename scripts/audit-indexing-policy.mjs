import { createRequire } from "node:module";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

async function renderSitemapForAudit() {
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

  try {
    const sitemapPath = fileURLToPath(
      new URL("../app/sitemap.ts", import.meta.url),
    );
    const sitemapModule = require(sitemapPath);
    const entries = await sitemapModule.default();
    return entries
      .map((entry) => {
        let xml = `<loc>${entry.url}</loc>`;
        for (const [locale, href] of Object.entries(
          entry.alternates?.languages ?? {},
        )) {
          xml += `<xhtml:link hreflang="${locale}" href="${href}" />`;
        }
        if (entry.lastModified) xml += `<lastmod>${entry.lastModified}</lastmod>`;
        if (entry.changeFrequency) {
          xml += `<changefreq>${entry.changeFrequency}</changefreq>`;
        }
        if (entry.priority !== undefined) {
          xml += `<priority>${entry.priority}</priority>`;
        }
        return xml;
      })
      .join("\n");
  } finally {
    if (originalLoader) require.extensions[".ts"] = originalLoader;
    else delete require.extensions[".ts"];
  }
}

const sitemap = await renderSitemapForAudit();

const failures = [];
const baseUrl = "https://translator.tools";
const utilityPaths = ["contact", "privacy", "terms"];
const englishOnlyPaths = ["agents", "open-source"];
const localizedUtilityPattern = new RegExp(
  `https://translator\\.tools/(?:ko|es|ja|zh|fr|de|pt|vi)/(?:${utilityPaths.join("|")})(?:<|"|&quot;)`,
);
const localizedEnglishOnlyPattern = new RegExp(
  `https://translator\\.tools/(?:ko|es|ja|zh|fr|de|pt|vi)/(?:${englishOnlyPaths.join("|")})(?:<|"|&quot;)`,
);

for (const tag of ["lastmod", "changefreq", "priority"]) {
  if (sitemap.includes(`<${tag}>`)) {
    failures.push(
      `sitemap must not emit <${tag}> without reliable source data`,
    );
  }
}

for (const path of utilityPaths) {
  const url = `https://translator.tools/${path}`;
  if (!sitemap.includes(`<loc>${url}</loc>`)) {
    failures.push(`missing English utility URL: ${url}`);
  }
}

if (localizedUtilityPattern.test(sitemap)) {
  failures.push(
    "localized utility URLs must not be advertised as index candidates",
  );
}
if (localizedEnglishOnlyPattern.test(sitemap)) {
  failures.push("English-only routes must not advertise localized URLs");
}

const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => match[1],
);
if (urls.length === 0) {
  failures.push("sitemap contains no URLs");
}
if (new Set(urls).size !== urls.length) {
  failures.push("sitemap contains duplicate canonical URLs");
}

const appPathsManifestPath = fileURLToPath(
  new URL("../.next/server/app-paths-manifest.json", import.meta.url),
);

if (!existsSync(appPathsManifestPath)) {
  failures.push(
    "missing .next/server/app-paths-manifest.json; run the indexing audit after next build",
  );
} else {
  const appPathsManifest = JSON.parse(readFileSync(appPathsManifestPath, "utf8"));
  const noindexRoutes = new Set([
    "/checkout/cancelled",
    "/checkout/success",
    "/echo/privacy",
    "/echo/support",
    "/echo/terms",
  ]);
  const generatedRouteFamilies = new Set([
    "/[locale]",
    "/translate/[language]",
    "/watch/[slug]",
  ]);

  const pageRoutes = Object.keys(appPathsManifest)
    .filter((route) => route.endsWith("/page") && route !== "/_not-found/page")
    .map((route) => {
      const withoutPage = route.replace(/\/page$/, "");
      const withoutGroups = withoutPage.replace(/\/\([^/]+\)/g, "");
      return withoutGroups || "/";
    });

  for (const route of pageRoutes) {
    if (generatedRouteFamilies.has(route)) continue;

    const expectedUrl = new URL(route, baseUrl).toString();
    const advertised = urls.includes(expectedUrl);

    if (noindexRoutes.has(route)) {
      if (advertised) {
        failures.push(`noindex route advertised in sitemap: ${expectedUrl}`);
      }

      const pageSourcePath = fileURLToPath(
        new URL(`../app${route}/page.tsx`, import.meta.url),
      );
      const source = readFileSync(pageSourcePath, "utf8");
      if (
        !/robots\s*:\s*\{[\s\S]*?index\s*:\s*false[\s\S]*?follow\s*:\s*false/.test(
          source,
        )
      ) {
        failures.push(`excluded page lacks explicit noindex,nofollow: ${route}`);
      }
      continue;
    }

    if (!advertised) {
      failures.push(`indexable page route missing from sitemap: ${expectedUrl}`);
    }
  }
}

if (failures.length > 0) {
  console.error("Indexing policy audit failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Indexing policy audit passed for ${urls.length} sitemap URLs.`);
}
