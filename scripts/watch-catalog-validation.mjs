import { readFile } from "node:fs/promises";
import { basename } from "node:path";
import { isIsoCalendarDate, isVideoUploadDate } from "../lib/watch/publication-date.mjs";

const WATCH_TRACK_LOCALES = new Set([
  "en",
  "ko",
  "es",
  "ja",
  "zh",
  "fr",
  "de",
  "pt",
  "vi",
]);

const WATCH_PAGE_LOCALES = new Set(["en", "ko", "es", "pt", "vi"]);

const REQUIRED_COPY_FIELDS = [
  "title",
  "description",
  "h1",
  "intro",
  "section1Title",
  "section2Title",
  "howToTitle",
  "howToBody",
  "pricingTitle",
  "pricingFree",
  "pricingPaid",
  "downloadTitle",
  "downloadBody",
  "aboutTitle",
];

const OPTIONAL_COPY_FIELDS = [
  "eyebrow",
  "howToNote",
  "freeLabel",
  "paidLabel",
  "contentTitle",
  "downloadLinkText",
  "ctaNote",
];

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isNonEmptyStringArray(value) {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every(isNonEmptyString)
  );
}

function validateCopy(copy, locale, slug) {
  if (!copy || typeof copy !== "object" || Array.isArray(copy)) {
    throw new Error(`${slug} has no ${locale} copy object`);
  }
  if (REQUIRED_COPY_FIELDS.some((field) => !isNonEmptyString(copy[field]))) {
    throw new Error(`${slug} has incomplete ${locale} copy`);
  }
  if (
    OPTIONAL_COPY_FIELDS.some(
      (field) => copy[field] !== undefined && !isNonEmptyString(copy[field]),
    )
  ) {
    throw new Error(`${slug} has an empty optional ${locale} copy field`);
  }
  for (const field of [
    "keywords",
    "section1Body",
    "section2Body",
    "aboutBody",
  ]) {
    if (!isNonEmptyStringArray(copy[field])) {
      throw new Error(`${slug} has an invalid ${locale} ${field}`);
    }
  }
  if (
    !Array.isArray(copy.howToSteps) ||
    copy.howToSteps.length === 0 ||
    copy.howToSteps.some(
      (step) =>
        !step ||
        typeof step !== "object" ||
        Array.isArray(step) ||
        !isNonEmptyString(step.title) ||
        !isNonEmptyString(step.body),
    )
  ) {
    throw new Error(`${slug} has invalid ${locale} howToSteps`);
  }
  const hasContentTitle = copy.contentTitle !== undefined;
  const hasContentBody = copy.contentBody !== undefined;
  if (hasContentTitle !== hasContentBody) {
    throw new Error(
      `${slug} must provide both ${locale} contentTitle and contentBody`,
    );
  }
  if (hasContentBody && !isNonEmptyStringArray(copy.contentBody)) {
    throw new Error(`${slug} has an invalid ${locale} contentBody`);
  }
}

export function validateWatchEntry(entry) {
  if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
    throw new Error("Catalog entry must be an object");
  }
  if (
    !isNonEmptyString(entry.slug) ||
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.slug)
  ) {
    throw new Error("Catalog entry has an invalid slug");
  }
  if (
    !isNonEmptyString(entry.videoId) ||
    !/^[A-Za-z0-9_-]{11}$/.test(entry.videoId)
  ) {
    throw new Error(`${entry.slug} has an invalid YouTube videoId`);
  }
  if (
    !isNonEmptyString(entry.vttSlug) ||
    !/^[A-Za-z0-9_-]+$/.test(entry.vttSlug)
  ) {
    throw new Error(`${entry.slug} has an invalid vttSlug`);
  }
  if (!WATCH_TRACK_LOCALES.has(entry.sourceLang)) {
    throw new Error(`${entry.slug} has an unsupported sourceLang`);
  }
  if (
    !Array.isArray(entry.tracks) ||
    entry.tracks.length === 0 ||
    new Set(entry.tracks).size !== entry.tracks.length ||
    entry.tracks.some((locale) => !WATCH_TRACK_LOCALES.has(locale))
  ) {
    throw new Error(
      `${entry.slug} tracks must be unique supported locales`,
    );
  }
  if (
    !Array.isArray(entry.supportedLocales) ||
    !entry.supportedLocales.includes("en") ||
    new Set(entry.supportedLocales).size !== entry.supportedLocales.length ||
    entry.supportedLocales.some((locale) => !WATCH_PAGE_LOCALES.has(locale))
  ) {
    throw new Error(
      `${entry.slug} supportedLocales must uniquely include en and contain only supported Watch page locales`,
    );
  }
  for (const field of ["language", "topic", "showName"]) {
    if (!isNonEmptyString(entry[field])) {
      throw new Error(`${entry.slug} has an invalid ${field}`);
    }
  }
  if (!isIsoCalendarDate(entry.datePublished)) {
    throw new Error(`${entry.slug} has an invalid datePublished`);
  }
  for (const item of entry.structuredDataAbout ?? []) {
    if (item?.["@type"] !== "VideoObject" || item.uploadDate === undefined) continue;
    // Existing date-only catalogs remain publishable during the rollout.
    if (!isIsoCalendarDate(item.uploadDate) && !isVideoUploadDate(item.uploadDate)) {
      throw new Error(`${entry.slug} has an invalid VideoObject uploadDate; use a verified timestamp with a timezone`);
    }
  }
  for (const locale of entry.supportedLocales) {
    validateCopy(entry.copy?.[locale], locale, entry.slug);
  }
  return entry;
}

