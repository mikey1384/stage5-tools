"use client";

import type { ReactNode } from "react";
import { trackGitHubClick } from "../lib/analytics";
import { TRANSLATOR_REPOSITORY_URL } from "../lib/open-source";

type GitHubRepositoryLinkProps = {
  children: ReactNode;
  className?: string;
  label: string;
  placement: string;
};

export function GitHubRepositoryLink({
  children,
  className,
  label,
  placement,
}: GitHubRepositoryLinkProps) {
  return (
    <a
      href={TRANSLATOR_REPOSITORY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() =>
        trackGitHubClick({
          event: "github_repository_click",
          link_label: label,
          page_path: window.location.pathname,
          placement,
          repository_url: TRANSLATOR_REPOSITORY_URL,
        })
      }
    >
      {children}
    </a>
  );
}
