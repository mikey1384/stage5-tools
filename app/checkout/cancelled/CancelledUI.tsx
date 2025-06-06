"use client";

import { useEffect } from "react";

export default function CancelledUI() {
  // Let the opener (Electron) know checkout was cancelled
  useEffect(() => {
    const target = window.opener || window.parent;
    if (target) {
      target.postMessage({ type: "stripe-cancelled" }, "*");
    }

    // Auto-close after a short delay
    const timer = setTimeout(() => {
      if (window.opener || window.parent) {
        window.close();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-semibold">Payment cancelled</h1>
      <p>You may safely close this window.</p>
      <p className="text-sm text-gray-600">
        This window will close automatically in a few seconds.
      </p>
    </main>
  );
}
