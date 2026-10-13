import assert from "node:assert/strict";
import test from "node:test";

import { isPhoneOrTablet } from "../lib/device-detection.ts";

const UA = {
  iphone:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
  android:
    "Mozilla/5.0 (Linux; Android 12; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36",
  androidTablet:
    "Mozilla/5.0 (Linux; Android 13; SM-X700) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  mac: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",
  windows:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
};

test("phones and tablets cannot run the desktop installers", () => {
  assert.equal(isPhoneOrTablet({ userAgent: UA.iphone, maxTouchPoints: 5 }), true);
  assert.equal(isPhoneOrTablet({ userAgent: UA.android, maxTouchPoints: 5 }), true);
  assert.equal(isPhoneOrTablet({ userAgent: UA.androidTablet, maxTouchPoints: 5 }), true);
  // iPadOS Safari reports a desktop Mac user agent but has a touch screen.
  assert.equal(isPhoneOrTablet({ userAgent: UA.mac, maxTouchPoints: 5 }), true);
  assert.equal(
    isPhoneOrTablet({ userAgent: UA.windows, userAgentData: { mobile: true } }),
    true,
  );
});

test("desktops keep the installer downloads", () => {
  assert.equal(isPhoneOrTablet({ userAgent: UA.mac, maxTouchPoints: 0 }), false);
  assert.equal(isPhoneOrTablet({ userAgent: UA.windows, maxTouchPoints: 10 }), false);
  assert.equal(
    isPhoneOrTablet({ userAgent: UA.windows, userAgentData: { mobile: false } }),
    false,
  );
  assert.equal(isPhoneOrTablet(undefined), false);
});
