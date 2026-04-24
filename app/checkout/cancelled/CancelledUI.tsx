"use client";

import { useEffect } from "react";
import {
  postCheckoutMessage,
  returnToTranslator,
} from "../../../lib/checkout-messaging";

export default function CancelledUI() {
  useEffect(() => {
    postCheckoutMessage("stripe-cancelled");
  }, []);

  const handleReturn = () => {
    returnToTranslator("stripe-cancelled");
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-semibold">Payment cancelled</h1>
      <p>Return to Translator to choose another payment method.</p>
      <button
        type="button"
        onClick={handleReturn}
        className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        Return to Translator
      </button>
      <p className="text-sm text-gray-600">
        If your browser asks for permission, allow it to open Translator.
      </p>
    </main>
  );
}
