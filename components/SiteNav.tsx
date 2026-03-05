import Link from "next/link";
import { t, Locale } from "../lib/strings";
import { localizePathForLocale } from "../lib/locale-routing";
import { LanguageMenu } from "./LanguageMenu";

interface SiteNavProps {
  locale: Locale;
}

export function SiteNav({ locale }: SiteNavProps) {
  const homeHref = localizePathForLocale(locale, "/");
  const downloadHref = localizePathForLocale(locale, "/#download");

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
        <div className="flex items-center justify-between gap-3">
          <Link
            href={homeHref}
            className="text-xl font-montserrat font-semibold tracking-tight text-white"
          >
            Translator
          </Link>
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageMenu />
            <Link
              href={downloadHref}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              {t("navDownload", locale)}
            </Link>
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={localizePathForLocale(locale, link.href)}
              className="transition hover:text-white"
            >
              {t(link.labelKey, locale)}
            </Link>
          ))}
          <span className="hidden lg:inline text-gray-700">•</span>
          {secondaryLinks.map((link) => (
            <Link
              key={link.href}
              href={localizePathForLocale(locale, link.href)}
              className="transition hover:text-white"
            >
              {t(link.labelKey, locale)}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <LanguageMenu />
          <Link
            href={downloadHref}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            {t("navDownload", locale)}
          </Link>
        </div>
      </div>
    </header>
  );
}
