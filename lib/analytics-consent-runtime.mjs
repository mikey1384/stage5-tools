// Keep this source literal isolated from server-bundler function instrumentation.
// Tests execute the same browser code that the early document bootstrap uses.
export const ANALYTICS_CONSENT_SOURCE = String.raw`(function installAnalyticsConsent(config) {
  const w = window;
  const d = document;
  if (w.stage5AnalyticsConsent) return;
  const key = 'stage5.analytics-choice.v1';
  const lifetime = 180 * 24 * 60 * 60 * 1000;
  const excluded = new RegExp(config.excludedPaths);
  const host = w.location.hostname.toLowerCase();
  const destinations = ['G-5BJ3FXGGBS', 'G-P85K20ZXE0'];
  let loaded = false;
  let timer;
  let choice = read();

  function read() {
    try {
      const value = JSON.parse(w.localStorage.getItem(key));
      if (value && value.version === 1 &&
          (value.analytics === 'granted' || value.analytics === 'denied') &&
          Number.isFinite(value.expiresAt) && value.expiresAt > Date.now() &&
          value.expiresAt <= Date.now() + lifetime) return value;
    } catch { /* Storage can be unavailable. Default to no permission. */ }
    return null;
  }
  function eligible() {
    return config.hosts.indexOf(host) !== -1 && !excluded.test(w.location.pathname);
  }
  function granted() {
    return !!choice && choice.analytics === 'granted' && choice.expiresAt > Date.now();
  }
  function signal(analytics) {
    const args = (function() { return arguments; })('consent', 'update', {
      analytics_storage: analytics,
      ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
    });
    w.dataLayer.push(args);
  }
  function clearAnalyticsCookies() {
    // Only known Google measurement cookies. Preserve locale and product state.
    const domains = ['', host, host.replace(/^www\./, '')];
    d.cookie.split(';').forEach(function(part) {
      const name = part.split('=')[0].trim();
      if (!/^(_ga(?:_.+)?|_gid|_gat(?:_.+)?|_gcl_.+)$/.test(name)) return;
      domains.forEach(function(domain) {
        d.cookie = name + '=; Max-Age=0; Path=/; SameSite=Lax' +
          (domain ? '; Domain=' + domain : '') +
          (w.location.protocol === 'https:' ? '; Secure' : '');
      });
    });
  }
  function apply(reloadOnWithdrawal) {
    const allowed = granted() && eligible();
    destinations.forEach(function(id) { w['ga-disable-' + id] = !allowed; });
    if (allowed && !loaded) {
      // No pre-consent event replay. Website event producers also check canTrack.
      w.dataLayer = [];
      w.dataLayer.push((function() { return arguments; })('consent', 'default', {
        analytics_storage: 'denied', ad_storage: 'denied',
        ad_user_data: 'denied', ad_personalization: 'denied',
      }));
      signal('granted');
      // Analytics permission must not start the existing advertising tags.
      // GTM's documented tag-type blocklist applies before container execution.
      w.dataLayer.push({ 'gtm.blocklist': ['awct', 'gclidw'] });
      w.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
      loaded = true;
      const script = d.createElement('script');
      script.id = 'gtm-src'; script.async = true;
      script.src = 'https://www.googletagmanager.com/gtm.js?id=' + encodeURIComponent(config.gtmId);
      (d.head || d.documentElement).appendChild(script);
    } else if (loaded) {
      signal(allowed ? 'granted' : 'denied');
      if (!allowed) {
        clearAnalyticsCookies();
        // A fresh document unloads previously permitted third-party code.
        // If saving failed, keep the disabled state here rather than reload an old grant.
        if (reloadOnWithdrawal) w.location.reload();
      }
    } else if (!granted()) {
      clearAnalyticsCookies();
    }
    w.clearTimeout(timer);
    if (choice) {
      timer = w.setTimeout(function() {
        if (choice && choice.expiresAt <= Date.now()) {
          choice = null;
          apply(true);
          notify();
        } else apply(false);
      }, Math.min(Math.max(choice.expiresAt - Date.now(), 1), 2147483647));
    }
  }
  function notify() { w.dispatchEvent(new Event('stage5-consent-change')); }
  w.stage5AnalyticsConsent = {
    getChoice: function() { return choice && choice.expiresAt > Date.now() ? choice.analytics : null; },
    canTrack: function() { return loaded && granted() && eligible(); },
    choose: function(analytics) {
      if (analytics !== 'granted' && analytics !== 'denied') return { saved: false };
      choice = { version: 1, analytics: analytics, expiresAt: Date.now() + lifetime };
      let saved = false;
      try { w.localStorage.setItem(key, JSON.stringify(choice)); saved = true; } catch { /* Show a session-only result. */ }
      apply(saved && analytics === 'denied');
      notify();
      return { saved: saved };
    },
  };
  w.addEventListener('storage', function(event) {
    if (event.key !== key && event.key !== null) return;
    choice = read();
    apply(true);
    notify();
  });
  apply(false);
})`;
