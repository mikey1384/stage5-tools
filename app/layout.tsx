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
    metadataBase: new URL("https://translator.tools"),
    title: t("pageTitle", locale),
    description: t("subheadline", locale),
    keywords: [
      "AI video translator",
      "video translation software",
      "YouTube subtitle translator",
      "add subtitles to video",
      "translate YouTube video",
      "video subtitle editor",
      "SRT translator",
      "subtitle editor",
      "subtitle translation",
      "Translator app",
    ],
    openGraph: {
      title: t("pageTitle", locale),
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
      title: t("pageTitle", locale),
      description: t("subheadline", locale),
      images: ["https://translator.tools/thumb.jpg"],
    },
    alternates: {
      canonical: "https://translator.tools/",
      languages: { ko: "/?l=ko", en: "/" },
    },
  } satisfies Metadata;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <LanguageMenu />
        {children}
      </body>
    </html>
  );
}
