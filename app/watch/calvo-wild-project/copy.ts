interface WatchPageCopy {
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  intro: string;
  section1Title: string;
  section1Body: string[];
  howToTitle: string;
  howToBody: string;
  howToSteps: Array<{ title: string; body: string }>;
  pricingTitle: string;
  pricingFree: string;
  pricingPaid: string;
  section2Title: string;
  section2Body: string[];
  downloadTitle: string;
  downloadBody: string;
  aboutTitle: string;
  aboutBody: string[];
}

type SupportedLocale = "en" | "es" | "ko" | "pt" | "vi";

export const calvoWildProjectCopy: Record<SupportedLocale, WatchPageCopy> = {
  en: {
    title: "Watch Alejandro G. Calvo on The Wild Project with English Subtitles | Translator",
    description:
      "Spanish film critic Alejandro G. Calvo discusses the TOP 60 películas on The Wild Project with Jordi Wild. A Spanish-language conversation about cinema that most English speakers miss.",
    keywords: [
      "Alejandro G. Calvo interview",
      "Wild Project",
      "TOP 60 películas",
      "Spanish film criticism",
    ],
    h1: "Watch Spanish Film Critic Alejandro G. Calvo Talk Movies",
    intro:
      '"The other day I was in Mexico for a few weeks and I had an amazing time." Spanish film critic Alejandro G. Calvo sits down with Jordi Wild to discuss the TOP 60 películas. A Spanish-language conversation about cinema that English speakers rarely get to hear.',
    section1Title: "Film criticism in Spanish",
    section1Body: [
      "Alejandro G. Calvo is a Spanish film critic who appears regularly on The Wild Project, Jordi Wild's podcast. In this episode, Calvo and J. Maquiavello discuss the TOP 60 películas—a list of films that shaped how they think about cinema.",
      "The conversation is in Spanish, which means English speakers who follow film criticism or care about international cinema perspectives bounce—and miss a conversation that covers films, directors, and cinematic language that crosses borders.",
      "The Wild Project is one of Spain's most-watched podcasts. Wild brings on guests from different fields—chefs, athletes, scientists, artists, critics—and gives them space to talk about their work. This episode with Calvo is about movies, but it's also about why someone dedicates their life to watching films and thinking about what makes them work.",
    ],
    howToTitle: "How to watch the full episode with English subtitles",
    howToBody:
      "Translator is a desktop app that lets you download videos, add translated subtitles, and watch them in your language. Here's the workflow:",
    howToSteps: [
      {
        title: "Paste the YouTube URL",
        body: "Copy the video link and paste it into Translator's download field.",
      },
      {
        title: "Download the video",
        body: "Translator pulls down the video and any available captions. This is free and happens on your machine.",
      },
      {
        title: "Transcribe or translate",
        body: "If the video doesn't have Spanish captions, you can transcribe it using AI. If it does, you can translate those captions to English. You can use Stage5 credits (pay per minute) or bring your own API key from OpenAI or Anthropic.",
      },
      {
        title: "Watch with subtitles you control",
        body: "The app plays the video with your translated subtitles. You can edit the timing, fix translations, choose subtitle styles, and export the final SRT file.",
      },
    ],
    pricingTitle: "What's free, what's paid",
    pricingFree:
      "Downloading videos, managing your library, editing subtitles manually, and exporting SRT files.",
    pricingPaid:
      "AI transcription and translation. You can use Stage5 credits (example: $1 for ~50 minutes, $10 for ~18 hours) or unlock BYO once for $10 and bring your own API key from OpenAI or Anthropic to pay them directly.",
    section2Title: "Spanish film content in English",
    section2Body: [
      "Spain produces film criticism, director interviews, and cinema discussions that don't always make it to English-speaking audiences. YouTube hosts thousands of Spanish-language film conversations, but most don't have English subtitles, and YouTube's auto-generated translations are often incomplete or missing for older videos.",
      "Translator gives you control: choose your translation model, edit the subtitles line by line, adjust timing if the captions drift, and export the final file. If you've been clicking through Spanish film content, Brazilian documentaries, or Korean variety shows and wishing you could follow along without guessing, this is what the app does.",
      "This isn't about replacing your browser's auto-translate feature. This is for videos you actually want to sit down and watch—where the accuracy of the subtitles and your ability to control them matters.",
    ],
    downloadTitle: "Download Translator",
    downloadBody:
      "Translator works on macOS and Windows. Download it, paste this video's URL, and see how the workflow feels. The download and subtitle editor are free to use.",
    aboutTitle: "About this post",
    aboutBody: [
      "The YouTube video is embedded directly from the official source. The first 30 seconds of captions shown in the player can be displayed in English, Korean (한국어), or Portuguese (Português). All three caption tracks were transcribed and translated in Translator (first 30 seconds only). The rest of the episode is not published here—this post explains the workflow so you can translate the full video yourself.",
      "Source: The Wild Project #376, hosted by Jordi Wild, featuring Alejandro G. Calvo & J. Maquiavello. Video is in Spanish.",
    ],
  },
  es: {
    title: "Ver Alejandro G. Calvo en The Wild Project | Translator",
    description:
      "El crítico de cine español Alejandro G. Calvo discute el TOP 60 películas en The Wild Project con Jordi Wild.",
    keywords: ["Alejandro G. Calvo", "Wild Project", "TOP 60 películas"],
    h1: "Alejandro G. Calvo Habla de Cine",
    intro:
      "El crítico de cine español Alejandro G. Calvo se sienta con Jordi Wild para discutir el TOP 60 películas. Una conversación sobre cine en español.",
    section1Title: "Crítica de cine en español",
    section1Body: [
      "Alejandro G. Calvo es un crítico de cine español que aparece regularmente en The Wild Project, el podcast de Jordi Wild. En este episodio, Calvo y J. Maquiavello discuten el TOP 60 películas—una lista de películas que dieron forma a cómo piensan sobre el cine.",
    ],
    howToTitle: "Cómo ver con subtítulos",
    howToBody: "Translator es una app que descarga videos y añade subtítulos.",
    howToSteps: [
      { title: "Pega URL", body: "Copia el enlace." },
      { title: "Descarga", body: "Baja el video." },
      { title: "Traduce", body: "Usa IA." },
      { title: "Ve", body: "Edita." },
    ],
    pricingTitle: "Gratis y de pago",
    pricingFree: "Descargar, editar, exportar.",
    pricingPaid: "IA requiere créditos Stage5 o API key.",
    section2Title: "Contenido de cine español",
    section2Body: [
      "España produce crítica de cine, entrevistas a directores y discusiones sobre cine que no siempre llegan a las audiencias de habla inglesa.",
    ],
    downloadTitle: "Descarga Translator",
    downloadBody: "Funciona en macOS y Windows.",
    aboutTitle: "Sobre este post",
    aboutBody: [
      "Video de YouTube oficial. Primeros 30s con subtítulos en inglés, coreano o portugués.",
      "Fuente: The Wild Project #376, presentado por Jordi Wild, con Alejandro G. Calvo & J. Maquiavello. Video en español.",
    ],
  },
  ko: {
    title: "Alejandro G. Calvo Wild Project 인터뷰 보기 | Translator",
    description:
      "스페인 영화 평론가 Alejandro G. Calvo가 The Wild Project에서 TOP 60 películas에 대해 이야기합니다.",
    keywords: ["Alejandro G. Calvo", "Wild Project"],
    h1: "Alejandro G. Calvo의 영화 이야기",
    intro:
      "스페인 영화 평론가 Alejandro G. Calvo가 Jordi Wild와 함께 TOP 60 películas에 대해 이야기합니다.",
    section1Title: "스페인어 영화 비평",
    section1Body: [
      "Alejandro G. Calvo는 Jordi Wild의 팟캐스트 The Wild Project에 정기적으로 출연하는 스페인 영화 평론가입니다.",
    ],
    howToTitle: "자막과 함께 보는 방법",
    howToBody: "Translator는 영상을 다운로드하고 자막을 추가합니다.",
    howToSteps: [
      { title: "URL", body: "링크 복사." },
      { title: "다운로드", body: "영상 가져오기." },
      { title: "번역", body: "AI 사용." },
      { title: "시청", body: "편집." },
    ],
    pricingTitle: "무료와 유료",
    pricingFree: "다운로드, 편집, 내보내기.",
    pricingPaid: "AI는 크레딧 필요.",
    section2Title: "스페인 영화 콘텐츠",
    section2Body: ["스페인은 영화 비평, 감독 인터뷰, 영화 토론을 제작합니다."],
    downloadTitle: "Translator 다운로드",
    downloadBody: "macOS와 Windows 지원.",
    aboutTitle: "게시물 정보",
    aboutBody: [
      "공식 YouTube 영상. 처음 30초 자막 포함.",
      "출처: The Wild Project #376. 스페인어 영상.",
    ],
  },
  pt: {
    title: "Assistir Alejandro G. Calvo no Wild Project | Translator",
    description:
      "O crítico de cinema espanhol Alejandro G. Calvo discute o TOP 60 películas no The Wild Project com Jordi Wild.",
    keywords: ["Alejandro G. Calvo", "Wild Project"],
    h1: "Alejandro G. Calvo Fala Sobre Cinema",
    intro:
      "O crítico de cinema espanhol Alejandro G. Calvo se senta com Jordi Wild para discutir o TOP 60 películas.",
    section1Title: "Crítica de cinema em espanhol",
    section1Body: [
      "Alejandro G. Calvo é um crítico de cinema espanhol que aparece regularmente no The Wild Project, o podcast de Jordi Wild.",
    ],
    howToTitle: "Como assistir com legendas",
    howToBody: "Translator baixa vídeos e adiciona legendas.",
    howToSteps: [
      { title: "Cole URL", body: "Copie o link." },
      { title: "Baixe", body: "Baixe o vídeo." },
      { title: "Traduza", body: "Use IA." },
      { title: "Assista", body: "Edite." },
    ],
    pricingTitle: "Grátis e pago",
    pricingFree: "Baixar, editar, exportar.",
    pricingPaid: "IA requer créditos Stage5 ou API key.",
    section2Title: "Conteúdo de cinema espanhol",
    section2Body: [
      "A Espanha produz crítica de cinema, entrevistas com diretores e discussões sobre cinema.",
    ],
    downloadTitle: "Baixe Translator",
    downloadBody: "Funciona no macOS e Windows.",
    aboutTitle: "Sobre este post",
    aboutBody: [
      "Vídeo oficial do YouTube. Primeiros 30s com legendas em inglês, coreano ou português.",
      "Fonte: The Wild Project #376. Vídeo em espanhol.",
    ],
  },
  vi: {
    title: "Xem Alejandro G. Calvo trên Wild Project với Phụ Đề Tiếng Việt | Translator",
    description:
      "Nhà phê bình phim Tây Ban Nha Alejandro G. Calvo thảo luận về TOP 60 películas với Jordi Wild. Cuộc phỏng vấn tiếng Tây Ban Nha về điện ảnh, phê bình và nghề thủ công.",
    keywords: [
      "Alejandro G. Calvo phỏng vấn",
      "Wild Project",
      "Jordi Wild",
      "phỏng vấn tiếng Tây Ban Nha",
      "nhà phê bình phim Tây Ban Nha",
    ],
    h1: "Xem Alejandro G. Calvo Thảo Luận Về Phim",
    intro:
      "Nhà phê bình phim Tây Ban Nha Alejandro G. Calvo thảo luận về TOP 60 películas với Jordi Wild trong cuộc phỏng vấn tiếng Tây Ban Nha đáng xem.",
    section1Title: "Cuộc phỏng vấn bằng tiếng Tây Ban Nha",
    section1Body: [
      "Alejandro G. Calvo là nhà phê bình phim Tây Ban Nha. Anh xuất hiện trên The Wild Project để thảo luận về danh sách phim hàng đầu.",
      "Trong cuộc phỏng vấn này, Calvo nói về các bộ phim yêu thích, phê bình phim và cách anh tiếp cận việc xem và phân tích phim.",
      "Cuộc phỏng vấn bằng tiếng Tây Ban Nha. Người nói tiếng Việt bỏ lỡ giọng điệu, chi tiết và toàn bộ cuộc trò chuyện.",
    ],
    howToTitle: "Cách xem toàn bộ phỏng vấn với phụ đề tiếng Việt",
    howToBody:
      "Translator là ứng dụng desktop cho phép bạn tải video, thêm phụ đề dịch và xem chúng bằng ngôn ngữ của bạn.",
    howToSteps: [
      {
        title: "Dán URL YouTube",
        body: "Sao chép liên kết video và dán vào trường tải xuống của Translator.",
      },
      {
        title: "Tải video",
        body: "Translator tải xuống video và bất kỳ phụ đề có sẵn nào.",
      },
      {
        title: "Phiên âm hoặc dịch",
        body: "Sử dụng AI để phiên âm hoặc dịch phụ đề.",
      },
      {
        title: "Xem với phụ đề bạn kiểm soát",
        body: "Chỉnh sửa thời gian, sửa bản dịch và xuất tệp SRT cuối cùng.",
      },
    ],
    pricingTitle: "Miễn phí và trả phí",
    pricingFree:
      "Tải video, quản lý thư viện, chỉnh sửa phụ đề thủ công và xuất tệp SRT.",
    pricingPaid:
      "Phiên âm và dịch AI. Sử dụng tín dụng Stage5 hoặc mở khóa BYO một lần với $10.",
    section2Title: "Nội dung điện ảnh Tây Ban Nha bằng tiếng Việt",
    section2Body: [
      "Tây Ban Nha tạo ra một số nội dung phim hay nhất trên YouTube. Hầu hết không có phụ đề tiếng Việt.",
      "Translator cho bạn quyền kiểm soát: chọn mô hình dịch của bạn, chỉnh sửa phụ đề từng dòng và xuất tệp cuối cùng.",
    ],
    downloadTitle: "Tải Translator",
    downloadBody:
      "Translator hoạt động trên macOS và Windows. Tải xuống, dán URL của video này và xem quy trình hoạt động như thế nào.",
    aboutTitle: "Về bài viết này",
    aboutBody: [
      "Video YouTube chính thức. 30 giây đầu có phụ đề bằng tiếng Anh, tiếng Hàn hoặc tiếng Bồ Đào Nha.",
      "Nguồn: The Wild Project #376. Video bằng tiếng Tây Ban Nha.",
    ],
  },
};
