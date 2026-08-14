import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { AgentWorkflowLinks } from "../../components/AgentWorkflowLinks";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { TrackedArtifactLink } from "../../components/TrackedArtifactLink";

const MAC_ARM64_URL =
  "https://downloads.stage5.tools/mac/latest/Translator-arm64.dmg";
const MAC_X64_URL =
  "https://downloads.stage5.tools/mac/latest/Translator-x64.dmg";
const WINDOWS_X64_URL =
  "https://downloads.stage5.tools/win/latest/Translator-x64.exe";
const REPOSITORY_URL = "https://github.com/mikey1384/translator";
const HOMEBREW_TAP_URL = "https://github.com/mikey1384/homebrew-translator";
const HOMEBREW_INSTALL_COMMAND =
  "brew install --cask mikey1384/translator/stage5-translator";

const title = "Translator for LLM agents | Local MCP developer preview";
const description =
  "Use Translator with an LLM agent through its local MCP developer preview, or let an agent choose and download the correct macOS or Windows installer.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "MCP video translator",
    "LLM video tools",
    "AI agent subtitle editor",
    "MCP subtitle translation",
    "agent-friendly desktop app",
  ],
  alternates: { canonical: "https://translator.tools/agents" },
  openGraph: {
    title,
    description,
    url: "https://translator.tools/agents",
    siteName: "Translator",
    type: "website",
    images: [
      {
        url: "https://translator.tools/translator-social-card-editorial-2026-08.png",
        width: 1200,
        height: 630,
        alt: "Translator desktop video workstation with multiple video tabs and subtitle tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      "https://translator.tools/translator-social-card-editorial-2026-08.png",
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Use Translator with an LLM agent",
  description,
  url: "https://translator.tools/agents",
  about: {
    "@type": "SoftwareApplication",
    name: "Translator",
    operatingSystem: "macOS, Windows",
    applicationCategory: "MultimediaApplication",
    downloadUrl: [MAC_ARM64_URL, MAC_X64_URL, WINDOWS_X64_URL],
    codeRepository: REPOSITORY_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Stage5 Tools",
    url: "https://translator.tools",
  },
};

const installCommands = `git clone https://github.com/mikey1384/translator.git
cd translator
npm install
npm run agent:mcp`;

const capabilities = [
  {
    number: "01",
    title: "Find and bring in video",
    body: "Enter a video URL, use the built-in ranked video search, load more results, batch-download selected results, or reopen and re-download items from the Downloads library.",
  },
  {
    number: "02",
    title: "Control the viewing workspace",
    body: "Open videos and SRT files, switch between original, translation, or dual subtitles, choose Default, Classic, Boxed, or LineBox styling, and move to any app page the user asks to see.",
  },
  {
    number: "03",
    title: "Translate and review subtitles",
    body: "Work through SRT files in context-preserving batches, edit translations by stable cue ID, and export source, translated, or dual-language SRT files.",
  },
  {
    number: "04",
    title: "Manage the app safely",
    body: "Inspect or change Settings without revealing saved provider keys. An agent can open a Stage5 checkout page, but the user must enter and submit payment details.",
  },
] as const;

const downloads = [
  {
    label: "Download for Mac — Apple Silicon",
    detail: "M1, M2, M3, M4, and later Apple chips",
    href: MAC_ARM64_URL,
    platform: "macOS",
    architecture: "arm64",
  },
  {
    label: "Download for Mac — Intel",
    detail: "Intel-based Macs",
    href: MAC_X64_URL,
    platform: "macOS",
    architecture: "x64",
  },
  {
    label: "Download for Windows",
    detail: "64-bit Windows PCs",
    href: WINDOWS_X64_URL,
    platform: "Windows",
    architecture: "x64",
  },
] as const;

export default function AgentsPage() {
  const locale = "en" as const;

  return (
    <main className="min-h-screen overflow-hidden bg-[#07080a] text-[#f3f1e9] selection:bg-[#ff5a9d] selection:text-black">
      <Script
        id="agents-structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <SiteNav locale={locale} />
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "For agents" }]}
        />

        <section className="pb-24 pt-10 md:pb-32 md:pt-16">
          <div className="border-t border-white/20 pt-5">
            <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-white/50">
              <span>Local MCP / developer preview</span>
              <span>Finished installers / direct links</span>
            </div>
          </div>

          <div className="mt-14 grid gap-12 xl:grid-cols-[1.12fr_0.88fr] xl:items-end">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.28em] text-[#ff75ac]">
                Translator for LLM agents
              </div>
              <h1 className="mt-7 max-w-6xl font-[var(--font-montserrat)] text-[clamp(3.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.06em]">
                Your agent can operate the video workflow.
              </h1>
            </div>

            <div className="border-l border-white/20 pl-6 xl:pl-8">
              <p className="max-w-xl text-lg leading-8 text-white/68 md:text-xl">
                Translator&apos;s open-source developer build exposes local MCP
                tools for finding, downloading, opening, translating, styling,
                and organizing video. The finished desktop app remains one
                direct download away for everyone else.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={REPOSITORY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-[#a9bfff] bg-[#a9bfff] px-6 py-3 text-sm font-semibold text-black transition hover:border-white hover:bg-white"
                >
                  Build the MCP preview ↗
                </a>
                <Link
                  href="#direct-downloads"
                  className="inline-flex items-center justify-center border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-black"
                >
                  Direct app downloads ↓
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="agent-workflow-heading"
          className="pb-24 md:pb-32"
        >
          <div className="mb-6 grid gap-3 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <h2
              id="agent-workflow-heading"
              className="text-2xl font-semibold tracking-[-0.03em] text-white"
            >
              Route the job before choosing the tool.
            </h2>
            <p className="max-w-2xl text-sm leading-6 text-white/48 md:justify-self-end">
              Start with the narrowest workflow. These pages describe the
              current product; they do not imply a remote agent service or live
              pay-per-call endpoint.
            </p>
          </div>
          <AgentWorkflowLinks />
        </section>

        <section className="grid gap-14 border-y border-white/20 py-24 md:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.28em] text-[#ff75ac]">
              Start here
            </div>
            <h2 className="mt-7 text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl">
              Connect the local MCP server.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/55">
              Clone the open-source developer build, install it, and point your
              MCP host at the final command. The interface runs locally and is
              not yet bundled into the finished installers.
            </p>
          </div>

          <div>
            <pre className="overflow-x-auto border border-white/20 bg-black/45 p-6 font-mono text-sm leading-8 text-[#a9bfff]">
              <code>{installCommands}</code>
            </pre>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/48">
              Configure your MCP host to run <code>npm run agent:mcp</code> from
              the cloned repository. The server uses local stdio; there is no
              public remote Translator MCP endpoint.
            </p>
          </div>
        </section>

        <section className="border-b border-white/20 py-24 md:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.28em] text-[#ff75ac]">
                What it can do
              </div>
              <h2 className="mt-7 text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl">
                Real controls, not screen guessing.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/55">
                The tools have named inputs and structured results. An agent
                does not need to hunt through the interface or depend on where a
                button happens to be today.
              </p>
            </div>

            <div className="border-t border-white/20">
              {capabilities.map((capability) => (
                <article
                  key={capability.number}
                  className="grid gap-4 border-b border-white/20 py-7 md:grid-cols-[3rem_0.7fr_1.3fr] md:gap-7"
                >
                  <span className="font-mono text-xs text-[#ff75ac]">
                    {capability.number}
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    {capability.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/52">
                    {capability.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-14 border-b border-white/20 py-24 md:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.28em] text-[#ff75ac]">
              Deliberate boundaries
            </div>
            <h2 className="mt-7 text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl">
              The user stays in control.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/55">
              Translator gives the agent useful controls without handing it
              payment details, stored secrets, or invisible authority.
            </p>
          </div>

          <ol className="border-t border-white/20">
            <li className="grid grid-cols-[2.5rem_1fr] gap-5 border-b border-white/20 py-7 text-base leading-8 text-white/58">
              <span className="font-mono text-xs text-[#ff75ac]">01</span>
              <span>
                File-writing and network actions remain visible to the MCP host
                and should keep its normal approval controls.
              </span>
            </li>
            <li className="grid grid-cols-[2.5rem_1fr] gap-5 border-b border-white/20 py-7 text-base leading-8 text-white/58">
              <span className="font-mono text-xs text-[#ff75ac]">02</span>
              <span>
                Saved provider keys are never returned. An agent can open the
                right checkout page, but it cannot read, enter, or submit card
                details.
              </span>
            </li>
            <li className="grid grid-cols-[2.5rem_1fr] gap-5 border-b border-white/20 py-7 text-base leading-8 text-white/58">
              <span className="font-mono text-xs text-[#ff75ac]">03</span>
              <span>
                SRT translation and review can use the connected LLM session.
                Transcription, dubbing, Stage5 services, and third-party model
                accounts keep their normal costs and credentials.
              </span>
            </li>
          </ol>
        </section>

        <section id="direct-downloads" className="scroll-mt-8 py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="font-mono text-xs uppercase tracking-[0.28em] text-[#ff75ac]">
              Direct artifacts
            </div>
            <h2 className="mt-7 text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl">
              No button hunting required.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/55">
              These are stable latest-version URLs. A person or agent can choose
              the platform explicitly and follow the link directly.
            </p>
          </div>

          <div className="mt-10 grid gap-5 border border-[#a9bfff]/45 bg-[#a9bfff]/[0.06] p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#a9bfff]">
                macOS / Homebrew
              </div>
              <code className="mt-4 block overflow-x-auto whitespace-nowrap font-mono text-sm text-white md:text-base">
                {HOMEBREW_INSTALL_COMMAND}
              </code>
            </div>
            <a
              href={HOMEBREW_TAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#a9bfff] underline decoration-[#a9bfff]/40 underline-offset-4 transition hover:text-white"
            >
              Publisher-maintained tap ↗
            </a>
          </div>

          <div className="mt-12 grid border-t border-white/20 lg:grid-cols-3">
            {downloads.map((download) => (
              <TrackedArtifactLink
                key={download.href}
                href={download.href}
                platform={download.platform}
                architecture={download.architecture}
                label={`Agents page — ${download.label}`}
                className="group border-b border-white/20 py-8 transition hover:bg-white/[0.04] lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ff75ac]">
                  {download.platform} / {download.architecture}
                </span>
                <strong className="mt-5 block text-2xl leading-tight text-white group-hover:text-[#a9bfff]">
                  {download.label} ↓
                </strong>
                <span className="mt-3 block text-sm leading-6 text-white/45">
                  {download.detail}
                </span>
              </TrackedArtifactLink>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/20 pt-6 font-mono text-xs text-white/50">
            <a
              className="underline underline-offset-4 hover:text-white"
              href="/llms.txt"
            >
              llms.txt
            </a>
            <a
              className="underline underline-offset-4 hover:text-white"
              href="/llms-full.txt"
            >
              llms-full.txt
            </a>
            <a
              className="underline underline-offset-4 hover:text-white"
              href="/agent-manifest.json"
            >
              agent-manifest.json
            </a>
            <a
              className="underline underline-offset-4 hover:text-white"
              href={REPOSITORY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              source repository ↗
            </a>
          </div>
        </section>
      </div>

      <SiteFooter locale={locale} />
    </main>
  );
}
