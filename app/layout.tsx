import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { LanguageMenu } from "../components/LanguageMenu";
import { t } from "../lib/strings";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const search = headersList.get("x-nextjs-rewrite") ?? "";
  const locale = (new URLSearchParams(search).get("l") as "en" | "ko") ?? "en";

  return {
    title: t("headline", locale),
    description: t("subheadline", locale),
    openGraph: {
      title: t("headline", locale),
      description: t("subheadline", locale),
      url: "https://translator.tools",
      siteName: "Translator",
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: t("headline", locale),
      description: t("subheadline", locale),
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
  const headersList = await headers();
  const search = headersList.get("x-nextjs-rewrite") ?? "";
  const locale = (new URLSearchParams(search).get("l") as "en" | "ko") ?? "en";

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
