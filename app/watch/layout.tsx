import Script from "next/script";
import { ReactNode } from "react";

export default function WatchLayout({ children }: { children: ReactNode }) {
  const adsenseClient = "ca-pub-9422244865978432";

  return (
    <>
      <Script
        id="adsense-init"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      {children}
    </>
  );
}
