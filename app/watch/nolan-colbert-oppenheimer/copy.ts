import { getWatchExperienceCopy } from "../../../lib/watch/experience-copy";
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
  howToNote: string;
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

export const nolanColbertOppenheimerCopy: Record<SupportedLocale, WatchPageCopy> = {
  en: {
    title: "Nolan on Colbert: 30-second subtitle demo | Stage5",
    description:
      "Try Colbert's 30-second introduction to Christopher Nolan with captions in five languages, plus context and an exercise on translating award nominations.",
    keywords: [
      "Christopher Nolan interview",
      "Oppenheimer interview",
      "Late Show Colbert",
      "Christopher Nolan burner phone",
      "Oppenheimer behind the scenes",
    ],
    h1: "Christopher Nolan Talks Oppenheimer on Colbert",
    intro:
      "This 30-second preview contains Stephen Colbert's studio introduction to Christopher Nolan during the 2024 Oppenheimer awards season. Nolan's conversation and the burner-phone story come later in the original video. The sample offers English, Spanish, Korean, Portuguese and Vietnamese captions.",
    section1Title: "The introduction and the interview are different moments",
    section1Body: [
      "The Late Show's description places the interview in Albert Einstein's office at the Institute for Advanced Study in Princeton, New Jersey. It identifies Nolan's filmmaking choices and his avoidance of smartphones as topics. That conversation is beyond this page's caption preview; follow the original-video link to watch it.",
      "The introduction refers to 13 Oscar nominations for Oppenheimer. Read that as a statement from the 2024 awards campaign, not a claim of 13 wins. A subtitle needs to preserve both the number and the distinction between being nominated and winning."
    ],
    howToTitle: "How to watch the full interview with translated subtitles",
    howToBody:
      "Translator is a desktop app that downloads videos from YouTube and lets you add translated subtitles in your language. Here's how it works:",
    howToSteps: [
      {
        title: "Paste the YouTube URL",
        body: "Copy the link to this Late Show episode and paste it into Translator's download field.",
      },
      {
        title: "Download the video",
        body: "Translator downloads the video file to your computer. This step is free and runs locally on your machine.",
      },
      {
        title: "Transcribe and translate",
        body: "The video already has English captions. You can translate those captions to Spanish, Korean, Portuguese, or another language. Choose your AI model (OpenAI, Anthropic, etc.) and translation preferences. You can pay per minute with Stage5 credits or bring your own API key.",
      },
      {
        title: "Watch and edit",
        body: "The app plays the video with your translated subtitles. You can edit the subtitle text, adjust timing, change styles, and export the final SRT file when you're done.",
      },
    ],
    howToNote: getWatchExperienceCopy("en").processing,
    pricingTitle: "What's free, what costs money",
    pricingFree:
      "Downloading videos, organizing your library, editing subtitles manually, and exporting SRT files.",
    pricingPaid:
      "AI transcription and translation. You can use Stage5 credits (approximately $1 for ~50 minutes of video, $10 for ~18 hours) or unlock BYO (bring your own) API key access once for $10 and pay OpenAI or Anthropic directly.",
    section2Title: "An editing exercise: awards and attribution",
    section2Body: [
      "Listen for the change from a nomination for the film to nominations for Nolan's directing and adapted screenplay. A long list can become misleading if a shortened caption loses who or what each award category refers to.",
      "Write two versions of that introduction: one close to the spoken sentence and one short enough to read comfortably. Check that both retain the nomination wording and attribution. In Translator, try the same exercise with a video you can use and adjust the subtitle timing. If the clip ends mid-sentence, do not invent its ending to make the caption look complete."
    ],
    downloadTitle: "Download Translator",
    downloadBody:
      "Translator runs on macOS and Windows. Download the app, paste this video's URL, and try the workflow. The video downloader and subtitle editor are free to use.",
    aboutTitle: "About this post",
    aboutBody: [
      "This page embeds the original YouTube video and provides a 30-second caption preview in English, Spanish, Korean, Portuguese and Vietnamese. These five caption tracks were made with Translator. The full original video is available through the YouTube link.",
      "Source: The Late Show with Stephen Colbert, featuring Christopher Nolan. Video is in English. The episode title references Nolan's burner phone, which is discussed later in the full interview, not in the 30-second preview shown here.",
    ],
  },
  es: {
    title: "Nolan con Colbert: demo de subtítulos de 30 segundos | Stage5",
    description:
      "Prueba la presentación de Nolan por Colbert: 30 segundos con subtítulos en cinco idiomas y un ejercicio sobre cómo traducir nominaciones a premios.",
    keywords: ["Christopher Nolan", "Oppenheimer", "Late Show", "Colbert"],
    h1: "Christopher Nolan habla de Oppenheimer con Colbert",
    intro:
      "Esta muestra de 30 segundos contiene la presentación de Christopher Nolan que Stephen Colbert hace desde el estudio durante la temporada de premios de Oppenheimer en 2024. La conversación con Nolan y la historia de su teléfono aparecen después en el video original. Hay subtítulos en inglés, español, coreano, portugués y vietnamita.",
    section1Title: "La presentación y la entrevista son momentos distintos",
    section1Body: [
      "La descripción de The Late Show sitúa la entrevista en el despacho de Albert Einstein en el Institute for Advanced Study de Princeton, Nueva Jersey. Señala como temas las decisiones cinematográficas de Nolan y su rechazo a los smartphones. Esa conversación queda fuera de la muestra de subtítulos; puedes verla desde el enlace al video original.",
      "La presentación menciona 13 nominaciones al Oscar para Oppenheimer. Es una afirmación de la campaña de premios de 2024, no de 13 premios ganados. El subtítulo debe conservar tanto la cifra como la diferencia entre recibir una nominación y ganar."
    ],
    howToTitle: "Cómo ver la entrevista completa con subtítulos traducidos",
    howToBody:
      "Translator es una aplicación de escritorio que descarga videos de YouTube y te permite añadir subtítulos traducidos en tu idioma. Así funciona:",
    howToSteps: [
      {
        title: "Pega la URL de YouTube",
        body: "Copia el enlace de este episodio del Late Show y pégalo en el campo de descarga de Translator.",
      },
      {
        title: "Descarga el video",
        body: "Translator descarga el archivo de video a tu computadora. Este paso es gratuito y se ejecuta localmente en tu máquina.",
      },
      {
        title: "Transcribe y traduce",
        body: "El video ya tiene subtítulos en inglés. Puedes traducir esos subtítulos al español, coreano, portugués u otro idioma. Elige tu modelo de IA y preferencias de traducción. Puedes pagar por minuto con créditos Stage5 o usar tu propia API key.",
      },
      {
        title: "Ve y edita",
        body: "La app reproduce el video con tus subtítulos traducidos. Puedes editar el texto, ajustar el tiempo, cambiar estilos y exportar el archivo SRT final.",
      },
    ],
    howToNote: getWatchExperienceCopy("es").processing,
    pricingTitle: "Qué es gratis, qué cuesta dinero",
    pricingFree:
      "Descargar videos, organizar tu biblioteca, editar subtítulos manualmente y exportar archivos SRT.",
    pricingPaid:
      "Transcripción y traducción con IA. Puedes usar créditos Stage5 (aproximadamente $1 por ~50 minutos, $10 por ~18 horas) o desbloquear el acceso BYO (trae tu propia clave) una vez por $10 y pagar directamente a OpenAI o Anthropic.",
    section2Title: "Ejercicio de edición: premios y atribución",
    section2Body: [
      "Escucha el paso de una nominación para la película a las de Nolan por dirección y guion adaptado. Una lista larga puede resultar engañosa si, al acortarla, se pierde a quién o a qué corresponde cada categoría.",
      "Escribe dos versiones de esa presentación: una cercana a la frase hablada y otra breve y cómoda de leer. Comprueba que ambas mantienen las nominaciones y su atribución. En Translator, prueba el mismo ejercicio con un video que puedas utilizar y ajusta los tiempos. Si el fragmento termina a mitad de frase, no inventes el final para que el subtítulo parezca completo."
    ],
    downloadTitle: "Descarga Translator",
    downloadBody:
      "Translator funciona en macOS y Windows. Descarga la app, pega la URL de este video y prueba el flujo de trabajo. El descargador de videos y el editor de subtítulos son gratuitos.",
    aboutTitle: "Sobre este post",
    aboutBody: [
      "Esta página incorpora el video original de YouTube y ofrece una vista previa de 30 segundos con subtítulos en inglés, español, coreano, portugués y vietnamita. Las cinco pistas se crearon con Translator. El enlace de YouTube permite ver el video original completo.",
      "Fuente: The Late Show with Stephen Colbert, con Christopher Nolan. Video en inglés. El título del episodio menciona el teléfono desechable de Nolan, que se discute más adelante en la entrevista completa, no en la vista previa de 30 segundos que se muestra aquí.",
    ],
  },
  ko: {
    title: "콜베어의 놀란 소개: 30초 자막 데모 | Stage5",
    description:
      "콜베어가 크리스토퍼 놀란을 소개하는 첫 30초를 5개 언어 자막으로 살펴보세요. 수상 후보와 수상의 차이를 살리는 자막 편집 연습도 제공합니다.",
    keywords: ["크리스토퍼 놀란", "오펜하이머", "Late Show", "콜베어"],
    h1: "크리스토퍼 놀란이 콜베어와 오펜하이머를 이야기하다",
    intro:
      "이 30초 미리보기에는 2024년 오펜하이머의 시상식 시즌에 스티븐 콜베어가 스튜디오에서 크리스토퍼 놀란을 소개하는 부분이 담겨 있습니다. 놀란과의 대화와 휴대전화 이야기는 원본 영상의 뒤쪽에 나옵니다. 샘플 자막은 영어·스페인어·한국어·포르투갈어·베트남어로 제공됩니다.",
    section1Title: "소개와 인터뷰는 서로 다른 장면입니다",
    section1Body: [
      "The Late Show의 영상 설명에 따르면 인터뷰 장소는 뉴저지주 프린스턴 고등연구소의 알베르트 아인슈타인 사무실입니다. 놀란의 영화적 선택과 스마트폰을 쓰지 않는 생활을 주요 주제로 소개합니다. 이 대화는 자막 미리보기 범위 밖에 있으므로 원본 영상 링크에서 확인하세요.",
      "소개에서는 오펜하이머가 아카데미상 13개 부문 후보에 올랐다고 말합니다. 이는 2024년 시상식 캠페인 당시의 설명이지, 13개 부문을 수상했다는 뜻이 아닙니다. 자막에서는 숫자뿐 아니라 후보 지명과 수상의 차이도 지켜야 합니다."
    ],
    howToTitle: "번역 자막으로 전체 인터뷰 보는 방법",
    howToBody:
      "Translator는 YouTube에서 비디오를 다운로드하고 원하는 언어로 번역된 자막을 추가할 수 있는 데스크톱 앱입니다. 작동 방식은 다음과 같습니다:",
    howToSteps: [
      {
        title: "YouTube URL 붙여넣기",
        body: "이 Late Show 에피소드의 링크를 복사하여 Translator의 다운로드 필드에 붙여넣습니다.",
      },
      {
        title: "비디오 다운로드",
        body: "Translator가 비디오 파일을 컴퓨터에 다운로드합니다. 이 단계는 무료이며 로컬에서 실행됩니다.",
      },
      {
        title: "전사 및 번역",
        body: "비디오에는 이미 영어 자막이 있습니다. 해당 자막을 스페인어, 한국어, 포르투갈어 또는 다른 언어로 번역할 수 있습니다. AI 모델과 번역 설정을 선택하세요. Stage5 크레딧으로 분당 결제하거나 자신의 API 키를 사용할 수 있습니다.",
      },
      {
        title: "시청 및 편집",
        body: "앱이 번역된 자막과 함께 비디오를 재생합니다. 자막 텍스트를 편집하고, 타이밍을 조정하고, 스타일을 변경하고, 완료되면 최종 SRT 파일을 내보낼 수 있습니다.",
      },
    ],
    howToNote: getWatchExperienceCopy("ko").processing,
    pricingTitle: "무료 항목, 유료 항목",
    pricingFree:
      "비디오 다운로드, 라이브러리 정리, 수동 자막 편집, SRT 파일 내보내기.",
    pricingPaid:
      "AI 전사 및 번역. Stage5 크레딧을 사용할 수 있습니다(약 $1에 ~50분, $10에 ~18시간) 또는 BYO(자신의 API 키 가져오기) 액세스를 한 번 $10에 잠금 해제하고 OpenAI나 Anthropic에 직접 결제할 수 있습니다.",
    section2Title: "상과 후보의 주체를 살리는 편집 연습",
    section2Body: [
      "영화의 작품상 후보 지명에서 놀란의 감독상·각색상 후보 지명으로 넘어가는 부분에 귀를 기울여 보세요. 긴 목록을 줄이다가 각 부문이 누구 또는 무엇에 해당하는지 빠뜨리면 뜻이 달라질 수 있습니다.",
      "소개 문장을 두 가지로 써 보세요. 하나는 원래 발화에 가깝게, 다른 하나는 편하게 읽을 수 있을 만큼 짧게 적습니다. 두 문장 모두 후보 지명과 그 주체를 유지하는지 확인하세요. 사용 가능한 영상으로 Translator에서 같은 연습을 하고 자막 시간을 조절할 수 있습니다. 장면이 문장 중간에 끝나면 완성된 자막처럼 보이게 하려고 뒷말을 지어내지 마세요."
    ],
    downloadTitle: "Translator 다운로드",
    downloadBody:
      "Translator는 macOS와 Windows에서 실행됩니다. 앱을 다운로드하고, 이 비디오의 URL을 붙여넣고, 워크플로를 시도해 보세요. 비디오 다운로더와 자막 편집기는 무료로 사용할 수 있습니다.",
    aboutTitle: "이 게시물에 대하여",
    aboutBody: [
      "이 페이지는 YouTube 원본 영상을 삽입하고 처음 30초의 영어, 스페인어, 한국어, 포르투갈어, 베트남어 자막을 제공합니다. 다섯 자막 트랙은 Translator로 만들었습니다. YouTube 링크에서 원본 전체 영상을 볼 수 있습니다.",
      "출처: Stephen Colbert의 The Late Show, 크리스토퍼 놀란 출연. 비디오는 영어입니다. 에피소드 제목은 놀란의 버너폰을 언급하는데, 이는 여기에 표시된 30초 미리보기가 아닌 전체 인터뷰의 후반부에서 논의됩니다.",
    ],
  },
  pt: {
    title: "Nolan com Colbert: demo de legendas de 30 segundos | Stage5",
    description:
      "Experimente a apresentação de Nolan por Colbert: 30 segundos com legendas em cinco idiomas e um exercício sobre como traduzir indicações a prêmios.",
    keywords: ["Christopher Nolan", "Oppenheimer", "Late Show", "Colbert"],
    h1: "Christopher Nolan fala sobre Oppenheimer com Colbert",
    intro:
      "Esta prévia de 30 segundos mostra Stephen Colbert apresentando Christopher Nolan no estúdio durante a temporada de premiações de Oppenheimer em 2024. A conversa com Nolan e a história do telefone aparecem depois no vídeo original. Há legendas em inglês, espanhol, coreano, português e vietnamita.",
    section1Title: "A apresentação e a entrevista são momentos diferentes",
    section1Body: [
      "A descrição do The Late Show situa a entrevista no escritório de Albert Einstein no Institute for Advanced Study, em Princeton, Nova Jersey. Ela destaca as escolhas cinematográficas de Nolan e seu hábito de evitar smartphones. Essa conversa fica fora da prévia de legendas; use o link do vídeo original para assisti-la.",
      "A apresentação menciona 13 indicações ao Oscar para Oppenheimer. É uma afirmação da campanha de premiações de 2024, não de 13 vitórias. A legenda precisa preservar tanto o número quanto a diferença entre ser indicado e ganhar."
    ],
    howToTitle: "Como assistir a entrevista completa com legendas traduzidas",
    howToBody:
      "Translator é um aplicativo de desktop que baixa vídeos do YouTube e permite adicionar legendas traduzidas no seu idioma. Veja como funciona:",
    howToSteps: [
      {
        title: "Cole a URL do YouTube",
        body: "Copie o link deste episódio do Late Show e cole no campo de download do Translator.",
      },
      {
        title: "Baixe o vídeo",
        body: "O Translator baixa o arquivo de vídeo para o seu computador. Este passo é gratuito e roda localmente na sua máquina.",
      },
      {
        title: "Transcreva e traduza",
        body: "O vídeo já tem legendas em inglês. Você pode traduzir essas legendas para espanhol, coreano, português ou outro idioma. Escolha seu modelo de IA e preferências de tradução. Você pode pagar por minuto com créditos Stage5 ou usar sua própria chave de API.",
      },
      {
        title: "Assista e edite",
        body: "O aplicativo reproduz o vídeo com suas legendas traduzidas. Você pode editar o texto, ajustar o tempo, mudar estilos e exportar o arquivo SRT final.",
      },
    ],
    howToNote: getWatchExperienceCopy("pt").processing,
    pricingTitle: "O que é grátis, o que custa dinheiro",
    pricingFree:
      "Baixar vídeos, organizar sua biblioteca, editar legendas manualmente e exportar arquivos SRT.",
    pricingPaid:
      "Transcrição e tradução com IA. Você pode usar créditos Stage5 (aproximadamente $1 para ~50 minutos, $10 para ~18 horas) ou desbloquear o acesso BYO (traga sua própria chave) uma vez por $10 e pagar diretamente à OpenAI ou Anthropic.",
    section2Title: "Exercício de edição: prêmios e atribuição",
    section2Body: [
      "Ouça a passagem de uma indicação para o filme às indicações de Nolan por direção e roteiro adaptado. Uma lista longa pode ficar enganosa se, ao encurtá-la, desaparecer a quem ou a quê cada categoria se refere.",
      "Escreva duas versões dessa apresentação: uma próxima da fala e outra curta o bastante para ler com conforto. Confira se ambas mantêm as indicações e sua atribuição. No Translator, faça o mesmo exercício com um vídeo que você possa utilizar e ajuste o tempo das legendas. Se o trecho terminar no meio de uma frase, não invente o final para a legenda parecer completa."
    ],
    downloadTitle: "Baixe o Translator",
    downloadBody:
      "O Translator funciona no macOS e Windows. Baixe o aplicativo, cole a URL deste vídeo e experimente o fluxo de trabalho. O downloader de vídeo e o editor de legendas são gratuitos.",
    aboutTitle: "Sobre este post",
    aboutBody: [
      "Esta página incorpora o vídeo original do YouTube e oferece uma prévia de 30 segundos com legendas em inglês, espanhol, coreano, português e vietnamita. As cinco faixas foram criadas com o Translator. O vídeo original completo está disponível pelo link do YouTube.",
      "Fonte: The Late Show com Stephen Colbert, apresentando Christopher Nolan. Vídeo em inglês. O título do episódio menciona o celular descartável de Nolan, que é discutido mais tarde na entrevista completa, não na prévia de 30 segundos mostrada aqui.",
    ],
  },
  vi: {
    title: "Colbert giới thiệu Nolan: mẫu phụ đề 30 giây | Stage5",
    description:
      "Thử 30 giây Colbert giới thiệu Christopher Nolan với phụ đề năm ngôn ngữ và bài tập giữ đúng ý khi dịch đề cử giải thưởng.",
    keywords: [
      "Christopher Nolan phỏng vấn",
      "Oppenheimer",
      "Stephen Colbert",
      "The Late Show",
      "phỏng vấn tiếng Anh",
    ],
    h1: "Xem Christopher Nolan Thảo Luận Về Oppenheimer",
    intro:
      "Mẫu 30 giây này là phần Stephen Colbert giới thiệu Christopher Nolan tại trường quay trong mùa giải thưởng năm 2024 của Oppenheimer. Cuộc trò chuyện với Nolan và câu chuyện về điện thoại xuất hiện sau đó trong video gốc. Mẫu có phụ đề Anh, Tây Ban Nha, Hàn, Bồ Đào Nha và Việt.",
    section1Title: "Lời giới thiệu và cuộc phỏng vấn là hai thời điểm khác nhau",
    section1Body: [
      "Mô tả của The Late Show cho biết cuộc phỏng vấn diễn ra tại văn phòng của Albert Einstein ở Viện Nghiên cứu Cao cấp tại Princeton, New Jersey. Các chủ đề gồm lựa chọn làm phim của Nolan và việc ông tránh dùng điện thoại thông minh. Cuộc trò chuyện này nằm ngoài mẫu phụ đề; hãy theo liên kết đến video gốc để xem.",
      "Lời giới thiệu nhắc đến 13 đề cử Oscar của Oppenheimer. Đây là thông tin trong chiến dịch giải thưởng năm 2024, không có nghĩa phim thắng 13 giải. Phụ đề cần giữ cả con số lẫn sự khác biệt giữa được đề cử và chiến thắng."
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
    howToNote: getWatchExperienceCopy("vi").processing,
    pricingTitle: "Miễn phí và trả phí",
    pricingFree:
      "Tải video, quản lý thư viện, chỉnh sửa phụ đề thủ công và xuất tệp SRT.",
    pricingPaid:
      "Phiên âm và dịch AI. Sử dụng tín dụng Stage5 hoặc mở khóa BYO một lần với $10.",
    section2Title: "Bài tập biên tập: giải thưởng và đối tượng được đề cử",
    section2Body: [
      "Hãy nghe đoạn chuyển từ đề cử dành cho bộ phim sang các đề cử đạo diễn và kịch bản chuyển thể của Nolan. Một danh sách dài có thể gây hiểu nhầm nếu bản rút gọn làm mất thông tin mỗi hạng mục thuộc về ai hoặc tác phẩm nào.",
      "Viết hai phiên bản lời giới thiệu: một bản sát lời nói và một bản đủ ngắn để đọc thoải mái. Kiểm tra cả hai vẫn giữ đúng ý đề cử và đối tượng được đề cử. Với video bạn có thể sử dụng, hãy làm bài tập tương tự trong Translator rồi chỉnh thời gian phụ đề. Nếu đoạn phim dừng giữa câu, đừng tự thêm phần kết để phụ đề trông trọn vẹn."
    ],
    downloadTitle: "Tải Translator",
    downloadBody:
      "Translator hoạt động trên macOS và Windows. Tải xuống, dán URL của video này và xem quy trình hoạt động như thế nào.",
    aboutTitle: "Về bài viết này",
    aboutBody: [
      "Trang này nhúng video gốc từ YouTube và cung cấp bản xem trước 30 giây với phụ đề tiếng Anh, Tây Ban Nha, Hàn, Bồ Đào Nha và Việt. Năm bản phụ đề được tạo bằng Translator. Bạn có thể xem toàn bộ video gốc qua liên kết YouTube.",
      "Nguồn: The Late Show với Stephen Colbert, có Christopher Nolan. Video bằng tiếng Anh. Tiêu đề tập đề cập đến điện thoại dùng một lần của Nolan, được thảo luận sau trong cuộc phỏng vấn đầy đủ, không phải trong bản xem trước 30 giây hiển thị ở đây.",
    ],
  },
};
