import type { TranslationLandingContent } from "./translation-landing-content";

// English language-pair pages. Each one is written for its own search task:
// what people actually translate in that pair, and what goes wrong in it.
// Statements about the app must stay true to the Translator desktop app:
// line-by-line translation with neighboring lines as context, a default
// polite register unless the dialogue is clearly casual, the optional
// "Quality translation" review pass, the editor's split/merge/find-and-replace
// tools, Original/Translation/Both display, and SRT or burned-in export.
// No usage numbers, accuracy claims or testimonials.

const enImage = {
  src: "/screenshots/player-en-2026-10.png", height: 1456,
  alt: "Translator playing Tears of Steel with English captions and its subtitle editor alongside the video.",
};
const ptImage = {
  src: "/screenshots/player-pt-2026-10.png", height: 1456,
  alt: "Translator showing a Tears of Steel scene with Portuguese subtitles and the original English dialogue alongside the translation.",
};

const pairLinks = [
  { path: "/translate/spanish", label: "English to Spanish" },
  { path: "/translate/japanese", label: "Japanese to English" },
  { path: "/translate/german", label: "German to English" },
  { path: "/translate/korean", label: "Korean to English" },
  { path: "/translate/french", label: "English to French" },
  { path: "/translate/portuguese", label: "English to Portuguese" },
];
const relatedFor = (path: string) => [
  ...pairLinks.filter(link => link.path !== path),
  { path: "/translate", label: "All subtitle languages" },
];

type EnglishPair = Omit<TranslationLandingContent, "locale" | "related">;
const english = (page: EnglishPair): TranslationLandingContent => ({
  ...page, locale: "en", related: relatedFor(page.path),
});

