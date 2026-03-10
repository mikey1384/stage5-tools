import { isTranslatedLanguageDetailPath } from "./translate-language-slugs";
import { normalizePathname } from "./pathname-utils";

const FULL_SITE_LOCALES = ["en", "ko", "es", "ja", "zh", "fr", "de", "pt", "vi"] as const;
const HOME_ONLY_LOCALES = [] as const;

export const DEFAULT_LOCALE = "en" as const;
export const FULLY_LOCALIZED_LOCALES = FULL_SITE_LOCALES;
export const HOME_LOCALIZED_ONLY_LOCALES = HOME_ONLY_LOCALES;
export const HOME_LOCALIZED_LOCALES = [
  ...FULL_SITE_LOCALES,
  ...HOME_ONLY_LOCALES,
] as const;

export type Locale = (typeof HOME_LOCALIZED_LOCALES)[number];

const localeSet = new Set<string>(HOME_LOCALIZED_LOCALES);
const fullSiteLocaleSet = new Set<string>(FULL_SITE_LOCALES);
const homeOnlyLocaleSet = new Set<string>(HOME_ONLY_LOCALES);
const MAJOR_EXPANDED_PATHS = new Set<string>([
  "/",
  "/pricing",
  "/faq",
  "/translate",
  "/video-discovery",
  "/dubbing",
  "/video-downloader",
  "/subtitle-editor",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
]);

export function isLocale(value: string | null | undefined): value is Locale {
  return value !== null && value !== undefined && localeSet.has(value);
}

export function isFullSiteLocale(locale: Locale): locale is (typeof FULL_SITE_LOCALES)[number] {
  return fullSiteLocaleSet.has(locale);
}

export function isHomeOnlyLocale(locale: Locale): locale is (typeof HOME_ONLY_LOCALES)[number] {
  return homeOnlyLocaleSet.has(locale);
}

export function englishPathFor(pathname: string): string {
  for (const locale of HOME_LOCALIZED_LOCALES) {
    if (locale === DEFAULT_LOCALE) continue;
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(locale.length + 1) || "/";
    }
  }

  return pathname;
}

export function localeFromPathname(pathname: string): Locale {
  for (const locale of HOME_LOCALIZED_LOCALES) {
    if (locale === DEFAULT_LOCALE) continue;
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return locale;
    }
  }

  return DEFAULT_LOCALE;
}

export function homeHrefForLocale(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "/" : `/${locale}`;
}

export function localizePathForLocale(locale: Locale, href: string): string {
  if (!href.startsWith("/")) return href;

  const splitIndex = href.search(/[?#]/);
  const basePath = splitIndex === -1 ? href : href.slice(0, splitIndex);
  const suffix = splitIndex === -1 ? "" : href.slice(splitIndex);
  const englishPath = englishPathFor(basePath);

  if (locale === DEFAULT_LOCALE) {
    return `${englishPath}${suffix}`;
  }

  if (isFullSiteLocale(locale) && supportsLocalePath(locale, englishPath)) {
    const localizedPath = englishPath === "/" ? `/${locale}` : `/${locale}${englishPath}`;
    return `${localizedPath}${suffix}`;
  }

  if (englishPath === "/") {
    return `/${locale}${suffix}`;
  }

  return `${englishPath}${suffix}`;
}

export function supportsLocalePath(locale: Locale, englishPath: string): boolean {
  const normalizedEnglishPath = normalizePathname(englishPath);

  if (locale === DEFAULT_LOCALE) return true;
  if (locale === "ko") return true;
  if (
    locale === "es" ||
    locale === "ja" ||
    locale === "zh" ||
    locale === "fr" ||
    locale === "de" ||
    locale === "pt" ||
    locale === "vi"
  ) {
    return (
      MAJOR_EXPANDED_PATHS.has(normalizedEnglishPath) ||
      isTranslatedLanguageDetailPath(normalizedEnglishPath)
    );
  }
  return normalizedEnglishPath === "/";
}

export function localizedLocalesForPath(englishPath: string): Locale[] {
  return HOME_LOCALIZED_LOCALES.filter((locale) => supportsLocalePath(locale, englishPath));
}

export const localeOptions: Array<{ locale: Locale; label: string }> = [
  { locale: "en", label: "EN" },
  { locale: "ko", label: "KO" },
  { locale: "es", label: "ES" },
  { locale: "ja", label: "JA" },
  { locale: "zh", label: "ZH" },
  { locale: "fr", label: "FR" },
  { locale: "de", label: "DE" },
  { locale: "pt", label: "PT" },
  { locale: "vi", label: "VI" },
];

export function localeOptionsForPath(pathname: string): Array<{
  locale: Locale;
  label: string;
}> {
  const englishPath = englishPathFor(pathname);
  return localeOptions.filter(({ locale }) => supportsLocalePath(locale, englishPath));
}

export const openGraphLocaleByLocale: Record<Locale, string> = {
  en: "en_US",
  ko: "ko_KR",
  es: "es_ES",
  ja: "ja_JP",
  zh: "zh_CN",
  fr: "fr_FR",
  de: "de_DE",
  pt: "pt_BR",
  vi: "vi_VN",
};
