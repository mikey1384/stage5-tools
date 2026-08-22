const WATCH_LOCALES = new Set([
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

function isIsoCalendarDate(value) {
  if (!isNonEmptyString(value) || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return (
    Number.isFinite(parsed.getTime()) &&
    parsed.toISOString().slice(0, 10) === value
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
  if (!WATCH_LOCALES.has(entry.sourceLang)) {
    throw new Error(`${entry.slug} has an unsupported sourceLang`);
  }
  if (
    !Array.isArray(entry.tracks) ||
    entry.tracks.length === 0 ||
    new Set(entry.tracks).size !== entry.tracks.length ||
    entry.tracks.some((locale) => !WATCH_LOCALES.has(locale))
  ) {
    throw new Error(
      `${entry.slug} tracks must be unique supported locales`,
    );
  }
  if (
    !Array.isArray(entry.supportedLocales) ||
    !entry.supportedLocales.includes("en") ||
    new Set(entry.supportedLocales).size !== entry.supportedLocales.length ||
    entry.supportedLocales.some((locale) => !WATCH_LOCALES.has(locale))
  ) {
    throw new Error(
      `${entry.slug} supportedLocales must uniquely include en and contain only supported locales`,
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
