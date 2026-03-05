"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useState } from "react";
import { resolveLocaleCookieDomain } from "../lib/locale-cookie";

interface LanguageMenuProps {
  className?: string;
}

export function LanguageMenu({ className }: LanguageMenuProps) {
  const pathname = usePathname();
  const params = useSearchParams();
  const isKoreanRoute = pathname === "/ko" || pathname.startsWith("/ko/");
  const isEnglishHome = pathname === "/";
  const queryLocale = params.get("l");
  const cookieLocale = (() => {
    if (typeof document === "undefined") return undefined;
    const matches = Array.from(document.cookie.matchAll(/(?:^|;\s*)lang=(ko|en)/g));
    return matches.length
      ? (matches[matches.length - 1]?.[1] as "ko" | "en" | undefined)
      : undefined;
  })();
  const [isChanging, setIsChanging] = useState(false);
  const domLocale =
    typeof document !== "undefined"
      ? (document.documentElement.lang as "en" | "ko")
      : "en";
  const locale = isKoreanRoute
    ? "ko"
    : isEnglishHome
      ? ((queryLocale as "ko" | "en" | null) ?? "en")
      : ((queryLocale as "ko" | "en" | null) ?? cookieLocale ?? domLocale);

  // Hide on routes that don't support localization
  if (pathname.startsWith("/echo")) return null;

  /** swap locale & store cookie */
  const switchTo = (lang: "ko" | "en") => {
    if (lang === locale) return; // Don't reload if same language

    setIsChanging(true);

    const cookieDomain = resolveLocaleCookieDomain(window.location.hostname);
    const domainPart = cookieDomain ? `; domain=${cookieDomain}` : "";
    const securePart = window.location.protocol === "https:" ? "; secure" : "";
    document.cookie = `lang=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax${domainPart}${securePart}`;
    const nextParams = new URLSearchParams(params);
    nextParams.delete("l");

    let newPathname = pathname;
    if (lang === "ko") {
      if (isEnglishHome) {
        newPathname = "/ko";
      } else if (!isKoreanRoute) {
        newPathname = `/ko${pathname}`;
      }
    } else if (isKoreanRoute) {
      newPathname = pathname === "/ko" ? "/" : pathname.slice(3) || "/";
    }

    const queryString = nextParams.toString();
    const newUrl = queryString ? `${newPathname}?${queryString}` : newPathname;

    // Force full navigation so locale applies immediately on the current page.
    window.location.assign(newUrl);
  };

  return (
    <div className={className}>
      <div className="relative">
        <select
          value={locale}
          onChange={(e) => switchTo(e.target.value as "ko" | "en")}
          disabled={isChanging}
          aria-label="Select language"
          className={`h-9 min-w-14 rounded-full border border-white/20 bg-white/10 pl-3 pr-2 text-[15px] leading-none text-white backdrop-blur-sm cursor-pointer transition hover:bg-white/20 sm:h-auto sm:min-w-0 sm:rounded-md sm:bg-black/60 sm:p-2 sm:text-2xl sm:hover:bg-black/80 ${
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
