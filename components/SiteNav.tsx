import Link from "next/link";
import { t, Locale } from "../lib/strings";

interface SiteNavProps {
  locale: Locale;
}

export function SiteNav({ locale }: SiteNavProps) {
  const primaryLinks = [
    { labelKey: "navVideoDownloader" as const, href: "/video-downloader" },
    { labelKey: "navSubtitleEditor" as const, href: "/subtitle-editor" },
    { labelKey: "navAiTranslation" as const, href: "/translate" },
    { labelKey: "navPricing" as const, href: "/pricing" },
    { labelKey: "navFaq" as const, href: "/faq" },
  ];

  const secondaryLinks = [
    { labelKey: "navAbout" as const, href: "/about" },
    { labelKey: "navContact" as const, href: "/contact" },
  ];

  return (
    <header className="pt-10 pb-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-montserrat font-semibold tracking-tight text-white"
          >
            Translator
          </Link>
          <Link
            href="/#download"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-200 lg:hidden"
          >
            {t("navDownload", locale)}
          </Link>
        </div>

        <nav className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {t(link.labelKey, locale)}
            </Link>
          ))}
          <span className="hidden lg:inline text-gray-700">•</span>
          {secondaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {t(link.labelKey, locale)}
            </Link>
          ))}
        </nav>

        <Link
          href="/#download"
          className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-200 lg:inline-flex"
        >
          {t("navDownload", locale)}
        </Link>
      </div>
    </header>
  );
}
