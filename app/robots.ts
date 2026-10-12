import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getSite } from "../lib/get-site";
import { STAGE5_ORIGIN, TRANSLATOR_ORIGIN } from "../lib/site-routing";
import { isProductionHostname } from "../lib/third-party-script-bootstrap";

export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = ((await headers()).get("host") ?? "").split(":")[0];
  if (!isProductionHostname(host)) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${(await getSite()) === "stage5" ? STAGE5_ORIGIN : TRANSLATOR_ORIGIN}/sitemap.xml`,
  };
}
