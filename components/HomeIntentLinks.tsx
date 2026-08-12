"use client";

import Link from "next/link";
import {
  createHomeLandingIntentEvent,
  type LandingIntentDestination,
} from "../lib/analytics-events";
import { trackLandingIntent } from "../lib/analytics";

type HomeIntentLink = {
  destination: LandingIntentDestination;
  href: string;
  label: string;
};

export function HomeIntentLinks({ links }: { links: readonly HomeIntentLink[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2" data-landing-intent-links>
      {links.map((link) => (
        <Link
          key={link.destination}
          href={link.href}
          onClick={() =>
            trackLandingIntent(
              createHomeLandingIntentEvent(
                link.destination,
                window.location.pathname,
              ),
            )
          }
          className="group inline-flex items-center gap-2 rounded-full border border-white/16 px-3 py-2 text-xs font-semibold text-white/62 transition hover:border-[#a9bfff]/60 hover:bg-[#a9bfff]/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a9bfff]"
        >
          <span>{link.label}</span>
          <span
            aria-hidden="true"
            className="text-[#a9bfff] transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </Link>
      ))}
    </div>
  );
}
