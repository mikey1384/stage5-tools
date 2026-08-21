import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { buildMetadata } from "../../lib/seo";

const title = "Watch: Worked examples | Translator";
const description =
  "See how Translator helps you watch foreign-language videos with English subtitles. Worked examples from real interviews and content worth watching.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/watch",
  keywords: [
    "video translation examples",
    "Spanish interview with English subtitles",
    "watch foreign videos",
    "Translator examples",
    "subtitle translation workflow",
  ],
  locale: "en",
});

interface PostCard {
  slug: string;
  title: string;
  description: string;
  language: string;
  topic: string;
}

const posts: PostCard[] = [
  {
    slug: "ferran-adria-wild-project",
    title: "Ferran Adrià on The Wild Project",
    description:
      "The legendary El Bulli chef talks about creativity, craft, and building something that changes how people think about food.",
    language: "Spanish",
    topic: "Food & Craft",
  },
  {
    slug: "pique-la-resistencia",
    title: "Gerard Piqué on La Resistencia",
    description:
      "Barcelona defender invited himself onto Spanish late-night TV via Twitter. Most English speakers bounce off because it's in Spanish—they miss Broncano's crude opening, football talk, and the net worth comment that became a headline.",
    language: "Spanish",
    topic: "Sports",
  },
];

export default function WatchIndexPage() {
  const locale = "en" as const;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Watch" },
          ]}
        />

        <section className="pb-24 pt-10">
          <div className="max-w-4xl">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-200/80">
              Worked examples
            </div>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-7xl">
              Watch videos worth finding.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              These posts show how Translator helps you find and watch
              foreign-language videos that are worth your time. Each example
              walks through the real workflow: paste a URL, download the video,
              transcribe or translate it, and watch with subtitles you can
              edit.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/watch/${post.slug}`}
                className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-8 transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                  <span>{post.language}</span>
                  <span className="text-gray-700">·</span>
                  <span>{post.topic}</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-white group-hover:text-sky-200">
                  {post.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-gray-400">
                  {post.description}
                </p>
                <span className="mt-5 inline-block text-sm font-semibold text-gray-300 transition group-hover:text-white">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}
