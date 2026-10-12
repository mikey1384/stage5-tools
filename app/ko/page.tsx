import type { Metadata } from "next";
import { getSite } from "../../lib/get-site";
import { getStage5HomeMetadata } from "../../components/Stage5Home";
import Home from "../(home)/page";
import { getHomeMetadata } from "../(home)/home-copy";

const locale = "ko" as const;

export async function generateMetadata(): Promise<Metadata> {
  return (await getSite()) === "stage5" ? getStage5HomeMetadata(locale) : getHomeMetadata(locale);
}

export default async function KoreanHomePage() {
  return <Home searchParams={Promise.resolve({ l: locale })} />;
}
