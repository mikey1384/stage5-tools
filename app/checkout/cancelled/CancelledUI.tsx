"use client";

import { useEffect } from "react";
import { postCheckoutMessage } from "../../../lib/checkout-messaging";

export default function CancelledUI() {
  useEffect(() => {
    postCheckoutMessage("stripe-cancelled");
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-semibold">Payment cancelled</h1>
      <p>You may safely close this window.</p>
      <button
        type="button"
        onClick={() => window.close()}
        className="rounded-lg bg-black px-4 py-2 text-white transition hover:opacity-90"
      >
        Close window
      </button>
      <p className="text-sm text-gray-600">Please close it manually.</p>
    </main>
  );
}
