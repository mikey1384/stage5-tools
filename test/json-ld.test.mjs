import assert from "node:assert/strict";
import test from "node:test";

import { serializeJsonLd } from "../lib/json-ld.ts";

test("serializes JSON-LD without allowing a script element breakout", () => {
  const value = {
    headline: "</script><script>alert('unsafe')</script>",
    separators: "before\u2028between\u2029after",
  };
  const serialized = serializeJsonLd(value);

  assert.equal(serialized.includes("<"), false);
  assert.equal(serialized.includes("\\u003c/script>"), true);
  assert.equal(serialized.includes("\\u2028"), true);
  assert.equal(serialized.includes("\\u2029"), true);
  assert.deepEqual(JSON.parse(serialized), value);
});
