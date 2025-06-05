import { NextResponse, NextRequest } from "next/server";

const LOCALE_COOKIE = "lang";
const ONE_YEAR = 60 * 60 * 24 * 365;

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  /** 1️⃣ honour an existing cookie **************************************/
  const cookieLocale = req.cookies.get(LOCALE_COOKIE)?.value as
    | "ko"
    | "en"
    | undefined;
  if (cookieLocale) {
    url.searchParams.set("l", cookieLocale); // pass into the app
    return NextResponse.rewrite(url);
  }

  /** 2️⃣ detect from Accept-Language ************************************/
  const accept = req.headers.get("accept-language") ?? "";
  const fromHeader = accept.split(",")[0].startsWith("ko") ? "ko" : undefined;

  /** 3️⃣ fall back to Cloudflare country code ***************************/
  const country = req.headers.get("cf-ipcountry") ?? "";
  const fromIP = country === "KR" ? "ko" : undefined;

  const locale = fromHeader ?? fromIP ?? "en";

  /** 4️⃣ set cookie so user sticks to chosen locale *********************/
  url.searchParams.set("l", locale);
  const res = NextResponse.rewrite(url, {
    headers: {
      "Set-Cookie": `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=${ONE_YEAR}`,
    },
  });
  return res;
}

export const config = { matcher: "/" }; // run only for the index page
