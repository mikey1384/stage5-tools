interface WatchPageCopy {
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  intro: string;
  section1Title: string;
  section1Body: string[];
  section2Title: string;
  section2Body: string[];
  howToTitle: string;
  howToBody: string;
  howToSteps: Array<{ title: string; body: string }>;
  howToNote: string;
  pricingTitle: string;
  pricingFree: string;
  pricingPaid: string;
  freeLabel: string;
  paidLabel: string;
  downloadTitle: string;
  downloadBody: string;
  downloadLinkText: string;
  ctaNote: string;
  aboutTitle: string;
  aboutBody: string[];
}

type SupportedLocale = "en" | "es" | "ko" | "pt" | "vi";

export const ramsayHotOnesCopy: Record<SupportedLocale, WatchPageCopy> = {
  en: {
    title: "Watch Gordon Ramsay on Hot Ones with English Subtitles | Translator",
    description:
      "Gordon Ramsay takes on the Hot Ones challenge with Sean Evans. Watch the celebrity chef face increasingly spicy wings while discussing food and cooking. First 30 seconds with multilingual captions.",
    keywords: [
      "Gordon Ramsay Hot Ones",
      "Hot Ones season 8",
      "Sean Evans First We Feast",
      "Gordon Ramsay spicy wings",
      "Hot Ones English subtitles",
      "translate YouTube videos",
    ],
    h1: "Gordon Ramsay Faces the Hot Ones Challenge",
    intro:
      "The celebrity chef sits down with Sean Evans for First We Feast's Hot Ones—a show where spicy wings meet honest questions. This English-language interview lets you watch with multilingual captions.",
    section1Title: "What happens in the first 30 seconds",
    section1Body: [
      "Gordon Ramsay walks in and immediately asks for a bathroom. Then Sean Evans opens the show with his signature introduction: 'From First We Feast, I'm Sean Evans, and you're watching Hot Ones.'",
      "Hot Ones is the show where celebrities eat increasingly spicy chicken wings while answering questions. It's a format that's disarmed some of the most guarded interviews on the internet. When people are focused on managing heat, they tend to give straighter answers.",
      "This is season eight. Ramsay is known for his blunt critiques of food and cooking, which makes his appearance on a show about eating progressively hotter wings particularly interesting. The first 30 seconds are just the setup—the full interview is where he evaluates the wings themselves.",
    ],
    section2Title: "Ramsay critiques the wings",
    section2Body: [
      "Hot Ones became popular because it puts people in a situation where polished media training doesn't help. The wings get hotter, the guest gets more honest, and the questions get better. Sean Evans is known for doing serious research—guests are often surprised by the depth of the questions.",
      "For food professionals like Ramsay, there's an added layer: they're being asked to critique the wings while dealing with the heat. It's not just an interview format—it's a test of composure and a chance to watch someone who's usually in control lose some of that control.",
    ],
    howToTitle: "How to watch the full episode with subtitles",
    howToBody:
      "Translator is a desktop app that lets you download YouTube videos and add translated subtitles. Here's how it works:",
    howToSteps: [
      {
        title: "Paste the video URL",
        body: "Copy the YouTube link and paste it into Translator's download field.",
      },
      {
        title: "Download the video",
        body: "Translator downloads the video and any available captions to your computer. This step is free.",
      },
      {
        title: "Transcribe and translate",
        body: "The video is in English. If you need subtitles in another language, Translator can transcribe the audio and translate it. You can use Stage5 credits or your own API key from OpenAI or Anthropic.",
      },
      {
        title: "Watch and edit",
        body: "The app plays the video with your subtitles. You can edit timing, fix translations, and export the final SRT file.",
      },
    ],
    howToNote:
      "The video stays on your computer. Translator works locally—nothing is uploaded to our servers.",
    pricingTitle: "What's free, what's paid",
    pricingFree:
      "Downloading videos, subtitle editing, library management, and SRT export.",
    pricingPaid:
      "AI transcription and translation. You can use Stage5 credits (example: $1 for ~50 minutes, $10 for ~18 hours) or pay $10 once to unlock BYO and use your own API key.",
    freeLabel: "Free:",
    paidLabel: "Paid:",
    downloadTitle: "Download Translator",
    downloadBody:
      "Translator works on macOS and Windows. Download it, paste the Hot Ones URL, and try the workflow yourself. The download and editor are free.",
    downloadLinkText: "Learn about video downloading →",
    ctaNote:
      "Download and subtitle editing are free. AI transcription and translation require Stage5 credits or your own API key.",
    aboutTitle: "About this post",
    aboutBody: [
      "The YouTube video is embedded directly from First We Feast. The first 30 seconds of captions can be displayed in English, Korean (한국어), Spanish (Español), or Portuguese (Português). All four caption tracks were transcribed and translated in Translator (first 30 seconds only), not YouTube automatic captions.",
      "Source: Hot Ones season 8, hosted by Sean Evans, featuring Gordon Ramsay. First We Feast. Published August 22, 2026. Video is in English.",
    ],
  },
  es: {
    title: "Ve a Gordon Ramsay en Hot Ones con Subtítulos | Translator",
    description:
      "Gordon Ramsay acepta el desafío de Hot Ones con Sean Evans. Mira al famoso chef enfrentarse a alitas cada vez más picantes mientras habla de comida. Primeros 30 segundos con subtítulos multilingües.",
    keywords: [
      "Gordon Ramsay Hot Ones",
      "Hot Ones temporada 8",
      "Sean Evans First We Feast",
      "Gordon Ramsay alitas picantes",
      "subtitular videos YouTube",
    ],
    h1: "Gordon Ramsay Enfrenta el Desafío de Hot Ones",
    intro:
      "El famoso chef se sienta con Sean Evans para Hot Ones de First We Feast—un programa donde las alitas picantes se encuentran con preguntas honestas. Esta entrevista en inglés te permite verla con subtítulos multilingües.",
    section1Title: "Qué pasa en los primeros 30 segundos",
    section1Body: [
      "Gordon Ramsay entra e inmediatamente pregunta por un baño. Luego Sean Evans abre el programa con su introducción característica: 'Desde First We Feast, soy Sean Evans, y están viendo Hot Ones.'",
      "Hot Ones es el programa donde las celebridades comen alitas de pollo cada vez más picantes mientras responden preguntas. Es un formato que ha desarmado algunas de las entrevistas más controladas de internet. Cuando la gente está concentrada en manejar el picante, tiende a dar respuestas más directas.",
      "Esta es la temporada ocho. Ramsay es conocido por sus críticas directas sobre comida y cocina, lo que hace que su aparición en un programa sobre comer alitas cada vez más picantes sea particularmente interesante. Los primeros 30 segundos son solo la preparación—la entrevista completa es donde él evalúa las alitas en sí.",
    ],
    section2Title: "Ramsay critica las alitas",
    section2Body: [
      "Hot Ones se hizo popular porque pone a la gente en una situación donde el entrenamiento mediático pulido no ayuda. Las alitas se vuelven más picantes, el invitado se vuelve más honesto, y las preguntas mejoran. Sean Evans es conocido por hacer una investigación seria—los invitados a menudo se sorprenden por la profundidad de las preguntas.",
      "Para profesionales de la comida como Ramsay, hay una capa adicional: se les pide que critiquen las alitas mientras lidian con el picante. No es solo un formato de entrevista—es una prueba de compostura y una oportunidad de ver a alguien que usualmente está en control perder parte de ese control.",
    ],
    howToTitle: "Cómo ver el episodio completo con subtítulos",
    howToBody:
      "Translator es una app de escritorio que te permite descargar videos de YouTube y añadir subtítulos traducidos. Así funciona:",
    howToSteps: [
      {
        title: "Pega la URL del video",
        body: "Copia el enlace de YouTube y pégalo en el campo de descarga de Translator.",
      },
      {
        title: "Descarga el video",
        body: "Translator descarga el video y cualquier subtítulo disponible a tu computadora. Este paso es gratis.",
      },
      {
        title: "Transcribe y traduce",
        body: "El video está en inglés. Si necesitas subtítulos en otro idioma, Translator puede transcribir el audio y traducirlo. Puedes usar créditos Stage5 o tu propia clave API de OpenAI o Anthropic.",
      },
      {
        title: "Ve y edita",
        body: "La app reproduce el video con tus subtítulos. Puedes editar el tiempo, corregir traducciones y exportar el archivo SRT final.",
      },
    ],
    howToNote:
      "El video permanece en tu computadora. Translator funciona localmente—nada se sube a nuestros servidores.",
    pricingTitle: "Qué es gratis, qué es de pago",
    pricingFree:
      "Descarga de videos, edición de subtítulos, gestión de biblioteca y exportación de SRT.",
    pricingPaid:
      "Transcripción y traducción con IA. Puedes usar créditos Stage5 (ejemplo: $1 por ~50 minutos, $10 por ~18 horas) o pagar $10 una vez para desbloquear BYO y usar tu propia clave API.",
    freeLabel: "Gratis:",
    paidLabel: "De pago:",
    downloadTitle: "Descarga Translator",
    downloadBody:
      "Translator funciona en macOS y Windows. Descárgalo, pega la URL de Hot Ones y prueba el flujo tú mismo. La descarga y el editor son gratis.",
    downloadLinkText: "Aprende sobre descarga de videos →",
    ctaNote:
      "La descarga y edición de subtítulos son gratis. La transcripción y traducción con IA requieren créditos Stage5 o tu propia clave API.",
    aboutTitle: "Sobre este post",
    aboutBody: [
      "El video de YouTube está incrustado directamente desde First We Feast. Los primeros 30 segundos de subtítulos pueden mostrarse en inglés, coreano (한국어), español o portugués (Português). Las cuatro pistas de subtítulos fueron transcritas y traducidas en Translator (solo los primeros 30 segundos), no son subtítulos automáticos de YouTube.",
      "Fuente: Hot Ones temporada 8, presentado por Sean Evans, con Gordon Ramsay. First We Feast. Publicado el 22 de agosto de 2026. El video está en inglés.",
    ],
  },
  ko: {
    title: "Gordon Ramsay의 Hot Ones 자막과 함께 보기 | Translator",
    description:
      "Gordon Ramsay가 Sean Evans와 함께 Hot Ones 챌린지에 도전합니다. 유명 셰프가 점점 더 매운 윙을 먹으며 음식에 대해 이야기하는 모습을 보세요. 처음 30초는 다국어 자막 제공.",
    keywords: [
      "Gordon Ramsay Hot Ones",
      "Hot Ones 시즌 8",
      "Sean Evans First We Feast",
      "Gordon Ramsay 매운 윙",
      "YouTube 영상 번역",
    ],
    h1: "Gordon Ramsay가 Hot Ones 챌린지에 도전하다",
    intro:
      "유명 셰프가 First We Feast의 Hot Ones에서 Sean Evans와 마주 앉습니다—매운 윙과 솔직한 질문이 만나는 쇼. 이 영어 인터뷰를 다국어 자막과 함께 시청하세요.",
    section1Title: "처음 30초에 벌어지는 일",
    section1Body: [
      "Gordon Ramsay가 들어와서 즉시 화장실을 찾습니다. 그리고 Sean Evans가 그의 시그니처 인트로로 쇼를 시작합니다: '퍼스트 위 피스트에서, 저는 션 에번스이고, 여러분은 지금 핫 원즈를 시청하고 있습니다.'",
      "Hot Ones는 유명인들이 점점 더 매운 치킨 윙을 먹으면서 질문에 답하는 프로그램입니다. 인터넷에서 가장 통제된 인터뷰들을 무장해제시킨 포맷입니다. 사람들이 매운맛을 관리하는 데 집중할 때, 더 솔직한 답변을 하는 경향이 있습니다.",
      "이것은 시즌 8입니다. Ramsay는 음식과 요리에 대한 직설적인 비평으로 유명한데, 이것이 점점 더 매운 윙을 먹는 쇼에 그가 출연한다는 것을 특히 흥미롭게 만듭니다. 처음 30초는 단지 준비 과정일 뿐—전체 인터뷰는 그가 윙 자체를 평가하는 부분입니다.",
    ],
    section2Title: "Ramsay가 윙을 평가하다",
    section2Body: [
      "Hot Ones가 인기를 얻은 이유는 사람들을 세련된 미디어 트레이닝이 도움이 되지 않는 상황에 놓기 때문입니다. 윙이 더 매워지면, 게스트는 더 정직해지고, 질문은 더 좋아집니다. Sean Evans는 진지한 리서치를 하는 것으로 유명합니다—게스트들은 종종 질문의 깊이에 놀랍니다.",
      "Ramsay 같은 음식 전문가에게는 추가적인 레이어가 있습니다: 매운맛을 다루면서 윙을 비평하라는 요청을 받습니다. 단순한 인터뷰 포맷이 아닙니다—침착함의 테스트이고, 보통 통제력을 가진 사람이 그 통제력의 일부를 잃는 모습을 볼 기회입니다.",
    ],
    howToTitle: "전체 에피소드를 자막과 함께 보는 방법",
    howToBody:
      "Translator는 YouTube 영상을 다운로드하고 번역된 자막을 추가할 수 있는 데스크톱 앱입니다. 작동 방식:",
    howToSteps: [
      {
        title: "영상 URL 붙여넣기",
        body: "YouTube 링크를 복사하여 Translator의 다운로드 필드에 붙여넣습니다.",
      },
      {
        title: "영상 다운로드",
        body: "Translator가 영상과 사용 가능한 자막을 컴퓨터로 다운로드합니다. 이 단계는 무료입니다.",
      },
      {
        title: "전사 및 번역",
        body: "영상은 영어입니다. 다른 언어로 자막이 필요하면, Translator가 오디오를 전사하고 번역할 수 있습니다. Stage5 크레딧 또는 OpenAI나 Anthropic의 자체 API 키를 사용할 수 있습니다.",
      },
      {
        title: "시청 및 편집",
        body: "앱이 자막과 함께 영상을 재생합니다. 타이밍을 편집하고, 번역을 수정하고, 최종 SRT 파일을 내보낼 수 있습니다.",
      },
    ],
    howToNote:
      "영상은 컴퓨터에 남아 있습니다. Translator는 로컬에서 작동합니다—아무것도 서버에 업로드되지 않습니다.",
    pricingTitle: "무료 기능과 유료 기능",
    pricingFree: "영상 다운로드, 자막 편집, 라이브러리 관리, SRT 내보내기.",
    pricingPaid:
      "AI 전사 및 번역. Stage5 크레딧(예: ~50분에 $1, ~18시간에 $10) 또는 $10에 한 번 결제하여 BYO를 잠금 해제하고 자체 API 키를 사용할 수 있습니다.",
    freeLabel: "무료:",
    paidLabel: "유료:",
    downloadTitle: "Translator 다운로드",
    downloadBody:
      "Translator는 macOS와 Windows에서 작동합니다. 다운로드하고, Hot Ones URL을 붙여넣고, 워크플로우를 직접 시도해 보세요. 다운로드 및 편집기는 무료입니다.",
    downloadLinkText: "영상 다운로드에 대해 알아보기 →",
    ctaNote:
      "다운로드 및 자막 편집은 무료입니다. AI 전사 및 번역은 Stage5 크레딧 또는 자체 API 키가 필요합니다.",
    aboutTitle: "이 게시물에 대하여",
    aboutBody: [
      "YouTube 영상은 First We Feast에서 직접 임베드됩니다. 처음 30초의 자막은 영어, 한국어, 스페인어(Español) 또는 포르투갈어(Português)로 표시될 수 있습니다. 네 가지 자막 트랙은 모두 Translator에서 전사 및 번역되었으며(처음 30초만), YouTube 자동 자막이 아닙니다.",
      "출처: Sean Evans가 진행하고 Gordon Ramsay가 출연한 Hot Ones 시즌 8. First We Feast. 2026년 8월 22일 게시. 영상은 영어입니다.",
    ],
  },
  pt: {
    title: "Assista Gordon Ramsay no Hot Ones com Legendas | Translator",
    description:
      "Gordon Ramsay encara o desafio do Hot Ones com Sean Evans. Veja o chef famoso enfrentar asinhas cada vez mais picantes enquanto discute comida. Primeiros 30 segundos com legendas multilíngues.",
    keywords: [
      "Gordon Ramsay Hot Ones",
      "Hot Ones temporada 8",
      "Sean Evans First We Feast",
      "Gordon Ramsay asinhas picantes",
      "traduzir vídeos YouTube",
    ],
    h1: "Gordon Ramsay Enfrenta o Desafio do Hot Ones",
    intro:
      "O chef famoso se senta com Sean Evans para o Hot Ones da First We Feast—um programa onde asinhas picantes encontram perguntas honestas. Esta entrevista em inglês permite assistir com legendas multilíngues.",
    section1Title: "O que acontece nos primeiros 30 segundos",
    section1Body: [
      "Gordon Ramsay entra e imediatamente pergunta por um banheiro. Então Sean Evans abre o programa com sua introdução característica: 'Da First We Feast, eu sou Sean Evans, e você está assistindo ao Hot Ones.'",
      "Hot Ones é o programa onde celebridades comem asinhas de frango cada vez mais picantes enquanto respondem perguntas. É um formato que desarmou algumas das entrevistas mais controladas da internet. Quando as pessoas estão focadas em gerenciar o calor, tendem a dar respostas mais diretas.",
      "Esta é a oitava temporada. Ramsay é conhecido por suas críticas diretas sobre comida e culinária, o que torna sua aparição em um programa sobre comer asinhas progressivamente mais picantes particularmente interessante. Os primeiros 30 segundos são apenas a preparação—a entrevista completa é onde ele avalia as asinhas em si.",
    ],
    section2Title: "Ramsay critica as asinhas",
    section2Body: [
      "Hot Ones se tornou popular porque coloca as pessoas em uma situação onde o treinamento de mídia polido não ajuda. As asinhas ficam mais picantes, o convidado fica mais honesto e as perguntas melhoram. Sean Evans é conhecido por fazer pesquisas sérias—os convidados frequentemente se surpreendem com a profundidade das perguntas.",
      "Para profissionais de comida como Ramsay, há uma camada adicional: eles são solicitados a criticar as asinhas enquanto lidam com o calor. Não é apenas um formato de entrevista—é um teste de compostura e uma chance de ver alguém que geralmente está no controle perder parte desse controle.",
    ],
    howToTitle: "Como assistir o episódio completo com legendas",
    howToBody:
      "Translator é um aplicativo de desktop que permite baixar vídeos do YouTube e adicionar legendas traduzidas. Como funciona:",
    howToSteps: [
      {
        title: "Cole a URL do vídeo",
        body: "Copie o link do YouTube e cole no campo de download do Translator.",
      },
      {
        title: "Baixe o vídeo",
        body: "O Translator baixa o vídeo e quaisquer legendas disponíveis para seu computador. Esta etapa é gratuita.",
      },
      {
        title: "Transcreva e traduza",
        body: "O vídeo está em inglês. Se você precisar de legendas em outro idioma, o Translator pode transcrever o áudio e traduzi-lo. Você pode usar créditos Stage5 ou sua própria chave API do OpenAI ou Anthropic.",
      },
      {
        title: "Assista e edite",
        body: "O aplicativo reproduz o vídeo com suas legendas. Você pode editar o tempo, corrigir traduções e exportar o arquivo SRT final.",
      },
    ],
    howToNote:
      "O vídeo fica no seu computador. O Translator funciona localmente—nada é enviado para nossos servidores.",
    pricingTitle: "O que é grátis, o que é pago",
    pricingFree:
      "Download de vídeos, edição de legendas, gerenciamento de biblioteca e exportação de SRT.",
    pricingPaid:
      "Transcrição e tradução com IA. Você pode usar créditos Stage5 (exemplo: $1 por ~50 minutos, $10 por ~18 horas) ou pagar $10 uma vez para desbloquear BYO e usar sua própria chave API.",
    freeLabel: "Grátis:",
    paidLabel: "Pago:",
    downloadTitle: "Baixe o Translator",
    downloadBody:
      "O Translator funciona no macOS e Windows. Baixe, cole a URL do Hot Ones e experimente o fluxo você mesmo. O download e o editor são gratuitos.",
    downloadLinkText: "Saiba mais sobre download de vídeos →",
    ctaNote:
      "Download e edição de legendas são gratuitos. Transcrição e tradução com IA requerem créditos Stage5 ou sua própria chave API.",
    aboutTitle: "Sobre este post",
    aboutBody: [
      "O vídeo do YouTube está incorporado diretamente da First We Feast. Os primeiros 30 segundos de legendas podem ser exibidos em inglês, coreano (한국어), espanhol (Español) ou português. Todas as quatro faixas de legendas foram transcritas e traduzidas no Translator (apenas os primeiros 30 segundos), não são legendas automáticas do YouTube.",
      "Fonte: Hot Ones temporada 8, apresentado por Sean Evans, com Gordon Ramsay. First We Feast. Publicado em 22 de agosto de 2026. O vídeo está em inglês.",
    ],
  },
  vi: {
    title: "Xem Gordon Ramsay trên Hot Ones với phụ đề tiếng Việt | Translator",
    description:
      "Gordon Ramsay nhận lời thách Hot Ones với Sean Evans. Xem đầu bếp nổi tiếng đối mặt cánh gà ngày càng cay trong khi nói về đồ ăn và nấu nướng. 30 giây đầu có phụ đề nhiều ngôn ngữ, gồm tiếng Việt.",
    keywords: [
      "Gordon Ramsay Hot Ones",
      "Hot Ones mùa 8",
      "Sean Evans First We Feast",
      "Gordon Ramsay cánh gà cay",
      "phụ đề tiếng Việt Hot Ones",
      "dịch video YouTube",
    ],
    h1: "Gordon Ramsay nhận lời thách Hot Ones",
    intro:
      "Đầu bếp nổi tiếng ngồi với Sean Evans cho Hot Ones của First We Feast — chương trình cánh gà cay gặp câu hỏi thẳng. Buổi này bằng tiếng Anh; bạn xem với phụ đề nhiều ngôn ngữ, gồm tiếng Việt.",
    section1Title: "30 giây đầu diễn ra thế nào",
    section1Body: [
      "Gordon Ramsay bước vào và hỏi toilet ngay. Rồi Sean Evans mở show bằng câu giới thiệu quen thuộc: 'From First We Feast, I'm Sean Evans, and you're watching Hot Ones.'",
      "Hot Ones là chương trình người nổi tiếng ăn cánh gà ngày càng cay trong khi trả lời câu hỏi. Khi đang lo vị cay, khách thường nói thẳng hơn.",
      "Đây là mùa tám. Ramsay nổi tiếng vì chê đồ ăn không nể, nên việc anh ngồi vào show ăn cánh gà ngày càng nóng càng đáng xem. 30 giây đầu chỉ là phần mở — cả buổi phỏng vấn mới là lúc anh nhận xét cánh gà.",
    ],
    section2Title: "Ramsay nhận xét cánh gà",
    section2Body: [
      "Hot Ones nổi vì đặt người vào tình huống mà kịch bản truyền thông không cứu được. Cánh gà càng cay, khách càng thẳng, câu hỏi càng đáng. Sean Evans nghiên cứu kỹ — khách thường bất ngờ vì câu hỏi sâu.",
      "Với người làm nghề ăn như Ramsay còn một lớp nữa: vừa chịu cay vừa phải nhận xét cánh gà. Không chỉ là phỏng vấn — còn là bài kiểm tra sự bình tĩnh, và cơ hội xem người thường nắm quyền kiểm soát mất đi một phần kiểm soát đó.",
    ],
    howToTitle: "Cách xem hết tập với phụ đề",
    howToBody:
      "Translator là ứng dụng máy tính để bạn tải video YouTube và gắn phụ đề dịch. Cách làm:",
    howToSteps: [
      {
        title: "Dán URL video",
        body: "Chép liên kết YouTube và dán vào ô tải của Translator.",
      },
      {
        title: "Tải video",
        body: "Translator tải video và phụ đề có sẵn về máy. Bước này miễn phí.",
      },
      {
        title: "Chép lời và dịch",
        body: "Video bằng tiếng Anh. Nếu cần phụ đề ngôn ngữ khác, Translator chép lời từ âm thanh rồi dịch. Dùng tín dụng Stage5 hoặc API key của bạn từ OpenAI hay Anthropic.",
      },
      {
        title: "Xem và sửa",
        body: "Ứng dụng phát video kèm phụ đề. Bạn chỉnh nhịp, sửa bản dịch, rồi xuất file SRT.",
      },
    ],
    howToNote:
      "Video nằm trên máy bạn. Translator chạy tại chỗ — không tải gì lên máy chủ của chúng tôi.",
    pricingTitle: "Cái gì miễn phí, cái gì trả phí",
    pricingFree:
      "Tải video, sửa phụ đề, quản lý thư viện, và xuất SRT.",
    pricingPaid:
      "Chép lời và dịch bằng AI. Dùng tín dụng Stage5 (ví dụ: $1 cho ~50 phút, $10 cho ~18 giờ) hoặc trả $10 một lần để mở BYO và dùng API key của bạn.",
    freeLabel: "Miễn phí:",
    paidLabel: "Trả phí:",
    downloadTitle: "Tải Translator",
    downloadBody:
      "Translator chạy trên macOS và Windows. Tải về, dán URL Hot Ones, và tự thử. Tải video và trình sửa phụ đề miễn phí.",
    downloadLinkText: "Tìm hiểu về tải video →",
    ctaNote:
      "Tải video và sửa phụ đề miễn phí. Chép lời và dịch bằng AI cần tín dụng Stage5 hoặc API key của bạn.",
    aboutTitle: "Về bài này",
    aboutBody: [
      "Video YouTube được nhúng trực tiếp từ First We Feast. 30 giây phụ đề đầu có thể hiện tiếng Anh, tiếng Hàn (한국어), tiếng Tây Ban Nha (Español), tiếng Bồ Đào Nha (Português), hoặc tiếng Việt. Cả năm track đều được chép lời và dịch trong Translator (chỉ 30 giây đầu), không phải phụ đề tự động của YouTube.",
      "Nguồn: Hot Ones mùa 8, dẫn chương trình Sean Evans, khách mời Gordon Ramsay. First We Feast. Video bằng tiếng Anh.",
    ],
  },
};
