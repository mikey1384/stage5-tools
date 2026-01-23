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
  const [isChanging, setIsChanging] = useState(false);

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

  // Hide on routes that don't support localization
  if (!userHasKoreanContext || pathname.startsWith("/echo")) return null;

  /** swap locale & store cookie */
  const switchTo = async (lang: "ko" | "en") => {
    if (lang === locale) return; // Don't reload if same language

    setIsChanging(true);

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

    try {
      await router.replace(newUrl);
      router.refresh(); // force React Server Components to re-run with new locale
    } finally {
      // Reset loading state after a delay to ensure smooth transition
      setTimeout(() => setIsChanging(false), 500);
    }
  };

  return (
    <div className="absolute top-6 right-6 z-50">
      <div className="relative">
        <select
          value={locale}
          onChange={(e) => switchTo(e.target.value as "ko" | "en")}
          disabled={isChanging}
          className={`rounded-md bg-black/60 text-white p-2 text-2xl border border-white/20 backdrop-blur-sm cursor-pointer hover:bg-black/80 transition-all ${
            isChanging ? "opacity-50 cursor-wait" : ""
          }`}
        >
          <option value="en">🇺🇸</option>
          <option value="ko">🇰🇷</option>
        </select>
        {isChanging && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
}
