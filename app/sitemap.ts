import type { MetadataRoute } from "next";

const BASE_URL = "https://translator.tools";

type ChangeFreq = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

type RouteDef = {
  path: string;
  priority: number;
  changeFrequency: ChangeFreq;
};

const languageSlugs = [
  "spanish",
  "korean",
  "japanese",
  "chinese",
  "french",
  "german",
  "portuguese",
];

const routes: RouteDef[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/video-downloader", priority: 0.9, changeFrequency: "weekly" },
  { path: "/subtitle-editor", priority: 0.9, changeFrequency: "weekly" },
  { path: "/translate", priority: 0.9, changeFrequency: "weekly" },
  ...languageSlugs.map((slug) => ({
    path: `/translate/${slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  })),
  { path: "/pricing", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.5, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.5, changeFrequency: "yearly" },
];

function absoluteUrl(path: string): string {
  return new URL(path, BASE_URL).toString();
}

function koreanPathFor(path: string): string {
  return path === "/" ? "/ko" : `/ko${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap((route) => {
    const englishUrl = absoluteUrl(route.path);
    const koreanUrl = absoluteUrl(koreanPathFor(route.path));
    const languages: Record<string, string> = {
      "x-default": englishUrl,
      en: englishUrl,
      ko: koreanUrl,
    };

    const shared = {
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages,
      },
    };

    return [
      {
        url: englishUrl,
        ...shared,
      },
      {
        url: koreanUrl,
        ...shared,
      },
    ];
  });
}
