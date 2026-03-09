"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { englishPathFor, localizePathForLocale } from "../lib/locales";
import { normalizePathname } from "../lib/pathname-utils";
import { t, type Locale } from "../lib/strings";

type NavLink = {
  labelKey:
    | "navVideoDiscovery"
    | "navDubbing"
    | "navVideoDownloader"
    | "navSubtitleEditor"
    | "navAiTranslation"
    | "navPricing"
    | "navFaq"
    | "navAbout"
    | "navContact";
  href: string;
  match?: "exact" | "prefix";
};

const primaryLinks: NavLink[] = [
  { labelKey: "navVideoDiscovery", href: "/video-discovery", match: "exact" },
  { labelKey: "navDubbing", href: "/dubbing", match: "exact" },
  { labelKey: "navVideoDownloader", href: "/video-downloader", match: "exact" },
  { labelKey: "navSubtitleEditor", href: "/subtitle-editor", match: "exact" },
  { labelKey: "navAiTranslation", href: "/translate", match: "prefix" },
  { labelKey: "navPricing", href: "/pricing", match: "exact" },
  { labelKey: "navFaq", href: "/faq", match: "exact" },
];

const secondaryLinks: NavLink[] = [
  { labelKey: "navAbout", href: "/about", match: "exact" },
  { labelKey: "navContact", href: "/contact", match: "exact" },
];

function isActiveLink(currentPath: string, link: NavLink): boolean {
  if (link.match === "prefix") {
    return currentPath === link.href || currentPath.startsWith(`${link.href}/`);
  }

  return currentPath === link.href;
}

function NavItem({
  locale,
  currentPath,
  link,
}: {
  locale: Locale;
  currentPath: string;
  link: NavLink;
}) {
  const isActive = isActiveLink(currentPath, link);

  return (
    <Link
      href={localizePathForLocale(locale, link.href)}
      aria-current={isActive ? "page" : undefined}
      className={
        isActive
          ? "text-white"
          : "text-gray-400 transition hover:text-white"
      }
    >
      {t(link.labelKey, locale)}
    </Link>
  );
}

export function SiteNavLinks({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const currentPath = normalizePathname(englishPathFor(pathname));

  return (
    <nav className="flex flex-wrap items-center gap-4 text-sm">
      {primaryLinks.map((link) => (
        <NavItem
          key={link.href}
          locale={locale}
          currentPath={currentPath}
          link={link}
        />
      ))}
      <span className="hidden text-gray-700 lg:inline">•</span>
      {secondaryLinks.map((link) => (
        <NavItem
          key={link.href}
          locale={locale}
          currentPath={currentPath}
          link={link}
        />
      ))}
    </nav>
  );
}
