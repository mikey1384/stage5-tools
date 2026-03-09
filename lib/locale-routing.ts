import {
  homeHrefForLocale as localizedHomeHrefForLocale,
  localizePathForLocale as localizeSitePathForLocale,
  type Locale,
} from "./locales";

export function homeHrefForLocale(locale: Locale): string {
  return localizedHomeHrefForLocale(locale);
}

export function homeSectionHrefForLocale(
  locale: Locale,
  hash: string
): string {
  const section = hash.startsWith("#") ? hash : `#${hash}`;
  return `${homeHrefForLocale(locale)}${section}`;
}

export function localizePathForLocale(locale: Locale, href: string): string {
  return localizeSitePathForLocale(locale, href);
}
