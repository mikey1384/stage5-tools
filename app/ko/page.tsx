import type { Metadata } from "next";
import Home from "../(home)/page";
import { getHomeMetadata } from "../(home)/home-copy";

const locale = "ko" as const;

export const metadata: Metadata = getHomeMetadata(locale);

export default async function KoreanHomePage() {
  return <Home searchParams={Promise.resolve({ l: locale })} />;
}
