"use client";

import { useRef } from "react";
import { trackWindowsInstallHelp } from "../lib/analytics";
import { createWindowsInstallHelpEvent } from "../lib/analytics-events";
import type { Locale } from "../lib/locales";

type InstallCopy = {
  summary: string;
  steps: readonly [string, string, string];
};

const COPY: Record<Locale, InstallCopy> = {
  en: {
    summary: "What happens after the Windows download?",
    steps: [
      "Open Translator-x64.exe from Downloads.",
      "Confirm the publisher is Stage5 Tools LLC. Cancel if it is different.",
      "Finish setup and open Translator, then paste a video link or open a file.",
    ],
  },
  ko: {
    summary: "Windows 다운로드 후에는 어떻게 하나요?",
    steps: [
      "다운로드 폴더에서 Translator-x64.exe를 실행하세요.",
      "게시자가 Stage5 Tools LLC인지 확인하세요. 다르면 취소하세요.",
      "설치를 마치고 Translator를 연 다음 영상 링크를 붙여넣거나 파일을 여세요.",
    ],
  },
  es: {
    summary: "¿Qué ocurre después de descargar para Windows?",
    steps: [
      "Abre Translator-x64.exe desde Descargas.",
      "Confirma que el editor sea Stage5 Tools LLC. Cancela si es distinto.",
      "Termina la instalación, abre Translator y pega un enlace de video o abre un archivo.",
    ],
  },
  ja: {
    summary: "Windows 版をダウンロードした後は？",
    steps: [
      "ダウンロードから Translator-x64.exe を開きます。",
      "発行元が Stage5 Tools LLC であることを確認し、異なる場合は中止します。",
      "セットアップを完了して Translator を開き、動画リンクを貼り付けるかファイルを開きます。",
    ],
  },
  zh: {
    summary: "Windows 下载完成后怎么做？",
    steps: [
      "在“下载”文件夹中打开 Translator-x64.exe。",
      "确认发布者是 Stage5 Tools LLC；如果不同，请取消安装。",
      "完成安装并打开 Translator，然后粘贴视频链接或打开文件。",
    ],
  },
  fr: {
    summary: "Que se passe-t-il après le téléchargement Windows ?",
    steps: [
      "Ouvrez Translator-x64.exe depuis Téléchargements.",
      "Vérifiez que l’éditeur est Stage5 Tools LLC. Annulez s’il est différent.",
      "Terminez l’installation, ouvrez Translator, puis collez un lien vidéo ou ouvrez un fichier.",
    ],
  },
  de: {
    summary: "Was passiert nach dem Windows-Download?",
    steps: [
      "Öffne Translator-x64.exe im Download-Ordner.",
      "Prüfe, dass Stage5 Tools LLC als Herausgeber angezeigt wird. Andernfalls abbrechen.",
      "Schließe die Installation ab, öffne Translator und füge einen Videolink ein oder öffne eine Datei.",
    ],
  },
  pt: {
    summary: "O que acontece após o download para Windows?",
    steps: [
      "Abra Translator-x64.exe na pasta Downloads.",
      "Confirme que o editor é Stage5 Tools LLC. Cancele se for diferente.",
      "Conclua a instalação, abra o Translator e cole um link de vídeo ou abra um arquivo.",
    ],
  },
  vi: {
    summary: "Sau khi tải bản Windows thì làm gì?",
    steps: [
      "Mở Translator-x64.exe trong thư mục Tải xuống.",
      "Xác nhận nhà phát hành là Stage5 Tools LLC. Hủy nếu thông tin khác.",
      "Hoàn tất cài đặt, mở Translator, rồi dán liên kết video hoặc mở một tệp.",
    ],
  },
};

export function WindowsInstallHelp({ locale }: { locale: Locale }) {
  const tracked = useRef(false);
  const copy = COPY[locale];

  return (
    <details
      className="group max-w-xl text-left"
      data-windows-install-help
      onToggle={(event) => {
        if (!event.currentTarget.open || tracked.current) return;
        tracked.current = true;
        trackWindowsInstallHelp(
          createWindowsInstallHelpEvent(window.location.pathname),
        );
      }}
    >
      <summary className="cursor-pointer list-none text-sm font-semibold text-gray-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
        <span className="inline-flex items-center gap-2">
          {copy.summary}
          <span aria-hidden="true" className="transition group-open:rotate-45">
            +
          </span>
        </span>
      </summary>
      <ol className="mt-3 space-y-2 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-gray-300">
        {copy.steps.map((step, index) => (
          <li key={step} className="flex gap-3">
            <span className="font-mono text-white/45">{index + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </details>
  );
}
