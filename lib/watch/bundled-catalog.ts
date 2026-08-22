import type { WatchCatalogEntry } from "./types";
import { posts } from "../../app/watch/posts";

/**
 * Bundled catalog data - static fallback when R2 is unavailable.
 * This file is committed to git and serves as the baseline catalog.
 */

const videoIdMap: Record<string, string> = {
  "ramsay-hot-ones": "U9DyHthJ6LA",
  "nolan-colbert-oppenheimer": "WGH8RMbrGLM",
  "calvo-wild-project": "WGH8RMbrGLM",
  "ferran-adria-wild-project": "ferran-adria-wild-project",
  "pique-la-resistencia": "pique-la-resistencia",
  "park-chan-wook-lee-dong-jin": "park-chan-wook-lee-dong-jin",
  "lee-jung-jae-hunt-piarchia": "lee-jung-jae-hunt-piarchia",
  "yoo-ji-tae-piarchia": "yoo-ji-tae-piarchia",
  "kore-eda-piarchia": "kore-eda-piarchia",
};

/**
 * Placeholder copy structure - in production, this would be populated
 * from the actual copy.ts files or pre-built JSON.
 * For the initial implementation, we provide minimal copy that allows
 * pages to render, and the actual copy loading happens per-page.
 */
function createMinimalCopy(post: typeof posts[number]) {
  return {
    title: post.title,
    description: post.description,
    keywords: [],
    h1: post.title,
    intro: post.description,
    section1Title: "About this video",
    section1Body: [post.description],
    section2Title: "More information",
    section2Body: [],
    howToTitle: "How to watch with subtitles",
    howToBody: "Use Translator to download and add subtitles.",
    howToSteps: [
      { title: "Download", body: "Download the video" },
      { title: "Translate", body: "Add translated subtitles" },
      { title: "Watch", body: "Watch with your subtitles" },
    ],
    howToNote: "The video stays on your computer.",
    pricingTitle: "Pricing",
    pricingFree: "Download and editing",
    pricingPaid: "AI transcription and translation",
    freeLabel: "Free:",
    paidLabel: "Paid:",
    downloadTitle: "Download Translator",
    downloadBody: "Get the app and try it yourself.",
    downloadLinkText: "Learn more →",
    ctaNote: "Download is free. Translation requires credits or API key.",
    aboutTitle: "About",
    aboutBody: [`Video in ${post.language}. Captions in multiple languages.`],
    language: post.language,
    topic: post.topic,
  };
}

export function getBundledCatalog(): WatchCatalogEntry[] {
  return posts.map((post) => ({
    slug: post.slug,
    videoId: videoIdMap[post.slug] || post.slug,
    vttSlug: videoIdMap[post.slug] || post.slug,
    sourceLang: post.sourceLang,
    tracks: post.tracks,
    supportedLocales: post.supportedLocales,
    copy: {
      en: createMinimalCopy(post),
      es: createMinimalCopy(post),
      ko: createMinimalCopy(post),
      pt: createMinimalCopy(post),
    },
  }));
}
