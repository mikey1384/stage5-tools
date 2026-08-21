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
  "Watch Alejandro G. Calvo on The Wild Project with English Subtitles | Translator";
const description =
  "Spanish film critic Alejandro G. Calvo discusses the TOP 60 películas on The Wild Project with Jordi Wild. A Spanish-language conversation about cinema that most English speakers miss. Learn how to watch it with English subtitles using Translator.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/watch/calvo-wild-project",
  keywords: [
    "Alejandro G. Calvo interview English subtitles",
    "Wild Project Calvo",
    "watch Spanish interview English",
    "TOP 60 películas",
    "translate Spanish video to English",
    "Spanish film criticism English",
  ],
  locale: "en",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Watch Alejandro G. Calvo on The Wild Project with English Subtitles",
  description,
  url: "https://translator.tools/watch/calvo-wild-project",
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
      name: "Alejandro G. Calvo",
      description: "Spanish film critic",
    },
    {
      "@type": "VideoObject",
      name: "The Wild Project #376 — Alejandro G. Calvo & J. Maquiavello, TOP 60 películas",
      description:
        "Interview with Spanish film critic Alejandro G. Calvo about the TOP 60 películas",
      contentUrl: "https://www.youtube.com/watch?v=Wk_4tQOvdWU",
      embedUrl: "https://www.youtube.com/embed/Wk_4tQOvdWU",
      inLanguage: "es",
    },
  ],
};

export default async function CalvoWildProjectPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const locale = "en" as const;
  const params = await searchParams;
  const rawLang = typeof params.lang === "string" ? params.lang : undefined;
  const initialLang =
    rawLang === "ko" || rawLang === "pt" ? rawLang : ("en" as const);

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
            { label: "Alejandro G. Calvo on The Wild Project" },
          ]}
        />

        <article className="pb-24">
          <header className="mx-auto max-w-4xl pb-12 pt-10">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              <span>Spanish</span>
              <span className="text-gray-700">·</span>
              <span>Film</span>
              <span className="text-gray-700">·</span>
              <span>Wild Project #376</span>
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Watch Spanish Film Critic Alejandro G. Calvo Talk Movies
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              &ldquo;The other day I was in Mexico for a few weeks and I had an
              amazing time.&rdquo; Spanish film critic Alejandro G. Calvo sits
              down with Jordi Wild to discuss the TOP 60 películas. A
              Spanish-language conversation about cinema that English speakers
              rarely get to hear.
            </p>
          </header>

          <div className="mx-auto max-w-4xl">
            <YouTubeDemo locale={locale} initialLang={initialLang} />

            <div className="prose prose-invert mt-12 max-w-none">
              <h2 className="text-3xl font-semibold text-white">
                Film criticism in Spanish
              </h2>
              <p className="text-lg leading-8 text-gray-300">
                Alejandro G. Calvo is a Spanish film critic who appears
                regularly on <em>The Wild Project</em>, Jordi Wild&apos;s
                podcast. In this episode, Calvo and J. Maquiavello discuss the
                TOP 60 películas—a list of films that shaped how they think
                about cinema.
              </p>
              <p className="text-lg leading-8 text-gray-300">
                The conversation is in Spanish, which means English speakers who
                follow film criticism or care about international cinema
                perspectives bounce—and miss a conversation that covers films,
                directors, and cinematic language that crosses borders.
              </p>
              <p className="text-lg leading-8 text-gray-300">
                <em>The Wild Project</em> is one of Spain&apos;s most-watched
                podcasts. Wild brings on guests from different fields—chefs,
                athletes, scientists, artists, critics—and gives them space to
                talk about their work. This episode with Calvo is about movies,
                but it&apos;s also about why someone dedicates their life to
                watching films and thinking about what makes them work.
              </p>

              <h2 className="mt-12 text-3xl font-semibold text-white">
                How to watch the full episode with English subtitles
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
                Spanish film content in English
              </h2>
              <p className="text-lg leading-8 text-gray-300">
                Spain produces film criticism, director interviews, and cinema
                discussions that don&apos;t always make it to English-speaking
                audiences. YouTube hosts thousands of Spanish-language film
                conversations, but most don&apos;t have English subtitles, and
                YouTube&apos;s auto-generated translations are often incomplete
                or missing for older videos.
              </p>
              <p className="text-lg leading-8 text-gray-300">
                Translator gives you control: choose your translation model,
                edit the subtitles line by line, adjust timing if the captions
                drift, and export the final file. If you&apos;ve been clicking
                through Spanish film content, Brazilian documentaries, or Korean
                variety shows and wishing you could follow along without
                guessing, this is what the app does.
              </p>
              <p className="text-lg leading-8 text-gray-300">
                This isn&apos;t about replacing your browser&apos;s
                auto-translate feature. This is for videos you actually want to
                sit down and watch—where the accuracy of the subtitles and your
                ability to control them matters.
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
                The YouTube video is embedded directly from the official source.
                The first 30 seconds of captions shown in the player can be
                displayed in English, Korean (한국어), or Portuguese (Português).
                All three caption tracks were transcribed and translated in
                Translator (first 30 seconds only). The rest of the episode is not
                published here—this post explains the workflow so you can
                translate the full video yourself.
              </p>
              <p className="mt-3 text-base leading-7 text-gray-400">
                Source: <em>The Wild Project</em> #376, hosted by Jordi Wild,
                featuring Alejandro G. Calvo &amp; J. Maquiavello. Video is in
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
