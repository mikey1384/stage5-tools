"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes } from "react";
import { isPrivacyPathname, isPrivateEditorPathname } from "../lib/third-party-script-bootstrap";

// Full navigation gives policy pages a fresh document without inherited GTM code.
// Leaving the policy also reloads the normal site's consent/analytics bootstrap.
export default function PolicySafeLink({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const pathname = usePathname();
  const destination = new URL(href, "https://translator.tools").pathname;
  return isPrivacyPathname(pathname) || isPrivacyPathname(destination) || isPrivateEditorPathname(pathname) || isPrivateEditorPathname(destination)
    ? <a href={href} {...props} />
    : <Link href={href} {...props} />;
}
