"use client";

import { DownloadButton } from "../components/DownloadButton";
import { FeatureRow } from "../components/FeatureRow";
import {
  VideoDownloadIcon,
  SubtitleMergeIcon,
  AITranslationIcon,
} from "../components/icons";

const features = [
  {
    title: "Video Download",
    description:
      "Download videos from YouTube and other platforms with yt-dlp integration. Get high-quality video files ready for subtitle processing.",
    icon: VideoDownloadIcon,
    label: "free",
  },
  {
    title: "Subtitle Merging",
    description:
      "Merge and embed subtitles directly into your videos with precision timing. Support for multiple subtitle formats and seamless integration.",
    icon: SubtitleMergeIcon,
    label: "free",
  },
  {
    title: "AI Translation",
    description:
      "Translate subtitles to any language with AI-powered precision. Maintain context, tone, and cultural nuances in your translations.",
    icon: AITranslationIcon,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <section className="text-center py-20">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight text-white mb-6">
            Translator
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Add AI-translated subtitles to any video. Download from YouTube,
            merge subtitles, and translate to any language with precision.
          </p>

          {/* Mobile download button */}
          <DownloadButton className="mt-8 md:hidden" />
          {/* Desktop/tablet download button */}
          <DownloadButton className="hidden md:inline-flex mt-12" />
        </section>

        {/* Features */}
        <section className="space-y-0">
          {features.map((feature, index) => (
            <FeatureRow
              key={feature.title}
              {...feature}
              direction={index % 2 ? "rtl" : "ltr"}
            />
          ))}
        </section>

        {/* Download section */}
        <section className="py-32 text-center">
          <DownloadButton />
          <p className="text-sm text-gray-500 mt-4">
            Video downloading and subtitle merging included • Only pay for AI
            translation
          </p>
        </section>

        {/* Footer */}
        <footer className="py-16 text-center border-t border-gray-800">
          <p className="text-gray-600 text-sm">
            © 2025 Stage5 Tools. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
