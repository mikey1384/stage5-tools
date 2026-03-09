import Link from "next/link";
import { t, Locale } from "../lib/strings";
import { localizePathForLocale } from "../lib/locale-routing";
import { LanguageMenu } from "./LanguageMenu";
import { NavDownloadLink } from "./NavDownloadLink";
import { SiteNavLinks } from "./SiteNavLinks";

interface SiteNavProps {
  locale: Locale;
}

export function SiteNav({ locale }: SiteNavProps) {
  const homeHref = localizePathForLocale(locale, "/");
  const downloadHref = localizePathForLocale(locale, "/#all-downloads");

  return (
    <header className="pt-10 pb-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-3">
          <Link
            href={homeHref}
            className="text-xl font-montserrat font-semibold tracking-tight text-white"
          >
            Stage5 Translator
          </Link>
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageMenu />
            <NavDownloadLink
              href={downloadHref}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              {t("navDownload", locale)}
            </NavDownloadLink>
          </div>
        </div>

        <SiteNavLinks locale={locale} />

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <LanguageMenu />
          <NavDownloadLink
            href={downloadHref}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            {t("navDownload", locale)}
          </NavDownloadLink>
        </div>
      </div>
    </header>
  );
}
