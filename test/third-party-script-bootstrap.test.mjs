import assert from "node:assert/strict";
import test from "node:test";
import vm from "node:vm";
import { readFile } from "node:fs/promises";
import { transform } from "esbuild";

import {
  PRODUCTION_HOSTNAMES,
  createAdsenseProductionBootstrap,
  createGtmProductionBootstrap,
  isProductionHostname,
} from "../lib/third-party-script-bootstrap.ts";

const GTM_ID = "GTM-WTQTZDM4";
const ADSENSE_CLIENT_ID = "ca-pub-5896149754393933";

test("server bundling cannot add external helpers to the inline consent code", async () => {
  const input = await readFile(new URL('../lib/analytics-consent-runtime.mjs', import.meta.url), 'utf8');
  const compiled = await transform(input, { format: 'cjs', minify: true, keepNames: true });
  const module = { exports: {} };
  vm.runInNewContext(compiled.code, { module, exports: module.exports });
  const source = `(${module.exports.ANALYTICS_CONSENT_SOURCE})(${JSON.stringify({gtmId:GTM_ID, hosts:PRODUCTION_HOSTNAMES, excludedPaths:'^/reflect$'})});`;
  const result = executeBootstrap(source, 'stage5.tools', '/', null);
  assert.equal(result.appended.length, 0);
  result.window.stage5AnalyticsConsent.choose('granted');
  assert.equal(result.appended.length, 1);
  assert.equal(result.window.dataLayer[1][2].analytics_storage, 'granted');
});

function executeBootstrap(source, hostname, pathname = "/", consent = "granted", storageFails = false) {
  const elementsById = new Map();
  const appended = [];
  const appendChild = (element) => {
    appended.push(element);
    if (element.id) elementsById.set(element.id, element);
  };
  const cookies = [];
  const document = {
    get cookie() { return "_ga=test; _ga_5BJ3FXGGBS=test; stage5_locale=ko"; },
    set cookie(value) { cookies.push(value); },
    createElement(tagName) {
      return { tagName };
    },
    documentElement: { appendChild },
    getElementById(id) {
      return elementsById.get(id) ?? null;
    },
    head: { appendChild },
  };
  let stored = consent === null ? null : JSON.stringify({ version: 1, analytics: consent, expiresAt: Date.now() + 60000 });
  const listeners = {};
  let reloads = 0;
  const timers = [];
  const window = {
    location: { hostname, pathname, protocol: "https:", reload() { reloads++; } },
    localStorage: { getItem() { return stored; }, setItem(k,v) { if(storageFails) throw Error("blocked"); stored=v; } },
    addEventListener(k,fn) { listeners[k]=fn; }, dispatchEvent() {},
    setTimeout(fn) { timers.push(fn); return timers.length; }, clearTimeout() {},
  };
  const context = vm.createContext({ document, window, Event });

  vm.runInContext(source, context);
  return { appended, context, document, window, cookies, listeners, timers, get reloads() { return reloads; }, setStored(v) { stored=v; } };
}

test("recognizes only the four exact production hostnames", () => {
  for (const hostname of PRODUCTION_HOSTNAMES) {
    assert.equal(isProductionHostname(hostname), true);
    assert.equal(isProductionHostname(hostname.toUpperCase()), true);
  }

  for (const hostname of [
    "localhost",
    "127.0.0.1",
    "stage5-tools.pages.dev",
    "8763b0f3.stage5-tools.pages.dev",
    "translator.tools.example.com",
    "preview.stage5.tools",
  ]) {
    assert.equal(isProductionHostname(hostname), false);
  }
});

