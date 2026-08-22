import { isLocale, type Locale } from "../locales";
import {
  getWatchSourceLanguageLabel,
  getWatchTopicLabel,
} from "./ui-copy";

export type WatchLocale = Locale;
export type TrackLang = Locale;

export interface WatchPageCopy {
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  intro: string;
  eyebrow?: string;
  section1Title: string;
  section1Body: string[];
  section2Title: string;
  section2Body: string[];
  howToTitle: string;
  howToBody: string;
  howToSteps: Array<{ title: string; body: string }>;
  howToNote?: string;
  pricingTitle: string;
  pricingFree: string;
  pricingPaid: string;
  freeLabel?: string;
  paidLabel?: string;
  contentTitle?: string;
  contentBody?: string[];
  downloadTitle: string;
  downloadBody: string;
  downloadLinkText?: string;
  ctaNote?: string;
  aboutTitle: string;
  aboutBody: string[];
}

export interface WatchVideoMetadata {
  slug: string;
  videoId: string;
  vttSlug: string;
  sourceLang: TrackLang;
  tracks: TrackLang[];
  supportedLocales: Locale[];
  language: string;
  topic: string;
  showName: string;
  datePublished: string;
  structuredDataAbout?: Array<Record<string, unknown>>;
}

export interface WatchCatalogEntry extends WatchVideoMetadata {
  copy: Partial<Record<WatchLocale, WatchPageCopy>> & {
    en: WatchPageCopy;
  };
}

export interface PostCard {
  slug: string;
  title: string;
  description: string;
  eyebrow?: string;
  language: string;
  topic: string;
  sourceLang: TrackLang;
  tracks: TrackLang[];
  supportedLocales: Locale[];
}

const catalog: Record<string, WatchCatalogEntry> = {};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isStringArray(value: unknown, allowEmpty = false): value is string[] {
  return (
    Array.isArray(value) &&
    (allowEmpty || value.length > 0) &&
    value.every(isNonEmptyString)
  );
}

function isOptionalNonEmptyString(value: unknown): boolean {
  return value === undefined || isNonEmptyString(value);
}

export function isCompleteWatchPageCopy(
  value: unknown,
): value is WatchPageCopy {
  if (!value || typeof value !== "object") return false;
  const copy = value as Record<string, unknown>;
  const requiredStrings = [
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
  if (!requiredStrings.every((field) => isNonEmptyString(copy[field]))) {
    return false;
  }
  if (!isStringArray(copy.keywords)) return false;
  if (!isStringArray(copy.section1Body)) return false;
  if (!isStringArray(copy.section2Body)) return false;
  if (!isStringArray(copy.aboutBody)) return false;
  if (
    ![
      "eyebrow",
      "howToNote",
      "freeLabel",
      "paidLabel",
      "contentTitle",
      "downloadLinkText",
      "ctaNote",
    ].every((field) => isOptionalNonEmptyString(copy[field]))
  ) {
    return false;
  }
  if (
    !Array.isArray(copy.howToSteps) ||
    copy.howToSteps.length === 0 ||
    !copy.howToSteps.every(
      (step) =>
        !!step &&
        typeof step === "object" &&
        isNonEmptyString((step as Record<string, unknown>).title) &&
        isNonEmptyString((step as Record<string, unknown>).body),
    )
  ) {
    return false;
  }
  const hasContentTitle = copy.contentTitle !== undefined;
  const hasContentBody = copy.contentBody !== undefined;
  if (hasContentTitle !== hasContentBody) return false;
  if (hasContentBody && !isStringArray(copy.contentBody)) {
    return false;
  }
  return true;
}

export function getWatchSupportedLocales(
  video: WatchCatalogEntry,
): Locale[] {
  return [...new Set(video.supportedLocales)].filter(
    (locale) =>
      isLocale(locale) && isCompleteWatchPageCopy(video.copy[locale]),
  );
}

export function getPostCardForLocale(
  video: WatchCatalogEntry,
  locale: Locale,
): PostCard | undefined {
  if (!getWatchSupportedLocales(video).includes(locale)) return undefined;
  const copy = video.copy[locale];
  if (!copy) return undefined;

  return {
    slug: video.slug,
    title: copy.h1,
    description: copy.description,
    eyebrow: copy.eyebrow,
    language: getWatchSourceLanguageLabel(locale, video.language),
    topic: getWatchTopicLabel(locale, video.topic),
    sourceLang: video.sourceLang,
    tracks: video.tracks,
    supportedLocales: getWatchSupportedLocales(video),
  };
}

export function registerVideo({ entry }: { entry: WatchCatalogEntry }): void {
  catalog[entry.slug] = entry;
}

export function getVideo({ slug }: { slug: string }): WatchCatalogEntry | undefined {
  return catalog[slug];
}

export function getAllVideos(): WatchCatalogEntry[] {
  return Object.values(catalog);
}

export function getAllSlugs(): string[] {
  return Object.keys(catalog);
}

export function getPostCards(): PostCard[] {
  return getAllVideos().map((video) => ({
    slug: video.slug,
    title: video.copy.en.h1,
    description: video.copy.en.description,
    language: video.language,
    topic: video.topic,
    sourceLang: video.sourceLang,
    tracks: video.tracks,
    supportedLocales: video.supportedLocales,
  }));
}
