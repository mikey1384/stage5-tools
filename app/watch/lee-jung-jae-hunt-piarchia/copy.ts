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

export const leeJungJaeHuntPiarchiaCopy: Record<SupportedLocale, WatchPageCopy> = {
  en: {
    title: "Lee Jung-jae on Hunt: 30-second subtitle demo | Stage5",
    description:
      "Try a 30-second Hunt interview preview with English, Spanish or Portuguese captions, plus a chapter guide and subtitle-editing notes from Stage5.",
    keywords: [
      "Lee Jung-jae interview English subtitles",
      "Hunt interview",
      "Lee Dong-jin Piarchia",
      "watch Korean interview English",
      "translate Korean video to English",
      "Korean film interview English",
      "헌트 interview",
    ],
    h1: "Watch Lee Jung-jae Talk About Making Hunt",
    intro:
      "The opening of Lee Dong-jin's Piarchia introduces Lee Jung-jae as the director of Hunt and asks how he feels before the film's release. This page offers a 30-second caption sample in English, Spanish and Portuguese. The filmmaking discussion continues in the full Korean interview linked from the player.",
    section1Title: "Find the filmmaking discussion",
    section1Body: [
      "The creator's chapter list points to screenwriting at 04:00, casting Jung Woo-sung at 06:54 and the choice of 1983 as the story's setting at 18:23. These are positions in the 42-minute original video, beyond this page's caption sample.",
      "The creator warns of Hunt spoilers from 21:07 to 27:22. Skip that interval if you have not seen the film. The opening's reference to time remaining before release belongs to the recording; it is not a current release announcement."
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
        body: "If the video doesn't have Korean captions, you can transcribe it using AI. If it does, you can translate those captions to English. You can use Stage5 credits (pay per minute) or bring your own API key from OpenAI or Anthropic.",
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
    section2Title: "Try editing for meaning, not just word count",
    section2Body: [
      "The greeting identifies two people with similar names: Lee Dong-jin is the host; Lee Jung-jae is the guest and director. Keep those roles clear when shortening a subtitle. Korean forms of address can carry that information even when an English sentence would normally omit them.",
      "Choose one question in the opening and write a shorter subtitle that preserves who is being addressed and what is being asked. Compare it with the sample while replaying the same moment. In Translator, use the subtitle editor to test the wording and reading time on a video you can use. This page supplies translated captions for only the opening 30 seconds."
    ],
    downloadTitle: "Download Translator",
    downloadBody:
      "Translator works on macOS and Windows. Download it, paste this video's URL, and see how the workflow feels. The download and subtitle editor are free to use.",
    aboutTitle: "About this post",
    aboutBody: [
      "The YouTube video is embedded directly from the official source. The first 30 seconds of captions shown in the player can be displayed in English, Spanish (Español), or Portuguese (Português). All three caption tracks were transcribed and translated in Translator. They are not YouTube automatic captions. The rest of the episode is not published here—this post explains the workflow so you can translate the full video yourself.",
      "Source: Lee Dong-jin's Piarchia (B tv 이동진의 파이아키아), hosted by critic Lee Dong-jin, featuring director Lee Jung-jae. Video is in Korean. Title: [헌트]의 이정재 감독님을 모셨습니다!!! | 심층 인터뷰 (We have invited Hunt's director Lee Jung-jae!!! | In-depth Interview). Duration: 42:16.",
    ],
  },
  es: {
    title: "Lee Jung-jae y Hunt: demo de subtítulos de 30 segundos | Stage5",
    description:
      "Prueba 30 segundos de la entrevista sobre Hunt con subtítulos en inglés, español o portugués, una guía de capítulos y consejos de edición.",
    keywords: [
      "Lee Jung-jae entrevista",
      "Hunt entrevista",
      "Lee Dong-jin Piarchia",
      "ver entrevista coreana español",
    ],
    h1: "Lee Jung-jae Habla Sobre la Realización de Hunt",
    intro:
      "El inicio de Piarchia de Lee Dong-jin presenta a Lee Jung-jae como director de Hunt y le pregunta cómo se siente antes del estreno. Aquí puedes probar 30 segundos de subtítulos en inglés, español y portugués. La conversación sobre cine continúa en la entrevista completa en coreano, enlazada desde el reproductor.",
    section1Title: "Encuentra la conversación sobre cine",
    section1Body: [
      "Los capítulos del canal sitúan el guion en 04:00, la elección de Jung Woo-sung en 06:54 y la ambientación en 1983 en 18:23. Son posiciones del video original de 42 minutos, fuera de esta muestra de subtítulos.",
      "El canal advierte de spoilers de Hunt entre 21:07 y 27:22. Evita ese intervalo si no has visto la película. La referencia inicial al tiempo que falta para el estreno corresponde a la grabación; no anuncia un estreno actual."
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
        body: "Si el video no tiene subtítulos en coreano, puedes transcribirlo con IA. Si los tiene, puedes traducir esos subtítulos. Usa créditos Stage5 o tu propia clave API.",
      },
      {
        title: "Ve con subtítulos que controlas",
        body: "La app reproduce el video con tus subtítulos traducidos. Puedes editar el tiempo, corregir traducciones y exportar el archivo SRT final.",
      },
    ],
    pricingTitle: "Qué es gratis, qué es de pago",
    pricingFree:
      "Descargar videos, gestionar tu biblioteca, editar subtítulos manualmente y exportar archivos SRT.",
    pricingPaid:
      "Transcripción y traducción con IA. Puedes usar créditos Stage5 o desbloquear BYO una vez por $10 y traer tu propia clave API de OpenAI o Anthropic.",
    section2Title: "Edita el sentido, además de la longitud",
    section2Body: [
      "El saludo presenta a dos personas con nombres parecidos: Lee Dong-jin es el anfitrión; Lee Jung-jae, el invitado y director. Al acortar un subtítulo, conserva esos papeles. Las formas de tratamiento coreanas pueden aportar esa información aunque una frase en español no necesite repetirla.",
      "Elige una pregunta del inicio y redacta un subtítulo más breve que conserve a quién se dirige y qué pregunta. Compáralo con la muestra mientras repites el mismo momento. En Translator puedes probar el texto y el tiempo de lectura con un video que puedas utilizar. Esta página solo ofrece subtítulos traducidos para los primeros 30 segundos."
    ],
    downloadTitle: "Descarga Translator",
    downloadBody:
      "Translator funciona en macOS y Windows. Descárgalo, pega la URL de este video y prueba el flujo.",
    aboutTitle: "Sobre este post",
    aboutBody: [
      "El video de YouTube está incrustado directamente desde la fuente oficial. Los primeros 30 segundos de subtítulos que se muestran en el reproductor pueden aparecer en inglés, español o portugués. Las tres pistas fueron transcritas y traducidas en Translator.",
      "Fuente: Piarchia de Lee Dong-jin, presentado por el crítico Lee Dong-jin, con el director Lee Jung-jae. El video está en coreano. Duración: 42:16.",
    ],
  },
  ko: {
    title: "이정재의 헌트 인터뷰: 30초 자막 데모 | Stage5",
    description:
      "헌트 인터뷰의 첫 30초를 영어·스페인어·포르투갈어 자막으로 살펴보세요. 원본 영상의 주요 구간과 자막 편집 연습도 안내합니다.",
    keywords: [
      "이정재 인터뷰",
      "헌트 인터뷰",
      "이동진 파이아키아",
      "한국 영화 인터뷰",
    ],
    h1: "이정재 감독의 헌트 제작 이야기",
    intro:
      "이동진의 파이아키아는 헌트의 감독 이정재를 소개하고 개봉을 앞둔 심정을 묻는 것으로 시작합니다. 이 페이지에서는 첫 30초의 영어·스페인어·포르투갈어 자막을 체험할 수 있습니다. 영화 제작에 관한 대화는 플레이어에 연결된 한국어 원본 영상에서 이어집니다.",
    section1Title: "영화 제작 이야기를 찾아보세요",
    section1Body: [
      "채널이 제공한 챕터에 따르면 시나리오 작업은 04:00, 정우성 캐스팅은 06:54, 시대적 배경을 1983년으로 정한 이유는 18:23부터 다룹니다. 모두 약 42분 길이 원본 영상의 위치이며, 이 페이지의 자막 샘플 범위 밖입니다.",
      "채널은 21:07~27:22에 헌트 스포일러가 있다고 안내합니다. 영화를 아직 보지 않았다면 이 구간을 건너뛰세요. 도입부에서 개봉까지 남은 기간을 말하는 것은 촬영 당시의 이야기이며, 현재 개봉 일정 안내가 아닙니다."
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
        body: "영상에 한국어 자막이 없으면 AI로 전사할 수 있습니다. 있으면 자막을 번역할 수 있습니다. Stage5 크레딧 또는 자체 API 키를 사용하세요.",
      },
      {
        title: "제어 가능한 자막으로 시청",
        body: "앱이 번역된 자막과 함께 영상을 재생합니다. 타이밍을 편집하고, 번역을 수정하고, 최종 SRT 파일을 내보낼 수 있습니다.",
      },
    ],
    pricingTitle: "무료 기능과 유료 기능",
    pricingFree:
      "영상 다운로드, 라이브러리 관리, 수동 자막 편집, SRT 파일 내보내기.",
    pricingPaid:
      "AI 전사 및 번역. Stage5 크레딧 사용 또는 BYO를 $10에 잠금 해제하고 자체 API 키 사용.",
    section2Title: "길이를 줄여도 뜻은 남기는 자막 연습",
    section2Body: [
      "인사말에는 이름이 비슷한 두 사람이 나옵니다. 이동진은 진행자이고 이정재는 초대 손님이자 감독입니다. 자막을 줄일 때도 이 역할은 분명해야 합니다. 한국어 호칭이 전달하는 정보를 다른 언어에서는 이름이나 문장 구조로 풀어야 할 수도 있습니다.",
      "도입부의 질문 하나를 골라, 누구에게 무엇을 묻는지 유지하면서 더 짧은 자막을 써 보세요. 같은 장면을 반복하며 샘플과 비교한 뒤, 사용 가능한 영상으로 Translator의 자막 편집기에서 표현과 읽는 시간을 조절해 볼 수 있습니다. 이 페이지의 번역 자막은 첫 30초에만 제공됩니다."
    ],
    downloadTitle: "Translator 다운로드",
    downloadBody:
      "Translator는 macOS와 Windows에서 작동합니다. 다운로드하고, 이 영상의 URL을 붙여넣고, 워크플로우를 확인하세요.",
    aboutTitle: "이 게시물에 대하여",
    aboutBody: [
      "YouTube 영상은 공식 출처에서 직접 임베드됩니다. 플레이어에 표시되는 처음 30초의 자막은 영어, 스페인어 또는 포르투갈어로 표시될 수 있습니다. 세 가지 자막 트랙은 모두 Translator에서 전사 및 번역되었습니다.",
      "출처: 이동진의 파이아키아, 평론가 이동진이 진행하고 이정재 감독이 출연. 영상은 한국어입니다. 제목: [헌트]의 이정재 감독님을 모셨습니다!!! | 심층 인터뷰. 길이: 42:16.",
    ],
  },
  pt: {
    title: "Lee Jung-jae e Hunt: demo de legendas de 30 segundos | Stage5",
    description:
      "Experimente 30 segundos da entrevista sobre Hunt com legendas em inglês, espanhol ou português, um guia de capítulos e dicas de edição.",
    keywords: [
      "Lee Jung-jae entrevista",
      "Hunt entrevista",
      "Lee Dong-jin Piarchia",
      "assistir entrevista coreana português",
    ],
    h1: "Lee Jung-jae Fala Sobre a Realização de Hunt",
    intro:
      "A abertura do Piarchia de Lee Dong-jin apresenta Lee Jung-jae como diretor de Hunt e pergunta como ele se sente antes da estreia. Aqui você pode experimentar 30 segundos de legendas em inglês, espanhol e português. A conversa sobre cinema continua na entrevista completa em coreano, acessível pelo link no player.",
    section1Title: "Encontre a conversa sobre cinema",
    section1Body: [
      "Os capítulos fornecidos pelo canal indicam o roteiro em 04:00, a escolha de Jung Woo-sung em 06:54 e a ambientação em 1983 em 18:23. São posições no vídeo original de 42 minutos, fora desta amostra de legendas.",
      "O canal avisa que há spoilers de Hunt entre 21:07 e 27:22. Pule esse trecho se ainda não viu o filme. A referência inicial ao tempo que falta para a estreia diz respeito à gravação; não é um anúncio de lançamento atual."
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
        body: "Se o vídeo não tiver legendas em coreano, você pode transcrevê-lo usando IA. Se tiver, você pode traduzir essas legendas. Use créditos Stage5 ou sua própria chave API.",
      },
      {
        title: "Assista com legendas que você controla",
        body: "O aplicativo reproduz o vídeo com suas legendas traduzidas. Você pode editar o tempo, corrigir traduções e exportar o arquivo SRT final.",
      },
    ],
    pricingTitle: "O que é grátis, o que é pago",
    pricingFree:
      "Baixar vídeos, gerenciar sua biblioteca, editar legendas manualmente e exportar arquivos SRT.",
    pricingPaid:
      "Transcrição e tradução com IA. Você pode usar créditos Stage5 ou desbloquear BYO uma vez por $10 e trazer sua própria chave API do OpenAI ou Anthropic.",
    section2Title: "Edite o sentido, além do tamanho",
    section2Body: [
      "A saudação apresenta duas pessoas com nomes parecidos: Lee Dong-jin é o apresentador; Lee Jung-jae, o convidado e diretor. Ao encurtar uma legenda, mantenha esses papéis claros. As formas de tratamento em coreano podem transmitir essa informação mesmo quando uma frase em português não precisa repeti-la.",
      "Escolha uma pergunta da abertura e escreva uma legenda mais curta que preserve a quem ela se dirige e o que pergunta. Compare com a amostra enquanto repete o mesmo momento. No Translator, teste o texto e o tempo de leitura com um vídeo que você possa utilizar. Esta página oferece legendas traduzidas apenas para os primeiros 30 segundos."
    ],
    downloadTitle: "Baixe o Translator",
    downloadBody:
      "O Translator funciona no macOS e Windows. Baixe, cole a URL deste vídeo e veja como o fluxo funciona.",
    aboutTitle: "Sobre este post",
    aboutBody: [
      "O vídeo do YouTube está incorporado diretamente da fonte oficial. Os primeiros 30 segundos de legendas mostrados no player podem ser exibidos em inglês, espanhol ou português. Todas as três faixas foram transcritas e traduzidas no Translator.",
      "Fonte: Piarchia de Lee Dong-jin, apresentado pelo crítico Lee Dong-jin, com o diretor Lee Jung-jae. O vídeo está em coreano. Duração: 42:16.",
    ],
  },
  vi: {
    title: "Lee Jung-jae nói về Hunt: mẫu phụ đề 30 giây | Stage5",
    description:
      "Thử đoạn phỏng vấn về Hunt dài 30 giây với phụ đề Anh, Tây Ban Nha hoặc Bồ Đào Nha, kèm hướng dẫn tìm chương và luyện biên tập phụ đề.",
    keywords: [
      "Lee Jung-jae phỏng vấn",
      "Hunt phim",
      "Lee Dong-jin Piarchia",
      "phỏng vấn tiếng Hàn",
      "đạo diễn Hàn Quốc",
    ],
    h1: "Xem Lee Jung-jae Thảo Luận Về Hunt",
    intro:
      "Phần mở đầu của Piarchia do Lee Dong-jin dẫn giới thiệu Lee Jung-jae trong vai trò đạo diễn Hunt và hỏi về cảm xúc trước ngày phim ra mắt. Trang này cung cấp mẫu phụ đề 30 giây bằng tiếng Anh, Tây Ban Nha và Bồ Đào Nha. Nội dung trao đổi về làm phim tiếp tục trong video gốc tiếng Hàn, được liên kết từ trình phát.",
    section1Title: "Tìm phần trao đổi về làm phim",
    section1Body: [
      "Danh sách chương của kênh đánh dấu phần viết kịch bản ở 04:00, chọn Jung Woo-sung vào vai ở 06:54 và lý do đặt bối cảnh năm 1983 ở 18:23. Đây là các mốc trong video gốc dài 42 phút, nằm ngoài mẫu phụ đề trên trang này.",
      "Kênh cảnh báo nội dung tiết lộ tình tiết Hunt từ 21:07 đến 27:22. Hãy bỏ qua đoạn đó nếu bạn chưa xem phim. Lời nhắc đầu video về thời gian còn lại trước khi công chiếu thuộc thời điểm ghi hình, không phải thông báo ra mắt hiện tại."
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
    section2Title: "Rút gọn phụ đề mà vẫn giữ ý",
    section2Body: [
      "Lời chào giới thiệu hai người có tên gần giống nhau: Lee Dong-jin là người dẫn; Lee Jung-jae là khách mời và đạo diễn. Khi rút gọn phụ đề, hãy giữ rõ vai trò của họ. Cách xưng hô tiếng Hàn có thể mang thông tin này, dù câu tiếng Việt không nhất thiết phải nhắc lại.",
      "Chọn một câu hỏi ở phần mở đầu và viết phụ đề ngắn hơn nhưng vẫn giữ rõ người được hỏi và nội dung câu hỏi. Phát lại cùng đoạn để so sánh với mẫu. Với video bạn có thể sử dụng, hãy thử cách diễn đạt và thời gian đọc trong trình biên tập phụ đề của Translator. Trang này chỉ cung cấp phụ đề dịch cho 30 giây đầu."
    ],
    downloadTitle: "Tải Translator",
    downloadBody:
      "Translator hoạt động trên macOS và Windows. Tải xuống, dán URL của video này và xem quy trình hoạt động như thế nào.",
    aboutTitle: "Về bài viết này",
    aboutBody: [
      "Video YouTube được nhúng trực tiếp từ nguồn chính thức. 30 giây đầu tiên của phụ đề hiển thị trong trình phát có thể hiển thị bằng tiếng Anh, tiếng Tây Ban Nha hoặc tiếng Bồ Đào Nha. Cả ba bản phụ đề đều được phiên âm và dịch trong Translator.",
      "Nguồn: Piarchia của Lee Dong-jin, do nhà phê bình Lee Dong-jin dẫn chương trình, với đạo diễn Lee Jung-jae. Video bằng tiếng Hàn. Thời lượng: 42:16.",
    ],
  },
};
