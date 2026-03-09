"use client";

const TARGET_ORIGIN_PARAM_NAMES = [
  "targetOrigin",
  "origin",
  "parentOrigin",
] as const;

export type CheckoutMessageType = "stripe-success" | "stripe-cancelled";

type CheckoutMessage = {
  type: CheckoutMessageType;
  sessionId: string | null;
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
