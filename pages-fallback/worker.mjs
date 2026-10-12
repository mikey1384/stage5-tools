import { malformedPathResponse } from "../lib/http-request-guard.mjs";
import { canonicalOriginForPath } from "../lib/site-routing.ts";

const productionHosts = new Set([
  "stage5.tools", "www.stage5.tools", "translator.tools", "www.translator.tools",
]);
const pagesHost = /^(?:[a-z0-9-]+\.)?stage5-tools\.pages\.dev$/;

function respond(request, status, message, extraHeaders = {}) {
  return new Response(request.method === "HEAD" ? null : `${message}\n`, {
    status,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
      ...extraHeaders,
    },
  });
}

export default {
  fetch(request) {
    const invalid = malformedPathResponse(request);
    if (invalid) return invalid;
    const url = new URL(request.url);
    if (!productionHosts.has(url.hostname) && !pagesHost.test(url.hostname)) {
      return respond(request, 421, "Unrecognized website.");
    }
    // The retired application has no active form/API handler. Never replay a
    // POST to a different host or send an OPTIONS request into the old runtime.
    if (request.method !== "GET" && request.method !== "HEAD") {
      return respond(request, 405, "This address accepts GET and HEAD requests only.", {
        Allow: "GET, HEAD",
      });
    }
    if (productionHosts.has(url.hostname)) {
      // These domains still use Pages underneath the production Worker route.
      // Redirecting an HTTPS fallback to itself would create an outage loop.
      if (url.protocol === "https:") {
        return respond(request, 503, "Temporarily unavailable. Please try again shortly.", {
          "Retry-After": "60",
        });
      }
      url.protocol = "https:";
      url.port = "";
    } else {
      // Retain the old preview's Translator ownership; Watch, Echo and Reflect
      // use the same Stage5 ownership policy as the current application.
      const target = new URL(canonicalOriginForPath(url.pathname));
      target.pathname = url.pathname;
      target.search = url.search;
      url.href = target.href;
    }
    return respond(request, 308, "This page has moved.", { Location: url.href });
  },
};
