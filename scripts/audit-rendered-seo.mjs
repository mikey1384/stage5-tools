const AUDIT_BASE_URL =
  process.env.RENDERED_AUDIT_BASE_URL ?? "http://127.0.0.1:8793";
const REQUEST_HOST = process.env.RENDERED_AUDIT_HOST ?? "translator.tools";
const SITE_ORIGIN = "https://translator.tools";
const EXPECTED_GTM_ID =
  process.env.RENDERED_AUDIT_GTM_ID ?? "GTM-WTQTZDM4";
const WATCH_ASSETS_BASE =
  process.env.RENDERED_AUDIT_WATCH_ASSETS_BASE ??
  "https://downloads.stage5.tools/watch";
const CONCURRENCY = Number(process.env.RENDERED_AUDIT_CONCURRENCY ?? "12");

const localePrefixes = new Set([
  "ko",
  "es",
  "ja",
  "zh",
  "fr",
  "de",
  "pt",
  "vi",
]);
const watchLocales = ["en", "es", "ko", "pt", "vi"];
const nonEnglishLocales = ["ko", "es", "ja", "zh", "fr", "de", "pt", "vi"];

function decodeEntities(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replace(/&#x([0-9a-f]+);/gi, (_, value) =>
      String.fromCodePoint(Number.parseInt(value, 16)),
    )
    .replace(/&#(\d+);/g, (_, value) =>
      String.fromCodePoint(Number.parseInt(value, 10)),
    );
}

function getAttribute(tag, name) {
  const quoted = tag.match(
    new RegExp(`(?:^|\\s)${name}\\s*=\\s*(["'])([\\s\\S]*?)\\1`, "i"),
  );
  if (quoted) return decodeEntities(quoted[2]);

  const unquoted = tag.match(
    new RegExp(`(?:^|\\s)${name}\\s*=\\s*([^\\s>]+)`, "i"),
  );
  return unquoted ? decodeEntities(unquoted[1]) : undefined;
}

function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map(
    (match) => match[0],
  );
}

