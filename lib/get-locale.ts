import { headers, cookies } from "next/headers";

export async function getLocale(
  searchParams?:
    | URLSearchParams
    | { [key: string]: string | string[] | undefined }
): Promise<"en" | "ko"> {
  // 1. manual override from URL parameter
  if (searchParams) {
    const l =
      searchParams instanceof URLSearchParams
        ? searchParams.get("l")
        : searchParams.l;
    if (l === "ko" || l === "en") return l;
  }

  // 2. cookie preference
  const c = await cookies();
  const langCookie = c.get("lang")?.value as "ko" | "en" | undefined;
  if (langCookie === "ko" || langCookie === "en") return langCookie;

  // 3. automatic detection via headers (from middleware)
  const h = await headers();
  const acceptLang = h.get("accept-language") ?? "";
  const cfCountry = h.get("cf-ipcountry") ?? "";

  // Check if user prefers Korean
  const wantsKorean =
    acceptLang.toLowerCase().includes("ko") || cfCountry.toUpperCase() === "KR";

  return wantsKorean ? "ko" : "en";
}
