"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function SuccessUI() {
  const params = useSearchParams();
  const sessionId = params.get("session_id");

  // Let the opener (Electron) know we're done
  useEffect(() => {
    const target = window.opener || window.parent;
    if (target) {
      target.postMessage({ type: "stripe-success", sessionId }, "*");
    }

    // Auto-close after a short delay
    const timer = setTimeout(() => {
      if (window.opener || window.parent) {
        window.close();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [sessionId]);

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-semibold">Payment complete!</h1>
      <p>You may safely close this window.</p>
      <p className="text-sm text-gray-600">
        This window will close automatically in a few seconds.
      </p>
    </main>
  );
}
