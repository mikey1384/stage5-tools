export const translationLandingUI = {
  en: {
    home: "Home", breadcrumb: "Translate subtitles", platformNote: "For Mac and Windows · Export SRT or a subtitled video",
    preview: "See the subtitles in the video", imageLink: "Open the app screenshot at full size (new tab)",
    film: "Film", zoom: "Select the image for a closer look.", downloadHeading: "Try it with your video",
    downloadBody: "Download Translator and start with a video or SRT file. The app is free to download; AI tasks may have a cost depending on the option you choose.",
    chooseComputer: "Choose your computer", downloadFor: "Download for", faq: "Questions about subtitle translation",
    editor: "Explore the subtitle editor", related: "More subtitle translation guides",
    offer: "Free app download; AI tasks may have a cost depending on usage.",
    example: "Example", original: "Original",
  },
  pt: {
    home: "Início", breadcrumb: "Traduzir legendas", platformNote: "Para Mac e Windows · Exporte SRT ou vídeo legendado",
    preview: "Confira a legenda junto com o vídeo", imageLink: "Abrir a captura do aplicativo em tamanho maior (nova aba)",
    film: "Filme", zoom: "Clique na imagem para ver os detalhes.", downloadHeading: "Experimente com o seu vídeo",
    downloadBody: "Baixe o Translator e abra um vídeo ou arquivo SRT. O download do aplicativo é gratuito; as tarefas de IA podem ter custo, conforme a opção escolhida.",
    chooseComputer: "Escolha seu computador", downloadFor: "Baixar para", faq: "Dúvidas sobre tradução de legendas",
    editor: "Conheça o editor de legendas", related: "Mais opções para traduzir legendas",
    offer: "Download gratuito do aplicativo; tarefas de IA podem ter custo conforme o uso.",
    example: "Exemplo", original: "Original",
  },
  es: {
    home: "Inicio", breadcrumb: "Traducir subtítulos", platformNote: "Para Mac y Windows · Exporta SRT o vídeo subtitulado",
    preview: "Comprueba los subtítulos con el vídeo", imageLink: "Abrir la captura de la aplicación a tamaño completo (pestaña nueva)",
    film: "Película", zoom: "Pulsa la imagen para verla con más detalle.", downloadHeading: "Pruébalo con tu vídeo",
    downloadBody: "Descarga Translator y abre un vídeo o un archivo SRT. La descarga es gratuita; las tareas de IA pueden tener un coste según la opción que elijas.",
    chooseComputer: "Elige tu ordenador", downloadFor: "Descargar para", faq: "Preguntas sobre la traducción de subtítulos",
    editor: "Conoce el editor de subtítulos", related: "Más guías de traducción de subtítulos",
    offer: "Descarga gratuita de la aplicación; las tareas de IA pueden tener un coste según el uso.",
    example: "Ejemplo", original: "Original",
  },
  vi: {
    home: "Trang chủ", breadcrumb: "Dịch phụ đề", platformNote: "Ứng dụng cho Mac và Windows · Xuất SRT hoặc video có phụ đề",
    preview: "Xem bản dịch ngay trong video", imageLink: "Mở ảnh chụp ứng dụng ở kích thước đầy đủ (tab mới)",
    film: "Phim", zoom: "Nhấn vào ảnh để xem rõ hơn.", downloadHeading: "Thử với video của bạn",
    downloadBody: "Tải Translator và bắt đầu từ video hoặc tệp SRT bạn đang có. Bạn có thể tải ứng dụng miễn phí; chi phí cho các tác vụ AI tùy cách dịch bạn chọn.",
    chooseComputer: "Chọn máy tính của bạn", downloadFor: "Tải cho", faq: "Câu hỏi thường gặp",
    editor: "Tìm hiểu cách chỉnh sửa phụ đề", related: "Dịch phụ đề từ các ngôn ngữ khác",
    offer: "Tải ứng dụng miễn phí; các tác vụ AI có thể phát sinh chi phí tùy cách sử dụng.",
    example: "Ví dụ", original: "Câu gốc",
  },
} as const;
export type TranslationLandingLocale = keyof typeof translationLandingUI;

