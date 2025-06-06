import type { Metadata } from "next";
import CancelledUI from "./CancelledUI";

export const metadata: Metadata = {
  title: "Payment Cancelled - Stage5 Tools",
  description: "Your payment was cancelled. You may safely close this window.",
  openGraph: {
    title: "Payment Cancelled - Stage5 Tools",
    description:
      "Your payment was cancelled. You may safely close this window.",
    url: "https://stage5.tools/checkout/cancelled",
    siteName: "Stage5 Tools",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function CheckoutCancelledPage() {
  return <CancelledUI />;
}
