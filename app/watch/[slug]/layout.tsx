import type { ReactNode } from "react";

export default function WatchArticleLayout({ children }: { children: ReactNode }) {
  // AdSense belongs to the resolved page; this layout also wraps missing slugs.
  return children;
}
