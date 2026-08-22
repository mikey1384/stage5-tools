import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { ADSENSE_CLIENT_ID } from "../lib/adsense";
import { getLocale } from "../lib/get-locale";
import { serializeJsonLd } from "../lib/json-ld";
import { HOME_LOCALIZED_LOCALES } from "../lib/locales";
import { createGtmProductionBootstrap } from "../lib/third-party-script-bootstrap";
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

export const runtime = "edge";

export const metadata: Metadata = {
  metadataBase: new URL("https://translator.tools"),
  icons: {
    icon: "/translator-icon.png",
    apple: "/translator-icon.png",
  },
  other: {
    "google-adsense-account": ADSENSE_CLIENT_ID,
  },
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Stage5 Tools",
  url: "https://translator.tools",
  logo: "https://translator.tools/translator-icon.png",
  sameAs: ["https://github.com/mikey1384/translator"],
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Translator",
  url: "https://translator.tools",
  inLanguage: [...HOME_LOCALIZED_LOCALES],
  publisher: {
    "@type": "Organization",
    name: "Stage5 Tools",
    url: "https://translator.tools",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang={locale}>
      <head>
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="Translator summary for LLMs"
        />
        <link
          rel="alternate"
          type="application/json"
          href="/agent-manifest.json"
          title="Translator agent manifest"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
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
            __html: serializeJsonLd(websiteStructuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
