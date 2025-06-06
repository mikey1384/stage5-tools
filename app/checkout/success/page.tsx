import type { Metadata } from "next";
import SuccessUI from "./SuccessUI";

export const metadata: Metadata = {
  title: "Payment Complete - Stage5 Tools",
  description:
    "Your payment has been completed successfully. You may safely close this window.",
  openGraph: {
    title: "Payment Complete - Stage5 Tools",
    description:
      "Your payment has been completed successfully. You may safely close this window.",
    url: "https://stage5.tools/checkout/success",
    siteName: "Stage5 Tools",
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
