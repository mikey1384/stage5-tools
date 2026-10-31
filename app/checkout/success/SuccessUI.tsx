"use client";

import { useEffect, useSyncExternalStore } from "react";
import {
  postCheckoutMessage,
  returnToTranslator,
} from "../../../lib/checkout-messaging";
import { trackCheckoutReturn } from "../../../lib/analytics";
import {
  CHECKOUT_SUPPORT_EMAIL,
  checkoutCopy,
  resolveCheckoutLocale,
} from "../../../lib/checkout-copy";
import type { Locale } from "../../../lib/locales";

const subscribe = () => () => {};
const getServerLocale = (): Locale => "en";
const getLocaleSnapshot = (): Locale =>
  resolveCheckoutLocale(
    new URL(window.location.href).searchParams.get("l"),
    navigator.languages,
  );

export default function SuccessUI() {
  const locale = useSyncExternalStore(subscribe, getLocaleSnapshot, getServerLocale);
  const copy = checkoutCopy[locale];

  useEffect(() => {
    const url = new URL(window.location.href);
    trackCheckoutReturn({
      event: "checkout_return_success",
      checkout_mode: url.searchParams.get("mode") === "byo" ? "byo" : "credits",
      page_path: window.location.pathname,
    });
    postCheckoutMessage("stripe-success");
  }, []);

  const handleReturn = () => {
    returnToTranslator("stripe-success");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 px-4">
      <h1 className="text-2xl font-semibold">{copy.successTitle}</h1>
      <p className="max-w-md text-center">{copy.successBody}</p>
      <p className="max-w-md text-center text-sm text-gray-600">
        {copy.successHelp}{" "}
        {copy.contactLabel}:{" "}
        <a className="underline" href={`mailto:${CHECKOUT_SUPPORT_EMAIL}`}>
          {CHECKOUT_SUPPORT_EMAIL}
        </a>
      </p>
      <button
        type="button"
        onClick={handleReturn}
        className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        {copy.returnButton}
      </button>
      <p className="text-sm text-gray-600">{copy.permissionNote}</p>
    </main>
  );
}
