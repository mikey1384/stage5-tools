"use client";

import { canonicalSiteUrl, type Site } from "../lib/site-routing";
import Link from "./PolicySafeLink";
import { usePathname } from "next/navigation";
import { englishPathFor, localizePathForLocale } from "../lib/locales";
import { normalizePathname } from "../lib/pathname-utils";
import { t, type Locale } from "../lib/interface-strings";

type NavLink = {
  labelKey:
    | "navWatch"
    | "navEcho"
    | "navVideoDiscovery"
    | "navDubbing"
    | "navVideoDownloader"
    | "navSubtitleEditor"
    | "navAiTranslation"
    | "navPricing"
    | "navFaq"
    | "navOpenSource"
    | "navAgents"
    | "navAbout"
    | "navContact";
  href: string;
  match?: "exact" | "prefix";
};

const primaryLinks: NavLink[] = [
  { labelKey: "navVideoDiscovery", href: "/video-discovery", match: "exact" },
  { labelKey: "navDubbing", href: "/dubbing", match: "exact" },
  { labelKey: "navSubtitleEditor", href: "/subtitle-editor", match: "exact" },
  { labelKey: "navAiTranslation", href: "/translate", match: "prefix" },
  { labelKey: "navPricing", href: "/pricing", match: "exact" },
];

const secondaryLinks: NavLink[] = [
  { labelKey: "navAgents", href: "/agents", match: "exact" },
  { labelKey: "navOpenSource", href: "/open-source", match: "exact" },
  { labelKey: "navFaq", href: "/faq", match: "exact" },
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
      href={canonicalSiteUrl(localizePathForLocale(locale, link.href))}
      aria-current={isActive ? "page" : undefined}
      className={
        isActive
          ? "text-white underline decoration-[#ff75ac] decoration-2 underline-offset-8"
          : "text-white/48 transition hover:text-white"
      }
    >
      {t(link.labelKey, locale)}
    </Link>
  );
}

export function SiteNavLinks({ locale, site = "translator" }: { locale: Locale; site?: Site }) {
  const pathname = usePathname();
  const currentPath = normalizePathname(englishPathFor(pathname));

  return (
    <nav className="flex items-center gap-x-5 overflow-x-auto whitespace-nowrap pb-1 text-xs font-medium lg:flex-wrap lg:gap-y-3 lg:overflow-visible lg:pb-0">
      {(site === "stage5" ? [{ labelKey: "navWatch", href: "/watch", match: "prefix" }, { labelKey: "navEcho", href: "/echo", match: "exact" }] as NavLink[] : primaryLinks).map((link) => (
        <NavItem
          key={link.href}
          locale={locale}
          currentPath={currentPath}
          link={link}
        />
      ))}
      <span className="hidden text-white/20 lg:inline">/</span>
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
