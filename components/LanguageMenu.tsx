"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";

interface LanguageMenuProps {
  className?: string;
}

export function LanguageMenu({ className }: LanguageMenuProps) {
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
  const [isChanging, setIsChanging] = useState(false);
  const domLocale =
    typeof document !== "undefined"
      ? (document.documentElement.lang as "en" | "ko")
      : "en";
  const locale =
    (queryLocale as "ko" | "en" | null) ?? cookieLocale ?? domLocale;

  // Hide on routes that don't support localization
  if (pathname.startsWith("/echo")) return null;

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
