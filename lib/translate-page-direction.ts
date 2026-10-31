import type { Locale } from "./locales";
import { normalizePathname } from "./pathname-utils";
import { isTranslatedLanguageDetailPath } from "./translate-language-slugs";
import { translationLandingPages } from "./translation-landing-content";

// What a /translate/{language} page helps its reader do, written as
// "<source>><target>". "own" means the reader's language, i.e. the page locale.
// Creator pages translate the reader's own videos into the slug language
// ("own>korean"); viewer pages turn foreign-language video into subtitles the
// reader can follow ("korean>own"). hreflang may only join pages with the same
// direction: an English "Korean to English" page is not the English version of
// a Korean "translate into Korean" page.
export type TranslatePageDirection = `${string}>${string}`;

export function translatePageDirection(
  locale: Locale,
  englishPath: string,
): TranslatePageDirection | null {
  const path = normalizePathname(englishPath);
  if (!isTranslatedLanguageDetailPath(path)) return null;
  const landing = translationLandingPages.find(
    (page) => page.locale === locale && page.path === path,
  );
  return landing?.direction ?? `own>${path.slice("/translate/".length)}`;
}

// Restrict candidate alternates to the pages that do the same job as `locale`'s.
export function equivalentLocalesForPage(
  locale: Locale,
  englishPath: string,
  candidates: readonly Locale[],
): Locale[] {
  const direction = translatePageDirection(locale, englishPath);
  if (direction === null) return [...candidates];
  return candidates.filter(
    (candidate) => translatePageDirection(candidate, englishPath) === direction,
  );
}
