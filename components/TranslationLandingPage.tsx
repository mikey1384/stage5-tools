import Image from "next/image";
import Link from "next/link";
import { serializeJsonLd } from "../lib/json-ld";
import {
  buildBreadcrumbStructuredData,
  buildSoftwareApplicationStructuredData,
} from "../lib/seo";
import type { TranslationLandingContent } from "../lib/translation-landing-content";
import { translationLandingUI } from "../lib/translation-landing-ui";
import { homeHrefForLocale, localizePathForLocale } from "../lib/locale-routing";
import { Breadcrumbs } from "./Breadcrumbs";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";
import { TranslationLandingDownload } from "./TranslationLandingDownload";

export function TranslationLandingPage({ copy }: { copy: TranslationLandingContent }) {
  const locale = copy.locale;
  const ui = translationLandingUI[locale];
  const localize = (path: string) => localizePathForLocale(locale, path);
  const application = buildSoftwareApplicationStructuredData({
    description: copy.description,
    path: copy.path,
    locale,
  });
  application.offers.description = ui.offer;
  const breadcrumbs = buildBreadcrumbStructuredData(locale, [
    { name: ui.home, path: "/" },
    { name: ui.breadcrumb, path: "/translate" },
    ...(copy.path === "/translate" ? [] : [{ name: copy.heading, path: copy.path }]),
  ]);
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: copy.faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <main className="min-h-screen bg-black font-[family-name:var(--font-body)] text-[#F4F1EA]">
      <script
        id="structured-data-translate"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(application) }}
      />
      <script
        id="structured-data-translate-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbs) }}
      />
      <script
        id="structured-data-translate-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faq) }}
      />
      <div className="container mx-auto px-5 sm:px-6">
        <SiteNav locale={locale} />
        <Breadcrumbs items={[{ label: ui.home, href: homeHrefForLocale(locale) }, { label: ui.breadcrumb, ...(copy.path !== "/translate" ? { href: localize("/translate") } : {}) }, ...(copy.path === "/translate" ? [] : [{ label: copy.heading }])]} />

        <div className="mx-auto max-w-5xl pb-20">
          <header className="pb-10 pt-6 md:pb-14 md:pt-10">
            <p className="text-sm font-semibold tracking-wide text-[#FFD84D]">
              {copy.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.25rem,5.2vw,4.5rem)] font-extrabold leading-[1.12] tracking-[-0.035em]">
              {copy.heading}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#B7B2BF] md:text-xl md:leading-9">
              {copy.intro}
            </p>
            <p className="mt-5 text-sm leading-6 text-[#D9D5CE]">
              {ui.platformNote}
            </p>
          </header>

          <section aria-labelledby="translation-steps" className="border-t border-[#2A2732] py-10 md:py-12">
            <h2 id="translation-steps" className="text-2xl font-semibold tracking-tight md:text-3xl">
              {copy.stepsHeading}
            </h2>
            <ol className="mt-8 grid list-none gap-8 p-0 md:grid-cols-3 md:gap-10">
              {copy.steps.map((step, index) => (
                <li key={step.title}>
                  <span className="font-[family-name:var(--font-display)] text-sm font-bold text-[#FFD84D]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#B7B2BF]">{step.body}</p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="translation-preview" className="pb-12 pt-4 md:pb-16">
            <h2 id="translation-preview" className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">
              {ui.preview}
            </h2>
            <figure className="m-0">
              <a
                href={copy.image.src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ui.imageLink}
                className="block overflow-hidden rounded-2xl border border-[#2A2732] bg-[#0F0E13] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD84D] md:rounded-[26px]"
              >
                <picture>
                  {copy.image.mobileSrc ? (
                    <source media="(max-width: 640px)" srcSet={copy.image.mobileSrc} />
                  ) : null}
                  <Image
                    src={copy.image.src}
                    alt={copy.image.alt}
                    width={2400}
                    height={copy.image.height ?? 1600}
                    sizes="(min-width: 1100px) 1024px, 100vw"
                    className="block h-auto w-full"
                  />
                </picture>
              </a>
              <figcaption className="mt-4 max-w-3xl text-sm leading-6 text-[#B7B2BF]">
                {copy.image.caption}
                <span className="mt-2 block text-xs leading-5">
                  {ui.film}: <a href="https://mango.blender.org" className="underline underline-offset-4">Tears of Steel</a>
                  {" "}© Blender Foundation · <a href="https://creativecommons.org/licenses/by/3.0/" className="underline underline-offset-4">CC BY 3.0</a>
                  {" "}· {ui.zoom}
                </span>
              </figcaption>
            </figure>
          </section>

          <section id="all-downloads" aria-labelledby="translation-download" className="scroll-mt-8 rounded-[28px] border border-[#2A2732] bg-[#0F0E13] p-6 md:p-10">
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h2 id="translation-download" className="text-3xl font-semibold tracking-tight">
                  {ui.downloadHeading}
                </h2>
                <p className="mt-4 text-base leading-7 text-[#B7B2BF]">
                  {ui.downloadBody}
                </p>
              </div>
              <TranslationLandingDownload locale={locale} trackingLabel={copy.trackingLabel} />
            </div>
          </section>

          <section aria-labelledby="translation-faq" className="pt-14 md:pt-20">
            <h2 id="translation-faq" className="text-3xl font-semibold tracking-tight">{ui.faq}</h2>
            <div className="mt-8 divide-y divide-[#2A2732] border-y border-[#2A2732]">
              {copy.faqs.map(({ question, answer }) => (
                <div key={question} className="py-6">
                  <h3 className="text-lg font-semibold leading-7">{question}</h3>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-[#B7B2BF]">{answer}</p>
                </div>
              ))}
            </div>
            <Link href={localize("/subtitle-editor")} className="mt-8 inline-block text-sm font-semibold text-[#FFD84D] underline underline-offset-4">
              {ui.editor}
            </Link>
            {copy.related.length > 0 && (
              <nav aria-label={ui.related} className="mt-8 flex flex-wrap gap-x-6 gap-y-4 border-t border-[#2A2732] pt-6 text-sm text-[#D9D5CE]">
                {copy.related.map(link => <Link key={link.path} href={localize(link.path)} className="underline underline-offset-4">{link.label}</Link>)}
              </nav>
            )}
          </section>
        </div>
      </div>
      <SiteFooter locale={locale} />
    </main>
  );
}
