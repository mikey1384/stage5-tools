import { headers } from "next/headers";
import { DEFAULT_LOCALE, isLocale, type Locale } from "./locales";

const LOCALE_HEADER = "x-stage5-locale";

export async function getLocale(
  searchParams?:
    | URLSearchParams
    | { [key: string]: string | string[] | undefined }
): Promise<Locale> {
  void searchParams;

  // Locale is determined by the canonical URL path in middleware.
  const h = await headers();
  const forcedLocale = h.get(LOCALE_HEADER);
  if (isLocale(forcedLocale)) return forcedLocale;

  return DEFAULT_LOCALE;
}
