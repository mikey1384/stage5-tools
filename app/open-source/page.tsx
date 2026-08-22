import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { GitHubRepositoryLink } from "../../components/GitHubRepositoryLink";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import {
  TRANSLATOR_ISSUES_URL,
  TRANSLATOR_LICENSE_URL,
  TRANSLATOR_REPOSITORY_URL,
} from "../../lib/open-source";

const title = "Open-source desktop video translator | Translator";
const description =
  "Translator is an MIT-licensed desktop app for video discovery, downloading, transcription, subtitle translation, editing, dubbing, and export on macOS and Windows.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "open source video translator",
    "open source subtitle editor",
    "Electron video translation app",
    "MIT licensed translator",
    "AI subtitle translation source code",
  ],
  alternates: {
    canonical: "https://translator.tools/open-source",
  },
  openGraph: {
    title,
    description,
    url: "https://translator.tools/open-source",
    siteName: "Translator",
    type: "website",
    images: [
      {
        url: "https://translator.tools/open-source-social-card-2026-08.png",
        width: 1200,
        height: 630,
        alt: "Translator is open source, with the public repository and multitab app interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://translator.tools/open-source-social-card-2026-08.png"],
  },
};

const sourceStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "Stage5 Translator",
  alternateName: "Translator",
  description,
  url: "https://translator.tools/open-source",
  codeRepository: TRANSLATOR_REPOSITORY_URL,
  license: TRANSLATOR_LICENSE_URL,
  programmingLanguage: ["TypeScript", "JavaScript"],
  runtimePlatform: "Electron",
  targetProduct: {
    "@type": "SoftwareApplication",
    name: "Translator",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "macOS, Windows",
    downloadUrl: [
      "https://downloads.stage5.tools/mac/latest/Translator-arm64.dmg",
      "https://downloads.stage5.tools/mac/latest/Translator-x64.dmg",
      "https://downloads.stage5.tools/win/latest/Translator-x64.exe",
    ],
    featureList: [
      "Multiple independent video workspaces in tabs",
      "Video discovery and URL downloading",
      "AI transcription and two-pass subtitle translation",
      "Original-only, translation-only, and dual subtitle display modes",
      "Default, Classic, Boxed, and LineBox subtitle styles",
      "Subtitle editing, timing, SRT export, and burned-in captions",
      "AI dubbing, summaries, and highlight clips",
      "Local MCP tools for LLM-assisted subtitles, downloads, Settings, and development workflows",
      "Stage5 credits and supported bring-your-own provider keys",
    ],
  },
  author: {
    "@type": "Organization",
    name: "Stage5 Tools",
    url: "https://translator.tools",
  },
};

const verificationPoints = [
  {
    number: "01",
    title: "The multitab architecture",
    body: "Translator runs independent video workspaces in a desktop tab shell, including visible progress for background jobs.",
  },
  {
    number: "02",
    title: "The complete subtitle workflow",
    body: "The repository contains the transcription, translation, review, timing, editing, SRT, burned-caption, and dubbing paths used by the app.",
  },
  {
    number: "03",
    title: "The product boundaries",
    body: "You can inspect what runs locally, what calls Stage5 or third-party AI services, and how provider keys and credits are handled.",
  },
  {
    number: "04",
    title: "The release machinery",
    body: "macOS and Windows packaging, native dependencies, update handling, tests, and platform-specific build paths are in the same repository.",
  },
  {
    number: "05",
    title: "The local agent interface",
    body: "The developer build includes auditable MCP tools for video search and bounded downloads, library access, SRT translation and review, semantic navigation, display and style controls, and masked Settings management.",
  },
];

const buildCommands = `git clone https://github.com/mikey1384/translator.git
cd translator
npm install
npm run dev`;

