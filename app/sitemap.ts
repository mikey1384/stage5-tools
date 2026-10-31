import type { MetadataRoute } from "next";
import {
  indexableLocalesForPath,
  localizePathForLocale,
  localizeSupportedPathForLocale,
  type Locale,
  WATCH_LOCALIZED_LOCALES,
  HOME_LOCALIZED_LOCALES,
} from "../lib/locales";
import { getSite } from "../lib/get-site";
import { STAGE5_ORIGIN, TRANSLATOR_ORIGIN, type Site } from "../lib/site-routing";
import { TRANSLATED_LANGUAGE_SLUGS } from "../lib/translate-language-slugs";
import { equivalentLocalesForPage } from "../lib/translate-page-direction";
import { loadWatchCatalog } from "../lib/watch/catalog-loader";
import { getWatchSupportedLocales } from "../lib/watch/catalog";


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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return buildSiteSitemap(await getSite());
}

export async function buildSiteSitemap(site: Site): Promise<MetadataRoute.Sitemap> {
  const isStage5 = site === "stage5";
  const absoluteUrl = (path: string) => new URL(path, isStage5 ? STAGE5_ORIGIN : TRANSLATOR_ORIGIN).toString();
  const watchRoutes: RouteDef[] = isStage5 ? (await loadWatchCatalog()).map((video) => ({
    path: `/watch/${video.slug}`,
    availableLocales: getWatchSupportedLocales(video),
  })) : [];
  const routes: RouteDef[] = isStage5
    ? [{ path: "/", availableLocales: HOME_LOCALIZED_LOCALES }, { path: "/echo", availableLocales: HOME_LOCALIZED_LOCALES }, { path: "/reflect", availableLocales: HOME_LOCALIZED_LOCALES }, { path: "/watch", availableLocales: WATCH_LOCALIZED_LOCALES }, ...watchRoutes]
    : staticRoutes.filter(route => route.path !== "/watch" && route.path !== "/echo");

  return routes.flatMap((route) => {
    const availableLocales = route.availableLocales
      ? [...route.availableLocales]
      : indexableLocalesForPath(route.path);
    const localize = route.availableLocales
      ? localizeSupportedPathForLocale
      : localizePathForLocale;
    // Each URL lists only the alternates that do the same job (see
    // translate-page-direction.ts); x-default is the English member, if any.
    const languagesFor = (locale: Locale): Record<string, string> => {
      const group = route.availableLocales
        ? availableLocales
        : equivalentLocalesForPage(locale, route.path, availableLocales);
      const languages: Record<string, string> = {};
      if (route.availableLocales || group.includes("en")) {
        languages["x-default"] = absoluteUrl(localize("en", route.path));
      }
      for (const member of group) {
        languages[member] = absoluteUrl(localize(member, route.path));
      }
      return languages;
    };

    return availableLocales.map((locale) => ({
      url: absoluteUrl(localize(locale, route.path)),
      alternates: { languages: languagesFor(locale) },
    }));
  });
}
