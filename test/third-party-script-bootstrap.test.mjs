import assert from "node:assert/strict";
import test from "node:test";
import vm from "node:vm";

import {
  PRODUCTION_HOSTNAMES,
  createAdsenseProductionBootstrap,
  createGtmProductionBootstrap,
  isProductionHostname,
} from "../lib/third-party-script-bootstrap.ts";

const GTM_ID = "GTM-WTQTZDM4";
const ADSENSE_CLIENT_ID = "ca-pub-5896149754393933";

function executeBootstrap(source, hostname) {
  const elementsById = new Map();
  const appended = [];
  const appendChild = (element) => {
    appended.push(element);
    if (element.id) elementsById.set(element.id, element);
  };
  const document = {
    createElement(tagName) {
      return { tagName };
    },
    documentElement: { appendChild },
    getElementById(id) {
      return elementsById.get(id) ?? null;
    },
    head: { appendChild },
  };
  const window = { location: { hostname } };
  const context = vm.createContext({ document, window });

  vm.runInContext(source, context);
  return { appended, context, document, window };
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

test("loads GTM exactly once on each production hostname", () => {
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
    assert.equal(result.window.dataLayer.length, 1);
    assert.equal(result.window.dataLayer[0].event, "gtm.js");

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

test("loads AdSense exactly once on Watch details for production hosts", () => {
  const source = createAdsenseProductionBootstrap(ADSENSE_CLIENT_ID);

  for (const hostname of PRODUCTION_HOSTNAMES) {
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
