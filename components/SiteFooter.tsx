import Link from "next/link";
import { t, Locale } from "../lib/strings";

interface SiteFooterProps {
  locale: Locale;
}

export function SiteFooter({ locale }: SiteFooterProps) {
  const footerLinks = [
    {
      titleKey: "footerProduct" as const,
      links: [
        { labelKey: "navVideoDownloader" as const, href: "/video-downloader" },
        { labelKey: "navSubtitleEditor" as const, href: "/subtitle-editor" },
        { labelKey: "navAiTranslation" as const, href: "/translate" },
        { labelKey: "navPricing" as const, href: "/pricing" },
      ],
    },
    {
      titleKey: "footerResources" as const,
      links: [
        { labelKey: "footerSupportedLanguages" as const, href: "/translate" },
        { labelKey: "navFaq" as const, href: "/faq" },
        { labelKey: "navDownload" as const, href: "/#download" },
      ],
    },
    {
      titleKey: "footerCompany" as const,
      links: [
        { labelKey: "footerAboutStage5" as const, href: "/about" },
        { labelKey: "navContact" as const, href: "/contact" },
      ],
    },
    {
      titleKey: "footerLegal" as const,
      links: [
        { labelKey: "footerPrivacy" as const, href: "/privacy" },
        { labelKey: "footerTerms" as const, href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="border-t border-gray-800 py-16">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {footerLinks.map((group) => (
            <div key={group.titleKey}>
              <div className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                {t(group.titleKey, locale)}
              </div>
              <ul className="mt-4 space-y-3 text-sm text-gray-400">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition hover:text-white"
                    >
                      {t(link.labelKey, locale)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-gray-900 pt-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <span>{t("copyright", locale)}</span>
          <span>
            {t("footerQuestions", locale)}{" "}
            <a
              href="mailto:mikey@stage5.tools"
              className="text-gray-300 transition hover:text-white"
            >
              mikey@stage5.tools
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
