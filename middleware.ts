import { NextResponse, NextRequest } from "next/server";
import { resolveLocaleCookieDomain } from "./lib/locale-cookie";

const LOCALE_COOKIE = "lang";
const LOCALE_HEADER = "x-stage5-locale";
const ONE_YEAR = 60 * 60 * 24 * 365;

function isLocale(value: string | null | undefined): value is "ko" | "en" {
  return value === "ko" || value === "en";
}

function getCookieLocale(req: NextRequest): "ko" | "en" | undefined {
  const cookieHeader = req.headers.get("cookie") ?? "";
  if (!cookieHeader) return undefined;

  let resolved: "ko" | "en" | undefined;
  for (const part of cookieHeader.split(";")) {
    const [name, ...valueParts] = part.trim().split("=");
    if (name !== LOCALE_COOKIE) continue;
    const rawValue = valueParts.join("=").trim();
    let value = rawValue;
    try {
      value = decodeURIComponent(rawValue);
    } catch {
      // Ignore malformed cookie encodings from clients/extensions.
      continue;
    }
    if (isLocale(value)) {
      // Prefer the right-most cookie value when duplicates exist.
      resolved = value;
    }
  }

  return resolved;
}

function clearLocaleCookies(res: NextResponse, hostname: string): void {
  const expiredBase = `${LOCALE_COOKIE}=; Path=/; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
  res.headers.append("Set-Cookie", expiredBase);
  const cookieDomain = resolveLocaleCookieDomain(hostname);
  if (cookieDomain) {
    res.headers.append(
      "Set-Cookie",
      `${expiredBase}; Domain=${cookieDomain}`
    );
  }
}

function detectLocale(req: NextRequest): "ko" | "en" {
  const accept = req.headers.get("accept-language") ?? "";
  const fromHeader = accept.split(",")[0].startsWith("ko") ? "ko" : undefined;
  const country = req.headers.get("cf-ipcountry") ?? "";
  const fromIP = country === "KR" ? "ko" : undefined;

  return fromHeader ?? fromIP ?? "en";
}

function setLocaleCookie(
  res: NextResponse,
  hostname: string,
  locale: "ko" | "en"
): void {
  const cookieDomain = resolveLocaleCookieDomain(hostname);
  res.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: ONE_YEAR,
    sameSite: "lax",
    ...(cookieDomain ? { domain: cookieDomain } : {}),
  });
}

function englishPathFor(pathname: string): string {
  if (pathname === "/ko") return "/";
  if (pathname.startsWith("/ko/")) return pathname.slice(3) || "/";
  return pathname;
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const pathname = url.pathname;
  const explicitLocale = url.searchParams.get("l");
  const cookieLocale = getCookieLocale(req);
  const isKoreanPath = pathname === "/ko" || pathname.startsWith("/ko/");
  const hasExplicitLocale = isLocale(explicitLocale);

  if (url.searchParams.get("clearLang") === "1") {
    const nextUrl = url.clone();
    nextUrl.pathname = englishPathFor(pathname);
    nextUrl.searchParams.delete("l");
    nextUrl.searchParams.delete("clearLang");
    const res = NextResponse.redirect(nextUrl);
    clearLocaleCookies(res, req.nextUrl.hostname);
    return res;
  }

  // Render /ko/<path> URLs by internally rewriting to the English route tree.
  if (pathname.startsWith("/ko/")) {
    const rewriteUrl = url.clone();
    rewriteUrl.pathname = pathname.slice(3) || "/";
    // Prevent stale manual overrides from forcing non-Korean content under /ko/* URLs.
    rewriteUrl.searchParams.delete("l");

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set(LOCALE_HEADER, "ko");

    const res = NextResponse.rewrite(rewriteUrl, {
      request: {
        headers: requestHeaders,
      },
    });
    if (cookieLocale !== "ko") {
      setLocaleCookie(res, req.nextUrl.hostname, "ko");
    }
    return res;
  }

  // Respect saved Korean preference by routing English-form URLs to /ko/... URLs.
  const isLocalizationExcluded =
    pathname.startsWith("/echo") || pathname.startsWith("/checkout");
  if (
    !isKoreanPath &&
    !hasExplicitLocale &&
    cookieLocale === "ko" &&
    !isLocalizationExcluded
  ) {
    const nextUrl = url.clone();
    nextUrl.pathname = pathname === "/" ? "/ko" : `/ko${pathname}`;
    return NextResponse.redirect(nextUrl);
  }

  let locale: "ko" | "en";
  if (isKoreanPath) {
    locale = "ko";
  } else if (pathname === "/") {
    // Keep canonical homepage deterministic (English) unless explicitly overridden.
    locale = hasExplicitLocale ? explicitLocale : "en";
  } else if (hasExplicitLocale) {
    locale = explicitLocale;
  } else if (isLocale(cookieLocale)) {
    locale = cookieLocale;
  } else {
    locale = detectLocale(req);
  }

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set(LOCALE_HEADER, locale);

  const res = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  const shouldSyncCookie =
    cookieLocale !== locale &&
    (isKoreanPath ||
      hasExplicitLocale ||
      (pathname === "/" && !isLocale(cookieLocale)));

  if (shouldSyncCookie) setLocaleCookie(res, req.nextUrl.hostname, locale);

  return res;
}

export const config = {
  matcher: [
    "/((?!api|_next|favicon.ico|icon.svg|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
