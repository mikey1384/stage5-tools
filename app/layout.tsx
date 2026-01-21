import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { LanguageMenu } from "../components/LanguageMenu";
import { t } from "../lib/strings";
import { getLocale } from "../lib/get-locale";
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

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return {
    title: t("pageTitle", locale),
    description: t("subheadline", locale),
    openGraph: {
      title: t("headline", locale),
      description: t("subheadline", locale),
      url: "https://translator.tools",
      siteName: "Translator",
      locale,
      type: "website",
      images: [
        {
          url: "https://translator.tools/thumb.jpg",
          width: 1200,
          height: 630,
          alt: "Translator by Stage 5",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("headline", locale),
      description: t("subheadline", locale),
      images: ["https://translator.tools/thumb.jpg"],
    },
    alternates: {
      canonical: "/",
      languages: { ko: "/?l=ko", en: "/" },
    },
  } satisfies Metadata;
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Translator",
  description:
    "AI-powered video translation app. Download videos, transcribe with Whisper, translate to 30+ languages with GPT + Claude, and dub with AI voices.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "macOS, Windows",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <LanguageMenu />
        {children}
      </body>
    </html>
  );
}
