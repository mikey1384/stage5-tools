import type { Metadata } from "next";
import Link from "next/link";
import { AgentWorkflowLinks } from "../../components/AgentWorkflowLinks";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { TrackedArtifactLink } from "../../components/TrackedArtifactLink";
import { serializeJsonLd } from "../../lib/json-ld";

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

const MAC_LAUNCHER = "/Applications/Translator.app/Contents/Resources/translator-mcp";

const title = "Subtitle videos with Claude or Codex | Translator MCP";
const description =
  "Connect Translator to the Claude or Codex subscription you already have. Your agent downloads the video, pulls its captions, translates them itself and exports SRT or a subtitled video. No Stage5 credits for videos that have captions.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Claude subtitle translation",
    "Codex MCP video",
    "MCP video translator",
    "translate YouTube subtitles with Claude",
    "AI agent subtitle editor",
    "MCP subtitle translation",
    "agent-friendly desktop app",
  ],
  alternates: {
    canonical: "https://translator.tools/agents",
    languages: {
      "x-default": "https://translator.tools/agents",
      en: "https://translator.tools/agents",
    },
  },
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
  headline: "Subtitle videos with the Claude or Codex subscription you already have",
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

const clients = [
  {
    name: "Claude Code",
    how: "Run once in a terminal:",
    snippet: `claude mcp add translator -- ${MAC_LAUNCHER}`,
  },
  {
    name: "Codex",
    how: "Run once in a terminal:",
    snippet: `codex mcp add translator -- ${MAC_LAUNCHER}`,
  },
  {
    name: "Claude Desktop",
    how: "Add to claude_desktop_config.json (Settings → Developer → Edit Config), then restart Claude:",
    snippet: `{
  "mcpServers": {
    "translator": { "command": "${MAC_LAUNCHER}" }
  }
}`,
  },
] as const;

const FREE_PROMPT =
  "Use the Translator tools to subtitle https://www.youtube.com/watch?v=… in Spanish. Use the video's existing captions, translate them yourself with translation_provider agent, and export an SRT. Don't use paid transcription.";

const capabilities = [
  {
    number: "01",
    title: "Bring in the video and its captions",
    body: "Download from a URL, check which caption tracks the video has (creator, auto-generated or YouTube's translated tracks) and import the one to start from.",
  },
  {
    number: "02",
    title: "Translate with your own subscription",
    body: "Your agent reads the subtitles in batches, translates them itself and writes them back by cue ID. Translator checks the result and never falls back to paid translation on this path.",
  },
  {
    number: "03",
    title: "Edit, check and export",
    body: "Fix lines and timing, preview, then export source, translated or dual-language SRT, or burn the subtitles into the video.",
  },
  {
    number: "04",
    title: "Paid steps only when you choose",
    body: "Transcribing audio for videos without captions, and dubbing, use Stage5 credits or your own API key. The agent has to request those explicitly; the free path never spends credits.",
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
      <script
        id="agents-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
      />

      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <SiteNav locale={locale} />
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "For agents" }]}
        />

        <section className="pb-24 pt-10 md:pb-32 md:pt-16">
          <div className="border-t border-white/20 pt-5">
            <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-white/50">
              <span>Packaged MCP / Agent Control toggle</span>
              <span>Finished installers / direct links</span>
            </div>
          </div>

          <div className="mt-14 grid gap-12 xl:grid-cols-[1.12fr_0.88fr] xl:items-end">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.28em] text-[#ff75ac]">
                Translator for Claude and Codex
              </div>
              <h1 className="mt-7 max-w-6xl font-[var(--font-montserrat)] text-[clamp(3.5rem,8vw,8rem)] font-bold leading-[0.9] tracking-[-0.06em]">
                Subtitle videos with the AI you already pay for.
              </h1>
            </div>

            <div className="border-l border-white/20 pl-6 xl:pl-8">
              <p className="max-w-xl text-lg leading-8 text-white/68 md:text-xl">
                Connect the Translator desktop app to Claude or Codex. Your agent
                downloads the video, pulls its captions, translates them itself
                and exports SRT or a subtitled video. For videos that have
                captions, that costs no Stage5 credits: the translating is done
                by the subscription you already have.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="#direct-downloads"
                  className="inline-flex items-center justify-center border border-[#a9bfff] bg-[#a9bfff] px-6 py-3 text-sm font-semibold text-black transition hover:border-white hover:bg-white"
                >
                  Download Translator ↓
                </Link>
                <a
                  href={REPOSITORY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-black"
                >
                  Source repository ↗
                </a>
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
              Set up once
            </div>
            <h2 className="mt-7 text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl">
              Three steps, about two minutes.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/55">
              Everything runs on your computer: your agent talks to the
              Translator app through a local MCP connection. There is no
              remote Translator server to sign up for.
            </p>
          </div>

          <div>
            <div className="border border-white/20 bg-black/45 p-6">
              <div className="space-y-4 text-sm leading-7 text-white/72">
                <div>
                  <div className="font-semibold text-[#a9bfff]">1. Install Translator and keep it open</div>
                  <div className="mt-1 text-white/55">
                    Download the app for macOS or Windows below. Your agent
                    works through the running app, so leave it open while you
                    use it.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-[#a9bfff]">2. Turn on Agent Control</div>
                  <div className="mt-1 text-white/55">
                    Settings → Agent Control → Allow agent control, and add a
                    folder the agent may save files to. It takes effect
                    immediately. The same panel shows the exact launcher path
                    for your computer.
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-[#a9bfff]">3. Add Translator to your agent</div>
                  <div className="mt-1 text-white/55">
                    Use the command for your client below, then restart it so
                    the Translator tools appear.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {clients.map((client) => (
                <div key={client.name} className="border border-white/15 bg-black/35 p-5">
                  <div className="font-semibold text-white">{client.name}</div>
                  <div className="mt-1 text-sm text-white/55">{client.how}</div>
                  <pre className="mt-3 overflow-x-auto whitespace-pre font-mono text-xs leading-6 text-[#a9bfff]">
                    {client.snippet}
                  </pre>
                </div>
              ))}
            </div>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/48">
              These paths are for macOS. On Windows, use the path shown in
              Settings → Agent Control (it ends in{" "}
              <code className="text-[#a9bfff]">resources\translator-mcp.cmd</code>).
              Agent Control is off until you turn it on, and your agent only
              writes to the folders you allow.
            </p>

            <div className="mt-8 border border-[#ff75ac]/40 bg-[#ff75ac]/[0.06] p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#ff75ac]">
                First prompt to try
              </div>
              <p className="mt-3 text-sm leading-7 text-white/80">{FREE_PROMPT}</p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/20 py-24 md:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.28em] text-[#ff75ac]">
                What your agent does
              </div>
              <h2 className="mt-7 text-5xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-7xl">
                The whole job, in one conversation.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/55">
                The tools have named inputs and structured results, so your
                agent works the app directly instead of guessing at the screen.
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
              payment, stored secrets or your settings.
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
                The agent never sees stored API keys, can’t change your
                settings and can’t buy anything.
              </span>
            </li>
            <li className="grid grid-cols-[2.5rem_1fr] gap-5 border-b border-white/20 py-7 text-base leading-8 text-white/58">
              <span className="font-mono text-xs text-[#ff75ac]">03</span>
              <span>
                Translating with your agent is free. Only transcribing audio
                (for videos without captions) and dubbing use Stage5 credits
                or your own API key, and only when the agent asks for them.
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
