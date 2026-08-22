import type { ReactNode } from "react";
import { ADSENSE_CLIENT_ID } from "../../../lib/adsense";
import { createAdsenseProductionBootstrap } from "../../../lib/third-party-script-bootstrap";

export default function WatchArticleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <script
        id="adsense-production-bootstrap"
        dangerouslySetInnerHTML={{
          __html: createAdsenseProductionBootstrap(ADSENSE_CLIENT_ID),
        }}
      />
      {children}
    </>
  );
}
