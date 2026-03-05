import type { Locale } from "./strings";

export function homeHrefForLocale(locale: Locale): "/" | "/ko" {
  return locale === "ko" ? "/ko" : "/";
}

export function homeSectionHrefForLocale(
  locale: Locale,
  hash: string
): string {
  const section = hash.startsWith("#") ? hash : `#${hash}`;
  return `${homeHrefForLocale(locale)}${section}`;
}

export function localizePathForLocale(locale: Locale, href: string): string {
  if (!href.startsWith("/")) return href;

  const splitIndex = href.search(/[?#]/);
  const basePath =
    splitIndex === -1 ? href : href.slice(0, splitIndex);
  const suffix = splitIndex === -1 ? "" : href.slice(splitIndex);

  let localizedPath = basePath;
  if (locale === "ko") {
    if (basePath === "/") {
      localizedPath = "/ko";
    } else {
      localizedPath =
        basePath === "/ko" || basePath.startsWith("/ko/")
          ? basePath
          : `/ko${basePath}`;
    }
  } else {
    localizedPath =
      basePath === "/ko"
        ? "/"
        : basePath.startsWith("/ko/")
          ? basePath.slice(3)
          : basePath;
  }

  return `${localizedPath}${suffix}`;
}
