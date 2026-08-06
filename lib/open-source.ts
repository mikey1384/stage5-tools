import type { Locale } from "./locales";

export const TRANSLATOR_REPOSITORY_URL =
  "https://github.com/mikey1384/translator";
export const TRANSLATOR_LICENSE_URL = `${TRANSLATOR_REPOSITORY_URL}/blob/master/LICENSE`;
export const TRANSLATOR_ISSUES_URL = `${TRANSLATOR_REPOSITORY_URL}/issues`;

type OpenSourceProofCopy = {
  eyebrow: string;
  title: string;
  description: string;
  repositoryCta: string;
  detailsCta: string;
  facts: [string, string, string];
};

export const openSourceProofCopy: Record<Locale, OpenSourceProofCopy> = {
  en: {
    eyebrow: "Open source",
    title: "Translator is open source.",
    description:
      "The desktop app is published under the MIT License. Read the code, build it yourself, or use the finished download.",
    repositoryCta: "View the source on GitHub",
    detailsCta: "How the open-source project works",
    facts: [
      "MIT-licensed source code",
      "One codebase for macOS and Windows",
      "The real product code—not a demo repository",
    ],
  },
  ko: {
    eyebrow: "오픈 소스",
    title: "Translator는 오픈 소스입니다.",
    description:
      "데스크톱 앱의 전체 소스 코드를 MIT 라이선스로 공개합니다. 코드를 직접 살펴보고 빌드할 수도 있고, 완성된 앱을 바로 내려받아 쓸 수도 있습니다.",
    repositoryCta: "GitHub에서 소스 코드 보기",
    detailsCta: "오픈 소스 프로젝트 안내",
    facts: [
      "MIT 라이선스 소스 코드",
      "macOS와 Windows를 위한 하나의 코드베이스",
      "데모가 아닌 실제 제품 코드",
    ],
  },
  es: {
    eyebrow: "Código abierto",
    title: "Translator es de código abierto.",
    description:
      "La aplicación de escritorio se publica con licencia MIT. Puedes leer el código, compilarla tú mismo o descargar la versión terminada.",
    repositoryCta: "Ver el código en GitHub",
    detailsCta: "Cómo funciona el proyecto abierto",
    facts: [
      "Código con licencia MIT",
      "Una base de código para macOS y Windows",
      "El producto real, no un repositorio de demostración",
    ],
  },
  ja: {
    eyebrow: "オープンソース",
    title: "Translator はオープンソースです。",
    description:
      "デスクトップアプリのソースコードを MIT ライセンスで公開しています。コードを読み、自分でビルドすることも、完成版をそのままダウンロードすることもできます。",
    repositoryCta: "GitHub でソースを見る",
    detailsCta: "オープンソース版について",
    facts: [
      "MIT ライセンスのソースコード",
      "macOS と Windows 共通のコードベース",
      "デモではなく実際の製品コード",
    ],
  },
  zh: {
    eyebrow: "开源",
    title: "Translator 是开源软件。",
    description:
      "桌面应用以 MIT 许可证发布。你可以阅读代码、自行构建，也可以直接下载完成版。",
    repositoryCta: "在 GitHub 查看源代码",
    detailsCta: "了解开源项目",
    facts: [
      "MIT 许可的源代码",
      "macOS 与 Windows 共用一套代码",
      "真实产品代码，而不是演示仓库",
    ],
  },
  fr: {
    eyebrow: "Open source",
    title: "Translator est open source.",
    description:
      "L'application de bureau est publiée sous licence MIT. Vous pouvez lire le code, la compiler vous-même ou télécharger la version prête à l'emploi.",
    repositoryCta: "Voir le code sur GitHub",
    detailsCta: "Comprendre le projet open source",
    facts: [
      "Code source sous licence MIT",
      "Une base de code pour macOS et Windows",
      "Le vrai produit, pas un dépôt de démonstration",
    ],
  },
  de: {
    eyebrow: "Open Source",
    title: "Translator ist Open Source.",
    description:
      "Die Desktop-App wird unter der MIT-Lizenz veröffentlicht. Du kannst den Code lesen, die App selbst bauen oder die fertige Version herunterladen.",
    repositoryCta: "Quellcode auf GitHub ansehen",
    detailsCta: "So funktioniert das Open-Source-Projekt",
    facts: [
      "Quellcode unter MIT-Lizenz",
      "Eine Codebasis für macOS und Windows",
      "Der echte Produktcode, kein Demo-Repository",
    ],
  },
  pt: {
    eyebrow: "Código aberto",
    title: "O Translator é de código aberto.",
    description:
      "O aplicativo para desktop é publicado sob a licença MIT. Você pode ler o código, compilá-lo por conta própria ou baixar a versão pronta.",
    repositoryCta: "Ver o código no GitHub",
    detailsCta: "Como funciona o projeto aberto",
    facts: [
      "Código-fonte com licença MIT",
      "Uma base de código para macOS e Windows",
      "O produto real, não um repositório de demonstração",
    ],
  },
  vi: {
    eyebrow: "Mã nguồn mở",
    title: "Translator là phần mềm mã nguồn mở.",
    description:
      "Ứng dụng máy tính được phát hành theo giấy phép MIT. Bạn có thể đọc mã, tự xây dựng ứng dụng hoặc tải bản hoàn chỉnh.",
    repositoryCta: "Xem mã nguồn trên GitHub",
    detailsCta: "Tìm hiểu dự án mã nguồn mở",
    facts: [
      "Mã nguồn theo giấy phép MIT",
      "Một nền mã cho macOS và Windows",
      "Mã của sản phẩm thật, không phải kho demo",
    ],
  },
};
