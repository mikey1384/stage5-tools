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