export function validateWatchCatalog(catalog) {
  if (!Array.isArray(catalog)) {
    throw new Error("Watch catalog must be an array");
  }
  const slugs = new Set();
  for (const entry of catalog) {
    validateWatchEntry(entry);
    if (slugs.has(entry.slug)) {
      throw new Error(`Watch catalog contains duplicate slug ${entry.slug}`);
    }
    slugs.add(entry.slug);
  }
  return catalog;
}

export function expectedVttFileNames(entry) {
  return [...new Set(entry.tracks)].map(
    (locale) => `${entry.vttSlug}.${locale}.30s.vtt`,
  );
}

// This is a publication floor for obvious flashes, not an editorial or policy pass.
export function validateWatchVtt(content, fileName = "Watch captions") {
  const normalized = content.replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n");
  const blocks = normalized.trim().split(/\n[ \t]*\n/);
  if (!/^WEBVTT(?:[ \t].*)?$/.test(blocks.shift() ?? "")) {
    throw new Error(`${fileName}: missing WEBVTT header`);
  }
  let cueCount = 0;
  let previousEnd = 0;
  const time = "(\\d{2}):([0-5]\\d):([0-5]\\d)\\.(\\d{3})";
  const timing = new RegExp(`^${time} --> ${time}$`);
  for (const block of blocks) {
    if (/^NOTE(?:[ \t\n]|$)/.test(block)) continue;
    const lines = block.split("\n");
    // Keep the publisher within the subset supported by the current Watch player.
    const timingIndex = lines[0]?.includes("-->") ? 0 : 1;
    const match = timing.exec(lines[timingIndex] ?? "");
    cueCount += 1;
    if (!match) throw new Error(`${fileName}: invalid timing at cue ${cueCount}`);
    const millis = (offset) => Number(match[offset]) * 3600000
      + Number(match[offset + 1]) * 60000
      + Number(match[offset + 2]) * 1000 + Number(match[offset + 3]);
    const start = millis(1);
    const end = millis(5);
    if (end <= start || end > 30000 || start < previousEnd) {
      throw new Error(`${fileName}: unordered, overlapping or out-of-preview cue ${cueCount}`);
    }
    const text = lines.slice(timingIndex + 1).join(" ").trim();
    if (!/[\p{L}\p{N}]/u.test(text)) {
      throw new Error(`${fileName}: empty or punctuation-only cue ${cueCount}`);
    }
    if (end - start < 100) {
      throw new Error(`${fileName}: cue ${cueCount} lasts ${end - start}ms; review its source and timing before publication`);
    }
    previousEnd = end;
  }
  if (!cueCount) throw new Error(`${fileName}: no caption cues`);
  return { cueCount };
}

export async function loadValidatedWatchVtts(paths) {
  const files = [];
  for (const path of paths) {
    const content = await readFile(path, "utf8");
    const fileName = basename(path);
    validateWatchVtt(content, fileName);
    files.push({ fileName, content });
  }
  // Callers upload these same bytes only after every supplied file has passed.
  return files;
}
