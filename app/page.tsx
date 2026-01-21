import { AllDownloadButtons } from "../components/AllDownloadButtons";
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
          <div className="mb-6">
            <h1 className="text-6xl md:text-7xl font-montserrat font-bold tracking-tight text-white">
              {t("headline", locale)}
            </h1>
            <div className="font-montserrat font-medium text-lg text-white mt-1">
              by stage_5
            </div>
          </div>
          <a
            href="https://www.producthunt.com/products/translator-3?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-translator-5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-6"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1063984&theme=dark&t=1768993812067"
              alt="Translator - Translate any video to 30+ languages with latest AI | Product Hunt"
              width={250}
              height={54}
            />
          </a>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            {t("subheadline", locale)}
          </p>

          <div className="mt-8">
            <AllDownloadButtons locale={locale} />
          </div>

          {/* Promo Video */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-white/10">
              <iframe
                src="https://www.youtube.com/embed/0HXMpUGDhkU"
                title="Translator App Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
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
          <AllDownloadButtons locale={locale} />
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
