import test from 'node:test';
import assert from 'node:assert/strict';
import { trackDownload, trackWatchPlay } from '../lib/analytics.ts';
import { analyticsConsentCopy } from '../lib/analytics-consent-copy.ts';

test('website events and deduplication storage wait for consent and are not replayed', () => {
  const previous=globalThis.window;
  let allowed=false;
  const stored=new Map();
  globalThis.window={stage5AnalyticsConsent:{canTrack:()=>allowed},sessionStorage:{getItem:k=>stored.get(k),setItem:(k,v)=>stored.set(k,v)}};
  try {
    trackDownload({event:'download_mac_click'});
    trackWatchPlay({event:'watch_play',slug:'test'});
    assert.equal(window.dataLayer,undefined);
    assert.equal(stored.size,0);
    allowed=true;
    trackWatchPlay({event:'watch_play',slug:'test'});
    assert.equal(window.dataLayer.length,1);
    allowed=false;
    trackDownload({event:'download_windows_click'});
    assert.equal(window.dataLayer.length,1);
  } finally { globalThis.window=previous; }
});

test('all nine languages have complete analytics choices and disclosures', () => {
  assert.deepEqual(Object.keys(analyticsConsentCopy).sort(),['de','en','es','fr','ja','ko','pt','vi','zh']);
  const fields=Object.keys(analyticsConsentCopy.en).sort();
  for(const [locale,copy] of Object.entries(analyticsConsentCopy)) {
    assert.deepEqual(Object.keys(copy).sort(),fields,locale);
    for(const value of Object.values(copy)) assert.ok(value.trim().length>0,locale);
    assert.notEqual(copy.allow,copy.reject);
    assert.ok(copy.details.includes('180'));
    if(locale!=='en') assert.notEqual(copy.body,analyticsConsentCopy.en.body,locale);
  }
});
