"use client";

import type { MouseEvent, ReactNode } from "react";

interface NavDownloadLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

export function NavDownloadLink({
  href,
  className = "",
  children,
}: NavDownloadLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById("all-downloads");
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    if (window.location.hash !== "#all-downloads") {
      window.history.replaceState(null, "", "#all-downloads");
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
