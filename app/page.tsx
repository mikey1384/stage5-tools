import { DownloadButton } from "../components/DownloadButton";
import { FeatureRow } from "../components/FeatureRow";
import {
  VideoDownloadIcon,
  SubtitleMergeIcon,
  AITranslationIcon,
} from "../components/icons";
import { t } from "../lib/strings";
import { getLocale } from "../lib/get-locale";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const locale = await getLocale(params);

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

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <DownloadButton
              className=""
              label={`${t("download", locale)} (Apple Silicon)`}
              architecture="arm64"
              variant="primary"
            />
            <DownloadButton
              className=""
              label={`${t("download", locale)} (Intel)`}
              architecture="x64"
              variant="secondary"
            />
          </div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DownloadButton
              label={`${t("download", locale)} (Apple Silicon)`}
              architecture="arm64"
              variant="primary"
            />
            <DownloadButton
              label={`${t("download", locale)} (Intel)`}
              architecture="x64"
              variant="secondary"
            />
          </div>
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
