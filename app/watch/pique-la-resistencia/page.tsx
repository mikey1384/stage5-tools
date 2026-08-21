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
  "Watch Gerard Piqué on La Resistencia with English Subtitles | Translator";
const description =
  "Barcelona defender Gerard Piqué sits down with David Broncano for a Spanish late-night interview that starts crude and gets interesting. Learn how to watch it with English subtitles using Translator.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/watch/pique-la-resistencia",
  keywords: [
    "Gerard Piqué interview English subtitles",
    "La Resistencia Gerard Piqué",
    "watch Spanish interview English",
    "Piqué David Broncano interview",
    "translate Spanish video to English",
    "Spanish football interview English",
  ],
  locale: "en",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Watch Gerard Piqué on La Resistencia with English Subtitles",
  description,
  url: "https://translator.tools/watch/pique-la-resistencia",
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
      name: "Gerard Piqué",
      description: "Professional footballer and FC Barcelona defender",
    },
    {
      "@type": "VideoObject",
      name: "LA RESISTENCIA - Entrevista a Gerard Piqué | #LaResistencia 28.03.2019",
      description:
        "Interview with footballer Gerard Piqué on Spanish late-night comedy show La Resistencia",
      uploadDate: "2019-03-28",
      contentUrl: "https://www.youtube.com/watch?v=nLJXEX86318",
      embedUrl: "https://www.youtube.com/embed/nLJXEX86318",
      inLanguage: "es",
    },
  ],
};

export default async function PiqueLaResistenciaPage({
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
            { label: "Gerard Piqué on La Resistencia" },
          ]}
        />

        <article className="pb-24">
          <header className="mx-auto max-w-4xl pb-12 pt-10">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              <span>Spanish</span>
              <span className="text-gray-700">·</span>
              <span>Sports</span>
              <span className="text-gray-700">·</span>
              <span>La Resistencia</span>
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Watch Gerard Piqué on Spanish Late-Night Television
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              Barcelona defender Gerard Piqué invited himself onto David
              Broncano&apos;s late-night show via Twitter, showed up at Teatro
              Arlequín, and sat through a Spanish interview that starts with
              jokes most English speakers will never hear.
            </p>
          </header>

          <div className="mx-auto max-w-4xl">
            <YouTubeDemo locale={locale} initialLang={initialLang} />

            <div className="prose prose-invert mt-12 max-w-none">
              <h2 className="text-3xl font-semibold text-white">
                A footballer walks into a late-night show
              </h2>
              <p className="text-lg leading-8 text-gray-300">
                <em>La Resistencia</em> is one of Spain&apos;s most-watched
                late-night comedy shows. Host David Broncano is known for crude
                humor and unpredictable interviews. Gerard Piqué—at the time
                still playing for FC Barcelona—saw a joke exchange on Twitter
                and invited himself on.
              </p>
              <p className="text-lg leading-8 text-gray-300">
                The conversation moves through football, money, celebrity, and
                Piqué&apos;s business ventures. Broncano&apos;s opening is
                deliberately provocative, which is part of the show&apos;s
                format. Later in the interview (not shown in the 30-second
                preview above), Piqué made headlines by saying his net worth was
                bigger than RCD Espanyol&apos;s budget—a comment that became
                its own news cycle in Spanish sports media.
              </p>
              <p className="text-lg leading-8 text-gray-300">
                The interview is in Spanish. English speakers miss the tone, the
                timing, and the entire setup that makes Spanish late-night
                comedy work. Most people bounce after a few seconds of hearing a
                language they don&apos;t understand.
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
                Spanish sports media in English
              </h2>
              <p className="text-lg leading-8 text-gray-300">
                Spain produces some of the best football content on
                YouTube—interviews, analysis, documentaries. Most of it
                doesn&apos;t have English subtitles, and YouTube&apos;s
                auto-generated translations are often incomplete or missing for
                older videos.
              </p>
              <p className="text-lg leading-8 text-gray-300">
                Translator gives you control: choose your translation model,
                edit the subtitles line by line, adjust timing if the captions
                drift, and export the final file. If you&apos;ve been clicking
                through Spanish football interviews, Brazilian MMA content, or
                Korean variety shows and wishing you could follow along without
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
                Source: <em>La Resistencia</em>, hosted by David Broncano,
                featuring Gerard Piqué. Published March 28, 2019. Video is in
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
