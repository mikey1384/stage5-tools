import { NextResponse, NextRequest } from "next/server";
import { isCrawlerUserAgent } from "./lib/crawler-detection";
import { detectPreferredLocale } from "./lib/locale-detection";
import {
  parseLocaleCookie,
  resolveLocaleCookieDomain,
} from "./lib/locale-cookie";
import {
  DEFAULT_LOCALE,
  englishPathFor,
  isFullSiteLocale,
  isHomeOnlyLocale,
  isLocale,
  localeFromPathname,
  localizePathForLocale,
  homeHrefForLocale,
  type Locale,
} from "./lib/locales";

const LOCALE_COOKIE = "lang";
const LOCALE_HEADER = "x-stage5-locale";
const ONE_YEAR = 60 * 60 * 24 * 365;

function getCookieLocale(req: NextRequest): Locale | undefined {
  return parseLocaleCookie(req.headers.get("cookie"));
}

function clearLocaleCookies(res: NextResponse, hostname: string): void {
  const expiredBase = `${LOCALE_COOKIE}=; Path=/; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
  res.headers.append("Set-Cookie", expiredBase);
  const cookieDomain = resolveLocaleCookieDomain(hostname);
  if (cookieDomain) {
    res.headers.append("Set-Cookie", `${expiredBase}; Domain=${cookieDomain}`);
  }
}

function setLocaleCookie(
  res: NextResponse,
  hostname: string,
  locale: Locale,
): void {
  const cookieDomain = resolveLocaleCookieDomain(hostname);
  res.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: ONE_YEAR,
    sameSite: "lax",
    ...(cookieDomain ? { domain: cookieDomain } : {}),
  });
}

function isCrawlerRequest(req: NextRequest): boolean {
  const userAgent = req.headers.get("user-agent") ?? "";
  return isCrawlerUserAgent(userAgent);
}

function isLocaleRedirectExcludedRoute(englishPath: string): boolean {
  return englishPath.startsWith("/echo") || englishPath.startsWith("/checkout");
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const pathname = url.pathname;
  const explicitLocale = url.searchParams.get("l");
  const cookieLocale = getCookieLocale(req);
  const englishPath = englishPathFor(pathname);
  const pathLocale = localeFromPathname(pathname);
  const isLocalizedPath = pathLocale !== DEFAULT_LOCALE;
  const isCrawler = isCrawlerRequest(req);
  // `_next`, public files, and other asset-like requests are already excluded by
  // `config.matcher`, so this only covers app routes that should never be locale-prefixed.
  const isLocaleRedirectExcluded = isLocaleRedirectExcludedRoute(englishPath);

  if (url.searchParams.get("clearLang") === "1") {
    const nextUrl = url.clone();
    nextUrl.pathname = englishPath;
    nextUrl.searchParams.delete("l");
    nextUrl.searchParams.delete("clearLang");
    const res = NextResponse.redirect(nextUrl);
    clearLocaleCookies(res, req.nextUrl.hostname);
    return res;
  }

  if (isLocalizedPath && isLocaleRedirectExcluded) {
    const nextUrl = url.clone();
    nextUrl.pathname = englishPath;
    nextUrl.searchParams.delete("l");
    return NextResponse.redirect(nextUrl, 308);
  }

  if (isLocale(explicitLocale)) {
    const nextUrl = url.clone();
    nextUrl.pathname = isLocaleRedirectExcluded
      ? englishPath
      : isFullSiteLocale(explicitLocale)
        ? explicitLocale === DEFAULT_LOCALE
          ? englishPath
          : englishPath === "/"
            ? `/${explicitLocale}`
            : `/${explicitLocale}${englishPath}`
        : localizePathForLocale(explicitLocale, pathname);
    nextUrl.searchParams.delete("l");

    const res = NextResponse.redirect(nextUrl, 308);
    if (
      !isCrawler &&
      !isLocaleRedirectExcluded &&
      (isFullSiteLocale(explicitLocale) || englishPath === "/")
    ) {
      setLocaleCookie(res, req.nextUrl.hostname, explicitLocale);
    }
    return res;
  }

  // Render localized full-site URLs by internally rewriting to the English route tree.
  if (
    isFullSiteLocale(pathLocale) &&
    pathLocale !== DEFAULT_LOCALE &&
    pathname.startsWith(`/${pathLocale}/`)
  ) {
    const rewriteUrl = url.clone();
    rewriteUrl.pathname = pathname.slice(pathLocale.length + 1) || "/";

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set(LOCALE_HEADER, pathLocale);

    const res = NextResponse.rewrite(rewriteUrl, {
      request: {
        headers: requestHeaders,
      },
    });
    if (!isCrawler && cookieLocale !== pathLocale) {
      setLocaleCookie(res, req.nextUrl.hostname, pathLocale);
    }
    return res;
  }

  if (!isCrawler && !isLocalizedPath && !isLocaleRedirectExcluded) {
    if (
      cookieLocale &&
      isFullSiteLocale(cookieLocale) &&
      cookieLocale !== DEFAULT_LOCALE
    ) {
      const localizedPath = localizePathForLocale(cookieLocale, pathname);
      if (localizedPath !== pathname) {
        const nextUrl = url.clone();
        nextUrl.pathname = localizedPath;
        return NextResponse.redirect(nextUrl);
      }
    }

    if (cookieLocale && isHomeOnlyLocale(cookieLocale) && englishPath === "/") {
      const nextUrl = url.clone();
      nextUrl.pathname = homeHrefForLocale(cookieLocale);
      return NextResponse.redirect(nextUrl);
    }

    if (!cookieLocale) {
      const detectedLocale = detectPreferredLocale({
        acceptLanguage: req.headers.get("accept-language"),
        countryCode: req.headers.get("cf-ipcountry"),
      });

      if (detectedLocale !== DEFAULT_LOCALE) {
        const localizedPath = localizePathForLocale(detectedLocale, pathname);
        if (localizedPath !== pathname) {
          const nextUrl = url.clone();
          nextUrl.pathname = localizedPath;
          const res = NextResponse.redirect(nextUrl);
          setLocaleCookie(res, req.nextUrl.hostname, detectedLocale);
          return res;
        }
      }
    }
  }

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set(LOCALE_HEADER, pathLocale);

  const res = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (
    !isCrawler &&
    isLocalizedPath &&
    !isLocaleRedirectExcluded &&
    (isFullSiteLocale(pathLocale) || englishPath === "/") &&
    cookieLocale !== pathLocale
  ) {
    setLocaleCookie(res, req.nextUrl.hostname, pathLocale);
  }

  return res;
}

export const config = {
  matcher: [
    "/((?!api|_next|favicon.ico|icon.svg|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
