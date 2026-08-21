import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import { FeatureDownloadCta } from "../../../components/FeatureDownloadCta";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteNav } from "../../../components/SiteNav";
import { buildMetadata } from "../../../lib/seo";
import { YouTubeDemo } from "./YouTubeDemo";

const title =
  "Watch Ferran Adrià's Wild Project Interview with English Subtitles | Translator";
const description =
  "The legendary El Bulli chef Ferran Adrià talks creativity, craft, and food as art in this Spanish-language interview. Learn how to watch it with English subtitles using Translator.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/watch/ferran-adria-wild-project",
  keywords: [
    "Ferran Adrià interview English subtitles",
    "Wild Project Ferran Adrià",
    "watch Spanish interview English",
    "El Bulli chef interview",
    "translate Spanish video to English",
    "Jordi Wild Ferran Adrià",
  ],
  locale: "en",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Watch Ferran Adrià's Wild Project Interview with English Subtitles",
  description,
  url: "https://translator.tools/watch/ferran-adria-wild-project",
  datePublished: "2026-08-21",
  author: {
    "@type": "Organization",
    name: "Stage5 Tools",
  },
  publisher: {
    "@type": "Organization",
    name: "Stage5 Tools",
    url: "https://translator.tools",
  },
  about: [
    {
      "@type": "Person",
      name: "Ferran Adrià",
      description: "Chef and founder of El Bulli",
    },
    {
      "@type": "VideoObject",
      name: "The Wild Project #287 - Ferran Adrià",
      description:
        "Interview with legendary chef Ferran Adrià about creativity, craft, and food as art",
      uploadDate: "2024-05-14",
      contentUrl: "https://www.youtube.com/watch?v=xzSOmaZGtiI",
      embedUrl: "https://www.youtube.com/embed/xzSOmaZGtiI",
      inLanguage: "es",
    },
  ],
};

