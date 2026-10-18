import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Geist,
  Geist_Mono,
  Instrument_Sans,
  Montserrat,
} from "next/font/google";
import { ADSENSE_CLIENT_ID } from "../lib/adsense";
import { getLocale } from "../lib/get-locale";
import { getSite } from "../lib/get-site";
import { STAGE5_ORIGIN, TRANSLATOR_ORIGIN } from "../lib/site-routing";
import { serializeJsonLd } from "../lib/json-ld";
import { HOME_LOCALIZED_LOCALES } from "../lib/locales";
import { createGtmProductionBootstrap } from "../lib/third-party-script-bootstrap";
import { AnalyticsConsent } from "../components/AnalyticsConsent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Translator's display and body faces (self-hosted by next/font at build).
const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
  metadataBase: new URL((await getSite()) === "stage5" ? STAGE5_ORIGIN : TRANSLATOR_ORIGIN),
  icons: {
    icon: { url: "/icon.png", sizes: "128x128", type: "image/png" },
    apple: { url: "/apple-touch-icon.png", sizes: "256x256", type: "image/png" },
  },
  other: {
    "google-adsense-account": ADSENSE_CLIENT_ID,
  },
  };
}

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Stage5 Tools",
  alternateName: "Stage5",
  url: STAGE5_ORIGIN,
  logo: "https://stage5.tools/brand/stage5-wordmark-v1.png",
  legalName: "Stage5 Tools LLC",
  sameAs: ["https://www.youtube.com/@stage_5", "https://x.com/stage5tools", "https://github.com/mikey1384/translator"],
};

function websiteStructuredData(isStage5: boolean) { return {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: isStage5 ? "Stage5" : "Translator",
  url: isStage5 ? STAGE5_ORIGIN : TRANSLATOR_ORIGIN,
  inLanguage: [...HOME_LOCALIZED_LOCALES],
  publisher: {
    "@type": "Organization",
    name: "Stage5 Tools",
    url: STAGE5_ORIGIN,
  },
}; }

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const isStage5 = (await getSite()) === "stage5";
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang={locale}>
      <head>
        <link
          rel="alternate"
          type="text/plain"
          href="https://translator.tools/llms.txt"
          title="Translator summary for LLMs"
        />
        <link
          rel="alternate"
          type="application/json"
          href="https://translator.tools/agent-manifest.json"
          title="Translator agent manifest"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${bricolage.variable} ${instrumentSans.variable} antialiased`}
      >
        {gtmId ? (
          <script
            id="gtm-production-bootstrap"
            dangerouslySetInnerHTML={{
              __html: createGtmProductionBootstrap(gtmId),
            }}
          />
        ) : null}
        <script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(organizationStructuredData),
          }}
        />
        <script
          id="structured-data-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(websiteStructuredData(isStage5)),
          }}
        />
        {children}
        {gtmId ? <AnalyticsConsent /> : null}
      </body>
    </html>
  );
}
