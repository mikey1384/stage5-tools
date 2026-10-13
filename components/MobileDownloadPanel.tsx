"use client";

import { useEffect, useRef, useState } from "react";
import { trackMobileDownload } from "../lib/analytics";
import {
  createMobileDownloadEvent,
  type MobileDownloadAction,
  type MobileDownloadPlacement,
} from "../lib/analytics-events";
import { homeHrefForLocale, type Locale } from "../lib/locales";
import { TRANSLATOR_ORIGIN } from "../lib/site-routing";

type PanelCopy = {
  title: string;
  body: string;
  send: string;
  copied: string;
  email: string;
  emailSubject: string;
  emailBody: string;
};

const COPY: Record<Locale, PanelCopy> = {
  en: {
    title: "Translator runs on Mac and Windows",
    body: "Send yourself the link and download it on your computer.",
    send: "Send me the link",
    copied: "Link copied",
    email: "Email me the link",
    emailSubject: "Translator download link",
    emailBody: "Download Translator on your Mac or Windows computer:",
  },
  ko: {
    title: "Translator는 Mac과 Windows에서 실행됩니다",
    body: "링크를 보내 두고 컴퓨터에서 다운로드하세요.",
    send: "링크 보내기",
    copied: "링크가 복사되었습니다",
    email: "이메일로 링크 보내기",
    emailSubject: "Translator 다운로드 링크",
    emailBody: "Mac 또는 Windows 컴퓨터에서 Translator를 다운로드하세요:",
  },
  es: {
    title: "Translator funciona en Mac y Windows",
    body: "Envíate el enlace y descárgalo en tu computadora.",
    send: "Enviarme el enlace",
    copied: "Enlace copiado",
    email: "Enviarme el enlace por correo",
    emailSubject: "Enlace de descarga de Translator",
    emailBody: "Descarga Translator en tu computadora Mac o Windows:",
  },
  ja: {
    title: "Translator は Mac と Windows で動作します",
    body: "リンクを自分に送って、パソコンでダウンロードしてください。",
    send: "リンクを送る",
    copied: "リンクをコピーしました",
    email: "リンクをメールで送る",
    emailSubject: "Translator のダウンロードリンク",
    emailBody: "Mac または Windows のパソコンで Translator をダウンロード:",
  },
  zh: {
    title: "Translator 可在 Mac 和 Windows 上运行",
    body: "把链接发给自己，然后在电脑上下载。",
    send: "把链接发给我",
    copied: "链接已复制",
    email: "通过邮件发送链接",
    emailSubject: "Translator 下载链接",
    emailBody: "在你的 Mac 或 Windows 电脑上下载 Translator：",
  },
  fr: {
    title: "Translator fonctionne sur Mac et Windows",
    body: "Envoyez-vous le lien et téléchargez-le sur votre ordinateur.",
    send: "M’envoyer le lien",
    copied: "Lien copié",
    email: "M’envoyer le lien par e-mail",
    emailSubject: "Lien de téléchargement de Translator",
    emailBody: "Téléchargez Translator sur votre ordinateur Mac ou Windows :",
  },
  de: {
    title: "Translator läuft auf Mac und Windows",
    body: "Schick dir den Link und lade die App auf deinem Computer herunter.",
    send: "Link an mich senden",
    copied: "Link kopiert",
    email: "Link per E-Mail senden",
    emailSubject: "Translator-Downloadlink",
    emailBody: "Lade Translator auf deinen Mac oder Windows-PC herunter:",
  },
  pt: {
    title: "O Translator funciona no Mac e no Windows",
    body: "Envie o link para você e baixe no seu computador.",
    send: "Enviar o link para mim",
    copied: "Link copiado",
    email: "Enviar o link por e-mail",
    emailSubject: "Link de download do Translator",
    emailBody: "Baixe o Translator no seu computador Mac ou Windows:",
  },
  vi: {
    title: "Translator chạy trên Mac và Windows",
    body: "Gửi liên kết cho chính bạn rồi tải về trên máy tính.",
    send: "Gửi liên kết cho tôi",
    copied: "Đã sao chép liên kết",
    email: "Gửi liên kết qua email",
    emailSubject: "Liên kết tải Translator",
    emailBody: "Tải Translator trên máy tính Mac hoặc Windows của bạn:",
  },
};

interface MobileDownloadPanelProps {
  locale: Locale;
  placement: MobileDownloadPlacement;
  surface?: "dark" | "light";
  className?: string;
}

// Shown instead of installer links on phones and tablets, which cannot run the
// desktop app; the visitor sends the download page to themselves instead.
export function MobileDownloadPanel({
  locale,
  placement,
  surface = "dark",
  className = "",
}: MobileDownloadPanelProps) {
  const copy = COPY[locale];
  const downloadPageUrl = `${TRANSLATOR_ORIGIN}${homeHrefForLocale(locale)}#all-downloads`;
  const [copied, setCopied] = useState(false);
  const shownTracked = useRef(false);

  const track = (action: MobileDownloadAction) =>
    trackMobileDownload(
      createMobileDownloadEvent(action, placement, window.location.pathname),
    );

  useEffect(() => {
    if (shownTracked.current) return;
    shownTracked.current = true;
    trackMobileDownload(
      createMobileDownloadEvent("shown", placement, window.location.pathname),
    );
  }, [placement]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(downloadPageUrl);
      setCopied(true);
      track("copy");
    } catch {
      // The link stays visible below for a manual copy.
    }
  };

  const handleSend = async () => {
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title: copy.title, url: downloadPageUrl });
        track("share");
        return;
      } catch (error) {
        if ((error as DOMException)?.name === "AbortError") return;
      }
    }
    await copyLink();
  };

  const mailtoHref = `mailto:?subject=${encodeURIComponent(copy.emailSubject)}&body=${encodeURIComponent(`${copy.emailBody}\n${downloadPageUrl}`)}`;

  const isLight = surface === "light";
  const panelClasses = isLight
    ? "border-black/15 bg-white/40 text-[#0b0c10]"
    : "border-white/15 bg-white/[0.04] text-white";
  const mutedClasses = isLight ? "text-black/65" : "text-gray-300";
  const primaryClasses = isLight
    ? "border-[#0b0c10] bg-[#0b0c10] text-white"
    : "border-[#a9bfff] bg-[#a9bfff] text-black";
  const secondaryClasses = isLight
    ? "border-black/25 text-black"
    : "border-white/25 text-white";

  return (
    <div
      data-mobile-download-panel
      className={`w-full max-w-md rounded-[22px] border p-5 text-left ${panelClasses} ${className}`}
    >
      <p className="text-base font-semibold leading-snug">{copy.title}</p>
      <p className={`mt-2 text-sm leading-6 ${mutedClasses}`}>{copy.body}</p>
      <div className="mt-4 flex flex-col gap-3">
        <button
          type="button"
          onClick={handleSend}
          aria-live="polite"
          className={`inline-flex w-full items-center justify-center rounded-[18px] border px-6 py-3 text-base font-semibold transition-colors ${primaryClasses}`}
        >
          {copied ? copy.copied : copy.send}
        </button>
        <a
          href={mailtoHref}
          onClick={() => track("email")}
          className={`inline-flex w-full items-center justify-center rounded-[18px] border px-6 py-3 text-base font-semibold transition-colors ${secondaryClasses}`}
        >
          {copy.email}
        </a>
      </div>
      <p className={`mt-3 break-all font-mono text-xs ${mutedClasses}`}>
        {downloadPageUrl}
      </p>
    </div>
  );
}
