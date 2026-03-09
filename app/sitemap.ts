import type { MetadataRoute } from "next";
import {
  localizedLocalesForPath,
  localizePathForLocale,
} from "../lib/locales";
import { TRANSLATED_LANGUAGE_SLUGS } from "../lib/translate-language-slugs";

const BASE_URL = "https://translator.tools";

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

type RouteDef = {
  path: string;
  priority: number;
  changeFrequency: ChangeFreq;
};

const routes: RouteDef[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/video-discovery", priority: 0.9, changeFrequency: "weekly" },
  { path: "/dubbing", priority: 0.9, changeFrequency: "weekly" },
  { path: "/video-downloader", priority: 0.9, changeFrequency: "weekly" },
  { path: "/subtitle-editor", priority: 0.9, changeFrequency: "weekly" },
  { path: "/translate", priority: 0.9, changeFrequency: "weekly" },
  ...TRANSLATED_LANGUAGE_SLUGS.map((slug) => ({
    path: `/translate/${slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  })),
  { path: "/pricing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.5, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.5, changeFrequency: "yearly" },
];

function absoluteUrl(path: string): string {
  return new URL(path, BASE_URL).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap((route) => {
    const availableLocales = localizedLocalesForPath(route.path);
    const englishUrl = absoluteUrl(localizePathForLocale("en", route.path));
    const fullSiteLanguages: Record<string, string> = { "x-default": englishUrl };
    for (const locale of availableLocales) {
      fullSiteLanguages[locale] = absoluteUrl(localizePathForLocale(locale, route.path));
    }

    const shared = {
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: fullSiteLanguages,
      },
    };

    const localizedEntries = availableLocales.map((locale) => ({
      url: absoluteUrl(localizePathForLocale(locale, route.path)),
      ...shared,
    }));

    return localizedEntries;
  });
}
