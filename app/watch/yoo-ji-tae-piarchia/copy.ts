interface WatchPageCopy {
  title: string; description: string; keywords: string[];
  h1: string; intro: string;
  section1Title: string; section1Body: string[];
  howToTitle: string; howToBody: string;
  howToSteps: Array<{ title: string; body: string }>;
  pricingTitle: string; pricingFree: string; pricingPaid: string;
  section2Title: string; section2Body: string[];
  downloadTitle: string; downloadBody: string;
  aboutTitle: string; aboutBody: string[];
}

type SupportedLocale = "en" | "es" | "ko" | "pt" | "vi";

export const yooJiTaePiarchiaCopy: Record<SupportedLocale, WatchPageCopy> = {
  en: {
  title: "Yoo Ji-tae on Piarchia: 30-second subtitle demo | Stage5",
  description: "Explore a 30-second Yoo Ji-tae interview teaser with English, Spanish or Portuguese captions and editing notes on film titles, speaker changes and context.",
  keywords: [
    "Yoo Ji-tae interview",
    "Oldboy",
    "One Fine Spring Day",
    "Lee Dong-jin"
  ],
  h1: "Watch Yoo Ji-tae Talk About One Fine Spring Day and Oldboy",
  intro: "This Piarchia opening is an edited teaser: Yoo Ji-tae moves from improvisation in One Fine Spring Day to acting choices and his Oldboy character. The 30-second sample has English, Spanish and Portuguese captions. It is a sequence of excerpts, so adjacent lines do not necessarily belong to the same exchange.",
  section1Title: "Two films, different parts of the interview",
  section1Body: [
      "In the creator's chapter list, One Fine Spring Day starts at 04:05 and Hur Jin-ho's directing style at 10:55. Oldboy begins at 28:13, with a chapter on Lee Woo-jin at 38:53. Follow the original-video link for these parts of the hour-long Korean interview.",
      "The teaser moves quickly between film titles, the actor's own experience and a character's name. Use the chapters to recover context before interpreting a clipped remark. The full discussion includes plot and character details that may reveal parts of either film."
    ],
  howToTitle: "How to watch the full interview with English subtitles",
  howToBody: "Translator is a desktop app that lets you download videos, add translated subtitles, and watch them in your language. Here's the workflow:",
  howToSteps: [
    {
      title: "Paste the YouTube URL",
      body: "Copy the video link and paste it into Translator's download field."
    },
    {
      title: "Download the video",
      body: "Translator pulls down the video and any available captions. This is free and happens on your machine."
    },
    {
      title: "Transcribe or translate",
      body: "If the video doesn't have Korean captions, you can transcribe it using AI. If it does, you can translate those captions."
    },
    {
      title: "Watch with subtitles you control",
      body: "The app plays the video with your translated subtitles. You can edit the timing, fix translations, and export the final SRT file."
    }
  ],
  pricingTitle: "What's free, what's paid",
  pricingFree: "Downloading videos, managing your library, editing subtitles manually, and exporting SRT files.",
  pricingPaid: "AI transcription and translation. You can use Stage5 credits or unlock BYO once for $10.",
  section2Title: "Keep context across an edit",
  section2Body: [
      "When a trailer cuts from an answer to a different question, a smooth translation can accidentally imply a connection that the edit never establishes. Watch for speaker changes and film titles before joining short captions into a longer sentence.",
      "Try marking the opening's subject changes on paper: improvisation, performing a scene, and Lee Woo-jin. Then check whether each subtitle still makes sense on its own. In Translator, practise separating or shortening captions on a video you can use. Keep the film and character names consistent, and leave uncertain names for a source check rather than guessing."
    ],
  downloadTitle: "Download Translator",
  downloadBody: "Translator works on macOS and Windows. Download it, paste this video's URL, and see how the workflow feels.",
  aboutTitle: "About this post",
  aboutBody: [
    "The YouTube video is embedded directly from the official source. The first 30 seconds of captions can be displayed in English, Spanish, or Portuguese.",
    "Source: Lee Dong-jin's Piarchia, featuring actor Yoo Ji-tae. Video is in Korean. Duration: 1:02:25."
  ]
},
  es: { title: "Yoo Ji-tae en Piarchia: demo de subtítulos de 30 segundos | Stage5", description: "Explora un avance de 30 segundos con Yoo Ji-tae, subtítulos en inglés, español o portugués y consejos para conservar el contexto entre cortes.", keywords: ["Yoo Ji-tae"], h1: "Yoo Ji-tae y Dos Películas Clásicas", intro: "El inicio de Piarchia es un avance montado con varios fragmentos: Yoo Ji-tae pasa de la improvisación en One Fine Spring Day a sus decisiones interpretativas y su personaje de Oldboy. La muestra de 30 segundos tiene subtítulos en inglés, español y portugués. Dos frases consecutivas no tienen por qué pertenecer al mismo intercambio.", section1Title: "Dos películas, distintas partes de la entrevista", section1Body: [
      "En los capítulos del canal, One Fine Spring Day empieza en 04:05 y el estilo de dirección de Hur Jin-ho en 10:55. Oldboy comienza en 28:13, con un capítulo sobre Lee Woo-jin en 38:53. Usa el enlace al video original para encontrar estas partes de la entrevista en coreano, de aproximadamente una hora.",
      "El avance alterna rápidamente entre títulos de películas, la experiencia del actor y el nombre de un personaje. Consulta los capítulos para recuperar el contexto antes de interpretar un fragmento aislado. La conversación completa incluye detalles del argumento y los personajes que pueden revelar partes de ambas películas."
    ], howToTitle: "Cómo ver con subtítulos", howToBody: "Translator es una app que descarga videos y añade subtítulos. Así funciona:", howToSteps: [{title: "Pega URL", body: "Copia el enlace del video."}, {title: "Descarga", body: "Translator baja el video."}, {title: "Transcribe o traduce", body: "Usa IA para transcribir o traducir."}, {title: "Ve con subtítulos", body: "Edita y exporta subtítulos."}], pricingTitle: "Qué es gratis", pricingFree: "Descargar, editar, exportar.", pricingPaid: "IA requiere créditos Stage5 o API key.", section2Title: "Conserva el contexto entre cortes", section2Body: [
      "Si un avance corta de una respuesta a otra pregunta, una traducción demasiado fluida puede sugerir una conexión que el montaje no establece. Fíjate en los cambios de hablante y en los títulos antes de unir subtítulos breves en una frase más larga.",
      "Anota los cambios de tema del inicio: improvisación, interpretación de una escena y Lee Woo-jin. Comprueba después si cada subtítulo se entiende por sí solo. En Translator, practica cómo separar o acortar subtítulos con un video que puedas utilizar. Mantén constantes los nombres de películas y personajes; verifica los nombres dudosos en la fuente en vez de adivinarlos."
    ], downloadTitle: "Descarga Translator", downloadBody: "Funciona en macOS y Windows.", aboutTitle: "Sobre este post", aboutBody: ["Video de YouTube oficial. Primeros 30s con subtítulos."] },
  ko: { title: "유지태의 파이아키아 인터뷰: 30초 자막 데모 | Stage5", description: "유지태 인터뷰 예고편의 첫 30초를 영어·스페인어·포르투갈어 자막으로 살펴보세요. 장면 전환과 인물 이름의 맥락을 지키는 편집 연습을 제공합니다.", keywords: ["Yoo Ji-tae"], h1: "유지태의 봄날은 간다와 올드보이 이야기", intro: "파이아키아의 이 도입부는 여러 대목을 이어 붙인 예고편입니다. 유지태는 봄날은 간다의 즉흥 대사부터 연기 방식, 올드보이 속 인물까지 이야기합니다. 30초 샘플에는 영어·스페인어·포르투갈어 자막이 있습니다. 서로 이웃한 문장이라도 같은 문답에서 나온 것은 아닐 수 있습니다.", section1Title: "두 영화, 서로 다른 인터뷰 구간", section1Body: [
      "채널의 챕터 목록에서 봄날은 간다는 04:05, 허진호 감독의 연출 스타일은 10:55부터입니다. 올드보이는 28:13부터 시작하며, 38:53에는 이우진에 관한 챕터가 있습니다. 약 한 시간 길이의 한국어 인터뷰에서 이 부분을 보려면 원본 영상 링크를 이용하세요.",
      "예고편은 영화 제목, 배우 본인의 경험, 배역 이름 사이를 빠르게 오갑니다. 짧게 잘린 발언을 해석하기 전에 챕터를 따라 맥락을 확인하세요. 전체 대화에는 두 영화의 줄거리와 인물에 관한 스포일러가 포함될 수 있습니다."
    ], howToTitle: "자막과 함께 보는 방법", howToBody: "Translator는 영상을 다운로드하고 자막을 추가하는 앱입니다:", howToSteps: [{title: "URL 붙여넣기", body: "영상 링크를 복사합니다."}, {title: "다운로드", body: "Translator가 영상을 가져옵니다."}, {title: "전사 또는 번역", body: "AI로 전사하거나 번역합니다."}, {title: "자막으로 시청", body: "편집하고 내보냅니다."}], pricingTitle: "무료 기능", pricingFree: "다운로드, 편집, 내보내기.", pricingPaid: "AI는 Stage5 크레딧 또는 API 키 필요.", section2Title: "장면이 바뀌어도 맥락을 지키세요", section2Body: [
      "어떤 답변 다음에 다른 질문이 편집되어 붙으면, 매끄럽게 번역한 문장이 원래 없던 인과관계를 만들 수 있습니다. 짧은 자막을 긴 문장으로 합치기 전에 말하는 사람과 영화 제목이 바뀌는지 살펴보세요.",
      "도입부의 주제 변화를 종이에 적어 보세요. 즉흥 대사, 장면 연기, 이우진 순으로 구분한 뒤 각 자막을 따로 읽어도 뜻이 통하는지 확인합니다. 사용 가능한 영상으로 Translator에서 자막을 나누거나 줄이는 연습을 해 보세요. 영화와 인물 이름은 일관되게 쓰고, 불확실한 이름은 추측하지 말고 원본에서 확인하세요."
    ], downloadTitle: "Translator 다운로드", downloadBody: "macOS와 Windows에서 작동합니다.", aboutTitle: "게시물 정보", aboutBody: ["공식 YouTube 영상. 처음 30초 자막 포함."] },
  pt: { title: "Yoo Ji-tae no Piarchia: demo de legendas de 30 segundos | Stage5", description: "Explore uma prévia de 30 segundos com Yoo Ji-tae, legendas em inglês, espanhol ou português e dicas para preservar o contexto entre cortes.", keywords: ["Yoo Ji-tae"], h1: "Yoo Ji-tae e Dois Filmes Clássicos", intro: "A abertura do Piarchia é uma montagem de trechos: Yoo Ji-tae passa da improvisação em One Fine Spring Day às escolhas de atuação e ao seu personagem de Oldboy. A amostra de 30 segundos tem legendas em inglês, espanhol e português. Frases consecutivas podem vir de momentos diferentes da conversa.", section1Title: "Dois filmes, diferentes partes da entrevista", section1Body: [
      "Nos capítulos do canal, One Fine Spring Day começa em 04:05 e o estilo de direção de Hur Jin-ho em 10:55. Oldboy começa em 28:13, com um capítulo sobre Lee Woo-jin em 38:53. Use o link do vídeo original para encontrar essas partes da entrevista em coreano, de aproximadamente uma hora.",
      "A prévia alterna rapidamente entre títulos de filmes, a experiência do ator e o nome de um personagem. Consulte os capítulos para recuperar o contexto antes de interpretar uma fala isolada. A conversa completa inclui detalhes de trama e personagens que podem revelar partes dos dois filmes."
    ], howToTitle: "Como assistir com legendas", howToBody: "Translator é um app que baixa vídeos e adiciona legendas. Veja como:", howToSteps: [{title: "Cole URL", body: "Copie o link do vídeo."}, {title: "Baixe", body: "Translator baixa o vídeo."}, {title: "Transcreva ou traduza", body: "Use IA para transcrever ou traduzir."}, {title: "Assista com legendas", body: "Edite e exporte legendas."}], pricingTitle: "O que é grátis", pricingFree: "Baixar, editar, exportar.", pricingPaid: "IA requer créditos Stage5 ou API key.", section2Title: "Preserve o contexto entre os cortes", section2Body: [
      "Quando uma prévia corta de uma resposta para outra pergunta, uma tradução muito fluida pode sugerir uma ligação que a edição não estabelece. Observe as mudanças de interlocutor e os títulos antes de unir legendas curtas em uma frase maior.",
      "Anote as mudanças de assunto da abertura: improvisação, atuação em uma cena e Lee Woo-jin. Depois confira se cada legenda faz sentido sozinha. No Translator, pratique separar ou encurtar legendas com um vídeo que você possa utilizar. Mantenha os nomes de filmes e personagens consistentes e confira nomes duvidosos na fonte, em vez de adivinhar."
    ], downloadTitle: "Baixe Translator", downloadBody: "Funciona no macOS e Windows.", aboutTitle: "Sobre este post", aboutBody: ["Vídeo oficial do YouTube. Primeiros 30s com legendas."] },
  vi: { title: "Yoo Ji-tae trên Piarchia: mẫu phụ đề 30 giây | Stage5", description: "Xem đoạn giới thiệu Yoo Ji-tae dài 30 giây với phụ đề Anh, Tây Ban Nha hoặc Bồ Đào Nha và cách giữ ngữ cảnh khi biên tập phụ đề.", keywords: ["Yoo Ji-tae"], h1: "Yoo Ji-tae và Hai Bộ Phim Kinh Điển", intro: "Phần mở đầu Piarchia là đoạn giới thiệu ghép từ nhiều trích đoạn: Yoo Ji-tae nói về ứng tác trong One Fine Spring Day, lựa chọn diễn xuất và nhân vật của mình trong Oldboy. Mẫu 30 giây có phụ đề Anh, Tây Ban Nha và Bồ Đào Nha. Hai câu liền nhau không nhất thiết thuộc cùng một lượt hỏi đáp.", section1Title: "Hai bộ phim, những phần khác nhau của cuộc phỏng vấn", section1Body: [
      "Theo danh sách chương của kênh, One Fine Spring Day bắt đầu ở 04:05 và phong cách chỉ đạo của Hur Jin-ho ở 10:55. Oldboy bắt đầu ở 28:13, với chương về Lee Woo-jin ở 38:53. Theo liên kết đến video gốc để tìm các phần này trong cuộc phỏng vấn tiếng Hàn dài khoảng một giờ.",
      "Đoạn giới thiệu chuyển nhanh giữa tên phim, trải nghiệm của diễn viên và tên nhân vật. Hãy dùng các chương để tìm lại ngữ cảnh trước khi diễn giải một câu bị cắt ngắn. Cuộc trò chuyện đầy đủ có các chi tiết về cốt truyện và nhân vật có thể tiết lộ nội dung của cả hai phim."
    ], howToTitle: "Cách xem với phụ đề", howToBody: "Translator là ứng dụng tải video và thêm phụ đề. Cách hoạt động:", howToSteps: [{title: "Dán URL", body: "Sao chép liên kết video."}, {title: "Tải xuống", body: "Translator tải xuống video."}, {title: "Phiên âm hoặc dịch", body: "Sử dụng AI để phiên âm hoặc dịch."}, {title: "Xem với phụ đề", body: "Chỉnh sửa và xuất phụ đề."}], pricingTitle: "Miễn phí gì", pricingFree: "Tải, chỉnh sửa, xuất.", pricingPaid: "AI yêu cầu tín dụng Stage5 hoặc API key.", section2Title: "Giữ ngữ cảnh khi cảnh quay thay đổi", section2Body: [
      "Khi đoạn giới thiệu cắt từ một câu trả lời sang câu hỏi khác, bản dịch quá liền mạch có thể gợi ra mối liên hệ mà cách dựng không xác lập. Hãy chú ý việc đổi người nói và tên phim trước khi ghép các phụ đề ngắn thành câu dài hơn.",
      "Thử ghi lại các chủ đề ở phần mở đầu: ứng tác, diễn một cảnh và Lee Woo-jin. Sau đó kiểm tra xem từng phụ đề có rõ nghĩa khi đứng riêng không. Với video bạn có thể sử dụng, hãy luyện tách hoặc rút gọn phụ đề trong Translator. Giữ nhất quán tên phim, tên nhân vật và đối chiếu tên chưa chắc chắn với nguồn thay vì đoán."
    ], downloadTitle: "Tải Translator", downloadBody: "Hoạt động trên macOS và Windows.", aboutTitle: "Về bài viết này", aboutBody: ["Video YouTube chính thức. 30 giây đầu có phụ đề."] }
};
