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

const serializedProductionHostnames = JSON.stringify(PRODUCTION_HOSTNAMES);

function assertIdentifier(value: string, pattern: RegExp, label: string): void {
  if (!pattern.test(value)) {
    throw new Error(`Invalid ${label}: ${value}`);
  }
}

export function createGtmProductionBootstrap(gtmId: string): string {
  assertIdentifier(gtmId, /^GTM-[A-Z0-9]+$/, "Google Tag Manager ID");
  const serializedGtmId = JSON.stringify(gtmId);

  return `(function(w,d){var hosts=${serializedProductionHostnames};var hostname=w.location.hostname.toLowerCase();if(hosts.indexOf(hostname)===-1||d.getElementById("gtm-src")){return;}var id=${serializedGtmId};w.dataLayer=w.dataLayer||[];w.dataLayer.push({"gtm.start":new Date().getTime(),event:"gtm.js"});var script=d.createElement("script");script.id="gtm-src";script.async=true;script.src="https://www.googletagmanager.com/gtm.js?id="+encodeURIComponent(id);(d.head||d.documentElement).appendChild(script);})(window,document);`;
}

export function createAdsenseProductionBootstrap(clientId: string): string {
  assertIdentifier(clientId, /^ca-pub-\d+$/, "AdSense client ID");
  const serializedClientId = JSON.stringify(clientId);

  return `(function(w,d){var hosts=${serializedProductionHostnames};var hostname=w.location.hostname.toLowerCase();if(hosts.indexOf(hostname)===-1||d.getElementById("adsense-src")){return;}var client=${serializedClientId};var script=d.createElement("script");script.id="adsense-src";script.async=true;script.crossOrigin="anonymous";script.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="+encodeURIComponent(client);(d.head||d.documentElement).appendChild(script);})(window,document);`;
}
