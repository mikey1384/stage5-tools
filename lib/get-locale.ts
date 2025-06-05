import { headers, cookies } from "next/headers";

export async function getLocale(): Promise<"en" | "ko"> {
  /* 1. manual override in the browser URL */
  const headersList = await headers();
  const urlSearch =
    headersList.get("x-invoke-query") ?? // Next 15.3+ passes the full query here
    headersList.get("x-nextjs-rewrite") ?? // older edge runtime
    "";
  const qp = new URLSearchParams(urlSearch).get("l");
  if (qp === "ko" || qp === "en") return qp;

  /* 2. cookie set by middleware or LanguageMenu */
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("lang")?.value as "ko" | "en" | undefined;
  return langCookie ?? "en";
}
