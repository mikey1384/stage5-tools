import { englishPathFor } from "./locales";

export const STAGE5_ORIGIN = "https://stage5.tools";
export const TRANSLATOR_ORIGIN = "https://translator.tools";
export type Site = "stage5" | "translator";

export function siteForHostname(hostname: string): Site {
  const host = hostname.split(":")[0].toLowerCase();
  if (/^(www\.)?stage5\.tools$/.test(host)) return "stage5";
  if (/^(www\.)?translator\.tools$/.test(host)) return "translator";
  // A named Worker preview can show Stage5 without joining the separate
  // production allowlist used for indexing, analytics and advertising.
  return host.endsWith(".workers.dev") && host === process.env.STAGE5_PREVIEW_HOST
    ? "stage5" : "translator";
}

export function isWatchPath(path: string): boolean {
  const english = englishPathFor(path.split(/[?#]/)[0]);
  return english === "/watch" || english.startsWith("/watch/");
}

export function canonicalOriginForPath(path: string): string {
  const english = englishPathFor(path.split(/[?#]/)[0]);
  return isWatchPath(path) || english === "/reflect" || english === "/echo" || english.startsWith("/echo/")
    ? STAGE5_ORIGIN : TRANSLATOR_ORIGIN;
}

export function canonicalSiteUrl(path: string): string {
  return new URL(path, canonicalOriginForPath(path)).toString();
}

const translatorRoutes = new Set([
  "/video-discovery", "/dubbing", "/video-downloader", "/subtitle-editor",
  "/translate", "/pricing", "/faq", "/open-source", "/agents",
  "/about", "/contact", "/privacy", "/terms",
]);

// Redirect only known page families. Assets, APIs, and unknown URLs keep their
// own response semantics; a missing page must not become a homepage redirect.
export function canonicalRedirectUrl(hostname: string, pathAndQuery: string): string | undefined {
  const host = hostname.toLowerCase();
  if (!["stage5.tools", "www.stage5.tools", "translator.tools", "www.translator.tools"].includes(host)) return;
  const url = new URL(pathAndQuery, `https://${host}`);
  const english = englishPathFor(url.pathname);
  let targetHost = host.replace(/^www\./, "");
  if (canonicalOriginForPath(url.pathname) === STAGE5_ORIGIN) {
    targetHost = "stage5.tools";
  } else if (siteForHostname(host) === "stage5") {
    if (translatorRoutes.has(english) || /^\/(translate|checkout|open-source)\//.test(english)) {
      targetHost = "translator.tools";
    }
  }
  if (targetHost === host && url.pathname === new URL(pathAndQuery, url.origin).pathname) return;
  url.hostname = targetHost;
  return url.toString();
}
