import type { Locale } from "./locales";

// ---------------------------------------------------------------------------
// SITES NAMED IN DOWNLOADER COPY — the single list to edit.
//
// Used by the /video-downloader "Supported sites" card and the /faq answer to
// "Which platforms are supported?" (and its FAQPage JSON-LD), in all locales.
//
// Only name a site here after a public video from it has been downloaded in
// Translator (paste link, or pick the video in the built-in browser). Every
// site below passed that check in the 2026-10-31 coverage test.
//
// Pending verification in the app — add only once confirmed:
//   TikTok, X (Twitter), Reddit, Twitch, Instagram
//
// Text only: never pair these names with third-party logos or trademark art.
// The downloader hero line, page titles and meta descriptions
// (lib/strings.ts videoDownloaderSubtitle, app/video-downloader/page.tsx
// metadataCopy) name a few of these sites by hand; keep them a subset.
// ---------------------------------------------------------------------------
export const DOWNLOADER_NAMED_SITES = [
  "YouTube",
  "Facebook",
  "Vimeo",
  "Dailymotion",
  "TED",
  "SoundCloud",
  "Bilibili",
  "BBC",
  "CNN",
] as const;

// Verified local sites appended for visitors of one language, so a Brazilian
// sees Globo and a German reader sees ZDF. Same verification rule as above.
export const DOWNLOADER_LOCAL_SITES: Partial<Record<Locale, readonly string[]>> =
  {
    es: ["RTVE"],
    fr: ["Arte"],
    de: ["ZDF", "ARD Mediathek"],
    pt: ["Globo (g1)"],
    ja: ["ニコニコ動画"],
    vi: ["VnExpress"],
  };

const LIST_SEPARATOR: Partial<Record<Locale, string>> = {
  ja: "、",
  zh: "、",
};

/** Named sites for one locale, joined with that language's list separator. */
export function downloaderSiteList(locale: Locale): string {
  const sites = [
    ...DOWNLOADER_NAMED_SITES,
    ...(DOWNLOADER_LOCAL_SITES[locale] ?? []),
  ];
  return sites.join(LIST_SEPARATOR[locale] ?? ", ");
}
