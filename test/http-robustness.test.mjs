import test from "node:test";
import assert from "node:assert/strict";
import { build } from "esbuild";
import { malformedPathResponse } from "../lib/http-request-guard.mjs";

const bundle = await build({ entryPoints: [new URL("../pages-fallback/worker.mjs", import.meta.url).pathname], bundle: true, write: false, format: "esm", platform: "browser" });
const { default: fallback } = await import(`data:text/javascript;base64,${Buffer.from(bundle.outputFiles[0].text).toString("base64")}`);

for (const path of ["/%c0", "/%", "/%zz", "/%E0%A4", "/%ED%A0%80", "/ko/watch/%ff", "/_next/%c0", "/api/watch-vtt/%c0.vtt"]) {
  test(`reject malformed path ${path} before routing`, async () => {
    for (const method of ["GET", "HEAD", "POST"]) {
      const r = malformedPathResponse(new Request(`https://stage5.tools${path}`, { method }));
      assert.equal(r.status, 400);
      assert.equal(r.headers.get("cache-control"), "no-store");
      assert.match(r.headers.get("x-robots-tag"), /noindex/);
      assert.equal(await r.text(), method === "HEAD" ? "" : "Invalid address.\n");
    }
  });
}
for (const path of ["/", "/ko/watch/tom-hanks-smartless", "/%ED%95%9C%EA%B8%80", "/a%20b", "/%25c0", "/%2525", "/foo%2Fbar", "/?q=%c0"]) {
  test(`preserve valid encoded URL ${path}`, () => {
    const req = new Request(`https://stage5.tools${path}`);
    const before = req.url;
    assert.equal(malformedPathResponse(req), null);
    assert.equal(req.url, before);
  });
}
test("fallback redirects legacy paths and queries to the owning production site", () => {
  for (const host of ["stage5-tools.pages.dev", "352ee91d.stage5-tools.pages.dev", "branch.stage5-tools.pages.dev:8443"]) {
    for (const [path, target] of [["/", "translator.tools"], ["/ko/video-downloader?source=old", "translator.tools"], ["/vi/watch/tom-hanks-smartless", "stage5.tools"], ["/echo/privacy", "stage5.tools"], ["/reflect", "stage5.tools"], ["/unknown", "translator.tools"]]) {
      const r = fallback.fetch(new Request(`https://${host}${path}`));
      assert.equal(r.status, 308);
      assert.equal(r.headers.get("location"), `https://${target}${path}`);
    }
  }
});
test("fallback never redirects request bodies or loops production HTTPS requests", async () => {
  for (const host of ["stage5.tools", "www.stage5.tools", "translator.tools", "www.translator.tools", "stage5-tools.pages.dev"]) {
    for (const method of ["POST", "OPTIONS", "PUT", "DELETE"]) {
      const r = fallback.fetch(new Request(`https://${host}/`, { method }));
      assert.equal(r.status, 405);
      assert.equal(r.headers.get("allow"), "GET, HEAD");
      assert.equal(r.headers.get("location"), null);
    }
    if (host.endsWith(".pages.dev")) continue;
    for (const method of ["GET", "HEAD"]) {
      const r = fallback.fetch(new Request(`https://${host}/`, { method }));
      assert.equal(r.status, 503);
      assert.equal(r.headers.get("location"), null);
      assert.equal(r.headers.get("retry-after"), "60");
      if (method === "HEAD") assert.equal(await r.text(), "");
    }
    assert.equal(fallback.fetch(new Request(`http://${host}/?a=1`)).headers.get("location"), `https://${host}/?a=1`);
  }
});
test("fallback confines destinations and rejects malformed URLs and unknown hosts", () => {
  for (const path of ["//evil.example/path", "/%2F%2Fevil.example", "/?next=https://evil.example"]) {
    const r = fallback.fetch(new Request(`https://stage5-tools.pages.dev${path}`));
    assert.equal(new URL(r.headers.get("location")).hostname, "translator.tools");
  }
  for (const host of ["evil.example", "stage5-tools.pages.dev.evil.example"]) {
    assert.equal(fallback.fetch(new Request(`https://${host}/`)).status, 421);
  }
  assert.equal(fallback.fetch(new Request("https://stage5-tools.pages.dev/%c0")).status, 400);
});