export const englishPairPages: readonly TranslationLandingContent[] = [
  english({
    path: "/translate/spanish", direction: "own>spanish",
    title: "Translate English Video to Spanish | Stage5 Translator",
    description: "Turn English speech or SRT files into Spanish subtitles. Review the translation beside your video, then export an SRT or subtitled video on Mac or Windows.",
    heading: "Translate English videos to Spanish subtitles", eyebrow: "ENGLISH → SPANISH",
    intro: "Add Spanish subtitles to a course, a product demo, a YouTube episode or an interview recorded in English. Translator works through the dialogue line by line, using the lines around each one as context, and you read every Spanish line beside the English before anything is exported.",
    sources: {
      heading: "What people translate into Spanish",
      items: [
        { title: "Courses and tutorials", body: "Lessons recorded in English for learners in Mexico, Spain, Colombia or Argentina. Keep product names and menu labels exactly as they appear in the software your viewers will open." },
        { title: "YouTube episodes and podcasts", body: "A Spanish caption track for an existing channel. Export an SRT and upload it alongside the video, so viewers can switch it on or off." },
        { title: "Interviews and talks", body: "Unscripted speech where sentences restart halfway. Transcribe the English, tidy the false starts, and only then translate." },
      ],
    },
    stepsHeading: "From English dialogue to Spanish subtitles",
    steps: [
      { title: "Start from clean English", body: "Open a video file, paste a link to an online video, or load an English SRT. If there are no subtitles, transcribe the speech and fix names before translating." },
      { title: "Translate into Spanish", body: "Choose Spanish as the target. Turn on Quality translation in the settings if you want a second AI pass to review the draft before you do." },
      { title: "Read it as a viewer would", body: "Set the player to Both to compare English and Spanish, edit the lines that need it, then export an SRT or a video with Spanish subtitles burned in." },
    ],
    image: { src: "/screenshots/player-es-2026-10.webp", alt: "Translator showing Tears of Steel with Spanish subtitles and English and Spanish lines in the editor.", caption: "Spanish subtitles for an English-language scene from Tears of Steel, shown in the real app. Compare the original dialogue with the translation as you watch." },
    pitfalls: {
      heading: "What to check in English-to-Spanish subtitles", originalLang: "en", variantLang: "es",
      items: [
        { title: "Tú or usted", body: "English “you” has to become tú, usted, vosotros or ustedes. Translator leans toward a polite register unless the dialogue is clearly casual, so a relaxed vlog can come out more formal than you intended. Decide once for each speaker and fix lines that drift.",
          example: { original: "Can you send me the file?", variants: [{ label: "Formal", text: "¿Puede enviarme el archivo?" }, { label: "Casual", text: "¿Me mandas el archivo?" }] } },
        { title: "Spanish needs more room", body: "A Spanish line is usually longer than the English it replaces, but it gets the same seconds on screen. Cut repetition, split a crowded line at the cursor, or merge two short ones instead of shrinking the text.",
          example: { original: "Got it?", variants: [{ label: "Word for word", text: "¿Lo has entendido?" }, { label: "Subtitle", text: "¿Entendido?" }] } },
        { title: "Latin America or Spain", body: "There is one Spanish target, not regional variants. Words like celular and móvil, or the vosotros form, tell viewers where the subtitles were written. Pick the audience first, then use Find and replace for recurring words.",
          example: { original: "Charge your phone before the shoot.", variants: [{ label: "Latin America", text: "Carga tu celular antes de la grabación." }, { label: "Spain", text: "Carga el móvil antes del rodaje." }] } },
      ],
    },
    faqs: [
      { question: "Can I upload the Spanish subtitles to YouTube?", answer: "Yes. Export an SRT and add it as a Spanish subtitle track in YouTube Studio. The timings come from your English subtitles, so the two tracks stay in step. For platforms without caption upload, export a video with the Spanish burned in." },
      { question: "Can I adjust the Spanish for my audience?", answer: "Yes. Every line is editable. Review forms of address, regional vocabulary and idioms in the subtitle editor, and check the lines that matter most before exporting; AI can miss tone or context." },
      { question: "Can I translate a Spanish video into English instead?", answer: "Yes. Open the Spanish video or its SRT and choose English as the target language. The same side-by-side review applies." },
    ],
    trackingLabel: "Translate - English to Spanish",
  }),
  english({
    path: "/translate/japanese", direction: "japanese>own",
    title: "Japanese Video Translator | Stage5 Translator",
    description: "Translate Japanese videos with English subtitles, or create Japanese subtitles for other videos. Review and edit each line before exporting on Mac or Windows.",
    heading: "Translate Japanese videos with English subtitles", eyebrow: "JAPANESE → ENGLISH",
    intro: "Follow anime clips, J-dramas, variety shows and Japanese YouTube in English. Translator transcribes the Japanese speech or opens a Japanese SRT, translates it with the neighboring lines as context, and lets you fix names, honorifics and unspoken subjects beside the scene. You can also make Japanese subtitles for your own videos.",
    sources: {
      heading: "What people translate from Japanese",
      items: [
        { title: "Anime and J-drama", body: "Episodes and clips without an English release, or a Japanese subtitle file you want to understand. If you already have a Japanese SRT, start from it: its timings are kept." },
        { title: "Variety shows and streams", body: "Fast, overlapping talk with jokes written on screen. Translator listens to the audio, so text drawn into the picture is not in the transcript; add those lines by hand if they matter." },
        { title: "Interviews, lectures and vlogs", body: "Clearer speech that usually transcribes well. Check technical terms and katakana loanwords, which can be heard and written more than one way." },
      ],
    },
    stepsHeading: "From Japanese dialogue to English subtitles",
    steps: [
      { title: "Open the Japanese video or SRT", body: "Open a file, paste a link, or load Japanese subtitles. If you transcribe, check character names first: a misheard name is mistranslated in every line it appears." },
      { title: "Translate into English", body: "Choose English as the target. Each line goes to the AI together with the lines around it, which helps when Japanese leaves the subject unsaid." },
      { title: "Check and export", body: "Set the player to Both to compare the Japanese and English, edit what reads wrong, then export an SRT or a video with English subtitles." },
    ],
    image: { ...enImage, caption: "English captions and the subtitle editor in Translator. This demonstration uses the English-language film Tears of Steel, not Japanese footage." },
    pitfalls: {
      heading: "What to check in Japanese-to-English subtitles", originalLang: "ja", variantLang: "en",
      items: [
        { title: "Who is speaking to whom", body: "Japanese often drops the subject entirely. English needs one, and the AI has to guess it from the nearby lines. When a guess is wrong, the scene is usually the only clue; watch it and fix the pronoun.",
          example: { original: "もう食べた?", variants: [{ label: "Word for word", text: "Already ate?" }, { label: "Subtitle", text: "Have you eaten yet?" }] } },
        { title: "Honorifics and names", body: "Decide whether -san, -senpai and -sensei stay or go, then apply it everywhere. Anime viewers often expect them kept; a business interview usually reads better without. Find and replace fixes a name romanized two ways, such as Ryuuji and Ryūji.",
          example: { original: "田中先輩、待ってください!", variants: [{ label: "Kept", text: "Tanaka-senpai, wait!" }, { label: "Adapted", text: "Wait up, Tanaka!" }] } },
        { title: "Set phrases", body: "Everyday phrases such as お疲れ様です or よろしくお願いします have no literal English equivalent. Translate what the phrase does in the scene, not the words.",
          example: { original: "お疲れ様でした。", variants: [{ label: "Word for word", text: "You must be tired." }, { label: "Subtitle", text: "Good work today." }] } },
      ],
    },
    faqs: [
      { question: "Can I keep the Japanese on screen as well?", answer: "Yes. Set the subtitle display to Both and the Japanese and English lines appear together, in the player and in an exported video. That makes it useful for studying Japanese with shows you already watch." },
      { question: "Will Japanese text shown in the video be translated?", answer: "No. Translator works from the audio or from a subtitle file. Captions, signs and messages drawn into the picture are not read, so type in any you need as extra lines." },
      { question: "Can I create Japanese subtitles for my own videos?", answer: "Yes. Choose Japanese as the target language for an English or other-language video. Japanese subtitles are read at fewer characters per second, so keep each line short and check it in the player before exporting." },
    ],
    trackingLabel: "Translate - Japanese to English",
  }),
  english({
    path: "/translate/german", direction: "german>own",
    title: "Translate German Video to English | Stage5 Translator",
    description: "Make English subtitles for German videos. Start from speech or an SRT, review each translated line, then export subtitles or a subtitled video.",
    heading: "Translate German videos to English subtitles", eyebrow: "GERMAN → ENGLISH",
    intro: "Make English subtitles for German lectures, documentaries, news reports and technical tutorials. Translator transcribes the German speech or opens a German SRT and translates each line with its neighbors as context. You then rework the long sentences German builds, which rarely fit an English subtitle as they stand.",
    sources: {
      heading: "What people translate from German",
      items: [
        { title: "Lectures and courses", body: "Long, structured sentences and subject vocabulary. Check each term against the name your field uses in English, not just a dictionary match." },
        { title: "Documentaries and news", body: "Narration usually transcribes cleanly. Interview clips with background noise, a strong accent or Swiss German deserve a second listen with Play snippet." },
        { title: "Technical and engineering tutorials", body: "Machine, software and trade terms. Keep menu labels in the language of the software your viewers will actually use." },
      ],
    },
    stepsHeading: "From German speech to English subtitles",
    steps: [
      { title: "Open the German video or SRT", body: "Open a file, paste a link, or load German subtitles. If you transcribe, play back unclear lines and correct the German before translating." },
      { title: "Translate into English", body: "Choose English as the target. The surrounding lines travel with each one as context, which matters when the German verb only arrives in the next subtitle." },
      { title: "Rework and export", body: "Split or merge lines so each English subtitle is a complete thought, then export an SRT or a video with English subtitles." },
    ],
    image: { ...enImage, caption: "English captions and the subtitle editor in Translator. This demonstration uses the English-language film Tears of Steel, not German footage." },
    pitfalls: {
      heading: "What to check in German-to-English subtitles", originalLang: "de", variantLang: "en",
      items: [
        { title: "The verb comes last", body: "German subordinate clauses put the verb at the end, and a long sentence often spans two subtitles. Translated line by line, the first English subtitle can say very little. Merge the pair or restructure it so each line stands on its own.",
          example: { original: "Ich weiß nicht, ob wir das Projekt bis Freitag abschließen können.", variants: [{ label: "German word order", text: "I know not whether we the project by Friday finish can." }, { label: "Subtitle", text: "I'm not sure we can finish the project by Friday." }] } },
        { title: "Compound nouns", body: "One German word can need several English ones, or an established term. Check that technical compounds come out as the name your audience would search for.",
          example: { original: "Die Datenschutz-Grundverordnung gilt seit 2018.", variants: [{ label: "Word for word", text: "The data protection basic regulation applies since 2018." }, { label: "Subtitle", text: "The GDPR has applied since 2018." }] } },
        { title: "Sie and du", body: "English has no formal “you”, so the moment two people switch from Sie to du disappears in translation. If the switch matters to the scene, carry it in the wording.",
          example: { original: "Wollen wir uns duzen?", variants: [{ label: "Word for word", text: "Shall we say du to each other?" }, { label: "Subtitle", text: "Let's drop the formalities, shall we?" }] } },
      ],
    },
    faqs: [
      { question: "Can I check technical terms and long German sentences?", answer: "Yes. Compare each original line with its English beside the video and edit the wording in place. Use Find and replace to change a term in every line at once once you have settled on it." },
      { question: "Does it work with Austrian or Swiss German?", answer: "Translator transcribes German speech, but strong regional speech, especially Swiss German, may transcribe less accurately than standard German. Play those lines back and correct the transcript before translating." },
      { question: "Can I translate English videos into German?", answer: "Yes. Choose German as the target. German lines tend to run longer than English ones, and the translation leans toward the formal Sie unless the dialogue is clearly casual, so check both for informal content." },
    ],
    trackingLabel: "Translate - German to English",
  }),
  english({
    path: "/translate/french", direction: "own>french",
    title: "French Video Translation | Stage5 Translator",
    description: "Translate French video subtitles and review them beside the original. Edit the wording, save an SRT, or export a subtitled video on Mac or Windows.",
    heading: "Translate French video subtitles", eyebrow: "ENGLISH → FRENCH",
    intro: "Create French subtitles for courses, YouTube episodes and product videos, and check every line beside the original. Translator translates line by line with the surrounding dialogue as context; you settle tu or vous, France or Québec wording and French punctuation before exporting. It works the other way too, for French-language videos.",
    sources: {
      heading: "What people translate into French",
      items: [
        { title: "Courses and training", body: "Lessons for learners in France, Belgium, Switzerland, Québec and francophone Africa, where the right form of address depends on the audience." },
        { title: "YouTube and social video", body: "A French subtitle track exported as SRT for a channel, or French burned into a short clip for platforms without caption upload." },
        { title: "Videos already in French", body: "Films, interviews and news in French, translated into English or another language you choose from the same project." },
      ],
    },
    stepsHeading: "Create and review French subtitles",
    steps: [
      { title: "Open the video or SRT", body: "Open a file, paste a link, or load existing subtitles. Without subtitles, transcribe the speech and fix names first." },
      { title: "Choose French", body: "Select French as the target. To go the other way, open a French video and choose English or another language instead." },
      { title: "Polish and export", body: "Edit each line with the original beside it, then export an SRT or a video with French subtitles." },
    ],
    image: { src: "/screenshots/player-fr-2026-10.webp", alt: "Translator displaying French subtitles on the English-language film Tears of Steel, with the subtitle editor beside it.", caption: "French subtitles for the English-language film Tears of Steel in Translator. For a French source video, choose the language you want your audience to read." },
    pitfalls: {
      heading: "What to check in French subtitles", originalLang: "en", variantLang: "fr",
      items: [
        { title: "Tu or vous", body: "Translator leans toward a polite register unless the dialogue is clearly casual, so many lines arrive with vous. That suits a training video; for a vlog or two friends talking, tu is usually right. Choose one per relationship and keep it.",
          example: { original: "Can you help me?", variants: [{ label: "Formal", text: "Pouvez-vous m'aider ?" }, { label: "Casual", text: "Tu peux m'aider ?" }] } },
        { title: "France or Québec", body: "There is one French target. Everyday vocabulary differs between France and Québec, so match the audience and use Find and replace for words that recur.",
          example: { original: "Let's go shopping this weekend.", variants: [{ label: "France", text: "On va faire du shopping ce week-end." }, { label: "Québec", text: "On va magasiner en fin de semaine." }] } },
        { title: "French punctuation", body: "French usually puts a space before ? ! : and ; and quotes with « guillemets ». Subtitle styles vary, but be consistent across the file; Find and replace can correct it in one pass.",
          example: { original: "He said “no”!", variants: [{ label: "English style", text: "Il a dit \"non\"!" }, { label: "French style", text: "Il a dit « non » !" }] } },
      ],
    },
    faqs: [
      { question: "Can I translate both into and out of French?", answer: "Yes. Choose French to create French subtitles from another language, or choose English or another target for a French video. Review names and idioms in context; the right wording depends on the scene." },
      { question: "Will the French fit on screen?", answer: "French usually needs more characters than English for the same idea. Watch long lines in the player, split crowded ones, and trim repetition rather than shrinking the text." },
      { question: "Can I show French and English together?", answer: "Yes. Set the subtitle display to Both to show the original and the French in the player and in an exported video, which helps bilingual audiences and language learners." },
    ],
    trackingLabel: "Translate - French subtitles",
  }),
  english({
    path: "/translate/portuguese", direction: "own>portuguese",
    title: "Translate Subtitles to Portuguese | Stage5 Translator",
    description: "Create Portuguese subtitles from a video or SRT file. Check the wording in the video, edit the translation and export subtitles on Mac or Windows.",
    heading: "Translate video subtitles to Portuguese", eyebrow: "ENGLISH → PORTUGUESE",
    intro: "Give an English video Portuguese subtitles for viewers in Brazil, Portugal or both. Translator translates each line with the surrounding dialogue as context; you review the wording beside the scene, adapt it for the audience you actually have, and export an SRT or a subtitled video.",
    sources: {
      heading: "What people translate into Portuguese",
      items: [
        { title: "Channels with Brazilian viewers", body: "Tech, gaming and education videos that already reach Brazil. A Portuguese SRT track lets those viewers follow along without a second upload." },
        { title: "Courses and onboarding", body: "Training for teams in Brazil or Portugal, where terms and forms of address should match the company's own tone." },
        { title: "Webinars and interviews", body: "Long recordings: transcribe the English, fix speaker names and product terms, then translate." },
      ],
    },
    stepsHeading: "From your video to Portuguese subtitles",
    steps: [
      { title: "Open the video or SRT", body: "Open a file, paste a link, or load English subtitles. Without subtitles, transcribe the speech first; the timings carry over to the Portuguese." },
      { title: "Translate into Portuguese", body: "Choose Portuguese as the target. Decide now whether you are writing for Brazil or Portugal, because that shapes the review." },
      { title: "Adapt and export", body: "Edit lines with the English beside them, then export an SRT or a video with Portuguese subtitles burned in." },
    ],
    image: { ...ptImage, caption: "Portuguese subtitles in the real app, with English dialogue and the translation available for review. The example uses the English-language film Tears of Steel." },
    pitfalls: {
      heading: "What to check in Portuguese subtitles", originalLang: "en", variantLang: "pt",
      items: [
        { title: "Brazil or Portugal", body: "Translator has one Portuguese target. Brazilian and European Portuguese differ in vocabulary, pronouns and grammar, so choose the audience before reviewing.",
          example: { original: "Take the train to the station.", variants: [{ label: "Brazil", text: "Pegue o trem até a estação." }, { label: "Portugal", text: "Apanhe o comboio até à estação." }] } },
        { title: "Você, tu or o senhor", body: "In Brazil você is the everyday “you”; in Portugal tu is common between friends and você can sound distant. The translation leans polite unless the dialogue is clearly casual, so read each relationship for the right level.",
          example: { original: "Are you coming tonight?", variants: [{ label: "Brazil", text: "Você vem hoje à noite?" }, { label: "Portugal, casual", text: "Vens hoje à noite?" }] } },
        { title: "Continuous forms", body: "Brazil says estou fazendo where Portugal says estou a fazer. A file that mixes them reads as careless, so check the -ndo forms once you have picked an audience.",
          example: { original: "I'm working on it.", variants: [{ label: "Brazil", text: "Estou trabalhando nisso." }, { label: "Portugal", text: "Estou a trabalhar nisso." }] } },
      ],
    },
    faqs: [
      { question: "Can I adapt the Portuguese for Brazil or Portugal?", answer: "You can edit every translated line. Review vocabulary, forms of address and expressions for the audience you have in mind rather than assuming the first translation fits every region." },
      { question: "Can I translate a Brazilian YouTube video into English?", answer: "Yes. Paste the video link or open the file, transcribe the Portuguese, and choose English as the target. Check slang and names before exporting." },
      { question: "How do I keep terms consistent in a long video?", answer: "Decide on product names and key terms, then use Find and replace to change every matching line at once. It is quicker and more reliable than fixing lines one by one." },
    ],
    trackingLabel: "Translate - English to Portuguese",
  }),
  english({
    path: "/translate/korean", direction: "korean>own",
    title: "Translate Korean Video to English | Stage5 Translator",
    description: "Add English subtitles to Korean videos. Translate speech or an SRT, check each line against the video, and export the subtitles on Mac or Windows.",
    heading: "Translate Korean videos to English subtitles", eyebrow: "KOREAN → ENGLISH",
    intro: "Watch K-dramas, variety shows, K-pop content and Korean YouTube with English subtitles. Translator transcribes the Korean speech or opens a Korean SRT, translates each line with the lines around it as context, and lets you check names, relationships and tone beside the video.",
    sources: {
      heading: "What people translate from Korean",
      items: [
        { title: "K-drama and web drama", body: "Dialogue full of titles and family terms used between people who are not related. If a Korean SRT exists, start from it; its timings are kept." },
        { title: "Variety shows and live streams", body: "Several people talking over each other, plus captions drawn on screen. Translator listens to the audio, so on-screen jokes need to be added by hand." },
        { title: "K-pop content and vlogs", body: "Behind-the-scenes clips and fan-facing videos, where member and stage names must be spelled the same way in every line." },
      ],
    },
    stepsHeading: "From Korean dialogue to English subtitles",
    steps: [
      { title: "Open the Korean video or SRT", body: "Open a file, paste a link, or load Korean subtitles. If you transcribe, correct member and character names before you translate." },
      { title: "Translate into English", body: "Choose English as the target. Nearby lines are sent as context, which helps with Korean sentences that leave out the subject." },
      { title: "Check tone and export", body: "Set the player to Both, watch the scenes where relationships matter, then export an SRT or a video with English subtitles." },
    ],
    image: { ...enImage, caption: "English captions and the subtitle editor in Translator. This demonstration uses the English-language film Tears of Steel, not Korean footage." },
    pitfalls: {
      heading: "What to check in Korean-to-English subtitles", originalLang: "ko", variantLang: "en",
      items: [
        { title: "Oppa, unnie and sunbae", body: "Korean speakers address each other by relationship. Keep the term for viewers who know it, or translate what it means; a literal “older brother” for a boyfriend misleads.",
          example: { original: "오빠, 어디 가?", variants: [{ label: "Word for word", text: "Older brother, where are you going?" }, { label: "Subtitle", text: "Oppa, where are you going?" }] } },
        { title: "Polite and casual speech", body: "Switching from polite speech (jondaetmal) to casual speech (banmal) can be the point of a scene. English has no verb ending for it, so carry the change in tone or word choice.",
          example: { original: "우리 이제 말 놓을까?", variants: [{ label: "Word for word", text: "Shall we put down our words now?" }, { label: "Subtitle", text: "Should we stop being so formal?" }] } },
        { title: "Names and titles", body: "Korean names put the family name first, and -ssi or a job title often follows. Pick one romanization and order, then fix variants with Find and replace.",
          example: { original: "지원 씨, 잠깐만요.", variants: [{ label: "Word for word", text: "Ji-won-ssi, just a moment." }, { label: "Subtitle", text: "Ji-won, one moment." }] } },
      ],
    },
    faqs: [
      { question: "How do I handle Korean honorifics and forms of address?", answer: "Look at the relationship between speakers and the tone of the scene. A direct rendering of a title or family term can be awkward in English; edit the subtitle so it conveys what the speaker means." },
      { question: "What if the video only has Korean captions burned into the picture?", answer: "Translator works from the audio or a subtitle file and does not read text in the picture. Transcribe the speech to create subtitle lines, then translate those." },
      { question: "Can I make Korean subtitles for my own videos?", answer: "Yes. Choose Korean as the target. The translation leans toward polite speech unless the dialogue is clearly casual, so switch friends' conversations to banmal where it fits." },
    ],
    trackingLabel: "Translate - Korean to English",
  }),
];
