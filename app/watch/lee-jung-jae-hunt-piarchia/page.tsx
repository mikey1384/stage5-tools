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
  "Watch Lee Jung-jae on Lee Dong-jin's Piarchia with English Subtitles | Translator";
const description =
  "Director Lee Jung-jae discusses Hunt, his directorial debut, with film critic Lee Dong-jin. A Korean-language interview about filmmaking, directing actors, and making a spy thriller. Learn how to watch it with English subtitles using Translator.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/watch/lee-jung-jae-hunt-piarchia",
  keywords: [
    "Lee Jung-jae interview English subtitles",
    "Hunt interview",
    "Lee Dong-jin Piarchia",
    "watch Korean interview English",
    "translate Korean video to English",
    "Korean film interview English",
    "헌트 interview",
  ],
  locale: "en",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Watch Lee Jung-jae on Lee Dong-jin's Piarchia with English Subtitles",
  description,
  url: "https://translator.tools/watch/lee-jung-jae-hunt-piarchia",
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
      name: "Lee Jung-jae",
      description: "Actor and director known for Squid Game and Hunt (directorial debut)",
    },
    {
      "@type": "VideoObject",
      name: "[헌트]의 이정재 감독님을 모셨습니다!!! | 심층 인터뷰",
      description:
        "Interview with director Lee Jung-jae about Hunt",
      contentUrl: "https://www.youtube.com/watch?v=mF6xumJOVss",
      embedUrl: "https://www.youtube.com/embed/mF6xumJOVss",
      inLanguage: "ko",
      duration: "PT42M16S",
    },
  ],
};

export default async function LeeJungJaeHuntPiarchiaPage({
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
            { label: "Lee Jung-jae on Lee Dong-jin's Piarchia" },
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
              Watch Lee Jung-jae Talk About Making Hunt
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-300">
              Actor-turned-director Lee Jung-jae sits down with critic Lee
              Dong-jin to discuss his directorial debut Hunt, a spy thriller
              set during South Korea&apos;s turbulent 1980s. A conversation
              about directing for the first time that most English speakers
              miss because it&apos;s in Korean.
            </p>
          </header>

          <div className="mx-auto max-w-4xl">
            <YouTubeDemo locale={locale} initialLang={initialLang} />

            <div className="prose prose-invert mt-12 max-w-none">
              <h2 className="text-3xl font-semibold text-white">
                An actor directs
              </h2>
              <p className="text-lg leading-8 text-gray-300">
                Lee Jung-jae built a decades-long career as one of Korea&apos;s
                most respected actors before <em>Squid Game</em> made him
                internationally recognizable. <em>Hunt</em> (2022) was his
                first film as director—a politically charged espionage thriller
                about competing intelligence agencies hunting for a North
                Korean mole inside the South Korean presidential security
                service.
              </p>
              <p className="text-lg leading-8 text-gray-300">
                Lee Dong-jin is one of Korea&apos;s most respected film
                critics. His YouTube show <em>Piarchia</em> (파이아키아) gives
                filmmakers space to talk about their process without the usual
                press junket constraints. This interview happened shortly
                before <em>Hunt</em>&apos;s theatrical release in August 2022,
                after the film premiered at Cannes.
              </p>
              <p className="text-lg leading-8 text-gray-300">
                The conversation covers Lee&apos;s transition from acting to
                directing, the technical challenges of shooting action
                sequences, working with actors from the director&apos;s chair,
                and the political context that shapes <em>Hunt</em>&apos;s
                story. It&apos;s not promotional fluff. It&apos;s two people
                who understand film craft talking about what it takes to step
                behind the camera for the first time.
              </p>
              <p className="text-lg leading-8 text-gray-300">
                The interview is in Korean. English speakers who care about
                Korean cinema, directorial debuts, or Lee Jung-jae&apos;s work
                don&apos;t get to hear this conversation unless they speak the
                language or find subtitles.
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
                Korean film content in English
              </h2>
              <p className="text-lg leading-8 text-gray-300">
                Korean cinema has produced some of the most interesting film
                content on YouTube—director interviews, critic roundtables,
                behind-the-scenes breakdowns. Most of it doesn&apos;t have
                English subtitles. YouTube&apos;s auto-generated translations
                are often incomplete or missing for Korean videos, especially
                older content.
              </p>
              <p className="text-lg leading-8 text-gray-300">
                Translator gives you control: choose your translation model,
                edit the subtitles line by line, adjust timing if the captions
                drift, and export the final file. If you&apos;ve been clicking
                through Korean film content, Japanese anime interviews, or
                Brazilian music documentaries and wishing you could follow along
                without guessing, this is what the app does.
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
                director Lee Jung-jae. Video is in Korean. Title: [헌트]의
                이정재 감독님을 모셨습니다!!! | 심층 인터뷰 (We have invited
                Hunt&apos;s director Lee Jung-jae!!! | In-depth Interview).
                Duration: 42:16.
              </p>
            </div>
          </div>
        </article>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}
