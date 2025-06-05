"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function LanguageMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const queryLocale = params.get("l");
  const cookieLocale =
    typeof document !== "undefined"
      ? (document.cookie.match(/(?:^|;\s*)lang=(ko|en)/)?.[1] as
          | "ko"
          | "en"
          | undefined)
      : undefined;

  // Check if user has ever used Korean (separate from current language)
  // Use state to prevent hydration mismatch
  const [hasUsedKorean, setHasUsedKorean] = useState(false);

  useEffect(() => {
    // Only run on client to prevent hydration mismatch
    if (typeof localStorage !== "undefined") {
      setHasUsedKorean(localStorage.getItem("hasUsedKorean") === "true");
    }
  }, []);
  const domLocale =
    typeof document !== "undefined"
      ? (document.documentElement.lang as "en" | "ko")
      : "en";
  const locale =
    (queryLocale as "ko" | "en" | null) ?? cookieLocale ?? domLocale;

  // Set localStorage flag when Korean is detected (URL param or other means)
  useEffect(() => {
    if (locale === "ko" && typeof localStorage !== "undefined") {
      localStorage.setItem("hasUsedKorean", "true");
      setHasUsedKorean(true);
    }
  }, [locale]);

  /** Show menu when Korean has ever been relevant to the user */
  const browserWantedKorean =
    typeof navigator !== "undefined" &&
    navigator.language.toLowerCase().startsWith("ko");

  const userHasKoreanContext =
    browserWantedKorean || // Browser language is Korean
    queryLocale === "ko" || // Currently using ?l=ko URL
    cookieLocale === "ko" || // Has Korean cookie (used Korean before)
    locale === "ko" || // Currently viewing Korean content
    hasUsedKorean; // Has used Korean at some point

  if (!userHasKoreanContext) return null;

  /** swap locale & store cookie */
  const switchTo = (lang: "ko" | "en") => {
    const next = new URLSearchParams(params);

    // Only add query param when switching away from detected default
    if (lang !== domLocale) {
      next.set("l", lang);
    } else {
      next.delete("l");
    }

    // Remember if user has ever used Korean
    if (lang === "ko" && typeof localStorage !== "undefined") {
      localStorage.setItem("hasUsedKorean", "true");
      setHasUsedKorean(true);
    }

    document.cookie = `lang=${lang}; path=/; max-age=${60 * 60 * 24 * 365}`;
    const queryString = next.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
    router.replace(newUrl);
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
