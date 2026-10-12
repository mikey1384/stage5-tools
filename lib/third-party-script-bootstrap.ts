import { ANALYTICS_CONSENT_SOURCE } from "./analytics-consent-runtime.mjs";

export const PRODUCTION_HOSTNAMES = [
  "translator.tools",
  "www.translator.tools",
  "stage5.tools",
  "www.stage5.tools",
] as const;

export function isProductionHostname(hostname: string): boolean {
  const normalizedHostname = hostname.toLowerCase();
  return PRODUCTION_HOSTNAMES.some(
    (productionHostname) => productionHostname === normalizedHostname,
  );
}

const privacyPathPattern = /^\/(?:(?:ko|es|ja|zh|fr|de|pt|vi)\/)?(?:echo\/)?privacy\/?$/;
const privateEditorPathPattern = /^\/(?:(?:ko|es|ja|zh|fr|de|pt|vi)\/)?reflect\/?$/;

export function isPrivateEditorPathname(pathname: string): boolean { return privateEditorPathPattern.test(pathname); }

export function isPrivacyPathname(pathname: string): boolean {
  return privacyPathPattern.test(pathname);
}

function assertIdentifier(value: string, pattern: RegExp, label: string): void {
  if (!pattern.test(value)) {
    throw new Error(`Invalid ${label}: ${value}`);
  }
}

export function createGtmProductionBootstrap(gtmId: string): string {
  assertIdentifier(gtmId, /^GTM-[A-Z0-9]+$/, "Google Tag Manager ID");
  const config = { gtmId, hosts: PRODUCTION_HOSTNAMES,
    excludedPaths: `(?:${privacyPathPattern.source})|(?:${privateEditorPathPattern.source})` };
  return `(${ANALYTICS_CONSENT_SOURCE})(${JSON.stringify(config)});`;
}

export function createAdsenseProductionBootstrap(clientId: string): string {
  assertIdentifier(clientId, /^ca-pub-\d+$/, "AdSense client ID");
  const serializedClientId = JSON.stringify(clientId);
  const serializedAdHostnames = JSON.stringify(["stage5.tools"]);

  return `(function(w,d){var hosts=${serializedAdHostnames};var hostname=w.location.hostname.toLowerCase();if(hosts.indexOf(hostname)===-1||d.getElementById("adsense-src")){return;}var client=${serializedClientId};var script=d.createElement("script");script.id="adsense-src";script.async=true;script.crossOrigin="anonymous";script.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="+encodeURIComponent(client);(d.head||d.documentElement).appendChild(script);})(window,document);`;
}
