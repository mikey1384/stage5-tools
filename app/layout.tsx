import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageMenu } from "../components/LanguageMenu";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Translator",
  description:
    "Add AI-translated subtitles to any video. Download from hundreds of platforms, translate to any language, and merge subtitles with precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageMenu />
        {children}
      </body>
    </html>
  );
}