export default function OpenSourcePage() {
  const locale = "en" as const;

  return (
    <main className="min-h-screen overflow-hidden bg-[#07080a] text-[#f3f1e9] selection:bg-[#ff5a9d] selection:text-black">
      <Script
        id="open-source-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(sourceStructuredData),
        }}
      />

      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <SiteNav locale={locale} />
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Open Source" }]}
        />

        <section className="pb-24 pt-10 md:pb-32 md:pt-16">
          <div className="border-t border-white/20 pt-5">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-white/50">
              <span>Public source / MIT</span>
              <span>macOS + Windows</span>
            </div>
          </div>

          <div className="mt-14 grid gap-12 xl:grid-cols-[1.12fr_0.88fr] xl:items-end">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.28em] text-[#ff75ac]">
                Open source
              </div>
              <h1 className="mt-7 max-w-5xl font-[var(--font-montserrat)] text-[clamp(3.6rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.06em]">
                The Translator app is open source.
              </h1>
            </div>

            <div className="border-l border-white/20 pl-6 xl:pl-8">
              <p className="max-w-xl text-lg leading-8 text-white/68 md:text-xl">
                The same desktop code used to build Translator is public under
                the MIT License. Inspect it, build it, contribute to it, or
                download the finished app.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <GitHubRepositoryLink
                  label="View Translator source on GitHub"
                  placement="open_source_hero"
                  className="inline-flex items-center justify-center border border-[#a9bfff] bg-[#a9bfff] px-6 py-3 text-sm font-semibold text-black transition hover:border-white hover:bg-white"
                >
                  View source on GitHub ↗
                </GitHubRepositoryLink>
                <Link
                  href="/#all-downloads"
                  className="inline-flex items-center justify-center border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-black"
                >
                  Download the app
                </Link>
              </div>
            </div>
          </div>

          <figure className="mt-16 border border-white/20 bg-[#111724] p-2 md:mt-24 md:p-3">
            <Image
              src="/screenshots/subtitle-display-dual-linebox-2026-08.webp"
              alt="Current Translator app showing original and translated subtitles together in the LineBox style"
              width={2400}
              height={1600}
              priority
              className="block h-auto w-full border border-white/10"
            />
            <figcaption className="flex flex-col gap-2 px-2 pb-1 pt-4 text-sm leading-6 text-white/48 md:flex-row md:items-center md:justify-between">
              <span>
                A current product view from the public codebase: original and
                translation together, styled with LineBox.
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/34">
                tabs / video / dual subtitles / styles
              </span>
            </figcaption>
          </figure>
        </section>

        <section className="border-y border-white/20 py-24 md:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.28em] text-[#ff75ac]">
                Verify the product
              </div>
              <h2 className="mt-7 text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl">
                You do not have to trust the landing page.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/55">
                The repository is useful evidence because it exposes the product
                decisions, boundaries, and working implementation—not just a
                feature list.
              </p>
            </div>

            <div className="border-t border-white/20">
              {verificationPoints.map((point) => (
                <article
                  key={point.number}
                  className="grid gap-4 border-b border-white/20 py-7 md:grid-cols-[3rem_0.7fr_1.3fr] md:gap-7"
                >
                  <span className="font-mono text-xs text-[#ff75ac]">
                    {point.number}
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/52">
                    {point.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="agent-interface" className="scroll-mt-8 py-24 md:py-32">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.28em] text-[#ff75ac]">
                Build it
              </div>
              <h2 className="mt-7 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
                Four commands to start the desktop app locally.
              </h2>
              <pre className="mt-9 overflow-x-auto border border-white/20 bg-black/45 p-6 font-mono text-sm leading-8 text-[#a9bfff]">
                <code>{buildCommands}</code>
              </pre>
              <div className="mt-8 border-l border-[#ff75ac] pl-5">
                <h3 className="text-xl font-semibold text-white">
                  Connect an LLM agent
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/52">
                  Installed Translator 1.16.16+ includes packaged MCP tools. Enable
                  Settings → Agent Control → Allow agent control, allowlist write
                  folders, and the socket appears at launch or after toggle and
                  relaunch. The source build also includes the same interface: run
                  <code className="mx-1 text-[#a9bfff]">npm run agent:mcp</code>
                  from the cloned repository as an optional developer path.
                </p>
                <Link
                  href="/agents"
                  className="mt-4 inline-flex text-sm font-semibold text-[#a9bfff] underline decoration-[#a9bfff]/40 underline-offset-4 transition hover:text-white"
                >
                  Read the complete agent guide →
                </Link>
              </div>
              <p className="mt-5 text-sm leading-7 text-white/42">
                Platform packaging has additional native and signing
                requirements. The repository documents the development and
                release paths.
              </p>
            </div>

            <div className="border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <div className="font-mono text-xs uppercase tracking-[0.28em] text-[#ff75ac]">
                Clear boundaries
              </div>
              <h2 className="mt-7 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
                Open source does not pretend infrastructure is free.
              </h2>
              <div className="mt-9 space-y-6 text-base leading-8 text-white/58">
                <p>
                  The desktop client is MIT-licensed. Core downloading, subtitle
                  editing, timing, and export tools are available in the free
                  app.
                </p>
                <p>
                  AI transcription, translation, review, summaries, and dubbing
                  use paid Stage5 credits or supported bring-your-own provider
                  credentials. Hosted APIs, provider accounts, and payment
                  infrastructure are separate services.
                </p>
                <p>
                  Open source lets you audit these boundaries directly instead
                  of relying on a vague privacy or architecture claim.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-[#a9bfff] text-[#0b0c10]">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-20 md:px-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.28em] text-black/52">
              Repository
            </div>
            <h2 className="mt-6 max-w-5xl break-words text-4xl font-semibold leading-tight tracking-[-0.045em] md:text-6xl">
              github.com/mikey1384/translator
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-black/58">
              Read the code, inspect the MIT license, report a bug, or propose
              an improvement.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <GitHubRepositoryLink
              label="Open Translator repository"
              placement="open_source_bottom"
              className="inline-flex items-center justify-center border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Open repository ↗
            </GitHubRepositoryLink>
            <a
              href={TRANSLATOR_ISSUES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-black/35 px-6 py-3 text-sm font-semibold text-black transition hover:border-black hover:bg-white"
            >
              View issues ↗
            </a>
          </div>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </main>
  );
}
