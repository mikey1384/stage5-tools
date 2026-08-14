import assert from "node:assert/strict";
import test from "node:test";

import {
  createAgentWorkflowEvent,
  createFaqIntentEvent,
  createHomeLandingIntentEvent,
  createWindowsInstallHelpEvent,
} from "../lib/analytics-events.ts";

test("creates the bounded agent-workflow payload", () => {
  assert.deepEqual(createAgentWorkflowEvent("subtitle_editor", "/agents"), {
    event: "agent_workflow_click",
    destination: "subtitle_editor",
    placement: "agents_hero",
    page_path: "/agents",
  });
});

test("creates the bounded homepage intent payload", () => {
  assert.deepEqual(createHomeLandingIntentEvent("translate", "/ko"), {
    event: "landing_intent_click",
    destination: "translate",
    placement: "home_hero",
    page_path: "/ko",
  });
});

test("creates the bounded FAQ intent payload", () => {
  assert.deepEqual(createFaqIntentEvent("video_downloader", "/zh/faq"), {
    event: "faq_intent_click",
    destination: "video_downloader",
    placement: "faq_hero",
    page_path: "/zh/faq",
  });
});

test("creates the bounded Windows install-help payload", () => {
  assert.deepEqual(createWindowsInstallHelpEvent("/"), {
    event: "windows_install_help_open",
    placement: "hero_download",
    page_path: "/",
  });
});
