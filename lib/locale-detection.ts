import { DEFAULT_LOCALE, isLocale, type Locale } from "./locales";

const COUNTRY_LOCALE_MAP: Partial<Record<string, Locale>> = {
  KR: "ko",
};

function localeFromLanguageTag(tag: string): Locale | undefined {
  const normalizedTag = tag.trim().toLowerCase();
  if (!normalizedTag || normalizedTag === "*") return undefined;

  const primarySubtag = normalizedTag.split("-")[0];
  return isLocale(primarySubtag) ? primarySubtag : undefined;
}

export function detectLocaleFromAcceptLanguage(
  acceptLanguage: string | null | undefined
): Locale | undefined {
  if (!acceptLanguage) return undefined;

  const weightedTags = acceptLanguage
    .split(",")
    .map((part, index) => {
      const [rawTag, ...params] = part.trim().split(";");
      if (!rawTag) return null;

      let quality = 1;
      for (const param of params) {
        const [key, value] = param.trim().split("=");
        if (key !== "q") continue;
        const parsed = Number.parseFloat(value ?? "");
        if (Number.isFinite(parsed)) {
          quality = parsed;
        }
      }

      return {
        index,
        quality,
        locale: localeFromLanguageTag(rawTag),
      };
    })
    .filter(
      (
        entry
      ): entry is { index: number; quality: number; locale: Locale | undefined } =>
        entry !== null && entry.quality > 0
    )
    .sort((a, b) => {
      if (b.quality !== a.quality) {
        return b.quality - a.quality;
      }
      return a.index - b.index;
    });

  for (const entry of weightedTags) {
    if (entry.locale) return entry.locale;
  }

  return undefined;
}

export function detectLocaleFromCountry(
  countryCode: string | null | undefined
): Locale | undefined {
  if (!countryCode) return undefined;
  return COUNTRY_LOCALE_MAP[countryCode.toUpperCase()];
}

export function detectPreferredLocale(options: {
  acceptLanguage?: string | null;
  countryCode?: string | null;
}): Locale {
  return (
    detectLocaleFromAcceptLanguage(options.acceptLanguage) ??
    detectLocaleFromCountry(options.countryCode) ??
    DEFAULT_LOCALE
  );
}