function scriptBodiesById(html, id) {
  return [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
    .filter((match) => getAttribute(`<script${match[1]}>`, "id") === id)
    .map((match) => decodeEntities(match[2]));
}

function metadataValues(html, attribute, key) {
  return tags(html, "meta")
    .filter((tag) => getAttribute(tag, attribute)?.toLowerCase() === key)
    .map((tag) => getAttribute(tag, "content") ?? "");
}

function linkValues(html, rel) {
  return tags(html, "link").filter((tag) =>
    (getAttribute(tag, "rel") ?? "")
      .toLowerCase()
      .split(/\s+/)
      .includes(rel),
  );
}

function expectedLocaleForUrl(url) {
  const firstSegment = new URL(url).pathname.split("/").filter(Boolean)[0];
  return localePrefixes.has(firstSegment) ? firstSegment : "en";
}

function englishPathForUrl(url) {
  const parsed = new URL(url);
  const segments = parsed.pathname.split("/").filter(Boolean);
  if (localePrefixes.has(segments[0])) segments.shift();
  return `/${segments.join("/")}`.replace(/\/$/, "") || "/";
}

function parseSitemap(xml) {
  return [...xml.matchAll(/<url>([\s\S]*?)<\/url>/gi)].map((match) => {
    const body = match[1];
    const loc = body.match(/<loc>([\s\S]*?)<\/loc>/i)?.[1];
    if (!loc) throw new Error("Sitemap URL entry is missing <loc>.");

    const alternates = new Map();
    for (const link of body.matchAll(/<xhtml:link\b[^>]*>/gi)) {
      const hreflang = getAttribute(link[0], "hreflang");
      const href = getAttribute(link[0], "href");
      if (hreflang && href) alternates.set(hreflang, href);
    }

    return { url: decodeEntities(loc.trim()), alternates };
  });
}

async function request(siteUrl, { redirect = "manual" } = {}) {
  const requested = new URL(siteUrl, SITE_ORIGIN);
  const target = new URL(`${requested.pathname}${requested.search}`, AUDIT_BASE_URL);
  const headers = {
    "user-agent":
      "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  };
  if (REQUEST_HOST) headers.host = REQUEST_HOST;

  return fetch(target, { headers, redirect });
}

function collectStructuredDataTypes(value, types = new Set()) {
  if (Array.isArray(value)) {
    for (const child of value) collectStructuredDataTypes(child, types);
    return types;
  }
  if (!value || typeof value !== "object") return types;

  const type = value["@type"];
  if (Array.isArray(type)) {
    for (const item of type) if (typeof item === "string") types.add(item);
  } else if (typeof type === "string") {
    types.add(type);
  }
  for (const child of Object.values(value)) {
    collectStructuredDataTypes(child, types);
  }
  return types;
}

function hasDirective(values, directive) {
  return values.some((value) =>
    value
      .toLowerCase()
      .split(/[\s,]+/)
      .includes(directive),
  );
}

function canonicalizeUrl(value) {
  const parsed = new URL(value);
  parsed.hash = "";
  return parsed.toString();
}

const failures = [];
const titleOwners = new Map();
const descriptionOwners = new Map();
const localizedMetadata = new Map();
let adsenseClientId;
let watchDetailCount = 0;
let vttCount = 0;

function fail(scope, message) {
  failures.push(`${scope}: ${message}`);
}

async function auditIndexablePage(entry) {
  let response;
  try {
    response = await request(entry.url);
  } catch (error) {
    fail(entry.url, `request failed: ${error.message}`);
    return;
  }

  if (response.status !== 200) {
    fail(entry.url, `expected HTTP 200, received ${response.status}`);
    return;
  }
  if (!response.headers.get("content-type")?.includes("text/html")) {
    fail(entry.url, `unexpected content type ${response.headers.get("content-type")}`);
  }

  const html = await response.text();
  const htmlTag = html.match(/<html\b[^>]*>/i)?.[0];
  const htmlLang = htmlTag ? getAttribute(htmlTag, "lang") : undefined;
  const expectedLocale = expectedLocaleForUrl(entry.url);
  if (htmlLang !== expectedLocale) {
    fail(entry.url, `expected html lang=${expectedLocale}, received ${htmlLang ?? "none"}`);
  }

  const titles = [...html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)].map(
    (match) => decodeEntities(match[1].trim()),
  );
  if (titles.length !== 1 || !titles[0]) {
    fail(entry.url, `expected one non-empty title, found ${titles.length}`);
  } else {
    const key = `${expectedLocale}:${titles[0]}`;
    const prior = titleOwners.get(key);
    if (prior && prior !== entry.url) {
      fail(entry.url, `duplicates ${expectedLocale} title from ${prior}`);
    } else {
      titleOwners.set(key, entry.url);
    }
  }

  const descriptions = metadataValues(html, "name", "description");
  if (descriptions.length !== 1 || !descriptions[0].trim()) {
    fail(entry.url, `expected one non-empty meta description, found ${descriptions.length}`);
  } else {
    const key = `${expectedLocale}:${descriptions[0]}`;
    const prior = descriptionOwners.get(key);
    if (prior && prior !== entry.url) {
      fail(entry.url, `duplicates ${expectedLocale} description from ${prior}`);
    } else {
      descriptionOwners.set(key, entry.url);
    }
  }
  const h1 = decodeEntities(
    (html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
  localizedMetadata.set(entry.url, {
    locale: expectedLocale,
    title: titles[0] ?? "",
    description: descriptions[0] ?? "",
    h1,
    englishUrl: entry.alternates.get("en"),
  });

  const canonicalLinks = linkValues(html, "canonical");
  const canonicalUrls = canonicalLinks.map((tag) => getAttribute(tag, "href"));
  if (canonicalUrls.length !== 1) {
    fail(entry.url, `expected one canonical link, found ${canonicalUrls.length}`);
  } else if (canonicalizeUrl(canonicalUrls[0]) !== canonicalizeUrl(entry.url)) {
    fail(entry.url, `canonical is ${canonicalUrls[0]}`);
  }

  const robots = [
    ...metadataValues(html, "name", "robots"),
    ...metadataValues(html, "name", "googlebot"),
  ];
  const xRobots = response.headers.get("x-robots-tag");
  if (xRobots) robots.push(xRobots);
  if (hasDirective(robots, "noindex")) {
    fail(entry.url, "indexable sitemap page emits noindex");
  }

  const htmlAlternates = new Map();
  for (const tag of linkValues(html, "alternate")) {
    const hreflang = getAttribute(tag, "hreflang");
    const href = getAttribute(tag, "href");
    if (!hreflang || !href) continue;
    if (htmlAlternates.has(hreflang)) {
      fail(entry.url, `duplicate hreflang=${hreflang}`);
    }
    htmlAlternates.set(hreflang, href);
  }
  const expectedAlternates = entry.alternates;
  if (htmlAlternates.size !== expectedAlternates.size) {
    fail(
      entry.url,
      `expected ${expectedAlternates.size} hreflang links, found ${htmlAlternates.size}`,
    );
  }
  for (const [hreflang, expectedHref] of expectedAlternates) {
    const actualHref = htmlAlternates.get(hreflang);
    if (
      !actualHref ||
      canonicalizeUrl(actualHref) !== canonicalizeUrl(expectedHref)
    ) {
      fail(
        entry.url,
        `hreflang=${hreflang} expected ${expectedHref}, received ${actualHref ?? "none"}`,
      );
    }
  }
  if (htmlAlternates.get("x-default") !== htmlAlternates.get("en")) {
    fail(entry.url, "x-default must match the English alternate");
  }

  const ogUrl = metadataValues(html, "property", "og:url");
  if (ogUrl.length !== 1 || canonicalizeUrl(ogUrl[0]) !== canonicalizeUrl(entry.url)) {
    fail(entry.url, `og:url does not match the canonical URL`);
  }
  for (const property of ["og:title", "og:description", "og:image"]) {
    if (metadataValues(html, "property", property).filter(Boolean).length === 0) {
      fail(entry.url, `missing ${property}`);
    }
  }
  for (const name of [
    "twitter:card",
    "twitter:title",
    "twitter:description",
    "twitter:image",
  ]) {
    if (metadataValues(html, "name", name).filter(Boolean).length === 0) {
      fail(entry.url, `missing ${name}`);
    }
  }

  const jsonLdScripts = [
    ...html.matchAll(
      /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ];
  if (jsonLdScripts.length < 2) {
    fail(entry.url, `expected global structured data, found ${jsonLdScripts.length} blocks`);
  }
  const structuredDataTypes = new Set();
  for (const script of jsonLdScripts) {
    try {
      collectStructuredDataTypes(JSON.parse(script[1]), structuredDataTypes);
    } catch (error) {
      fail(entry.url, `invalid JSON-LD: ${error.message}`);
    }
  }

  const englishPath = englishPathForUrl(entry.url);
  const isWatchDetail = englishPath.startsWith("/watch/");
  if (isWatchDetail) {
    watchDetailCount += 1;
    for (const type of ["Article", "VideoObject"]) {
      if (!structuredDataTypes.has(type)) {
        fail(entry.url, `missing ${type} structured data`);
      }
    }
  }

  const adsenseMeta = metadataValues(html, "name", "google-adsense-account");
  if (adsenseMeta.length !== 1 || !/^ca-pub-\d+$/.test(adsenseMeta[0])) {
    fail(entry.url, "missing or invalid google-adsense-account meta tag");
  } else if (adsenseClientId && adsenseClientId !== adsenseMeta[0]) {
    fail(entry.url, `AdSense client differs from ${adsenseClientId}`);
  } else {
    adsenseClientId = adsenseMeta[0];
  }

  const scriptPreloads = linkValues(html, "preload").filter(
    (tag) => getAttribute(tag, "as") === "script",
  );
  const adsensePreloads = scriptPreloads.filter((tag) =>
    (getAttribute(tag, "href") ?? "").includes(
      "pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    ),
  );
  if (adsensePreloads.length !== 0) {
    fail(
      entry.url,
      `expected no unconditional AdSense loader preload, found ${adsensePreloads.length}`,
    );
  }

  const adsenseExternalScripts = tags(html, "script").filter((tag) =>
    (getAttribute(tag, "src") ?? "").includes(
      "pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    ),
  );
  if (adsenseExternalScripts.length !== 0) {
    fail(entry.url, "AdSense loader is not protected by the runtime host guard");
  }
  const adsenseBootstraps = scriptBodiesById(
    html,
    "adsense-production-bootstrap",
  );
  if (adsenseBootstraps.length !== (isWatchDetail ? 1 : 0)) {
    fail(
      entry.url,
      `expected ${isWatchDetail ? 1 : 0} guarded AdSense bootstrap, found ${adsenseBootstraps.length}`,
    );
  }
  if (isWatchDetail && adsenseBootstraps.length === 1) {
    if (!adsenseBootstraps[0].includes(adsenseMeta[0])) {
      fail(entry.url, "guarded AdSense bootstrap differs from meta tag");
    }
  }

  const gtmPreloads = scriptPreloads.filter((tag) => {
    const href = getAttribute(tag, "href");
    return href?.startsWith("https://www.googletagmanager.com/gtm.js?");
  });
  if (gtmPreloads.length !== 0) {
    fail(entry.url, `expected no unconditional GTM preload, found ${gtmPreloads.length}`);
  }
  const gtmExternalScripts = tags(html, "script").filter((tag) =>
    (getAttribute(tag, "src") ?? "").startsWith(
      "https://www.googletagmanager.com/gtm.js?",
    ),
  );
  if (gtmExternalScripts.length !== 0) {
    fail(entry.url, "GTM loader is not protected by the runtime host guard");
  }
  const gtmBootstraps = scriptBodiesById(html, "gtm-production-bootstrap");
  if (gtmBootstraps.length !== 1) {
    fail(entry.url, `expected one guarded GTM bootstrap, found ${gtmBootstraps.length}`);
  } else {
    if (!gtmBootstraps[0].includes(EXPECTED_GTM_ID)) {
      fail(entry.url, "guarded GTM bootstrap uses the wrong container ID");
    }
    for (const hostname of [
      "translator.tools",
      "www.translator.tools",
      "stage5.tools",
      "www.stage5.tools",
    ]) {
      if (!gtmBootstraps[0].includes(hostname)) {
        fail(entry.url, `guarded GTM bootstrap is missing ${hostname}`);
      }
    }
  }
  const gtmFrames = tags(html, "iframe").filter((tag) => {
    const src = getAttribute(tag, "src");
    return src?.startsWith("https://www.googletagmanager.com/ns.html?");
  });
  if (gtmFrames.length !== 0) {
    fail(entry.url, `expected no unconditional GTM iframe, found ${gtmFrames.length}`);
  }
}

async function runPool(items, worker) {
  let cursor = 0;
  const workers = Array.from(
    { length: Math.min(CONCURRENCY, items.length) },
    async () => {
      while (cursor < items.length) {
        const index = cursor;
        cursor += 1;
        await worker(items[index], index);
      }
    },
  );
  await Promise.all(workers);
}

async function auditNoindex(path, { follow = false } = {}) {
  const response = await request(path);
  if (response.status !== 200) {
    fail(path, `expected HTTP 200 for noindex route, received ${response.status}`);
    return;
  }
  const html = await response.text();
  const robots = [
    ...metadataValues(html, "name", "robots"),
    ...metadataValues(html, "name", "googlebot"),
  ];
  const xRobots = response.headers.get("x-robots-tag");
  if (xRobots) robots.push(xRobots);
  if (!hasDirective(robots, "noindex")) {
    fail(path, "expected noindex");
  }
  if (follow && !hasDirective(robots, "nofollow")) {
    fail(path, "expected nofollow");
  }
}

async function auditRedirect(path, expectedPath) {
  const response = await request(path);
  if (![307, 308].includes(response.status)) {
    fail(path, `expected 307/308 redirect, received ${response.status}`);
    return;
  }
  const location = response.headers.get("location");
  if (!location || new URL(location, SITE_ORIGIN).pathname !== expectedPath) {
    fail(path, `expected redirect to ${expectedPath}, received ${location ?? "none"}`);
  }
}

async function auditNotFound(path) {
  const response = await request(path);
  if (response.status !== 404) {
    fail(path, `expected HTTP 404, received ${response.status}`);
    return;
  }
  const html = await response.text();
  const robots = metadataValues(html, "name", "robots");
  if (!hasDirective(robots, "noindex")) {
    fail(path, "404 response is missing noindex");
  }
}

async function auditVtt(file) {
  const path = `/api/watch-vtt/${file}`;
  const response = await request(path);
  if (response.status !== 200) {
    fail(path, `expected HTTP 200, received ${response.status}`);
    return;
  }
  if (!response.headers.get("content-type")?.startsWith("text/vtt")) {
    fail(path, `unexpected content type ${response.headers.get("content-type")}`);
  }
  if (response.headers.get("x-watch-vtt-source") !== "r2") {
    fail(
      path,
      `expected R2 source, received ${response.headers.get("x-watch-vtt-source") ?? "none"}`,
    );
  }
  const cacheControl = response.headers.get("cache-control") ?? "";
  for (const directive of [
    "max-age=3600",
    "s-maxage=3600",
    "stale-while-revalidate=86400",
  ]) {
    if (!cacheControl.includes(directive)) {
      fail(path, `missing Cache-Control directive ${directive}`);
    }
  }
  const body = await response.text();
  if (!/^WEBVTT(?:\r?\n|$)/.test(body) || !body.includes("-->")) {
    fail(path, "response is not a cue-bearing WebVTT document");
  }
  vttCount += 1;
}

const sitemapResponse = await request("/sitemap.xml");
if (sitemapResponse.status !== 200) {
  throw new Error(`Sitemap returned HTTP ${sitemapResponse.status}.`);
}
const sitemapEntries = parseSitemap(await sitemapResponse.text());
if (sitemapEntries.length === 0) throw new Error("Sitemap contains no URLs.");
if (new Set(sitemapEntries.map((entry) => entry.url)).size !== sitemapEntries.length) {
  throw new Error("Sitemap contains duplicate URLs.");
}

await runPool(sitemapEntries, auditIndexablePage);

for (const [url, metadata] of localizedMetadata) {
  if (metadata.locale === "en" || !metadata.englishUrl) continue;
  const englishMetadata = localizedMetadata.get(metadata.englishUrl);
  if (!englishMetadata) {
    fail(url, `English alternate was not rendered: ${metadata.englishUrl}`);
    continue;
  }
  if (
    metadata.title === englishMetadata.title &&
    metadata.description === englishMetadata.description &&
    metadata.h1 === englishMetadata.h1
  ) {
    fail(url, "title, description, and H1 all duplicate the English alternate");
  }
}

let watchCatalog = [];
try {
  const catalogResponse = await fetch(`${WATCH_ASSETS_BASE}/catalog.json`, {
    headers: {
      "user-agent": "TranslatorRenderedSeoAudit/1.0",
    },
  });
  if (!catalogResponse.ok) {
    fail(
      `${WATCH_ASSETS_BASE}/catalog.json`,
      `expected HTTP 200, received ${catalogResponse.status}`,
    );
  } else if (!catalogResponse.headers.get("content-type")?.includes("application/json")) {
    fail(
      `${WATCH_ASSETS_BASE}/catalog.json`,
      `unexpected content type ${catalogResponse.headers.get("content-type")}`,
    );
  } else {
    watchCatalog = await catalogResponse.json();
    if (!Array.isArray(watchCatalog)) {
      fail(`${WATCH_ASSETS_BASE}/catalog.json`, "catalog root must be an array");
      watchCatalog = [];
    }
  }
} catch (error) {
  fail(`${WATCH_ASSETS_BASE}/catalog.json`, `request failed: ${error.message}`);
}

if (watchCatalog.length > 0) {
  const slugs = watchCatalog.map((entry) => entry.slug);
  if (new Set(slugs).size !== slugs.length) {
    fail(`${WATCH_ASSETS_BASE}/catalog.json`, "catalog contains duplicate slugs");
  }

  const expectedWatchUrls = new Set();
  const expectedVttFiles = new Set();
  for (const entry of watchCatalog) {
    const supportedLocales = entry.supportedLocales ?? Object.keys(entry.copy ?? {});
    for (const locale of supportedLocales) {
      expectedWatchUrls.add(
        locale === "en"
          ? `${SITE_ORIGIN}/watch/${entry.slug}`
          : `${SITE_ORIGIN}/${locale}/watch/${entry.slug}`,
      );
    }
    for (const track of entry.tracks ?? []) {
      expectedVttFiles.add(`${entry.vttSlug ?? entry.slug}.${track}.30s.vtt`);
    }
  }

  const sitemapWatchUrls = new Set(
    sitemapEntries
      .filter((entry) => englishPathForUrl(entry.url).startsWith("/watch/"))
      .map((entry) => entry.url),
  );
  for (const url of expectedWatchUrls) {
    if (!sitemapWatchUrls.has(url)) {
      fail("sitemap", `missing R2 Watch URL ${url}`);
    }
  }
  for (const url of sitemapWatchUrls) {
    if (!expectedWatchUrls.has(url)) {
      fail("sitemap", `advertises stale or unsupported Watch URL ${url}`);
    }
  }

  await runPool([...expectedVttFiles], auditVtt);
}

for (const invalidVttPath of [
  "/api/watch-vtt/not-a-vtt.txt",
  "/api/watch-vtt/sample.it.30s.vtt",
]) {
  const response = await request(invalidVttPath);
  if (response.status !== 400) {
    fail(invalidVttPath, `expected HTTP 400, received ${response.status}`);
  }
}

const explicitNoindexPaths = [
  "/checkout/cancelled",
  "/checkout/success",
  "/echo/privacy",
  "/echo/support",
  "/echo/terms",
];
await runPool(explicitNoindexPaths, (path) => auditNoindex(path, { follow: true }));

const localizedNoindexPaths = nonEnglishLocales.flatMap((locale) =>
  ["contact", "privacy", "terms"].map((path) => `/${locale}/${path}`),
);
await runPool(localizedNoindexPaths, auditNoindex);

const localizedEnglishOnlyPaths = nonEnglishLocales.flatMap((locale) =>
  ["agents", "open-source"].map((path) => ({
    path: `/${locale}/${path}`,
    expectedPath: `/${path}`,
  })),
);
await runPool(localizedEnglishOnlyPaths, ({ path, expectedPath }) =>
  auditRedirect(path, expectedPath),
);

const firstWatchEntry = sitemapEntries.find(
  (entry) => englishPathForUrl(entry.url).split("/").filter(Boolean).length === 2 &&
    englishPathForUrl(entry.url).startsWith("/watch/"),
);
if (!firstWatchEntry) {
  fail("sitemap", "contains no Watch detail URL");
} else {
  const watchSlug = englishPathForUrl(firstWatchEntry.url).split("/").at(-1);
  await runPool(
    [
      ...watchLocales.map((locale) =>
        locale === "en"
          ? "/watch/__rendered-audit-missing__"
          : `/${locale}/watch/__rendered-audit-missing__`,
      ),
      ...["ja", "zh", "fr", "de"].flatMap((locale) => [
        `/${locale}/watch`,
        `/${locale}/watch/${watchSlug}`,
      ]),
    ],
    auditNotFound,
  );
}

const robotsResponse = await request("/robots.txt");
if (robotsResponse.status !== 200) {
  fail("/robots.txt", `expected HTTP 200, received ${robotsResponse.status}`);
} else {
  const robots = await robotsResponse.text();
  if (!robots.includes(`Sitemap: ${SITE_ORIGIN}/sitemap.xml`)) {
    fail("/robots.txt", "missing production sitemap declaration");
  }
  if (/Disallow:\s*\/watch(?:\s|$)/i.test(robots)) {
    fail("/robots.txt", "Watch routes are disallowed");
  }
}

if (failures.length > 0) {
  console.error(`Rendered SEO audit failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(
    `Rendered SEO audit passed for ${sitemapEntries.length} indexable URLs, ` +
      `${watchDetailCount} Watch detail renders, ${explicitNoindexPaths.length + localizedNoindexPaths.length} noindex routes, ` +
      `${localizedEnglishOnlyPaths.length} redirects, and explicit 404 probes.`,
  );
  console.log(
    `Verified ${watchCatalog.length} R2 catalog entries, ${vttCount} R2-backed VTT responses, ` +
      `GTM ${EXPECTED_GTM_ID}, and AdSense ${adsenseClientId}.`,
  );
}
