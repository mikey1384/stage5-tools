import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default function nextConfig(phase: string): NextConfig {
  return {
    // Keep canonical, locale and social metadata in the initial document head.
    htmlLimitedBots: /.*/,
    // Keep dev and production builds isolated so a local `next build`
    // cannot invalidate manifests for a running `next dev` process.
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  };
}
