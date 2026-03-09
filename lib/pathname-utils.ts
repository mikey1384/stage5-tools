export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") return "/";

  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed.length > 0 ? trimmed : "/";
}
