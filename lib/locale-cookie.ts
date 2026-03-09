import { isLocale, type Locale } from "./locales";

export function resolveLocaleCookieDomain(
  hostname: string | null | undefined
): string | undefined {
  const host = String(hostname || "").toLowerCase();
  if (!host) return undefined;

  if (host === "translator.tools" || host.endsWith(".translator.tools")) {
    return "translator.tools";
  }

  if (host === "stage5.tools" || host.endsWith(".stage5.tools")) {
    return "stage5.tools";
  }

  return undefined;
}

export function parseLocaleCookie(
  cookieHeader: string | null | undefined
): Locale | undefined {
  if (!cookieHeader) return undefined;

  let resolved: Locale | undefined;
  for (const part of cookieHeader.split(";")) {
    const [name, ...valueParts] = part.trim().split("=");
    if (name !== "lang") continue;

    const rawValue = valueParts.join("=").trim();
    let value = rawValue;
    try {
      value = decodeURIComponent(rawValue);
    } catch {
      // Ignore malformed cookie encodings from clients/extensions.
      continue;
    }

    if (isLocale(value)) {
      // Prefer the right-most cookie value when duplicates exist.
      resolved = value;
    }
  }

  return resolved;
}
