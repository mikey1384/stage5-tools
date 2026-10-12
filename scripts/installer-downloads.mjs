#!/usr/bin/env node
// Translator installer downloads, counted by Cloudflare at downloads.stage5.tools.
// GA4 is consent-gated since September 6 and misses most installs; the edge sees
// every request. Read-only: one GraphQL analytics query with the wrangler login.
//
//   node scripts/installer-downloads.mjs [--days 7 | --from YYYY-MM-DD --to YYYY-MM-DD] [--json]
//
// Counts completed browser GETs (200) of the /latest/ installers per platform and
// day, excluding self-identified crawlers and outdated browsers: automated
// scanners fetch installers with old Chrome builds (Chrome 114/124 from one
// country, dozens a week), which real visitors almost never run. Resumed downloads (206) are reported
// separately, since one person can make several. Cloudflare keeps about 31 days
// of this data, so the weekly scorecard stores each week's numbers.

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const args = process.argv.slice(2);
const opt = name => (args.indexOf(name) >= 0 ? args[args.indexOf(name) + 1] : undefined);
let days = Number(opt('--days')) || 7;
const asJson = args.includes('--json');

const cfg = path.join(os.homedir(), '.wrangler', 'config', 'default.toml');
const m = fs.existsSync(cfg) && /oauth_token\s*=\s*"([^"]+)"/.exec(fs.readFileSync(cfg, 'utf8'));
if (!m) {
  console.error(`No wrangler login found in ${cfg}. Run: npx wrangler login`);
  process.exit(2);
}
const api = (p, o = {}) => fetch(`https://api.cloudflare.com/client/v4${p}`, {
  ...o, headers: { Authorization: `Bearer ${m[1]}`, 'Content-Type': 'application/json' },
}).then(r => r.json());

const iso = d => d.toISOString().slice(0, 10);
let until = new Date(Date.now() - 86400000); // yesterday: today is incomplete
let since = new Date(until.getTime() - (days - 1) * 86400000);
if (opt('--from') && opt('--to')) {
  since = new Date(`${opt('--from')}T00:00:00Z`);
  until = new Date(`${opt('--to')}T00:00:00Z`);
  days = Math.round((until - since) / 86400000) + 1;
}

const zones = await api('/zones?name=stage5.tools');
if (!zones.success) {
  console.error('Cloudflare:', JSON.stringify(zones.errors), '(an expired login refreshes on any wrangler command, e.g. npx wrangler whoami)');
  process.exit(1);
}
const query = `query($zone:String!,$since:Date!,$until:Date!){viewer{zones(filter:{zoneTag:$zone}){
  httpRequestsAdaptiveGroups(limit:10000,filter:{date_geq:$since,date_leq:$until,
    clientRequestHTTPHost:"downloads.stage5.tools",requestSource:"eyeball",
    clientRequestHTTPMethodName:"GET",clientRequestPath_like:"%/latest/%"}){
    count dimensions{date clientRequestPath edgeResponseStatus userAgent clientCountryName}}}}}`;
const res = await api('/graphql', { method: 'POST', body: JSON.stringify({ query, variables: { zone: zones.result[0].id, since: iso(since), until: iso(until) } }) });
if (res.errors) {
  console.error('Cloudflare GraphQL:', JSON.stringify(res.errors).slice(0, 500));
  process.exit(1);
}

const CRAWLER = /bot|crawl|rowler|spider|curl|wget|python|go-http|headless|scan|http-client|java\/|mediapartners|google-|preview/i;
// A Chrome/Edge major version this far behind the newest one seen in the same
// window counts as a scanner (Chrome ships about every four weeks).
const STALE_CHROME_MAJORS = 12;
const chromeMajor = (ua) => Number((/(?:Chrome|CriOS)\/(\d+)/.exec(ua || '') || [])[1] || 0);
const PLATFORM = { 'Translator-arm64.dmg': 'mac-arm64', 'Translator-x64.dmg': 'mac-x64', 'Translator-x64.exe': 'win-x64' };
const out = { since: iso(since), until: iso(until), completed: 0, resumed: 0, crawlers: 0, staleBrowsers: 0, updateChecks: 0, byPlatform: {}, byDay: {}, byCountry: {} };
const rows = res.data.viewer.zones[0].httpRequestsAdaptiveGroups;
const newestChrome = Math.max(0, ...rows.map(r => chromeMajor(r.dimensions.userAgent)));
for (const { count, dimensions: d } of rows) {
  if (CRAWLER.test(d.userAgent || '')) { out.crawlers += count; continue; }
  const major = chromeMajor(d.userAgent);
  if (major && newestChrome && major < newestChrome - STALE_CHROME_MAJORS) { out.staleBrowsers += count; continue; }
  const file = path.basename(d.clientRequestPath);
  // latest.yml / latest-mac.yml: the installed app asking whether an update exists.
  if (/^latest.*\.yml$/.test(file)) { out.updateChecks += count; continue; }
  const platform = PLATFORM[file];
  if (!platform) continue;
  if (d.edgeResponseStatus === 206) { out.resumed += count; continue; }
  if (d.edgeResponseStatus !== 200) continue;
  out.completed += count;
  out.byPlatform[platform] = (out.byPlatform[platform] || 0) + count;
  out.byDay[d.date] = (out.byDay[d.date] || 0) + count;
  out.byCountry[d.clientCountryName] = (out.byCountry[d.clientCountryName] || 0) + count;
}

if (asJson) {
  console.log(JSON.stringify(out, null, 2));
} else {
  const top = o => Object.entries(o).sort((a, b) => b[1] - a[1]);
  console.log(`Translator installer downloads, ${out.since} to ${out.until} (${days} days, UTC)`);
  console.log(`  completed: ${out.completed}  (${(out.completed / days).toFixed(1)}/day)`);
  console.log(`  by platform: ${top(out.byPlatform).map(([k, v]) => `${k} ${v}`).join(', ')}`);
  console.log(`  top countries: ${top(out.byCountry).slice(0, 6).map(([k, v]) => `${k} ${v}`).join(', ')}`);
  console.log(`  resumed (206, may repeat): ${out.resumed}; excluded: ${out.crawlers} crawler fetches, ${out.staleBrowsers} from outdated browsers (scanners)`);
  console.log(`  update checks from installed apps (latest*.yml): ${out.updateChecks}`);
  console.log(`  per day: ${Object.keys(out.byDay).sort().map(k => `${k.slice(5)}:${out.byDay[k]}`).join('  ')}`);
}
