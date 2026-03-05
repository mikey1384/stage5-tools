import type { Metadata } from "next";
import SuccessUI from "./SuccessUI";

export const metadata: Metadata = {
  title: "Payment Complete - Stage5 Tools",
  description:
    "Your payment has been completed successfully. You may safely close this window.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://translator.tools/checkout/success",
  },
  openGraph: {
    title: "Payment Complete - Stage5 Tools",
    description:
      "Your payment has been completed successfully. You may safely close this window.",
    url: "https://translator.tools/checkout/success",
    siteName: "Stage5 Tools",
  },
  twitter: {
    card: "summary",
    title: "Payment Complete - Stage5 Tools",
    description:
      "Your payment has been completed successfully. You may safely close this window.",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function CheckoutSuccessPage() {
  return <SuccessUI />;
}
