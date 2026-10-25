import Image from "next/image";
import Link from "next/link";
import { serializeJsonLd } from "../lib/json-ld";
import {
  buildBreadcrumbStructuredData,
  buildSoftwareApplicationStructuredData,
} from "../lib/seo";
import { vietnameseTranslateContent as copy } from "../lib/translate-vietnamese-content";
import { Breadcrumbs } from "./Breadcrumbs";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";
import { VietnameseTranslateDownload } from "./VietnameseTranslateDownload";

export function VietnameseTranslatePage() {
  const application = buildSoftwareApplicationStructuredData({
    description: copy.description,
    path: "/translate",
    locale: "vi",
  });
  application.offers.description =
    "Tải ứng dụng miễn phí; các tác vụ AI có thể phát sinh chi phí tùy cách sử dụng.";
  const breadcrumbs = buildBreadcrumbStructuredData("vi", [
    { name: "Trang chủ", path: "/" },
    { name: "Dịch phụ đề", path: "/translate" },
  ]);
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "vi",
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
        <SiteNav locale="vi" />
        <Breadcrumbs items={[{ label: "Trang chủ", href: "/vi" }, { label: "Dịch phụ đề" }]} />

        <div className="mx-auto max-w-5xl pb-20">
          <header className="pb-10 pt-6 md:pb-14 md:pt-10">
            <p className="text-sm font-semibold tracking-wide text-[#FFD84D]">
              TIẾNG ANH → TIẾNG VIỆT
            </p>
            <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.25rem,5.2vw,4.5rem)] font-extrabold leading-[1.12] tracking-[-0.035em]">
              {copy.heading}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#B7B2BF] md:text-xl md:leading-9">
              {copy.intro}
            </p>
            <p className="mt-5 text-sm leading-6 text-[#D9D5CE]">
              Ứng dụng cho Mac và Windows · Xuất SRT hoặc video có phụ đề
            </p>
          </header>

          <section aria-labelledby="translation-steps" className="border-t border-[#2A2732] py-10 md:py-12">
            <h2 id="translation-steps" className="text-2xl font-semibold tracking-tight md:text-3xl">
              Từ video tiếng Anh đến phụ đề tiếng Việt
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
              Xem bản dịch ngay trong video
            </h2>
            <figure className="m-0">
              <a
                href="/screenshots/player-vi-2026-10.webp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mở ảnh chụp Translator với phụ đề tiếng Việt ở kích thước đầy đủ (tab mới)"
                className="block overflow-hidden rounded-2xl border border-[#2A2732] bg-[#0F0E13] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD84D] md:rounded-[26px]"
              >
                <Image
                  src="/screenshots/player-vi-2026-10.webp"
                  alt="Translator hiển thị phim Tears of Steel với phụ đề tiếng Việt, câu gốc tiếng Anh và bản dịch cạnh nhau."
                  width={2400}
                  height={1600}
                  sizes="(min-width: 1100px) 1024px, 100vw"
                  className="block h-auto w-full"
                />
              </a>
              <figcaption className="mt-4 max-w-3xl text-sm leading-6 text-[#B7B2BF]">
                Một đoạn phim tiếng Anh với phụ đề tiếng Việt trong Translator.
                Bạn có thể đối chiếu câu gốc và bản dịch ngay bên cạnh video.
                <span className="mt-2 block text-xs leading-5">
                  Phim: <a href="https://mango.blender.org" className="underline underline-offset-4">Tears of Steel</a>
                  {" "}© Blender Foundation · <a href="https://creativecommons.org/licenses/by/3.0/" className="underline underline-offset-4">CC BY 3.0</a>
                  {" "}· Nhấn vào ảnh để xem rõ hơn.
                </span>
              </figcaption>
            </figure>
          </section>

          <section id="all-downloads" aria-labelledby="translation-download" className="scroll-mt-8 rounded-[28px] border border-[#2A2732] bg-[#0F0E13] p-6 md:p-10">
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h2 id="translation-download" className="text-3xl font-semibold tracking-tight">
                  Thử với video của bạn
                </h2>
                <p className="mt-4 text-base leading-7 text-[#B7B2BF]">
                  Tải Translator và bắt đầu từ video hoặc tệp SRT bạn đang có.
                  Bạn có thể tải ứng dụng miễn phí; chi phí cho các tác vụ AI tùy cách dịch bạn chọn.
                </p>
              </div>
              <VietnameseTranslateDownload />
            </div>
          </section>

          <section aria-labelledby="translation-faq" className="pt-14 md:pt-20">
            <h2 id="translation-faq" className="text-3xl font-semibold tracking-tight">Câu hỏi thường gặp</h2>
            <div className="mt-8 divide-y divide-[#2A2732] border-y border-[#2A2732]">
              {copy.faqs.map(({ question, answer }) => (
                <div key={question} className="py-6">
                  <h3 className="text-lg font-semibold leading-7">{question}</h3>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-[#B7B2BF]">{answer}</p>
                </div>
              ))}
            </div>
            <Link href="/vi/subtitle-editor" className="mt-8 inline-block text-sm font-semibold text-[#FFD84D] underline underline-offset-4">
              Tìm hiểu cách chỉnh sửa phụ đề
            </Link>
          </section>
        </div>
      </div>
      <SiteFooter locale="vi" />
    </main>
  );
}
