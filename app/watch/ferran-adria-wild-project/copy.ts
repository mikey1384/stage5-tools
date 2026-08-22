import type { Locale } from "../../../lib/locales";

interface WatchPageCopy {
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  intro: string;
  eyebrow: string;
  section1Title: string;
  section1Body: string[];
  section2Title: string;
  section2Body: string[];
  howToTitle: string;
  howToBody: string;
  howToSteps: Array<{ title: string; body: string }>;
  pricingTitle: string;
  pricingFree: string;
  pricingPaid: string;
  contentTitle?: string;
  contentBody?: string[];
  downloadTitle: string;
  downloadBody: string;
  downloadLinkText: string;
  aboutTitle: string;
  aboutBody: string[];
}

export const ferranAdriaWildProjectCopy: Record<Locale, WatchPageCopy> = {
  en: {
    title: "Watch Ferran Adrià's Wild Project Interview with English Subtitles | Translator",
    description:
      "The legendary El Bulli chef Ferran Adrià talks creativity, craft, and food as art in this Spanish-language interview. Learn how to watch it with English subtitles using Translator.",
    keywords: [
      "Ferran Adrià interview English subtitles",
      "Wild Project Ferran Adrià",
      "watch Spanish interview English",
      "El Bulli chef interview",
      "translate Spanish video to English",
      "Jordi Wild Ferran Adrià",
    ],
    h1: "Watch Ferran Adrià Talk Creativity and Craft",
    intro:
      "The legendary El Bulli chef discusses what it means to build something that changes how people think about food. This Spanish-language interview is worth watching—even if you don't speak Spanish.",
    eyebrow: "Spanish · Food & Craft · Wild Project #287",
    section1Title: "It's in Spanish",
    section1Body: [
      "Ferran Adrià ran El Bulli, the restaurant that redefined what food could be. For years, El Bulli was considered the best restaurant in the world—not just for the dishes, but for the ideas behind them. Adrià treated cooking like research, asking questions most chefs never think to ask.",
      "In this interview with Jordi Wild on The Wild Project, Adrià talks about creativity, craft, and what it takes to build something that matters. It's not a cooking tutorial. It's a conversation about why someone dedicates their life to pushing a craft forward, and what happens when that craft becomes art.",
      "The interview is in Spanish, which means English speakers bounce—and miss one of the best food conversations available on YouTube.",
    ],
    section2Title: "What you'll hear",
    section2Body: [
      "Adrià talks about the difference between cooking and creating, why El Bulli closed at its peak, and what it means to treat food as something more than fuel. He explains how his team approached the creative process—not as individual genius, but as structured research that happened to produce dishes.",
      "Jordi Wild is one of Spain's most-watched podcasters, and he gives Adrià room to think through his answers. The conversation moves between philosophy, business, craft, and legacy. If you've ever read about El Bulli or seen photos of the dishes, this is the interview that explains what was actually happening in that kitchen.",
    ],
    howToTitle: "How to watch the full interview with English subtitles",
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
    downloadTitle: "Download Translator",
    downloadBody:
      "Translator works on macOS and Windows. Download it, paste this video's URL, and see how the workflow feels. The download and subtitle editor are free to use.",
    downloadLinkText: "Learn about video downloading →",
    aboutTitle: "About this post",
    aboutBody: [
      "The YouTube video is embedded directly from the official source. The first 30 seconds of captions shown in the player can be displayed in English, Korean (한국어), or Portuguese (Português). All three caption tracks were transcribed and translated in Translator (first 30 seconds only). The rest of the episode is not published here—this post explains the workflow so you can translate the full video yourself.",
      "Source: The Wild Project #287, hosted by Jordi Wild, featuring Ferran Adrià. Published May 14, 2024. Video is in Spanish.",
    ],
  },
  es: {
    title: "Ve la Entrevista de Ferran Adrià en The Wild Project con Subtítulos | Translator",
    description:
      "El legendario chef de El Bulli, Ferran Adrià, habla sobre creatividad, oficio y comida como arte. Aprende a añadir subtítulos a videos de YouTube con Translator.",
    keywords: [
      "Ferran Adrià entrevista Wild Project",
      "El Bulli entrevista",
      "Jordi Wild Ferran Adrià",
      "subtitular videos YouTube",
      "traducir videos español",
    ],
    h1: "Ferran Adrià Habla de Creatividad y Oficio",
    intro:
      "El legendario chef de El Bulli explica qué significa construir algo que cambia la forma en que la gente piensa sobre la comida. Una conversación sobre creatividad, oficio y legado.",
    eyebrow: "Español · Comida y Oficio · Wild Project #287",
    section1Title: "Sobre la entrevista",
    section1Body: [
      "Ferran Adrià dirigió El Bulli, el restaurante que redefinió lo que la comida podía ser. Durante años, El Bulli fue considerado el mejor restaurante del mundo, no solo por los platos, sino por las ideas detrás de ellos. Adrià trató la cocina como investigación, haciendo preguntas que la mayoría de los chefs nunca piensan hacer.",
      "En esta entrevista con Jordi Wild en The Wild Project, Adrià habla sobre creatividad, oficio y lo que se necesita para construir algo que importa. No es un tutorial de cocina. Es una conversación sobre por qué alguien dedica su vida a empujar un oficio hacia adelante, y qué pasa cuando ese oficio se convierte en arte.",
    ],
    section2Title: "Lo que escucharás",
    section2Body: [
      "Adrià habla sobre la diferencia entre cocinar y crear, por qué El Bulli cerró en su punto máximo y qué significa tratar la comida como algo más que combustible. Explica cómo su equipo abordó el proceso creativo, no como genio individual, sino como investigación estructurada que resultó producir platos.",
      "Jordi Wild es uno de los podcasters más vistos de España, y le da a Adrià espacio para pensar sus respuestas. La conversación se mueve entre filosofía, negocio, oficio y legado. Si alguna vez has leído sobre El Bulli o visto fotos de los platos, esta es la entrevista que explica lo que realmente estaba pasando en esa cocina.",
    ],
    howToTitle: "Cómo ver la entrevista completa con subtítulos",
    howToBody:
      "Translator es una app de escritorio que te permite descargar videos, añadir subtítulos traducidos y verlos en tu idioma. Así funciona:",
    howToSteps: [
      {
        title: "Pega la URL de YouTube",
        body: "Copia el enlace del video y pégalo en el campo de descarga de Translator.",
      },
      {
        title: "Descarga el video",
        body: "Translator baja el video y cualquier subtítulo disponible. Esto es gratis y ocurre en tu máquina.",
      },
      {
        title: "Transcribe o traduce",
        body: "Si el video no tiene subtítulos en español, puedes transcribirlo con IA. Si los tiene, puedes traducir esos subtítulos. Puedes usar créditos Stage5 (pago por minuto) o traer tu propia clave API de OpenAI o Anthropic.",
      },
      {
        title: "Ve con subtítulos que controlas",
        body: "La app reproduce el video con tus subtítulos traducidos. Puedes editar el tiempo, corregir traducciones, elegir estilos de subtítulos y exportar el archivo SRT final.",
      },
    ],
    pricingTitle: "Qué es gratis, qué es de pago",
    pricingFree:
      "Descargar videos, gestionar tu biblioteca, editar subtítulos manualmente y exportar archivos SRT.",
    pricingPaid:
      "Transcripción y traducción con IA. Puedes usar créditos Stage5 (ejemplo: $1 por ~50 minutos, $10 por ~18 horas) o desbloquear BYO una vez por $10 y traer tu propia clave API de OpenAI o Anthropic para pagarles directamente.",
    downloadTitle: "Descarga Translator",
    downloadBody:
      "Translator funciona en macOS y Windows. Descárgalo, pega la URL de este video y prueba el flujo. La descarga y el editor de subtítulos son gratis.",
    downloadLinkText: "Aprende sobre descarga de videos →",
    aboutTitle: "Sobre este post",
    aboutBody: [
      "El video de YouTube está incrustado directamente desde la fuente oficial. Los primeros 30 segundos de subtítulos que se muestran en el reproductor pueden aparecer en inglés, coreano (한국어) o portugués (Português). Las tres pistas de subtítulos fueron transcritas y traducidas en Translator (solo los primeros 30 segundos). El resto del episodio no se publica aquí: este post explica el flujo para que puedas traducir el video completo tú mismo.",
      "Fuente: The Wild Project #287, presentado por Jordi Wild, con Ferran Adrià. Publicado el 14 de mayo de 2024. El video está en español.",
    ],
  },
  ko: {
    title: "Ferran Adrià의 Wild Project 인터뷰 보기 | Translator",
    description:
      "전설적인 El Bulli 셰프 Ferran Adrià가 창의성, 장인정신, 예술로서의 음식에 대해 이야기합니다. Translator로 자막을 추가하는 방법을 알아보세요.",
    keywords: [
      "Ferran Adrià 인터뷰",
      "Wild Project Ferran Adrià",
      "스페인어 영상 자막",
      "El Bulli 셰프 인터뷰",
      "YouTube 영상 번역",
    ],
    h1: "Ferran Adrià의 창의성과 장인정신 이야기",
    intro:
      "전설적인 El Bulli 셰프가 음식에 대한 생각을 바꾸는 무언가를 만드는 것이 무엇을 의미하는지 설명합니다. 창의성, 장인정신, 유산에 관한 대화입니다.",
    eyebrow: "스페인어 · 음식과 장인정신 · Wild Project #287",
    section1Title: "인터뷰 소개",
    section1Body: [
      "Ferran Adrià는 음식이 무엇이 될 수 있는지 재정의한 레스토랑 El Bulli를 운영했습니다. 수년 동안 El Bulli는 세계 최고의 레스토랑으로 여겨졌습니다. 요리만이 아니라 그 뒤의 아이디어 때문이었습니다. Adrià는 요리를 연구처럼 다루며 대부분의 셰프가 생각하지 않는 질문을 했습니다.",
      "The Wild Project에서 Jordi Wild와의 이 인터뷰에서 Adrià는 창의성, 장인정신, 그리고 중요한 무언가를 만드는 데 필요한 것에 대해 이야기합니다. 요리 튜토리얼이 아닙니다. 누군가가 왜 자신의 삶을 장인정신을 앞으로 밀어붙이는 데 바치는지, 그리고 그 장인정신이 예술이 될 때 무슨 일이 일어나는지에 대한 대화입니다.",
    ],
    section2Title: "들을 수 있는 내용",
    section2Body: [
      "Adrià는 요리와 창조의 차이, El Bulli가 왜 정점에서 문을 닫았는지, 음식을 연료 이상으로 다루는 것이 무엇을 의미하는지에 대해 이야기합니다. 그는 팀이 창의적 과정에 어떻게 접근했는지 설명합니다. 개인의 천재성이 아니라 결과적으로 요리를 생산한 구조화된 연구로서 말입니다.",
      "Jordi Wild는 스페인에서 가장 많이 시청되는 팟캐스터 중 한 명이며, Adrià에게 답변을 생각할 공간을 줍니다. 대화는 철학, 비즈니스, 장인정신, 유산 사이를 오갑니다. El Bulli에 대해 읽었거나 요리 사진을 본 적이 있다면, 이것이 그 주방에서 실제로 무슨 일이 일어났는지 설명하는 인터뷰입니다.",
    ],
    howToTitle: "전체 인터뷰를 자막과 함께 보는 방법",
    howToBody:
      "Translator는 영상을 다운로드하고, 번역된 자막을 추가하고, 원하는 언어로 볼 수 있는 데스크톱 앱입니다. 작동 방식:",
    howToSteps: [
      {
        title: "YouTube URL 붙여넣기",
        body: "영상 링크를 복사하여 Translator의 다운로드 필드에 붙여넣습니다.",
      },
      {
        title: "영상 다운로드",
        body: "Translator가 영상과 사용 가능한 자막을 가져옵니다. 이것은 무료이며 컴퓨터에서 실행됩니다.",
      },
      {
        title: "전사 또는 번역",
        body: "영상에 스페인어 자막이 없으면 AI로 전사할 수 있습니다. 있으면 자막을 번역할 수 있습니다. Stage5 크레딧(분당 결제) 또는 OpenAI나 Anthropic의 자체 API 키를 가져올 수 있습니다.",
      },
      {
        title: "제어 가능한 자막으로 시청",
        body: "앱이 번역된 자막과 함께 영상을 재생합니다. 타이밍을 편집하고, 번역을 수정하고, 자막 스타일을 선택하고, 최종 SRT 파일을 내보낼 수 있습니다.",
      },
    ],
    pricingTitle: "무료 기능과 유료 기능",
    pricingFree:
      "영상 다운로드, 라이브러리 관리, 수동 자막 편집, SRT 파일 내보내기.",
    pricingPaid:
      "AI 전사 및 번역. Stage5 크레딧(예: ~50분에 $1, ~18시간에 $10) 또는 BYO를 $10에 한 번 잠금 해제하고 OpenAI 또는 Anthropic의 자체 API 키를 가져와 직접 결제할 수 있습니다.",
    downloadTitle: "Translator 다운로드",
    downloadBody:
      "Translator는 macOS와 Windows에서 작동합니다. 다운로드하고, 이 영상의 URL을 붙여넣고, 워크플로우를 확인하세요. 다운로드 및 자막 편집기는 무료입니다.",
    downloadLinkText: "영상 다운로드에 대해 알아보기 →",
    aboutTitle: "이 게시물에 대하여",
    aboutBody: [
      "YouTube 영상은 공식 출처에서 직접 임베드됩니다. 플레이어에 표시되는 처음 30초의 자막은 영어, 한국어 또는 포르투갈어(Português)로 표시될 수 있습니다. 세 가지 자막 트랙은 모두 Translator에서 전사 및 번역되었습니다(처음 30초만). 나머지 에피소드는 여기에 게시되지 않습니다. 이 게시물은 전체 영상을 직접 번역할 수 있도록 워크플로우를 설명합니다.",
      "출처: Jordi Wild가 진행하고 Ferran Adrià가 출연한 The Wild Project #287. 2024년 5월 14일 게시. 영상은 스페인어입니다.",
    ],
  },
  pt: {
    title: "Assista a Entrevista de Ferran Adrià no Wild Project com Legendas | Translator",
    description:
      "O lendário chef do El Bulli, Ferran Adrià, fala sobre criatividade, ofício e comida como arte. Aprenda a adicionar legendas a vídeos do YouTube com o Translator.",
    keywords: [
      "Ferran Adrià entrevista",
      "Wild Project Ferran Adrià",
      "assistir entrevista espanhola",
      "El Bulli chef entrevista",
      "traduzir vídeo espanhol",
    ],
    h1: "Ferran Adrià Fala Sobre Criatividade e Ofício",
    intro:
      "O lendário chef do El Bulli explica o que significa construir algo que muda a forma como as pessoas pensam sobre comida. Uma conversa sobre criatividade, ofício e legado.",
    eyebrow: "Espanhol · Comida e Ofício · Wild Project #287",
    section1Title: "Sobre a entrevista",
    section1Body: [
      "Ferran Adrià dirigiu o El Bulli, o restaurante que redefiniu o que a comida poderia ser. Por anos, o El Bulli foi considerado o melhor restaurante do mundo, não apenas pelos pratos, mas pelas ideias por trás deles. Adrià tratou a culinária como pesquisa, fazendo perguntas que a maioria dos chefs nunca pensa em fazer.",
      "Nesta entrevista com Jordi Wild no The Wild Project, Adrià fala sobre criatividade, ofício e o que é preciso para construir algo que importa. Não é um tutorial de culinária. É uma conversa sobre por que alguém dedica sua vida a empurrar um ofício para frente e o que acontece quando esse ofício se torna arte.",
    ],
    section2Title: "O que você ouvirá",
    section2Body: [
      "Adrià fala sobre a diferença entre cozinhar e criar, por que o El Bulli fechou no auge e o que significa tratar a comida como algo mais do que combustível. Ele explica como sua equipe abordou o processo criativo, não como gênio individual, mas como pesquisa estruturada que acabou produzindo pratos.",
      "Jordi Wild é um dos podcasters mais assistidos da Espanha e dá a Adrià espaço para pensar em suas respostas. A conversa se move entre filosofia, negócios, ofício e legado. Se você já leu sobre o El Bulli ou viu fotos dos pratos, esta é a entrevista que explica o que realmente estava acontecendo naquela cozinha.",
    ],
    howToTitle: "Como assistir a entrevista completa com legendas",
    howToBody:
      "Translator é um aplicativo de desktop que permite baixar vídeos, adicionar legendas traduzidas e assisti-los no seu idioma. Veja como funciona:",
    howToSteps: [
      {
        title: "Cole a URL do YouTube",
        body: "Copie o link do vídeo e cole no campo de download do Translator.",
      },
      {
        title: "Baixe o vídeo",
        body: "O Translator baixa o vídeo e quaisquer legendas disponíveis. Isso é grátis e acontece no seu computador.",
      },
      {
        title: "Transcreva ou traduza",
        body: "Se o vídeo não tiver legendas em espanhol, você pode transcrevê-lo usando IA. Se tiver, você pode traduzir essas legendas. Você pode usar créditos Stage5 (pagamento por minuto) ou trazer sua própria chave API do OpenAI ou Anthropic.",
      },
      {
        title: "Assista com legendas que você controla",
        body: "O aplicativo reproduz o vídeo com suas legendas traduzidas. Você pode editar o tempo, corrigir traduções, escolher estilos de legendas e exportar o arquivo SRT final.",
      },
    ],
    pricingTitle: "O que é grátis, o que é pago",
    pricingFree:
      "Baixar vídeos, gerenciar sua biblioteca, editar legendas manualmente e exportar arquivos SRT.",
    pricingPaid:
      "Transcrição e tradução com IA. Você pode usar créditos Stage5 (exemplo: $1 por ~50 minutos, $10 por ~18 horas) ou desbloquear BYO uma vez por $10 e trazer sua própria chave API do OpenAI ou Anthropic para pagar diretamente a eles.",
    downloadTitle: "Baixe o Translator",
    downloadBody:
      "O Translator funciona no macOS e Windows. Baixe, cole a URL deste vídeo e veja como o fluxo funciona. O download e o editor de legendas são grátis.",
    downloadLinkText: "Saiba mais sobre download de vídeos →",
    aboutTitle: "Sobre este post",
    aboutBody: [
      "O vídeo do YouTube está incorporado diretamente da fonte oficial. Os primeiros 30 segundos de legendas mostrados no player podem ser exibidos em inglês, coreano (한국어) ou português. Todas as três faixas de legendas foram transcritas e traduzidas no Translator (apenas os primeiros 30 segundos). O resto do episódio não está publicado aqui—este post explica o fluxo para que você possa traduzir o vídeo completo você mesmo.",
      "Fonte: The Wild Project #287, apresentado por Jordi Wild, com Ferran Adrià. Publicado em 14 de maio de 2024. O vídeo está em espanhol.",
    ],
  },
  ja: { title: "", description: "", keywords: [], h1: "", intro: "", eyebrow: "", section1Title: "", section1Body: [], section2Title: "", section2Body: [], howToTitle: "", howToBody: "", howToSteps: [], pricingTitle: "", pricingFree: "", pricingPaid: "", downloadTitle: "", downloadBody: "", downloadLinkText: "", aboutTitle: "", aboutBody: [] },
  zh: { title: "", description: "", keywords: [], h1: "", intro: "", eyebrow: "", section1Title: "", section1Body: [], section2Title: "", section2Body: [], howToTitle: "", howToBody: "", howToSteps: [], pricingTitle: "", pricingFree: "", pricingPaid: "", downloadTitle: "", downloadBody: "", downloadLinkText: "", aboutTitle: "", aboutBody: [] },
  fr: { title: "", description: "", keywords: [], h1: "", intro: "", eyebrow: "", section1Title: "", section1Body: [], section2Title: "", section2Body: [], howToTitle: "", howToBody: "", howToSteps: [], pricingTitle: "", pricingFree: "", pricingPaid: "", downloadTitle: "", downloadBody: "", downloadLinkText: "", aboutTitle: "", aboutBody: [] },
  de: { title: "", description: "", keywords: [], h1: "", intro: "", eyebrow: "", section1Title: "", section1Body: [], section2Title: "", section2Body: [], howToTitle: "", howToBody: "", howToSteps: [], pricingTitle: "", pricingFree: "", pricingPaid: "", downloadTitle: "", downloadBody: "", downloadLinkText: "", aboutTitle: "", aboutBody: [] },
  vi: {
    title: "Xem Phỏng Vấn Ferran Adrià trên Wild Project với Phụ Đề Tiếng Việt | Translator",
    description:
      "Đầu bếp huyền thoại El Bulli Ferran Adrià nói về sáng tạo, nghề thủ công và ẩm thực như nghệ thuật trong cuộc phỏng vấn tiếng Tây Ban Nha. Tìm hiểu cách xem với phụ đề tiếng Việt bằng Translator.",
    keywords: [
      "Ferran Adrià phỏng vấn phụ đề tiếng Việt",
      "Wild Project Ferran Adrià",
      "xem phỏng vấn tiếng Tây Ban Nha",
      "El Bulli đầu bếp phỏng vấn",
      "dịch video tiếng Tây Ban Nha sang tiếng Việt",
      "Jordi Wild Ferran Adrià",
    ],
    h1: "Xem Ferran Adrià Nói Về Sáng Tạo và Nghề Thủ Công",
    intro:
      "Đầu bếp huyền thoại El Bulli thảo luận về ý nghĩa của việc xây dựng điều gì đó thay đổi cách mọi người nghĩ về ẩm thực. Cuộc phỏng vấn tiếng Tây Ban Nha này đáng xem—ngay cả khi bạn không nói tiếng Tây Ban Nha.",
    eyebrow: "Tiếng Tây Ban Nha · Ẩm Thực & Nghề Thủ Công · Wild Project #287",
    section1Title: "Phỏng vấn bằng tiếng Tây Ban Nha",
    section1Body: [
      "Ferran Adrià điều hành El Bulli, nhà hàng đã định nghĩa lại ẩm thực có thể là gì. Trong nhiều năm, El Bulli được coi là nhà hàng tốt nhất thế giới—không chỉ vì món ăn, mà vì những ý tưởng đằng sau chúng. Adrià đối xử với nấu ăn như nghiên cứu, đặt những câu hỏi mà hầu hết đầu bếp không bao giờ nghĩ đến.",
      "Trong cuộc phỏng vấn này với Jordi Wild trên The Wild Project, Adrià nói về sáng tạo, nghề thủ công và những gì cần thiết để xây dựng điều gì đó quan trọng. Đây không phải hướng dẫn nấu ăn. Đây là cuộc trò chuyện về lý do tại sao ai đó cống hiến cuộc đời để đẩy một nghề thủ công tiến lên, và điều gì xảy ra khi nghề thủ công đó trở thành nghệ thuật.",
      "Cuộc phỏng vấn bằng tiếng Tây Ban Nha, có nghĩa là người nói tiếng Việt bỏ lỡ—và bỏ lỡ một trong những cuộc trò chuyện hay nhất về ẩm thực trên YouTube.",
    ],
    section2Title: "Những gì bạn sẽ nghe",
    section2Body: [
      "Adrià nói về sự khác biệt giữa nấu ăn và sáng tạo, tại sao El Bulli đóng cửa ở đỉnh cao, và ý nghĩa của việc đối xử với thực phẩm như thứ gì đó hơn nhiên liệu. Ông giải thích cách nhóm của mình tiếp cận quy trình sáng tạo—không phải là thiên tài cá nhân, mà là nghiên cứu có cấu trúc tình cờ tạo ra các món ăn.",
      "Jordi Wild là một trong những podcaster được xem nhiều nhất ở Tây Ban Nha, và ông cho Adrià không gian để suy nghĩ qua câu trả lời. Cuộc trò chuyện di chuyển giữa triết học, kinh doanh, nghề thủ công và di sản. Nếu bạn từng đọc về El Bulli hoặc xem ảnh các món ăn, đây là cuộc phỏng vấn giải thích điều gì thực sự đang xảy ra trong nhà bếp đó.",
    ],
    howToTitle: "Cách xem toàn bộ phỏng vấn với phụ đề tiếng Việt",
    howToBody:
      "Translator là ứng dụng desktop cho phép bạn tải video, thêm phụ đề dịch và xem chúng bằng ngôn ngữ của bạn. Đây là quy trình:",
    howToSteps: [
      {
        title: "Dán URL YouTube",
        body: "Sao chép liên kết video và dán vào trường tải xuống của Translator.",
      },
      {
        title: "Tải video",
        body: "Translator tải xuống video và bất kỳ phụ đề có sẵn nào. Việc này miễn phí và xảy ra trên máy của bạn.",
      },
      {
        title: "Phiên âm hoặc dịch",
        body: "Nếu video không có phụ đề tiếng Tây Ban Nha, bạn có thể phiên âm bằng AI. Nếu có, bạn có thể dịch phụ đề đó sang tiếng Việt. Bạn có thể sử dụng tín dụng Stage5 (trả theo phút) hoặc mang khóa API riêng từ OpenAI hoặc Anthropic.",
      },
      {
        title: "Xem với phụ đề bạn kiểm soát",
        body: "Ứng dụng phát video với phụ đề đã dịch của bạn. Bạn có thể chỉnh sửa thời gian, sửa bản dịch, chọn kiểu phụ đề và xuất tệp SRT cuối cùng.",
      },
    ],
    pricingTitle: "Miễn phí và trả phí",
    pricingFree:
      "Tải video, quản lý thư viện, chỉnh sửa phụ đề thủ công và xuất tệp SRT.",
    pricingPaid:
      "Phiên âm và dịch AI. Bạn có thể sử dụng tín dụng Stage5 (ví dụ: $1 cho ~50 phút, $10 cho ~18 giờ) hoặc mở khóa BYO một lần với $10 và mang khóa API riêng từ OpenAI hoặc Anthropic để thanh toán trực tiếp cho họ.",
    downloadTitle: "Tải Translator",
    downloadBody:
      "Translator hoạt động trên macOS và Windows. Tải xuống, dán URL video này và xem quy trình hoạt động như thế nào. Tải xuống và trình chỉnh sửa phụ đề miễn phí sử dụng.",
    downloadLinkText: "Tìm hiểu về tải video →",
    aboutTitle: "Về bài viết này",
    aboutBody: [
      "Video YouTube được nhúng trực tiếp từ nguồn chính thức. 30 giây đầu tiên của phụ đề hiển thị trong trình phát có thể hiển thị bằng tiếng Anh, tiếng Hàn (한국어) hoặc tiếng Bồ Đào Nha (Português). Cả ba bản phụ đề đều được phiên âm và dịch trong Translator (chỉ 30 giây đầu). Phần còn lại của tập không được công bố ở đây—bài viết này giải thích quy trình để bạn có thể tự dịch toàn bộ video.",
      "Nguồn: The Wild Project #287, do Jordi Wild dẫn chương trình, có Ferran Adrià. Xuất bản ngày 14 tháng 5 năm 2024. Video bằng tiếng Tây Ban Nha.",
    ],
  },
};
