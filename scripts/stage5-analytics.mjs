// Read-only Analytics access through the existing encrypted Stage5 Google profile.
// Credentials stay in this process; only verified account/report data is printed.
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const property = '526070569';
const account = '385685930';
const identity = 'mikey@stage5.tools';
const mode = process.argv[2] ?? 'settings';
const modes = new Set(['settings', 'realtime', 'report', 'metadata']);
if (!modes.has(mode)) throw new Error('Use settings, realtime, report or metadata. Reports read a JSON request file.');

function safeError(status, data) {
  const details = data?.error?.details ?? [];
  return { status, code: data?.error?.status ?? 'REQUEST_FAILED',
    ...(status === 400 ? { validationMessage: data?.error?.message } : {}),
    reasons: details.map(x => x.reason).filter(Boolean),
    services: details.map(x => x.metadata?.service).filter(Boolean),
    activationUrls: details.map(x => x.metadata?.activationUrl).filter(x => typeof x === 'string' && x.startsWith('https://console.developers.google.com/')) };
}

try {
  const result = await promisify(execFile)(fileURLToPath(new URL('./stage5-gmail', import.meta.url)), ['auth', 'export', '--unmasked'], { maxBuffer: 100000 });
  const credential = JSON.parse(result.stdout);
  result.stdout = '';
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id: credential.client_id, client_secret: credential.client_secret,
      refresh_token: credential.refresh_token, grant_type: 'refresh_token' }),
  });
  for (const key of Object.keys(credential)) credential[key] = undefined;
  const token = await response.json();
  if (!response.ok || !token.access_token) throw new Error('Business credential refresh failed.');
  const headers = { Authorization: `Bearer ${token.access_token}`, 'Content-Type': 'application/json' };
  token.access_token = undefined;
  const whoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', { headers });
  const who = await whoResponse.json();
  if (!whoResponse.ok || who.email !== identity || !who.verified_email) throw new Error('Business Google identity could not be verified.');
  const get = async (url, body) => {
    const r = await fetch(url, { method: body ? 'POST' : 'GET', headers, ...(body ? { body: JSON.stringify(body) } : {}) });
    const data = await r.json();
    return r.ok ? { status: r.status, data } : { error: safeError(r.status, data) };
  };
  const admin = 'https://analyticsadmin.googleapis.com/v1beta/';
  const data = `https://analyticsdata.googleapis.com/v1beta/properties/${property}`;
  let results;
  if (mode === 'settings') {
    const paths = [`properties/${property}`, `properties/${property}/dataRetentionSettings`, `properties/${property}/dataStreams`, `accounts/${account}/dataSharingSettings`];
    results = Object.fromEntries(await Promise.all(paths.map(async p => [p, await get(admin + p)])));
  } else if (mode === 'metadata') {
    results = await get(data + '/metadata');
  } else {
    if (!process.argv[3]) throw new Error('A report request JSON file is required.');
    const body = JSON.parse(await readFile(process.argv[3], 'utf8'));
    results = await get(data + (mode === 'report' ? ':runReport' : ':runRealtimeReport'), body);
  }
  delete headers.Authorization;
  console.log(JSON.stringify({ checkedAt: new Date().toISOString(), identity, propertyId: property, mode, results }, null, 2));
} catch (error) {
  // Do not expose subprocess stdout/stderr, fetch headers or token response bodies.
  const safeMessages = ['Business credential refresh failed.', 'Business Google identity could not be verified.', 'A report request JSON file is required.'];
  console.error(JSON.stringify({ error: safeMessages.includes(error?.message) ? error.message : 'The read-only Analytics check did not complete. No credentials were displayed or saved.' }));
  process.exitCode = 1;
}
