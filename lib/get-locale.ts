import { headers, cookies } from "next/headers";

export async function getLocale(): Promise<"en" | "ko"> {
  // 1. manual override
  const h = await headers();
  const raw = h.get("x-nextjs-rewrite") ?? "";
  const qp = new URLSearchParams(raw).get("l");
  if (qp === "ko" || qp === "en") return qp;

  // 2. cookie
  const c = await cookies();
  const langCookie = c.get("lang")?.value as "ko" | "en" | undefined;
  return langCookie ?? "en";
}
