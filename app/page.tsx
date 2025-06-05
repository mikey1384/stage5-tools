"use client";

import { useSearchParams } from "next/navigation";
import { DownloadButton } from "../components/DownloadButton";
import { FeatureRow } from "../components/FeatureRow";
import {
  VideoDownloadIcon,
  SubtitleMergeIcon,
  AITranslationIcon,
} from "../components/icons";
import { t } from "../lib/strings";

export default function Home() {
  const searchParams = useSearchParams();
  const locale = (searchParams.get("l") as "en" | "ko") ?? "en";

  const features = [
    {
      title: t("videoDownload", locale),
      description: t("videoDownloadDesc", locale),
      icon: VideoDownloadIcon,
      label: t("free", locale),
    },
    {
      title: t("subtitleEditing", locale),
      description: t("subtitleEditingDesc", locale),
      icon: SubtitleMergeIcon,
      label: t("free", locale),
    },
    {
      title: t("aiTranslation", locale),
      description: t("aiTranslationDesc", locale),
      icon: AITranslationIcon,
    },
  ];
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <section className="text-center py-20">
          <h1 className="text-6xl md:text-7xl font-light tracking-tight text-white mb-6">
            {t("headline", locale)}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            {t("subheadline", locale)}
          </p>

          <DownloadButton className="mt-8" label={t("download", locale)} />
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
          <DownloadButton label={t("download", locale)} />
          <p className="text-sm text-gray-500 mt-4">{t("footer", locale)}</p>
        </section>

        {/* Footer */}
        <footer className="py-16 text-center border-t border-gray-800">
          <p className="text-gray-600 text-sm">{t("copyright", locale)}</p>
        </footer>
      </div>
    </main>
  );
}
