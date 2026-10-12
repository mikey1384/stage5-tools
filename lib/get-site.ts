import { headers } from "next/headers";
import { siteForHostname } from "./site-routing";

export async function getSite() {
  return siteForHostname((await headers()).get("host") ?? "");
}

export async function getRequestOrigin() {
  const host = (await headers()).get("host") ?? "stage5.tools";
  const loopback = /^(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/.test(host);
  return new URL(`${loopback ? "http" : "https"}://${host}`).origin;
}
