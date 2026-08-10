import { readFile } from "node:fs/promises";

const sitemapPath = ".next/server/app/sitemap.xml.body";
const sitemap = await readFile(sitemapPath, "utf8");

const failures = [];
const utilityPaths = ["contact", "privacy", "terms"];
const localizedUtilityPattern = new RegExp(
  `https://translator\\.tools/(?:ko|es|ja|zh|fr|de|pt|vi)/(?:${utilityPaths.join("|")})(?:<|"|&quot;)`,
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

const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => match[1],
);
if (urls.length === 0) {
  failures.push("sitemap contains no URLs");
}
if (new Set(urls).size !== urls.length) {
  failures.push("sitemap contains duplicate canonical URLs");
}

if (failures.length > 0) {
  console.error("Indexing policy audit failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Indexing policy audit passed for ${urls.length} sitemap URLs.`);
}
