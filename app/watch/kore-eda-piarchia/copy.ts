interface WatchPageCopy {
  title: string; description: string; keywords: string[]; h1: string; intro: string;
  section1Title: string; section1Body: string[]; howToTitle: string; howToBody: string;
  howToSteps: Array<{title: string; body: string}>; pricingTitle: string;
  pricingFree: string; pricingPaid: string; section2Title: string; section2Body: string[];
  downloadTitle: string; downloadBody: string; aboutTitle: string; aboutBody: string[];
}

type SupportedLocale = "en" | "es" | "ko" | "pt" | "vi";

export const koreEdaPiarchiaCopy: Record<SupportedLocale, WatchPageCopy> = {
  en: {
  "title": "Watch Hirokazu Kore-eda on Lee Dong-jin's Piarchia with English Subtitles | Translator",
  "description": "Hirokazu Kore-eda and critic Lee Dong-jin revisit eight films on Piarchia, with Korean questions and Japanese responses. A 30-second caption sample and a guide to the original interview’s chapters.",
  "keywords": [
    "Hirokazu Kore-eda interview",
    "Kore-eda",
    "Lee Dong-jin",
    "Shoplifters",
    "고레에다 히로카즈"
  ],
  "h1": "Watch Hirokazu Kore-eda Look Back at His Film Career",
  "intro": "Hirokazu Kore-eda joins film critic Lee Dong-jin on Piarchia to revisit eight films. The interview includes Korean and Japanese speech. This page offers a 30-second caption sample and a chapter guide to the full original.",
  "section1Title": "A director looking back",
  "section1Body": [
  "Lee Dong-jin organizes this conversation around eight films, from After Life to Monster. The creator’s chapter list moves through individual works rather than presenting a single overview of Kore-eda’s career. The full source runs 46 minutes 38 seconds; the player here stops after the opening 30 seconds."
],
  "howToTitle": "How to watch the full interview with English subtitles",
  "howToBody": "Translator is a desktop app that lets you download videos, add translated subtitles, and watch them in your language. Here's the workflow:",
  "howToSteps": [
  {
    "title": "Paste the YouTube URL",
    "body": "Copy the video link and paste it into Translator's download field."
  },
  {
    "title": "Download the video",
    "body": "Translator pulls down the video and any available captions. This is free and happens on your machine."
  },
  {
    "title": "Transcribe or translate",
    "body": "Check the language and coverage of the available captions before translating. The full interview includes Korean and Japanese speech. You can transcribe missing speech with AI, review the result, and translate it using Stage5 credits or your own supported API key."
  },
  {
    "title": "Watch with subtitles you control",
    "body": "The app plays the video with your translated subtitles. You can edit the timing, fix translations, choose subtitle styles, and export the final SRT file."
  }
],
  "pricingTitle": "What's free, what's paid",
  "pricingFree": "Downloading videos, managing your library, editing subtitles manually, and exporting SRT files.",
  "pricingPaid": "AI transcription and translation. You can use Stage5 credits (example: $1 for ~50 minutes, $10 for ~18 hours) or unlock BYO once for $10 and bring your own API key from OpenAI or Anthropic to pay them directly.",
  "section2Title": "A chapter guide and a subtitle check",
  "section2Body": [
  "In the original video, After Life begins at 05:27, Nobody Knows at 11:34, Shoplifters at 39:23 and Monster at 42:40. Use those chapter points to find a discussion of a film you know; they are positions in the full source, beyond this page’s sample.",
  "For translated captions, distinguish Lee’s Korean questions from Kore-eda’s Japanese replies. Keep each film title consistent with its released title in the language you are reading. A Korean source label or the opening sample does not establish the spoken language of every later answer."
],
  "downloadTitle": "Download Translator",
  "downloadBody": "Translator works on macOS and Windows. Download it, paste this video's URL, and see how the workflow feels. The download and subtitle editor are free to use.",
  "aboutTitle": "About this post",
  "aboutBody": [
  "The video is embedded from the official Piarchia source. English, Spanish and Portuguese caption overlays cover the first 30 seconds only. Korean and Vietnamese page text does not add matching overlay tracks. The captions were made in Translator and are not YouTube automatic captions.",
  "Source: Lee Dong-jin’s Piarchia, featuring Hirokazu Kore-eda. Published May 9, 2025. Korean and Japanese speech. Duration: 46:38. Chapter positions come from the creator’s description."
]
},
  es: {
    title: "Ver Entrevista a Kore-eda | Translator",
    description: "El director Hirokazu Kore-eda discute su carrera cinematográfica con el crítico Lee Dong-jin.",
    keywords: ["Kore-eda entrevista", "Shoplifters"],
    h1: "Hirokazu Kore-eda Mira Hacia Atrás en Su Carrera",
    intro: "El director Hirokazu Kore-eda se sienta con el crítico Lee Dong-jin para rastrear el arco de su vida cinematográfica.",
    section1Title: "Un director mirando atrás",
    section1Body: [
  "Lee Dong-jin organiza esta conversación en torno a ocho películas, desde After Life hasta Monster. Los capítulos del creador recorren obras concretas, en lugar de ofrecer un único resumen de la carrera de Kore-eda. El original dura 46 minutos y 38 segundos; el reproductor de esta página se detiene tras los primeros 30 segundos."
],
    howToTitle: "Cómo ver con subtítulos",
    howToBody: "Translator descarga videos y añade subtítulos.",
    howToSteps: [{title: "Pega URL", body: "Copia el enlace."}, {title: "Descarga", body: "Baja el video."}, {title: "Traduce", body: "Usa IA."}, {title: "Ve", body: "Edita."}],
    pricingTitle: "Gratis y de pago",
    pricingFree: "Descargar, editar, exportar.",
    pricingPaid: "IA requiere créditos Stage5 o API key.",
    section2Title: "Guía de capítulos y revisión de subtítulos",
    section2Body: [
  "En el video original, After Life empieza en 05:27, Nobody Knows en 11:34, Shoplifters en 39:23 y Monster en 42:40. Estos puntos permiten encontrar la conversación sobre una película que conozcas; pertenecen al original completo y quedan fuera de la muestra de esta página.",
  "Al revisar los subtítulos traducidos, distingue las preguntas en coreano de Lee de las respuestas en japonés de Kore-eda. Mantén cada título de película coherente con su título de estreno en tu idioma. La etiqueta de origen coreano o la muestra inicial no determina el idioma de todas las respuestas posteriores."
],
    downloadTitle: "Descarga Translator",
    downloadBody: "Funciona en macOS y Windows.",
    aboutTitle: "Sobre este post",
    aboutBody: [
  "El video está insertado desde la fuente oficial de Piarchia. Las pistas en inglés, español y portugués cubren solo los primeros 30 segundos. El texto de la página en coreano y vietnamita no añade pistas en esos idiomas. Los subtítulos se hicieron en Translator; no son los automáticos de YouTube.",
  "Fuente: Piarchia de Lee Dong-jin, con Hirokazu Kore-eda. Publicado el 9 de mayo de 2025. Se habla coreano y japonés. Duración: 46:38. Los puntos de capítulo proceden de la descripción del creador."
]
  },
  ko: {
    title: "고레에다 히로카즈 감독 인터뷰 보기 | Translator",
    description: "고레에다 히로카즈 감독이 영화평론가 이동진과 함께 그의 영화 경력에 대해 이야기합니다.",
    keywords: ["고레에다 히로카즈", "이동진 파이아키아"],
    h1: "고레에다 히로카즈 감독의 영화 인생 회고",
    intro: "고레에다 히로카즈 감독이 평론가 이동진과 함께 그의 영화 인생의 궤적을 되짚습니다.",
    section1Title: "되돌아보는 감독",
    section1Body: [
  "이동진은 원더풀 라이프부터 괴물까지 여덟 편의 영화를 중심으로 대화를 이끕니다. 제작자가 제공한 챕터는 고레에다의 경력을 한 번에 요약하기보다 개별 작품을 차례로 다룹니다. 원본은 46분 38초이며, 이 페이지의 플레이어는 처음 30초까지만 재생합니다."
],
    howToTitle: "자막과 함께 보는 방법",
    howToBody: "Translator는 영상을 다운로드하고 자막을 추가합니다.",
    howToSteps: [{title: "URL", body: "링크 복사."}, {title: "다운로드", body: "영상 가져오기."}, {title: "번역", body: "AI 사용."}, {title: "시청", body: "편집."}],
    pricingTitle: "무료와 유료",
    pricingFree: "다운로드, 편집, 내보내기.",
    pricingPaid: "AI는 크레딧 필요.",
    section2Title: "챕터 안내와 자막 확인 방법",
    section2Body: [
  "원본 영상에서 원더풀 라이프는 05:27, 아무도 모른다는 11:34, 어느 가족은 39:23, 괴물은 42:40부터 시작합니다. 아는 영화의 이야기를 찾아갈 때 참고하세요. 이 시점들은 전체 원본의 위치로, 이 페이지의 샘플 범위를 벗어납니다.",
  "번역 자막을 확인할 때는 이동진의 한국어 질문과 고레에다의 일본어 답변을 구분하세요. 영화 제목은 읽는 언어의 개봉명과 일관되게 맞추는 것이 좋습니다. 한국어라는 원본 언어 표시나 도입부 샘플만으로 이후 답변도 모두 한국어라고 판단할 수는 없습니다."
],
    downloadTitle: "Translator 다운로드",
    downloadBody: "macOS와 Windows 지원.",
    aboutTitle: "게시물 정보",
    aboutBody: [
  "공식 파이아키아 원본을 삽입한 영상입니다. 영어·스페인어·포르투갈어 자막은 처음 30초에만 제공됩니다. 한국어·베트남어 페이지가 있다고 해서 해당 언어의 자막 트랙도 제공되는 것은 아닙니다. 자막은 Translator에서 제작했으며 YouTube 자동 자막이 아닙니다.",
  "출처: 이동진의 파이아키아, 고레에다 히로카즈 출연. 2025년 5월 9일 게시. 한국어와 일본어가 사용됩니다. 길이: 46:38. 챕터 위치는 제작자의 영상 설명을 기준으로 합니다."
]
  },
  pt: {
    title: "Assistir Entrevista com Kore-eda | Translator",
    description: "O diretor Hirokazu Kore-eda discute sua carreira cinematográfica com o crítico Lee Dong-jin.",
    keywords: ["Kore-eda entrevista", "Shoplifters"],
    h1: "Hirokazu Kore-eda Olha Para Trás em Sua Carreira",
    intro: "O diretor Hirokazu Kore-eda se senta com o crítico Lee Dong-jin para rastrear o arco de sua vida cinematográfica.",
    section1Title: "Um diretor olhando para trás",
    section1Body: [
  "Lee Dong-jin organiza a conversa em torno de oito filmes, de After Life a Monster. Os capítulos do criador percorrem obras específicas, em vez de apresentar um único resumo da carreira de Kore-eda. O original dura 46 minutos e 38 segundos; o player desta página para após os primeiros 30 segundos."
],
    howToTitle: "Como assistir com legendas",
    howToBody: "Translator baixa vídeos e adiciona legendas.",
    howToSteps: [{title: "Cole URL", body: "Copie o link."}, {title: "Baixe", body: "Baixe o vídeo."}, {title: "Traduza", body: "Use IA."}, {title: "Assista", body: "Edite."}],
    pricingTitle: "Grátis e pago",
    pricingFree: "Baixar, editar, exportar.",
    pricingPaid: "IA requer créditos Stage5 ou API key.",
    section2Title: "Guia de capítulos e revisão das legendas",
    section2Body: [
  "No vídeo original, After Life começa em 05:27, Nobody Knows em 11:34, Shoplifters em 39:23 e Monster em 42:40. Use esses pontos para encontrar a conversa sobre um filme que conhece; são posições no original completo, além da amostra desta página.",
  "Ao revisar legendas traduzidas, diferencie as perguntas de Lee em coreano das respostas de Kore-eda em japonês. Mantenha cada título de filme consistente com o título de lançamento no idioma que você lê. A indicação de coreano ou a amostra inicial não determina o idioma de todas as respostas posteriores."
],
    downloadTitle: "Baixe Translator",
    downloadBody: "Funciona no macOS e Windows.",
    aboutTitle: "Sobre este post",
    aboutBody: [
  "O vídeo está incorporado da fonte oficial do Piarchia. As legendas em inglês, espanhol e português cobrem apenas os primeiros 30 segundos. O texto da página em coreano e vietnamita não acrescenta faixas nesses idiomas. As legendas foram feitas no Translator e não são as automáticas do YouTube.",
  "Fonte: Piarchia de Lee Dong-jin, com Hirokazu Kore-eda. Publicado em 9 de maio de 2025. Falas em coreano e japonês. Duração: 46:38. As posições dos capítulos vêm da descrição do criador."
]
  },
  vi: {
    title: "Hirokazu Kore-eda trên Piarchia: xem trước 30 giây | Translator",
    description: "Hirokazu Kore-eda nói về sự nghiệp làm phim với Lee Dong-jin. Bản xem trước có phụ đề tiếng Anh, Tây Ban Nha hoặc Bồ Đào Nha; chưa có tiếng Việt.",
    keywords: ["Hirokazu Kore-eda", "Lee Dong-jin", "Piarchia", "phỏng vấn tiếng Hàn", "đạo diễn Nhật Bản"],
    h1: "Xem Hirokazu Kore-eda Thảo Luận Về Sự Nghiệp Làm Phim",
    intro: "Đạo diễn Hirokazu Kore-eda thảo luận về sự nghiệp làm phim với nhà phê bình Lee Dong-jin trong cuộc phỏng vấn tiếng Hàn đáng xem.",
    section1Title: "Cuộc phỏng vấn bằng tiếng Hàn",
    section1Body: [
  "Lee Dong-jin dẫn dắt cuộc trò chuyện qua tám bộ phim, từ After Life đến Monster. Các chương do nhà sáng tạo cung cấp lần lượt đi vào từng tác phẩm, thay vì chỉ tóm tắt sự nghiệp của Kore-eda. Video gốc dài 46 phút 38 giây; trình phát trên trang này dừng sau 30 giây đầu."
],
    howToTitle: "Cách xem với phụ đề tiếng Việt",
    howToBody: "Translator là ứng dụng desktop tải video, thêm phụ đề dịch và cho phép xem bằng ngôn ngữ của bạn.",
    howToSteps: [{title: "Dán URL YouTube", body: "Sao chép liên kết video và dán vào trường tải xuống."}, {title: "Tải video", body: "Translator tải xuống video."}, {title: "Phiên âm hoặc dịch", body: "Sử dụng AI để phiên âm hoặc dịch."}, {title: "Xem với phụ đề", body: "Chỉnh sửa thời gian, sửa bản dịch và xuất tệp SRT."}],
    pricingTitle: "Miễn phí và trả phí",
    pricingFree: "Tải video, quản lý thư viện, chỉnh sửa phụ đề thủ công và xuất tệp SRT.",
    pricingPaid: "Phiên âm và dịch AI. Sử dụng tín dụng Stage5 hoặc mở khóa BYO một lần với $10.",
    section2Title: "Hướng dẫn chương và kiểm tra phụ đề",
    section2Body: [
  "Trong video gốc, After Life bắt đầu ở 05:27, Nobody Knows ở 11:34, Shoplifters ở 39:23 và Monster ở 42:40. Dùng các mốc này để tìm phần trò chuyện về bộ phim bạn biết; đây là vị trí trong bản gốc đầy đủ, nằm ngoài đoạn mẫu trên trang này.",
  "Khi kiểm tra phụ đề dịch, hãy phân biệt câu hỏi bằng tiếng Hàn của Lee với câu trả lời bằng tiếng Nhật của Kore-eda. Giữ tên phim nhất quán với tên phát hành trong ngôn ngữ bạn đang đọc. Nhãn tiếng Hàn hoặc đoạn mở đầu không xác định ngôn ngữ của mọi câu trả lời về sau."
],
    downloadTitle: "Tải Translator",
    downloadBody: "Hoạt động trên macOS và Windows.",
    aboutTitle: "Về bài viết này",
    aboutBody: [
  "Video được nhúng từ nguồn Piarchia chính thức. Phụ đề tiếng Anh, Tây Ban Nha và Bồ Đào Nha chỉ bao gồm 30 giây đầu. Nội dung trang bằng tiếng Hàn và tiếng Việt không có nghĩa là có thêm phụ đề ở hai ngôn ngữ đó. Phụ đề được tạo bằng Translator, không phải phụ đề tự động của YouTube.",
  "Nguồn: Piarchia của Lee Dong-jin, với Hirokazu Kore-eda. Đăng ngày 9 tháng 5 năm 2025. Có lời nói bằng tiếng Hàn và tiếng Nhật. Thời lượng: 46:38. Mốc chương lấy từ phần mô tả của nhà sáng tạo."
]
  }
};
