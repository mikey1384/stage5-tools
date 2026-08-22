import Script from "next/script";
import type { ReactNode } from "react";
import { ADSENSE_CLIENT_ID } from "../../../lib/adsense";

export default function WatchArticleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Script
        id="adsense-init"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      {children}
    </>
  );
}
