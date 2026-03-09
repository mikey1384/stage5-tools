import { normalizePathname } from "./pathname-utils";

export const TRANSLATED_LANGUAGE_SLUGS = [
  "spanish",
  "korean",
  "japanese",
  "chinese",
  "french",
  "german",
  "portuguese",
] as const;

export type TranslatedLanguageSlug = (typeof TRANSLATED_LANGUAGE_SLUGS)[number];

const translatedLanguageSlugSet = new Set<string>(TRANSLATED_LANGUAGE_SLUGS);

export function isTranslatedLanguageSlug(value: string): value is TranslatedLanguageSlug {
  return translatedLanguageSlugSet.has(value);
}

export function isTranslatedLanguageDetailPath(pathname: string): boolean {
  const normalizedPathname = normalizePathname(pathname);
  if (!normalizedPathname.startsWith("/translate/")) return false;
  const slug = normalizedPathname.slice("/translate/".length);
  return slug.length > 0 && !slug.includes("/") && isTranslatedLanguageSlug(slug);
}
