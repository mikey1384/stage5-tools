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
  "Watch Hirokazu Kore-eda on Lee Dong-jin's Piarchia with English Subtitles | Translator";
const description =
  "Director Hirokazu Kore-eda discusses his film career with critic Lee Dong-jin. A Korean-language interview about filmmaking craft, looking back at works like Shoplifters, Nobody Knows, After Life, and Broker. Learn how to watch it with English subtitles using Translator.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/watch/kore-eda-piarchia",
  keywords: [
    "Hirokazu Kore-eda interview English subtitles",
    "Kore-eda interview",
    "Lee Dong-jin Piarchia",
    "watch Korean interview English",
    "translate Korean video to English",
    "Korean film interview English",
    "고레에다 히로카즈 interview",
  ],
  locale: "en",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Watch Hirokazu Kore-eda on Lee Dong-jin's Piarchia with English Subtitles",
  description,
  url: "https://translator.tools/watch/kore-eda-piarchia",
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
      name: "Hirokazu Kore-eda",
      description:
        "Director known for Shoplifters, Nobody Knows, After Life, and Broker",
    },
    {
      "@type": "VideoObject",
      name: "[인터뷰] 고레에다 히로카즈와 이동진이 함께 영화 인생의 궤적을 되짚다",
      description:
        "Interview with director Hirokazu Kore-eda about his film career",
      contentUrl: "https://www.youtube.com/watch?v=j29oHrGMmtY",
      embedUrl: "https://www.youtube.com/embed/j29oHrGMmtY",
      inLanguage: "ko",
      duration: "PT46M38S",
    },
  ],
};

export default async function KoreEdaPiarchiaPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const locale = "en" as const;
  const params = await searchParams;
  const rawLang = typeof params.lang === "string" ? params.lang : undefined;
  const initialLang =
    rawLang === "es" || rawLang === "pt" ? rawLang : ("en" as const);

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
            { label: "Hirokazu Kore-eda on Lee Dong-jin's Piarchia" },
          ]}
        />

        <article className="pb-24">
          <header className="mx-auto max-w-4xl pb-12 pt-10">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              <span>Korean</span>
              <span className="text-gray-700">·</span>
              <span>Film</span>
              <span className="text-gray-700">·</span>
              <span>Lee Dong-jin&apos;s Piarchia</span>
            </div>
            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Watch Hirokazu Kore-eda Look Back at His Film Career
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              Director Hirokazu Kore-eda sits down with critic Lee Dong-jin to
              trace the arc of his film life—a career spanning documentaries,
              family dramas, and films that examine what it means to care for
              people who aren&apos;t connected by blood. A conversation about
              filmmaking craft that most English speakers miss because
              it&apos;s in Korean.
            </p>
          </header>

          <div className="mx-auto max-w-4xl">
            <YouTubeDemo locale={locale} initialLang={initialLang} />

            <div className="prose prose-invert mt-12 max-w-none">
              <h2 className="text-3xl font-semibold text-white">
                A director looking back
              </h2>
              <p className="text-lg leading-8 text-gray-300">
                Hirokazu Kore-eda&apos;s films—<em>Shoplifters</em>,{" "}
                <em>Nobody Knows</em>, <em>After Life</em>, <em>Broker</em>
                —don&apos;t feel like typical commercial cinema. They move
                slowly, let moments breathe, and focus on relationships that
                exist outside conventional family structures. They&apos;re the
                kind of films critics point to when talking about craft:
                deliberate framing, minimal exposition, and trust that the
                audience will follow without hand-holding.
              </p>
              <p className="text-lg leading-8 text-gray-300">
                Lee Dong-jin is one of Korea&apos;s most respected film critics.
                His YouTube show <em>Piarchia</em> (파이아키아) gives directors
                space to talk through their work without the constraints of
                festival press circuits. This interview with Kore-eda traces his
                career from early documentaries through the films that defined
                his approach to storytelling. It&apos;s not a promotional
                interview—it&apos;s a conversation between two people who
                understand film talking about how a body of work comes together
                over decades.
              </p>
              <p className="text-lg leading-8 text-gray-300">
                The interview is in Korean. Kore-eda is Japanese, but the
                conversation happens in Korean. English speakers who follow
                international cinema or care about his work don&apos;t get to
                hear this unless they speak the language or find subtitles.
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
                  — If the video doesn&apos;t have Korean captions, you can
                  transcribe it using AI. If it does, you can translate those
                  captions to English. You can use Stage5 credits (pay per
                  minute) or bring your own API key from OpenAI or Anthropic.
                </li>
                <li>
                  <strong className="text-white">
                    Watch with subtitles you control
                  </strong>{" "}
                  — The app plays the video with your translated subtitles. You
                  can edit the timing, fix translations, choose subtitle styles,
                  and export the final SRT file.
                </li>
              </ol>

              <p className="mt-8 text-lg leading-8 text-gray-300">
                The video stays on your computer. You&apos;re not streaming it
                through a web app or uploading it to someone else&apos;s server.
                Translator works locally.
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
                International film content in English
              </h2>
              <p className="text-lg leading-8 text-gray-300">
                YouTube hosts thousands of film interviews, critic roundtables,
                and director discussions that never get English subtitles.
                Korean cinema coverage, Japanese director Q&As, Brazilian
                documentaries—most of it stays inaccessible to English speakers
                because YouTube&apos;s auto-generated translations are often
                incomplete or missing for non-English content.
              </p>
              <p className="text-lg leading-8 text-gray-300">
                Translator gives you control: choose your translation model,
                edit the subtitles line by line, adjust timing if the captions
                drift, and export the final file. If you&apos;ve been clicking
                through international film content wishing you could follow
                along without guessing, this is what the app does.
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
                  href="/ko/video-downloader"
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
                displayed in English, Spanish (Español), or Portuguese
                (Português). All three caption tracks were transcribed and
                translated in Translator. They are not YouTube automatic
                captions. The rest of the episode is not published here—this
                post explains the workflow so you can translate the full video
                yourself.
              </p>
              <p className="mt-3 text-base leading-7 text-gray-400">
                Source: <em>Lee Dong-jin&apos;s Piarchia</em> (B tv
                이동진의 파이아키아), hosted by critic Lee Dong-jin, featuring
                director Hirokazu Kore-eda (고레에다 히로카즈). Video is in
                Korean. Title: [인터뷰] 고레에다 히로카즈와 이동진이 함께 영화
                인생의 궤적을 되짚다. Duration: 46:38.
              </p>
            </div>
          </div>
        </article>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}
