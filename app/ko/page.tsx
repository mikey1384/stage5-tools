import type { Metadata } from "next";
import Home, { getHomeMetadata } from "../(home)/page";

const locale = "ko" as const;

export const metadata: Metadata = getHomeMetadata(locale);

export default async function KoreanHomePage() {
  return <Home searchParams={Promise.resolve({ l: locale })} />;
}
