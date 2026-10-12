import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Pages are rendered from the request's host and locale. The Watch loader and
// existing public R2 CDN own catalog caching; no additional storage is required.
export default defineCloudflareConfig();
