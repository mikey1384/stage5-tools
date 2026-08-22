import type { MetadataRoute } from "next";
import { indexableLocalesForPath, localizePathForLocale } from "../lib/locales";
import { TRANSLATED_LANGUAGE_SLUGS } from "../lib/translate-language-slugs";
import { getAllCatalogSlugs } from "../lib/watch/catalog-loader";

const BASE_URL = "https://translator.tools";

type RouteDef = {
  path: string;
};

async function getRoutes(): Promise<RouteDef[]> {
  const watchSlugs = await getAllCatalogSlugs();
  
  return [
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
    ...watchSlugs.map((slug) => ({
      path: `/watch/${slug}`,
    })),
    { path: "/about" },
    { path: "/contact" },
    { path: "/privacy" },
    { path: "/terms" },
  ];
}

function absoluteUrl(path: string): string {
  return new URL(path, BASE_URL).toString();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = await getRoutes();
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
