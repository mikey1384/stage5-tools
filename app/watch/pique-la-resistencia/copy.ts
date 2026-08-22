interface WatchPageCopy {
  title: string; description: string; keywords: string[]; h1: string; intro: string;
  section1Title: string; section1Body: string[]; howToTitle: string; howToBody: string;
  howToSteps: Array<{title: string; body: string}>; pricingTitle: string;
  pricingFree: string; pricingPaid: string; section2Title: string; section2Body: string[];
  downloadTitle: string; downloadBody: string; aboutTitle: string; aboutBody: string[];
}

type SupportedLocale = "en" | "es" | "ko" | "pt" | "vi";

export const piqueLaResistenciaCopy: Record<SupportedLocale, WatchPageCopy> = {
  en: {
  "title": "Watch Gerard Piqué on La Resistencia with English Subtitles | Translator",
  "description": "Barcelona defender Gerard Piqué sits down with David Broncano for a Spanish late-night interview that starts crude and gets interesting.",
  "keywords": [
    "Gerard Piqué interview",
    "La Resistencia",
    "David Broncano",
    "Spanish interview"
  ],
  "h1": "Watch Gerard Piqué on Spanish Late-Night Television",
  "intro": "Barcelona defender Gerard Piqué invited himself onto David Broncano's late-night show via Twitter, showed up at Teatro Arlequín, and sat through a Spanish interview that starts with jokes most English speakers will never hear.",
  "section1Title": "A footballer walks into a late-night show",
  "section1Body": [
    "La Resistencia is one of Spain's most-watched late-night comedy shows. Host David Broncano is known for crude humor and unpredictable interviews. Gerard Piqué—at the time still playing for FC Barcelona—saw a joke exchange on Twitter and invited himself on.",
    "The conversation moves through football, money, celebrity, and Piqué's business ventures. Broncano's opening is deliberately provocative, which is part of the show's format. Later in the interview, Piqué made headlines by saying his net worth was bigger than RCD Espanyol's budget—a comment that became its own news cycle in Spanish sports media.",
    "The interview is in Spanish. English speakers miss the tone, the timing, and the entire setup that makes Spanish late-night comedy work."
  ],
  "howToTitle": "How to watch the full interview with English subtitles",
  "howToBody": "Translator is a desktop app that lets you download videos, add translated subtitles, and watch them in your language.",
  "howToSteps": [
    {
      "title": "Paste the YouTube URL",
      "body": "Copy the video link and paste it into Translator's download field."
    },
    {
      "title": "Download the video",
      "body": "Translator pulls down the video and any available captions."
    },
    {
      "title": "Transcribe or translate",
      "body": "Use AI to transcribe or translate the captions."
    },
    {
      "title": "Watch with subtitles you control",
      "body": "Edit the timing, fix translations, and export the final SRT file."
    }
  ],
  "pricingTitle": "What's free, what's paid",
  "pricingFree": "Downloading videos, managing your library, editing subtitles manually, and exporting SRT files.",
  "pricingPaid": "AI transcription and translation. Use Stage5 credits or unlock BYO once for $10.",
  "section2Title": "Spanish sports media in English",
  "section2Body": [
    "Spain produces some of the best football content on YouTube—interviews, analysis, documentaries. Most of it doesn't have English subtitles.",
    "Translator gives you control: choose your translation model, edit the subtitles line by line, and export the final file."
  ],
  "downloadTitle": "Download Translator",
  "downloadBody": "Translator works on macOS and Windows. Download it, paste this video's URL, and see how the workflow feels.",
  "aboutTitle": "About this post",
  "aboutBody": [
    "The YouTube video is embedded directly from the official source. The first 30 seconds of captions can be displayed in English, Korean, or Portuguese.",
    "Source: La Resistencia, hosted by David Broncano, featuring Gerard Piqué. Published March 28, 2019. Video is in Spanish."
  ]
},
  es: {
  "title": "Ver a Gerard Piqué en La Resistencia con Subtítulos en Español | Translator",
  "description": "El defensa del Barcelona Gerard Piqué se sienta con David Broncano para una entrevista nocturna española que empieza cruda y se vuelve interesante.",
  "keywords": [
    "Gerard Piqué entrevista",
    "La Resistencia",
    "David Broncano",
    "entrevista española"
  ],
  "h1": "Ver a Gerard Piqué en la Televisión Nocturna Española",
  "intro": "El defensa del Barcelona Gerard Piqué se autoinvitó al programa de David Broncano vía Twitter, apareció en el Teatro Arlequín y se sometió a una entrevista española que empieza con bromas que la mayoría de los hispanohablantes no escucharán nunca.",
  "section1Title": "Un futbolista entra en un programa nocturno",
  "section1Body": [
    "La Resistencia es uno de los programas nocturnos de comedia más vistos de España. El presentador David Broncano es conocido por su humor crudo y entrevistas impredecibles. Gerard Piqué—en ese momento todavía jugando para el FC Barcelona—vio un intercambio de bromas en Twitter y se autoinvitó.",
    "La conversación recorre el fútbol, el dinero, la fama y los negocios de Piqué. La apertura de Broncano es deliberadamente provocativa, lo cual es parte del formato del programa. Más adelante en la entrevista, Piqué hizo titulares al decir que su patrimonio neto era mayor que el presupuesto del RCD Espanyol—un comentario que se convirtió en su propio ciclo de noticias en los medios deportivos españoles.",
    "La entrevista está en español. Los hispanohablantes pierden el tono, el timing y toda la configuración que hace que la comedia nocturna española funcione."
  ],
  "howToTitle": "Cómo ver la entrevista completa con subtítulos en español",
  "howToBody": "Translator es una aplicación de escritorio que te permite descargar videos, añadir subtítulos traducidos y verlos en tu idioma.",
  "howToSteps": [
    {
      "title": "Pega la URL de YouTube",
      "body": "Copia el enlace del video y pégalo en el campo de descarga de Translator."
    },
    {
      "title": "Descarga el video",
      "body": "Translator descarga el video y cualquier subtítulo disponible."
    },
    {
      "title": "Transcribe o traduce",
      "body": "Usa IA para transcribir o traducir los subtítulos."
    },
    {
      "title": "Ve con subtítulos que controlas",
      "body": "Edita el tiempo, corrige traducciones y exporta el archivo SRT final."
    }
  ],
  "pricingTitle": "Qué es gratis, qué es de pago",
  "pricingFree": "Descargar videos, gestionar tu biblioteca, editar subtítulos manualmente y exportar archivos SRT.",
  "pricingPaid": "Transcripción y traducción con IA. Usa créditos Stage5 o desbloquea BYO una vez por $10.",
  "section2Title": "Medios deportivos españoles en español",
  "section2Body": [
    "España produce algunos de los mejores contenidos de fútbol en YouTube—entrevistas, análisis, documentales. La mayoría no tiene subtítulos en español.",
    "Translator te da el control: elige tu modelo de traducción, edita los subtítulos línea por línea y exporta el archivo final."
  ],
  "downloadTitle": "Descarga Translator",
  "downloadBody": "Translator funciona en macOS y Windows. Descárgalo, pega la URL de este video y prueba cómo funciona el flujo de trabajo.",
  "aboutTitle": "Sobre este post",
  "aboutBody": [
    "El video de YouTube está incrustado directamente desde la fuente oficial. Los primeros 30 segundos de subtítulos se pueden mostrar en inglés, coreano o portugués.",
    "Fuente: La Resistencia, presentado por David Broncano, con Gerard Piqué. Publicado el 28 de marzo de 2019. El video está en español."
  ]
},
  ko: {
  "title": "제라르 피케 라 레시스텐시아 인터뷰를 한국어 자막으로 시청하기 | Translator",
  "description": "바르셀로나 수비수 제라르 피케가 다비드 브론카노와 함께하는 스페인 심야 인터뷰로, 거칠게 시작해서 흥미로워집니다.",
  "keywords": [
    "제라르 피케 인터뷰",
    "라 레시스텐시아",
    "다비드 브론카노",
    "스페인 인터뷰"
  ],
  "h1": "스페인 심야 텔레비전에 출연한 제라르 피케 시청하기",
  "intro": "바르셀로나 수비수 제라르 피케가 트위터를 통해 자신을 초대하고, 테아트로 아를레킨에 나타나, 대부분의 한국어 사용자들이 절대 듣지 못할 농담으로 시작하는 스페인 인터뷰를 받았습니다.",
  "section1Title": "축구선수가 심야 프로그램에 출연하다",
  "section1Body": [
    "라 레시스텐시아는 스페인에서 가장 많이 시청되는 심야 코미디 프로그램 중 하나입니다. 진행자 다비드 브론카노는 거친 유머와 예측 불가능한 인터뷰로 유명합니다. 제라르 피케는—당시 여전히 FC 바르셀로나에서 뛰고 있던—트위터에서 농담을 주고받다가 스스로 초대했습니다.",
    "대화는 축구, 돈, 유명인, 피케의 사업 벤처를 다룹니다. 브론카노의 오프닝은 의도적으로 도발적이며, 이는 프로그램 형식의 일부입니다. 인터뷰 후반부에서 피케는 자신의 순자산이 RCD 에스파뇰의 예산보다 크다고 말하여 헤드라인을 장식했습니다—이 발언은 스페인 스포츠 미디어에서 자체 뉴스 사이클이 되었습니다.",
    "인터뷰는 스페인어로 진행됩니다. 한국어 사용자들은 톤, 타이밍, 그리고 스페인 심야 코미디를 작동하게 만드는 전체 설정을 놓치게 됩니다."
  ],
  "howToTitle": "한국어 자막으로 전체 인터뷰를 시청하는 방법",
  "howToBody": "Translator는 영상을 다운로드하고, 번역된 자막을 추가하며, 원하는 언어로 시청할 수 있는 데스크톱 앱입니다.",
  "howToSteps": [
    {
      "title": "YouTube URL 붙여넣기",
      "body": "영상 링크를 복사하여 Translator의 다운로드 필드에 붙여넣습니다."
    },
    {
      "title": "영상 다운로드",
      "body": "Translator가 영상과 사용 가능한 자막을 다운로드합니다."
    },
    {
      "title": "전사 또는 번역",
      "body": "AI를 사용하여 자막을 전사하거나 번역합니다."
    },
    {
      "title": "제어 가능한 자막으로 시청",
      "body": "타이밍을 편집하고, 번역을 수정하며, 최종 SRT 파일을 내보냅니다."
    }
  ],
  "pricingTitle": "무료와 유료 기능",
  "pricingFree": "영상 다운로드, 라이브러리 관리, 수동 자막 편집, SRT 파일 내보내기는 무료입니다.",
  "pricingPaid": "AI 전사 및 번역. Stage5 크레딧을 사용하거나 $10에 BYO를 한 번 잠금 해제하세요.",
  "section2Title": "스페인 스포츠 미디어를 한국어로",
  "section2Body": [
    "스페인은 YouTube에서 최고의 축구 콘텐츠를 제작합니다—인터뷰, 분석, 다큐멘터리. 대부분은 한국어 자막이 없습니다.",
    "Translator는 제어권을 제공합니다: 번역 모델을 선택하고, 자막을 한 줄씩 편집하며, 최종 파일을 내보냅니다."
  ],
  "downloadTitle": "Translator 다운로드",
  "downloadBody": "Translator는 macOS와 Windows에서 작동합니다. 다운로드하고, 이 영상의 URL을 붙여넣고, 워크플로를 체험해보세요.",
  "aboutTitle": "이 게시물에 대하여",
  "aboutBody": [
    "YouTube 영상은 공식 출처에서 직접 삽입되었습니다. 처음 30초의 자막은 영어, 한국어 또는 포르투갈어로 표시할 수 있습니다.",
    "출처: 라 레시스텐시아, 다비드 브론카노 진행, 제라르 피케 출연. 2019년 3월 28일 게시. 영상은 스페인어입니다."
  ]
},
  pt: {
  "title": "Assistir Gerard Piqué em La Resistencia com Legendas em Português | Translator",
  "description": "O defensor do Barcelona Gerard Piqué se senta com David Broncano para uma entrevista noturna espanhola que começa crua e fica interessante.",
  "keywords": [
    "Gerard Piqué entrevista",
    "La Resistencia",
    "David Broncano",
    "entrevista espanhola"
  ],
  "h1": "Assistir Gerard Piqué na Televisão Noturna Espanhola",
  "intro": "O defensor do Barcelona Gerard Piqué se autoconvidou para o programa de David Broncano via Twitter, apareceu no Teatro Arlequín e passou por uma entrevista espanhola que começa com piadas que a maioria dos falantes de português nunca ouvirá.",
  "section1Title": "Um jogador de futebol entra em um programa noturno",
  "section1Body": [
    "La Resistencia é um dos programas noturnos de comédia mais assistidos da Espanha. O apresentador David Broncano é conhecido por seu humor cru e entrevistas imprevisíveis. Gerard Piqué—na época ainda jogando pelo FC Barcelona—viu uma troca de piadas no Twitter e se autoconvidou.",
    "A conversa percorre futebol, dinheiro, celebridade e os empreendimentos comerciais de Piqué. A abertura de Broncano é deliberadamente provocativa, o que faz parte do formato do programa. Mais tarde na entrevista, Piqué fez manchetes ao dizer que seu patrimônio líquido era maior que o orçamento do RCD Espanyol—um comentário que se tornou seu próprio ciclo de notícias na mídia esportiva espanhola.",
    "A entrevista está em espanhol. Falantes de português perdem o tom, o timing e toda a configuração que faz a comédia noturna espanhola funcionar."
  ],
  "howToTitle": "Como assistir a entrevista completa com legendas em português",
  "howToBody": "Translator é um aplicativo de desktop que permite baixar vídeos, adicionar legendas traduzidas e assisti-los no seu idioma.",
  "howToSteps": [
    {
      "title": "Cole a URL do YouTube",
      "body": "Copie o link do vídeo e cole no campo de download do Translator."
    },
    {
      "title": "Baixe o vídeo",
      "body": "O Translator baixa o vídeo e quaisquer legendas disponíveis."
    },
    {
      "title": "Transcreva ou traduza",
      "body": "Use IA para transcrever ou traduzir as legendas."
    },
    {
      "title": "Assista com legendas que você controla",
      "body": "Edite o tempo, corrija traduções e exporte o arquivo SRT final."
    }
  ],
  "pricingTitle": "O que é grátis, o que é pago",
  "pricingFree": "Baixar vídeos, gerenciar sua biblioteca, editar legendas manualmente e exportar arquivos SRT.",
  "pricingPaid": "Transcrição e tradução com IA. Use créditos Stage5 ou desbloqueie BYO uma vez por $10.",
  "section2Title": "Mídia esportiva espanhola em português",
  "section2Body": [
    "A Espanha produz alguns dos melhores conteúdos de futebol no YouTube—entrevistas, análises, documentários. A maioria não tem legendas em português.",
    "O Translator dá controle: escolha seu modelo de tradução, edite as legendas linha por linha e exporte o arquivo final."
  ],
  "downloadTitle": "Baixe o Translator",
  "downloadBody": "O Translator funciona no macOS e Windows. Baixe, cole a URL deste vídeo e veja como o fluxo de trabalho funciona.",
  "aboutTitle": "Sobre este post",
  "aboutBody": [
    "O vídeo do YouTube está incorporado diretamente da fonte oficial. Os primeiros 30 segundos de legendas podem ser exibidos em inglês, coreano ou português.",
    "Fonte: La Resistencia, apresentado por David Broncano, com Gerard Piqué. Publicado em 28 de março de 2019. O vídeo está em espanhol."
  ]
},
  vi: {
  "title": "Xem Gerard Piqué trên La Resistencia với Phụ Đề Tiếng Việt | Translator",
  "description": "Hậu vệ Barcelona Gerard Piqué ngồi với David Broncano trong cuộc phỏng vấn đêm khuya tiếng Tây Ban Nha bắt đầu thô và trở nên thú vị.",
  "keywords": [
    "Gerard Piqué phỏng vấn",
    "La Resistencia",
    "David Broncano",
    "phỏng vấn tiếng Tây Ban Nha"
  ],
  "h1": "Xem Gerard Piqué trên Truyền Hình Đêm Khuya Tây Ban Nha",
  "intro": "Hậu vệ Barcelona Gerard Piqué tự mời mình lên chương trình của David Broncano qua Twitter, xuất hiện tại Teatro Arlequín và trải qua cuộc phỏng vấn tiếng Tây Ban Nha bắt đầu với những trò đùa mà hầu hết người nói tiếng Việt sẽ không bao giờ nghe thấy.",
  "section1Title": "Một cầu thủ bóng đá tham gia chương trình đêm khuya",
  "section1Body": [
    "La Resistencia là một trong những chương trình hài đêm khuya được xem nhiều nhất ở Tây Ban Nha. Người dẫn chương trình David Broncano nổi tiếng với hài hước thô và các cuộc phỏng vấn không thể đoán trước. Gerard Piqué—lúc đó vẫn đang chơi cho FC Barcelona—thấy một cuộc trao đổi trò đùa trên Twitter và tự mời mình tham gia.",
    "Cuộc trò chuyện đi qua bóng đá, tiền bạc, nổi tiếng và các dự án kinh doanh của Piqué. Phần mở đầu của Broncano cố ý khiêu khích, đây là một phần của định dạng chương trình. Sau đó trong cuộc phỏng vấn, Piqué gây chú ý khi nói rằng tài sản ròng của anh lớn hơn ngân sách của RCD Espanyol—một bình luận trở thành chu kỳ tin tức riêng trong truyền thông thể thao Tây Ban Nha.",
    "Cuộc phỏng vấn bằng tiếng Tây Ban Nha. Người nói tiếng Việt bỏ lỡ giọng điệu, thời gian và toàn bộ bối cảnh làm cho hài kịch đêm khuya Tây Ban Nha hoạt động."
  ],
  "howToTitle": "Cách xem toàn bộ phỏng vấn với phụ đề tiếng Việt",
  "howToBody": "Translator là ứng dụng desktop cho phép bạn tải video, thêm phụ đề dịch và xem chúng bằng ngôn ngữ của bạn.",
  "howToSteps": [
    {
      "title": "Dán URL YouTube",
      "body": "Sao chép liên kết video và dán vào trường tải xuống của Translator."
    },
    {
      "title": "Tải video",
      "body": "Translator tải xuống video và bất kỳ phụ đề có sẵn nào."
    },
    {
      "title": "Phiên âm hoặc dịch",
      "body": "Sử dụng AI để phiên âm hoặc dịch phụ đề."
    },
    {
      "title": "Xem với phụ đề bạn kiểm soát",
      "body": "Chỉnh sửa thời gian, sửa bản dịch và xuất tệp SRT cuối cùng."
    }
  ],
  "pricingTitle": "Miễn phí và trả phí",
  "pricingFree": "Tải video, quản lý thư viện, chỉnh sửa phụ đề thủ công và xuất tệp SRT.",
  "pricingPaid": "Phiên âm và dịch AI. Sử dụng tín dụng Stage5 hoặc mở khóa BYO một lần với $10.",
  "section2Title": "Truyền thông thể thao Tây Ban Nha bằng tiếng Việt",
  "section2Body": [
    "Tây Ban Nha tạo ra một số nội dung bóng đá tốt nhất trên YouTube—phỏng vấn, phân tích, phim tài liệu. Hầu hết không có phụ đề tiếng Việt.",
    "Translator cho bạn quyền kiểm soát: chọn mô hình dịch của bạn, chỉnh sửa phụ đề từng dòng và xuất tệp cuối cùng."
  ],
  "downloadTitle": "Tải Translator",
  "downloadBody": "Translator hoạt động trên macOS và Windows. Tải xuống, dán URL của video này và xem quy trình hoạt động như thế nào.",
  "aboutTitle": "Về bài viết này",
  "aboutBody": [
    "Video YouTube được nhúng trực tiếp từ nguồn chính thức. 30 giây đầu tiên của phụ đề có thể hiển thị bằng tiếng Anh, tiếng Hàn hoặc tiếng Bồ Đào Nha.",
    "Nguồn: La Resistencia, do David Broncano dẫn chương trình, có Gerard Piqué. Xuất bản ngày 28 tháng 3 năm 2019. Video bằng tiếng Tây Ban Nha."
  ]
}
};
