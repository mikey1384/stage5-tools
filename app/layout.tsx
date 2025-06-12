import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const runtime = "edge";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return {
    title: t("headline", locale),
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageMenu />
        {children}
      </body>
    </html>
  );
}
