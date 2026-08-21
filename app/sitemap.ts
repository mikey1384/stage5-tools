import type { MetadataRoute } from "next";
import { indexableLocalesForPath, localizePathForLocale } from "../lib/locales";
import { TRANSLATED_LANGUAGE_SLUGS } from "../lib/translate-language-slugs";

const BASE_URL = "https://translator.tools";

type RouteDef = {
  path: string;
};

const routes: RouteDef[] = [
  { path: "/" },
  { path: "/video-discovery" },
  { path: "/dubbing" },
  { path: "/video-downloader" },
  { path: "/subtitle-editor" },
  { path: "/translate" },
  ...TRANSLATED_LANGUAGE_SLUGS.map((slug) => ({
    path: `/translate/${slug}`,
  })),
  { path: "/echo" },
  { path: "/pricing" },
  { path: "/faq" },
  { path: "/open-source" },
  { path: "/agents" },
  { path: "/watch" },
  { path: "/watch/ferran-adria-wild-project" },
  { path: "/about" },
  { path: "/contact" },
  { path: "/privacy" },
  { path: "/terms" },
];

function absoluteUrl(path: string): string {
  return new URL(path, BASE_URL).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) => {
    const availableLocales = indexableLocalesForPath(route.path);
    const englishUrl = absoluteUrl(localizePathForLocale("en", route.path));
    const fullSiteLanguages: Record<string, string> = {
      "x-default": englishUrl,
    };
    for (const locale of availableLocales) {
      fullSiteLanguages[locale] = absoluteUrl(
        localizePathForLocale(locale, route.path),
      );
    }

    const shared = {
      alternates: {
        languages: fullSiteLanguages,
      },
    };

    return availableLocales.map((locale) => ({
      url: absoluteUrl(localizePathForLocale(locale, route.path)),
      ...shared,
    }));
  });
}
