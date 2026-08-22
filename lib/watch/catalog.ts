import type { Locale } from "../locales";

export type WatchLocale = "en" | "es" | "ko" | "pt" | "vi";
export type TrackLang = WatchLocale;

export interface WatchPageCopy {
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  intro: string;
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
  sourceLang: WatchLocale;
  tracks: WatchLocale[];
  supportedLocales: Locale[];
  language: string;
  topic: string;
  showName: string;
  datePublished: string;
  structuredDataAbout?: Array<Record<string, unknown>>;
}

export interface WatchCatalogEntry extends WatchVideoMetadata {
  copy: Record<WatchLocale, WatchPageCopy>;
}

export interface PostCard {
  slug: string;
  title: string;
  description: string;
  language: string;
  topic: string;
  sourceLang: WatchLocale;
  tracks: WatchLocale[];
  supportedLocales: Locale[];
}

const catalog: Record<string, WatchCatalogEntry> = {};

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