export default function FerranAdriaWildProjectPage() {
  const locale = "en" as const;

  return (
    <main className="min-h-screen bg-black text-white">
      <Script
        id="article-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container mx-auto px-6">
        <SiteNav locale={locale} />

        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Watch", href: "/watch" },
            { label: "Ferran Adrià on The Wild Project" },
          ]}
        />

        <article className="pb-24">
          <header className="mx-auto max-w-4xl pb-12 pt-10">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              <span>Spanish</span>
              <span className="text-gray-700">·</span>
              <span>Food & Craft</span>
              <span className="text-gray-700">·</span>
              <span>Wild Project #287</span>
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Watch Ferran Adrià Talk Creativity and Craft
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              The legendary El Bulli chef discusses what it means to build
              something that changes how people think about food. This
              Spanish-language interview is worth watching—even if you
              don&apos;t speak Spanish.
            </p>
          </header>

          <div className="mx-auto max-w-4xl">
            <YouTubeDemo locale={locale} />

            <div className="prose prose-invert mt-12 max-w-none">
              <h2 className="text-3xl font-semibold text-white">
                It&apos;s in Spanish
              </h2>
              <p className="text-lg leading-8 text-gray-300">
                Ferran Adrià ran El Bulli, the restaurant that redefined what
                food could be. For years, El Bulli was considered the best
                restaurant in the world—not just for the dishes, but for the
                ideas behind them. Adrià treated cooking like research, asking
                questions most chefs never think to ask.
              </p>
              <p className="text-lg leading-8 text-gray-300">
                In this interview with Jordi Wild on{" "}
                <em>The Wild Project</em>, Adrià talks about creativity, craft,
                and what it takes to build something that matters. It&apos;s
                not a cooking tutorial. It&apos;s a conversation about why
                someone dedicates their life to pushing a craft forward, and
                what happens when that craft becomes art.
              </p>
              <p className="text-lg leading-8 text-gray-300">
                The interview is in Spanish, which means English speakers
                bounce—and miss one of the best food conversations available
                on YouTube.
              </p>

              <h2 className="mt-12 text-3xl font-semibold text-white">
                How to watch the full interview with English subtitles
              </h2>
              <p className="text-lg leading-8 text-gray-300">
                Translator is a desktop app that lets you download videos, add
                translated subtitles, and watch them in your language.
                Here&apos;s the workflow:
              </p>

              <ol className="mt-6 space-y-4 text-lg leading-8 text-gray-300">
                <li>
                  <strong className="text-white">
                    Paste the YouTube URL
                  </strong>{" "}
                  — Copy the video link and paste it into Translator&apos;s
                  download field.
                </li>
                <li>
                  <strong className="text-white">Download the video</strong> —
                  Translator pulls down the video and any available captions.
                  This is free and happens on your machine.
                </li>
                <li>
                  <strong className="text-white">
                    Transcribe or translate
                  </strong>{" "}
                  — If the video doesn&apos;t have Spanish captions, you can
                  transcribe it using AI. If it does, you can translate those
                  captions to English. You can use Stage5 credits (pay per
                  minute) or bring your own API key from OpenAI or Anthropic.
                </li>
                <li>
                  <strong className="text-white">
                    Watch with subtitles you control
                  </strong>{" "}
                  — The app plays the video with your translated subtitles. You
                  can edit the timing, fix translations, choose subtitle
                  styles, and export the final SRT file.
                </li>
              </ol>

              <p className="mt-8 text-lg leading-8 text-gray-300">
                The video stays on your computer. You&apos;re not streaming it
                through a web app or uploading it to someone else&apos;s
                server. Translator works locally.
              </p>

              <div className="mt-12 rounded-2xl border border-sky-500/20 bg-sky-500/5 p-8">
                <h3 className="text-xl font-semibold text-white">
                  What&apos;s free, what&apos;s paid
                </h3>
                <ul className="mt-4 space-y-3 text-base leading-7 text-gray-300">
                  <li>
                    <strong className="text-white">Free:</strong> Downloading
                    videos, managing your library, editing subtitles manually,
                    and exporting SRT files.
                  </li>
                  <li>
                    <strong className="text-white">Paid:</strong> AI
                    transcription and translation. You can use Stage5 credits
                    (example: $1 for ~50 minutes, $10 for ~18 hours) or unlock
                    BYO once for $10 and bring your own API key from OpenAI or
                    Anthropic to pay them directly.
                  </li>
                </ul>
              </div>

              <h2 className="mt-12 text-3xl font-semibold text-white">
                What you&apos;ll hear
              </h2>
              <p className="text-lg leading-8 text-gray-300">
                Adrià talks about the difference between cooking and creating,
                why El Bulli closed at its peak, and what it means to treat
                food as something more than fuel. He explains how his team
                approached the creative process—not as individual genius, but
                as structured research that happened to produce dishes.
              </p>
              <p className="text-lg leading-8 text-gray-300">
                Jordi Wild is one of Spain&apos;s most-watched podcasters, and
                he gives Adrià room to think through his answers. The
                conversation moves between philosophy, business, craft, and
                legacy. If you&apos;ve ever read about El Bulli or seen photos
                of the dishes, this is the interview that explains what was
                actually happening in that kitchen.
              </p>

              <p className="mt-12 text-lg leading-8 text-gray-300">
                YouTube&apos;s auto-generated English subtitles for foreign
                videos are often incomplete or missing entirely. Even when they
                exist, they&apos;re not always accurate. Translator gives you
                control: you decide which translation model to use, you can
                edit the results line by line, and you own the final subtitle
                file.
              </p>
              <p className="text-lg leading-8 text-gray-300">
                This isn&apos;t about replacing your browser&apos;s
                auto-translate feature. This is for videos you actually want to
                watch carefully—interviews, lectures, documentaries—where the
                accuracy of the subtitles and your ability to edit them
                matters.
              </p>
              <p className="text-lg leading-8 text-gray-300">
                If you&apos;ve been clicking through Spanish food content,
                Brazilian design talks, or Korean film criticism and wishing
                you could actually understand what&apos;s being said,
                Translator is built for that.
              </p>
            </div>

            <div className="mt-16 border-t border-white/10 pt-12">
              <h2 className="text-3xl font-semibold text-white">
                Download Translator
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Translator works on macOS and Windows. Download it, paste this
                video&apos;s URL, and see how the workflow feels. The download
                and subtitle editor are free to use.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/es/video-downloader"
                  className="inline-flex items-center justify-center rounded-xl border border-sky-500/50 bg-sky-500/10 px-6 py-3 text-base font-semibold text-sky-200 transition hover:border-sky-400 hover:bg-sky-500/20"
                >
                  Learn about video downloading →
                </Link>
              </div>
              <FeatureDownloadCta
                locale={locale}
                note="Download and subtitle editing are free. AI transcription and translation require Stage5 credits or your own API key."
                align="start"
                className="mt-8"
              />
            </div>

            <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <h3 className="text-xl font-semibold text-white">
                About this post
              </h3>
              <p className="mt-3 text-base leading-7 text-gray-400">
                This is a worked example showing how Translator helps you watch
                foreign-language videos. The YouTube video is embedded directly
                from the official source. We have not transcribed or translated
                this video yet—this post explains the workflow so you can do it
                yourself.
              </p>
              <p className="mt-3 text-base leading-7 text-gray-400">
                Source: <em>The Wild Project</em> #287, hosted by Jordi Wild,
                featuring Ferran Adrià. Published May 14, 2024. Video is in
                Spanish.
              </p>
            </div>
          </div>
        </article>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}
