import assert from "node:assert/strict";
import test from "node:test";

import { createHomeLandingIntentEvent } from "../lib/analytics-events.ts";

test("creates the bounded homepage intent payload", () => {
  assert.deepEqual(createHomeLandingIntentEvent("translate", "/ko"), {
    event: "landing_intent_click",
    destination: "translate",
    placement: "home_hero",
    page_path: "/ko",
  });
});
