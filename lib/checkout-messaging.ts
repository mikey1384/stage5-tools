"use client";

const TARGET_ORIGIN_PARAM_NAMES = [
  "targetOrigin",
  "origin",
  "parentOrigin",
] as const;

export type CheckoutMessageType = "stripe-success" | "stripe-cancelled";
const CHECKOUT_RETURN_PROTOCOL = "stage5-translator";

type CheckoutMessage = {
  type: CheckoutMessageType;
  sessionId: string | null;
  returnId: string | null;
  mode: string;
};

function toOrigin(value: string | null | undefined): string | null {
  if (!value) return null;

  try {
    const origin = new URL(value).origin;
    return origin === "null" ? null : origin;
  } catch {
    return null;
  }
}

function resolveMessageTarget(): Window {
  const opener = window.opener;

  try {
    if (opener && !opener.closed) {
      return opener;
    }
  } catch {
    // Access to `.closed` can fail in some embedded/browser contexts even when
    // posting to the opener still works.
    if (opener) {
      return opener;
    }
  }

  if (window.parent && window.parent !== window) {
    return window.parent;
  }

  return window;
}

function resolveTargetOrigins(url: URL, target: Window): string[] {
  if (target === window) {
    return [window.location.origin];
  }

  const origins = new Set<string>();

  for (const paramName of TARGET_ORIGIN_PARAM_NAMES) {
    const origin = toOrigin(url.searchParams.get(paramName));
    if (origin) origins.add(origin);
  }

  return [...origins];
}

export function postCheckoutMessage(type: CheckoutMessageType): void {
  const url = new URL(window.location.href);
  const message: CheckoutMessage = {
    type,
    sessionId: url.searchParams.get("session_id"),
    returnId: url.searchParams.get("return_id"),
    mode: url.searchParams.get("mode") ?? "credits",
  };

  const target = resolveMessageTarget();
  const targetOrigins = resolveTargetOrigins(url, target);

  if (targetOrigins.length > 0) {
    for (const origin of targetOrigins) {
      target.postMessage(message, origin);
    }
    return;
  }

  if (target === window) {
    target.postMessage(message, window.location.origin);
    return;
  }

  // For popup/iframe hosts we only know the origin when the caller gives it to us.
  // Stripe is commonly the referrer here, so referrer-based targeting is not reliable.
  target.postMessage(message, "*");
}

export function buildCheckoutReturnUrl(type: CheckoutMessageType): string {
  const url = new URL(window.location.href);
  const status = type === "stripe-success" ? "success" : "cancelled";
  const params = new URLSearchParams();
  const sessionId = url.searchParams.get("session_id");
  const returnId = url.searchParams.get("return_id");
  const mode = url.searchParams.get("mode") ?? "credits";

  if (sessionId) {
    params.set("session_id", sessionId);
  }
  if (returnId) {
    params.set("return_id", returnId);
  }
  params.set("mode", mode);

  return `${CHECKOUT_RETURN_PROTOCOL}://checkout/${status}?${params.toString()}`;
}

export function returnToTranslator(type: CheckoutMessageType): void {
  const returnUrl = buildCheckoutReturnUrl(type);

  postCheckoutMessage(type);
  window.location.href = returnUrl;

  // The protocol launch must happen directly from the click. Close afterward so
  // embedded checkout popups can still signal completion by closing.
  window.setTimeout(() => {
    try {
      window.close();
    } catch {
      // Do nothing
    }
  }, 100);
}
