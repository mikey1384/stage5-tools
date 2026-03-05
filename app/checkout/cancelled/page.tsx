import type { Metadata } from "next";
import CancelledUI from "./CancelledUI";

export const metadata: Metadata = {
  title: "Payment Cancelled - Stage5 Tools",
  description: "Your payment was cancelled. You may safely close this window.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://translator.tools/checkout/cancelled",
  },
  openGraph: {
    title: "Payment Cancelled - Stage5 Tools",
    description:
      "Your payment was cancelled. You may safely close this window.",
    url: "https://translator.tools/checkout/cancelled",
    siteName: "Stage5 Tools",
  },
  twitter: {
    card: "summary",
    title: "Payment Cancelled - Stage5 Tools",
    description: "Your payment was cancelled. You may safely close this window.",
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
