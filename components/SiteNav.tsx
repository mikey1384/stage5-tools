import { canonicalSiteUrl, type Site } from "../lib/site-routing";
import Link from "./PolicySafeLink";
import { t, Locale } from "../lib/strings";
import { localizePathForLocale } from "../lib/locale-routing";
import { LanguageMenu } from "./LanguageMenu";
import { NavDownloadLink } from "./NavDownloadLink";
import { Stage5Brand } from "./Stage5Brand";
import { SiteNavLinks } from "./SiteNavLinks";
import { demoDownloadCopy } from "../lib/demo-download-copy";

interface SiteNavProps {
  locale: Locale;
  supportedLocales?: readonly Locale[];
  site?: Site;
}

export function SiteNav({ locale, supportedLocales, site = "translator" }: SiteNavProps) {
  const homeHref = localizePathForLocale(locale, "/");
  const downloadHref = canonicalSiteUrl(localizePathForLocale(locale, "/#all-downloads"));
  const downloadLabel = site === "stage5" ? demoDownloadCopy[locale].translatorLabel : t("navDownload", locale);

  return (
    <header className="pb-7 pt-7">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {site === "stage5" ? <Stage5Brand href={homeHref} /> : <Link
            href={homeHref}
            className="group flex items-baseline gap-2 text-white"
          >
            <span className="font-[var(--font-montserrat)] text-xl font-bold lowercase tracking-[-0.045em]">
              translator
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/60 transition group-hover:text-white/80">
              by Stage5
            </span>
          </Link>}
          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <LanguageMenu supportedLocales={supportedLocales} />
            <NavDownloadLink
              href={downloadHref}
              className="border border-[#a9bfff] bg-[#a9bfff] px-4 py-2 text-xs font-semibold text-black transition hover:border-white hover:bg-white"
            >
              {downloadLabel}
            </NavDownloadLink>
          </div>
        </div>

        <SiteNavLinks locale={locale} site={site} />

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <LanguageMenu supportedLocales={supportedLocales} />
          <NavDownloadLink
            href={downloadHref}
            className="border border-[#a9bfff] bg-[#a9bfff] px-5 py-2.5 text-xs font-semibold text-black transition hover:border-white hover:bg-white"
          >
            {downloadLabel}
          </NavDownloadLink>
        </div>
      </div>
    </header>
  );
}
