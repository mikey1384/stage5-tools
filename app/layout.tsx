import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import Script from "next/script";
import { getLocale } from "../lib/get-locale";
import { HOME_LOCALIZED_LOCALES } from "../lib/locales";
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
};

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Stage5 Tools",
  url: "https://translator.tools",
  logo: "https://translator.tools/icon.svg",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        {gtmId ? (
          <>
            <Script id="gtm-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; window.dataLayer.push({"gtm.start": new Date().getTime(), event: "gtm.js"});`}
            </Script>
            <Script
              id="gtm-src"
              src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
              strategy="afterInteractive"
            />
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
                title="Google Tag Manager"
              />
            </noscript>
          </>
        ) : null}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        <Script
          id="structured-data-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
