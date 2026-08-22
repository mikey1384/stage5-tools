import type { MetadataRoute } from "next";
import {
  indexableLocalesForPath,
  localizePathForLocale,
  localizeSupportedPathForLocale,
  type Locale,
} from "../lib/locales";
import { TRANSLATED_LANGUAGE_SLUGS } from "../lib/translate-language-slugs";
import { loadWatchCatalog } from "../lib/watch/catalog-loader";
import { getWatchSupportedLocales } from "../lib/watch/catalog";

const BASE_URL = "https://translator.tools";

export const runtime = "edge";
export const dynamic = "force-dynamic";

type RouteDef = {
  path: string;
  availableLocales?: readonly Locale[];
};

const staticRoutes: RouteDef[] = [
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
  { path: "/about" },
  { path: "/contact" },
  { path: "/privacy" },
  { path: "/terms" },
];

function absoluteUrl(path: string): string {
  return new URL(path, BASE_URL).toString();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const watchRoutes: RouteDef[] = (await loadWatchCatalog()).map((video) => ({
    path: `/watch/${video.slug}`,
    availableLocales: getWatchSupportedLocales(video),
  }));
  const routes = [...staticRoutes, ...watchRoutes];

  return routes.flatMap((route) => {
    const availableLocales = route.availableLocales
      ? [...route.availableLocales]
      : indexableLocalesForPath(route.path);
    const localize = route.availableLocales
      ? localizeSupportedPathForLocale
      : localizePathForLocale;
    const englishUrl = absoluteUrl(localize("en", route.path));
    const fullSiteLanguages: Record<string, string> = {
      "x-default": englishUrl,
    };
    for (const locale of availableLocales) {
      fullSiteLanguages[locale] = absoluteUrl(
        localize(locale, route.path),
      );
    }

    const shared = {
      alternates: {
        languages: fullSiteLanguages,
      },
    };

    return availableLocales.map((locale) => ({
      url: absoluteUrl(localize(locale, route.path)),
      ...shared,
    }));
  });
}
