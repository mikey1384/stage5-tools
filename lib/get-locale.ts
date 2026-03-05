import { headers, cookies } from "next/headers";

const LOCALE_HEADER = "x-stage5-locale";

export async function getLocale(
  searchParams?:
    | URLSearchParams
    | { [key: string]: string | string[] | undefined }
): Promise<"en" | "ko"> {
  // 1. locale forced by middleware for current request
  const h = await headers();
  const forcedLocale = h.get(LOCALE_HEADER) as "ko" | "en" | null;
  if (forcedLocale === "ko" || forcedLocale === "en") return forcedLocale;

  // 2. manual override from URL parameter
  if (searchParams) {
    const l =
      searchParams instanceof URLSearchParams
        ? searchParams.get("l")
        : searchParams.l;
    if (l === "ko" || l === "en") return l;
  }

  // 3. cookie preference
  const c = await cookies();
  const langCookie = c.get("lang")?.value as "ko" | "en" | undefined;
  if (langCookie === "ko" || langCookie === "en") return langCookie;

  // 4. automatic detection via headers
  const acceptLang = h.get("accept-language") ?? "";
  const cfCountry = h.get("cf-ipcountry") ?? "";

  // Check if user prefers Korean
  const wantsKorean =
    acceptLang.toLowerCase().includes("ko") || cfCountry.toUpperCase() === "KR";

  return wantsKorean ? "ko" : "en";
}