test("loads GTM exactly once after a saved grant on each production hostname", () => {
  const source = createGtmProductionBootstrap(GTM_ID);

  for (const hostname of PRODUCTION_HOSTNAMES) {
    const result = executeBootstrap(source, hostname);
    assert.equal(result.appended.length, 1, hostname);
    assert.equal(result.appended[0].id, "gtm-src");
    assert.equal(result.appended[0].async, true);
    assert.equal(
      result.appended[0].src,
      `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`,
    );
    assert.equal(result.window.dataLayer.length, 4);
    const consent = result.window.dataLayer[0];
    assert.equal(consent[0], "consent");
    assert.equal(consent[1], "default");
    for (const key of ["analytics_storage", "ad_storage", "ad_user_data", "ad_personalization"]) assert.equal(consent[2][key], "denied");
    assert.equal(result.window.dataLayer[1][1], "update");
    assert.equal(result.window.dataLayer[1][2].analytics_storage, "granted");
    assert.deepEqual(Array.from(result.window.dataLayer[2]['gtm.blocklist']), ['awct', 'gclidw']);
    assert.equal(result.window.dataLayer[3].event, "gtm.js");

    vm.runInContext(source, result.context);
    assert.equal(result.appended.length, 1, `${hostname} duplicate`);
  }
});

test("does not load GTM on preview, local, or lookalike hosts", () => {
  const source = createGtmProductionBootstrap(GTM_ID);

  for (const hostname of [
    "localhost",
    "stage5-tools.pages.dev",
    "8763b0f3.stage5-tools.pages.dev",
    "translator.tools.example.com",
    "preview.stage5.tools",
  ]) {
    const result = executeBootstrap(source, hostname);
    assert.deepEqual(result.appended, [], hostname);
    assert.equal(result.window.dataLayer, undefined, hostname);
  }
});

test("privacy disclosures load without Google tags in every locale", () => {
  const source = createGtmProductionBootstrap(GTM_ID);
  for (const hostname of PRODUCTION_HOSTNAMES) {
    for (const locale of ["", "/ko", "/es", "/ja", "/zh", "/fr", "/de", "/pt", "/vi"]) {
      const result = executeBootstrap(source, hostname, `${locale}/privacy`);
      assert.deepEqual(result.appended, [], `${hostname}${locale}/privacy`);
      assert.equal(result.window.dataLayer, undefined);
    }
    assert.deepEqual(executeBootstrap(source, hostname, "/echo/privacy").appended, []);
    assert.equal(executeBootstrap(source, hostname, "/watch/privacy").appended.length, 1);
  }
});

test("loads AdSense exactly once on its intended Stage5 hostname", () => {
  const source = createAdsenseProductionBootstrap(ADSENSE_CLIENT_ID);

  for (const hostname of ["stage5.tools"]) {
    const result = executeBootstrap(source, hostname);
    assert.equal(result.appended.length, 1, hostname);
    assert.equal(result.appended[0].id, "adsense-src");
    assert.equal(result.appended[0].async, true);
    assert.equal(result.appended[0].crossOrigin, "anonymous");
    assert.equal(
      result.appended[0].src,
      `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`,
    );

    vm.runInContext(source, result.context);
    assert.equal(result.appended.length, 1, `${hostname} duplicate`);
  }
});

test("does not load AdSense on preview, local, or lookalike hosts", () => {
  const source = createAdsenseProductionBootstrap(ADSENSE_CLIENT_ID);

  for (const hostname of [
    "translator.tools",
    "www.translator.tools",
    "www.stage5.tools",
    "localhost",
    "stage5-tools.pages.dev",
    "8763b0f3.stage5-tools.pages.dev",
    "translator.tools.example.com",
    "preview.stage5.tools",
  ]) {
    assert.deepEqual(executeBootstrap(source, hostname).appended, [], hostname);
  }
});

test("rejects malformed third-party identifiers at build time", () => {
  assert.throws(() => createGtmProductionBootstrap("G-UNEXPECTED"));
  assert.throws(() => createAdsenseProductionBootstrap("pub-123"));
});

test("the private editor never initializes GTM or a data layer on any production host", () => {
  const source = createGtmProductionBootstrap(GTM_ID);
  for (const host of PRODUCTION_HOSTNAMES) {
    for (const prefix of ["", "/ko", "/es", "/ja", "/zh", "/fr", "/de", "/pt", "/vi"]) {
      for (const suffix of ["", "/"]) {
        const path = `${prefix}/reflect${suffix}`;
        const result = executeBootstrap(source, host, path);
        assert.deepEqual(result.appended, [], `${host}${path}`);
        assert.equal(result.window.dataLayer, undefined, `${host}${path}`);
      }
    }
    assert.equal(executeBootstrap(source, host, "/echo").appended.length, 1);
    assert.equal(executeBootstrap(source, host, "/watch/example").appended.length, 1);
  }
});

