export type TrackLang = "en" | "es" | "ko" | "pt";

export interface WatchCatalogEntry {
  slug: string;
  videoId: string;
  vttSlug: string;
  sourceLang: TrackLang;
  tracks: TrackLang[];
  supportedLocales: string[];
  copy: {
    en: WatchPageCopy;
    es: WatchPageCopy;
    ko: WatchPageCopy;
    pt: WatchPageCopy;
  };
}

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
  howToNote: string;
  pricingTitle: string;
  pricingFree: string;
  pricingPaid: string;
  freeLabel: string;
  paidLabel: string;
  downloadTitle: string;
  downloadBody: string;
  downloadLinkText: string;
  ctaNote: string;
  aboutTitle: string;
  aboutBody: string[];
  language: string;
  topic: string;
  show?: string;
}
