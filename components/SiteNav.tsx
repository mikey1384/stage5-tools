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
    <header className="pb-7 pt-7">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-3">
          <Link
            href={homeHref}
            className="group flex items-baseline gap-2 text-white"
          >
            <span className="font-[var(--font-montserrat)] text-xl font-bold lowercase tracking-[-0.045em]">
              translator
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 transition group-hover:text-white/60">
              by Stage5
            </span>
          </Link>
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageMenu />
            <NavDownloadLink
              href={downloadHref}
              className="border border-[#a9bfff] bg-[#a9bfff] px-4 py-2 text-xs font-semibold text-black transition hover:border-white hover:bg-white"
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
            className="border border-[#a9bfff] bg-[#a9bfff] px-5 py-2.5 text-xs font-semibold text-black transition hover:border-white hover:bg-white"
          >
            {t("navDownload", locale)}
          </NavDownloadLink>
        </div>
      </div>
    </header>
  );
}
