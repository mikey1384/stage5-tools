"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

export function LanguageMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const locale = (params.get("l") as "ko" | "en") ?? "en";

  /** Show menu only when the browser *wanted* Korean */
  const browserWantedKorean =
    typeof navigator !== "undefined" &&
    navigator.language.toLowerCase().startsWith("ko");

  if (!browserWantedKorean) return null;

  /** swap locale & store cookie */
  const switchTo = (lang: "ko" | "en") => {
    const next = new URLSearchParams(params);
    next.set("l", lang);
    document.cookie = `lang=${lang}; path=/; max-age=${60 * 60 * 24 * 365}`;
    router.replace(`${pathname}?${next.toString()}`);
    router.refresh(); // force React Server Components to re-run with new locale
  };

  return (
    <div className="absolute top-6 right-6 z-50">
      <select
        value={locale}
        onChange={(e) => switchTo(e.target.value as "ko" | "en")}
        className="rounded-md bg-black/60 text-white p-2 text-sm border border-white/20 backdrop-blur-sm"
      >
        <option value="en">🇺🇸</option>
        <option value="ko">🇰🇷</option>
      </select>
    </div>
  );
}
