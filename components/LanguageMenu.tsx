"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useState } from "react";
import { parseLocaleCookie, resolveLocaleCookieDomain } from "../lib/locale-cookie";
import {
  DEFAULT_LOCALE,
  homeHrefForLocale,
  isLocale,
  isFullSiteLocale,
  localeFromPathname,
  localeOptions,
  localizePathForLocale,
  type Locale,
} from "../lib/locales";

interface LanguageMenuProps {
  className?: string;
}

export function LanguageMenu({ className }: LanguageMenuProps) {
  const pathname = usePathname();
  const params = useSearchParams();
  const pathLocale = localeFromPathname(pathname);
  const queryLocale = params.get("l");
  const cookieLocale =
    typeof document === "undefined" ? undefined : parseLocaleCookie(document.cookie);
  const [isChanging, setIsChanging] = useState(false);
  const domLocale =
    typeof document !== "undefined"
      ? ((document.documentElement.lang as Locale) ?? DEFAULT_LOCALE)
      : DEFAULT_LOCALE;
  const locale =
    pathLocale !== DEFAULT_LOCALE
      ? pathLocale
      : isLocale(queryLocale)
        ? queryLocale
        : cookieLocale ?? domLocale;

  // Hide on routes that don't support localization
  if (pathname.startsWith("/echo") || pathname.startsWith("/checkout")) return null;

  /** swap locale & store cookie */
  const switchTo = (lang: Locale) => {
    if (lang === locale) return; // Don't reload if same language

    setIsChanging(true);

    const cookieDomain = resolveLocaleCookieDomain(window.location.hostname);
    const domainPart = cookieDomain ? `; domain=${cookieDomain}` : "";
    const securePart = window.location.protocol === "https:" ? "; secure" : "";
    document.cookie = `lang=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax${domainPart}${securePart}`;
    const nextParams = new URLSearchParams(params);
    nextParams.delete("l");

    const newPathname = isFullSiteLocale(lang)
      ? localizePathForLocale(lang, pathname)
      : homeHrefForLocale(lang);

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
          onChange={(e) => switchTo(e.target.value as Locale)}
          disabled={isChanging}
          aria-label="Select language"
          className={`h-9 min-w-16 rounded-full border border-white/20 bg-white/10 pl-3 pr-2 text-[13px] leading-none text-white backdrop-blur-sm cursor-pointer transition hover:bg-white/20 sm:h-auto sm:min-w-0 sm:rounded-md sm:bg-black/60 sm:px-3 sm:py-2 sm:text-sm sm:hover:bg-black/80 ${
            isChanging ? "opacity-50 cursor-wait" : ""
          }`}
        >
          {localeOptions.map((option) => (
            <option key={option.locale} value={option.locale}>
              {option.label}
            </option>
          ))}
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