test("fresh and rejected visitors load no Google tags or event queue; grant precedes GTM", () => {
  for (const choice of [null, "denied", "invalid"]) {
    const r = executeBootstrap(createGtmProductionBootstrap(GTM_ID), "stage5.tools", "/", choice);
    assert.equal(r.appended.length, 0);
    assert.equal(r.window.dataLayer, undefined);
    assert.equal(r.window.stage5AnalyticsConsent.canTrack(), false);
    r.window.stage5AnalyticsConsent.choose("granted");
    assert.equal(r.appended.length, 1);
    assert.equal(r.window.dataLayer[1][2].analytics_storage, "granted");
    for (const key of ["ad_storage", "ad_user_data", "ad_personalization"]) assert.equal(r.window.dataLayer[1][2][key], "denied");
    assert.equal(r.window.stage5AnalyticsConsent.canTrack(), true);
  }
});

test("withdrawal stops producers, disables both GA destinations, removes only measurement cookies and reloads", () => {
  const r = executeBootstrap(createGtmProductionBootstrap(GTM_ID), "www.stage5.tools");
  r.window.stage5AnalyticsConsent.choose("denied");
  assert.equal(r.window.stage5AnalyticsConsent.canTrack(), false);
  assert.equal(r.window["ga-disable-G-5BJ3FXGGBS"], true);
  assert.equal(r.window["ga-disable-G-P85K20ZXE0"], true);
  assert.equal(r.window.dataLayer.at(-1)[2].analytics_storage, "denied");
  assert.equal(r.reloads, 1);
  assert.ok(r.cookies.some(x => x.includes("Domain=stage5.tools")));
  assert.ok(r.cookies.every(x => x.startsWith("_ga")));
});

test("preview and private paths cannot load tags even after explicit grant", () => {
  for (const [host,path] of [["localhost","/"],["stage5-web.mikey1384.workers.dev","/"],["stage5.tools","/vi/privacy"],["translator.tools","/ko/reflect"]]) {
    const r=executeBootstrap(createGtmProductionBootstrap(GTM_ID),host,path,null);
    r.window.stage5AnalyticsConsent.choose("granted");
    assert.equal(r.appended.length,0);
    assert.equal(r.window.dataLayer,undefined);
    assert.equal(r.window.stage5AnalyticsConsent.canTrack(),false);
  }
});

test("storage withdrawal in another tab and an expired record fail closed", () => {
  const r=executeBootstrap(createGtmProductionBootstrap(GTM_ID),"translator.tools");
  r.setStored(JSON.stringify({version:1,analytics:"granted",expiresAt:Date.now()-1}));
  r.listeners.storage({key:"stage5.analytics-choice.v1"});
  assert.equal(r.window.stage5AnalyticsConsent.getChoice(),null);
  assert.equal(r.window.stage5AnalyticsConsent.canTrack(),false);
  assert.equal(r.reloads,1);
});

test("failed persistence reports failure and never reloads an old saved grant", () => {
  const r=executeBootstrap(createGtmProductionBootstrap(GTM_ID),"stage5.tools","/","granted",true);
  const result=r.window.stage5AnalyticsConsent.choose("denied");
  assert.equal(result.saved,false);
  assert.equal(r.window.stage5AnalyticsConsent.canTrack(),false);
  assert.equal(r.reloads,0);
  assert.equal(r.window["ga-disable-G-5BJ3FXGGBS"],true);
});

test("a soft navigation to a protected path stops website event producers", () => {
  const r=executeBootstrap(createGtmProductionBootstrap(GTM_ID),"stage5.tools");
  r.window.location.pathname="/reflect";
  assert.equal(r.window.stage5AnalyticsConsent.canTrack(),false);
});
