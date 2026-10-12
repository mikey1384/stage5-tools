import { ferranAdriaWildProjectCopy } from "../../app/watch/ferran-adria-wild-project/copy";
import { piqueLaResistenciaCopy } from "../../app/watch/pique-la-resistencia/copy";
import { parkChanWookLeeDongJinCopy } from "../../app/watch/park-chan-wook-lee-dong-jin/copy";
import { leeJungJaeHuntPiarchiaCopy } from "../../app/watch/lee-jung-jae-hunt-piarchia/copy";
import { yooJiTaePiarchiaCopy } from "../../app/watch/yoo-ji-tae-piarchia/copy";
import { koreEdaPiarchiaCopy } from "../../app/watch/kore-eda-piarchia/copy";
import { calvoWildProjectCopy } from "../../app/watch/calvo-wild-project/copy";
import { nolanColbertOppenheimerCopy } from "../../app/watch/nolan-colbert-oppenheimer/copy";
import { ramsayHotOnesCopy } from "../../app/watch/ramsay-hot-ones/copy";
import type { WatchCatalogEntry, WatchPageCopy } from "./catalog";
import { registerVideo } from "./catalog";

const videos: WatchCatalogEntry[] = [
  {
    slug: "ferran-adria-wild-project",
    videoId: "xzSOmaZGtiI",
    vttSlug: "ferran-adria-wild-project",
    sourceLang: "es",
    tracks: ["en", "ko", "pt"],
    supportedLocales: ["en", "es", "ko", "pt", "vi"],
    language: "Spanish",
    topic: "Food & Craft",
    showName: "Wild Project #287",
    datePublished: "2024-06-13",
    structuredDataAbout: [
      {
        "@type": "Person",
        name: "Ferran Adrià",
        description: "Chef and founder of El Bulli",
      },
      {
        "@type": "VideoObject",
        name: "The Wild Project #287 - Ferran Adrià",
        description:
          "Interview with legendary chef Ferran Adrià about creativity, craft, and food as art",
        uploadDate: "2024-06-13T06:00:06-07:00",
        embedUrl: "https://www.youtube.com/embed/xzSOmaZGtiI",
        inLanguage: "es",
      },
    ],
    copy: ferranAdriaWildProjectCopy as Record<"en" | "es" | "ko" | "pt" | "vi", WatchPageCopy>,
  },
  {
    slug: "pique-la-resistencia",
    videoId: "AcGwBcHPMPQ",
    vttSlug: "pique-la-resistencia",
    sourceLang: "es",
    tracks: ["en", "ko", "pt"],
    supportedLocales: ["en", "es", "ko", "pt", "vi"],
    language: "Spanish",
    topic: "Sports",
    showName: "La Resistencia",
    datePublished: "2019-03-28",
    structuredDataAbout: [
      {
        "@type": "Person",
        name: "Gerard Piqué",
        description: "Professional footballer and entrepreneur",
      },
      {
        "@type": "VideoObject",
        name: "Gerard Piqué: 'Mi patrimonio es más grande que el del Espanyol' | La Resistencia",
        description:
          "Barcelona defender Gerard Piqué sits down with David Broncano for a Spanish late-night interview",
        uploadDate: "2019-03-28",
        embedUrl: "https://www.youtube.com/embed/AcGwBcHPMPQ",
        inLanguage: "es",
      },
    ],
    copy: piqueLaResistenciaCopy as Record<"en" | "es" | "ko" | "pt" | "vi", WatchPageCopy>,
  },
  {
    slug: "park-chan-wook-lee-dong-jin",
    videoId: "CjVz6F62T4w",
    vttSlug: "park-chan-wook-lee-dong-jin",
    sourceLang: "ko",
    tracks: ["en", "es", "pt"],
    supportedLocales: ["en", "es", "ko", "pt", "vi"],
    language: "Korean",
    topic: "Film",
    showName: "Lee Dong-jin's Piarchia",
    datePublished: "2022-06-29",
    structuredDataAbout: [
      {
        "@type": "Person",
        name: "Park Chan-wook",
        description: "Director known for Oldboy, The Handmaiden, Decision to Leave",
      },
      {
        "@type": "VideoObject",
        name: "박찬욱 감독님을 모셨습니다!!!",
        description:
          "Director Park Chan-wook discusses Decision to Leave with film critic Lee Dong-jin",
        uploadDate: "2022-06-29",
        embedUrl: "https://www.youtube.com/embed/CjVz6F62T4w",
        inLanguage: "ko",
        duration: "PT1H11M46S",
      },
    ],
    copy: parkChanWookLeeDongJinCopy as Record<"en" | "es" | "ko" | "pt" | "vi", WatchPageCopy>,
  },
  {
    slug: "lee-jung-jae-hunt-piarchia",
    videoId: "mF6xumJOVss",
    vttSlug: "lee-jung-jae-hunt-piarchia",
    sourceLang: "ko",
    tracks: ["en", "es", "pt"],
    supportedLocales: ["en", "es", "ko", "pt", "vi"],
    language: "Korean",
    topic: "Film",
    showName: "Lee Dong-jin's Piarchia",
    datePublished: "2022-08-10",
    structuredDataAbout: [
      {
        "@type": "Person",
        name: "Lee Jung-jae",
        description: "Actor and director known for Squid Game and Hunt",
      },
      {
        "@type": "VideoObject",
        name: "이정재 감독님을 모셨습니다!!!",
        description:
          "Actor-turned-director Lee Jung-jae discusses Hunt, his directorial debut, with film critic Lee Dong-jin",
        uploadDate: "2022-08-10T04:00:23-07:00",
        embedUrl: "https://www.youtube.com/embed/mF6xumJOVss",
        inLanguage: "ko",
      },
    ],
    copy: leeJungJaeHuntPiarchiaCopy as Record<"en" | "es" | "ko" | "pt" | "vi", WatchPageCopy>,
  },
  {
    slug: "yoo-ji-tae-piarchia",
    videoId: "PYY10Yq50bA",
    vttSlug: "yoo-ji-tae-piarchia",
    sourceLang: "ko",
    tracks: ["en", "es", "pt"],
    supportedLocales: ["en", "es", "ko", "pt", "vi"],
    language: "Korean",
    topic: "Film",
    showName: "Lee Dong-jin's Piarchia",
    datePublished: "2023-11-24",
    structuredDataAbout: [
      {
        "@type": "Person",
        name: "Yoo Ji-tae",
        description: "Actor known for Oldboy and One Fine Spring Day",
      },
      {
        "@type": "VideoObject",
        name: "유지태 배우님을 모셨습니다!!!",
        description:
          "Actor Yoo Ji-tae discusses One Fine Spring Day and Oldboy with film critic Lee Dong-jin",
        uploadDate: "2023-11-24T03:00:30-08:00",
        embedUrl: "https://www.youtube.com/embed/PYY10Yq50bA",
        inLanguage: "ko",
      },
    ],
    copy: yooJiTaePiarchiaCopy as Record<"en" | "es" | "ko" | "pt" | "vi", WatchPageCopy>,
  },
  {
    slug: "kore-eda-piarchia",
    videoId: "j29oHrGMmtY",
    vttSlug: "kore-eda-piarchia",
    sourceLang: "ko",
    tracks: ["en", "es", "pt"],
    supportedLocales: ["en", "es", "ko", "pt", "vi"],
    language: "Korean / Japanese",
    topic: "Film",
    showName: "Lee Dong-jin's Piarchia",
    datePublished: "2025-05-09",
    structuredDataAbout: [
      {
        "@type": "Person",
        name: "Hirokazu Kore-eda",
        description: "Film director known for Shoplifters, Nobody Knows, After Life, and Broker",
      },
      {
        "@type": "VideoObject",
        name: "고레에다 히로카즈 감독님을 모셨습니다!!!",
        description:
          "Director Hirokazu Kore-eda discusses his film career with critic Lee Dong-jin",
        uploadDate: "2025-05-09T04:25:16-07:00",
        embedUrl: "https://www.youtube.com/embed/j29oHrGMmtY",
        inLanguage: ["ko", "ja"],
      },
    ],
    copy: koreEdaPiarchiaCopy as Record<"en" | "es" | "ko" | "pt" | "vi", WatchPageCopy>,
  },
  {
    slug: "calvo-wild-project",
    videoId: "Wk_4tQOvdWU",
    vttSlug: "Wk_4tQOvdWU",
    sourceLang: "es",
    tracks: ["en", "ko", "pt"],
    supportedLocales: ["en", "es", "ko", "pt", "vi"],
    language: "Spanish",
    topic: "Film",
    showName: "The Wild Project",
    datePublished: "2026-05-28",
    structuredDataAbout: [
      {
        "@type": "Person",
        name: "Alejandro G. Calvo",
        description: "Spanish film critic",
      },
      {
        "@type": "VideoObject",
        name: "The Wild Project 376 - Alejandro G. Calvo & J. Maquiavello | TOP 60 MEJORES PELÍCULAS de la HISTORIA",
        description:
          "Spanish film critic Alejandro G. Calvo discusses the TOP 60 películas with Jordi Wild",
        uploadDate: "2026-05-28T08:00:06-07:00",
        embedUrl: "https://www.youtube.com/embed/Wk_4tQOvdWU",
        inLanguage: "es",
      },
    ],
    copy: calvoWildProjectCopy as Record<"en" | "es" | "ko" | "pt" | "vi", WatchPageCopy>,
  },
  {
    slug: "nolan-colbert-oppenheimer",
    videoId: "WGH8RMbrGLM",
    vttSlug: "WGH8RMbrGLM",
    sourceLang: "en",
    tracks: ["en", "es", "ko", "pt"],
    supportedLocales: ["en", "es", "ko", "pt", "vi"],
    language: "English",
    topic: "Film",
    showName: "The Late Show",
    datePublished: "2024-02-08",
    structuredDataAbout: [
      {
        "@type": "Person",
        name: "Christopher Nolan",
        description: "Film director, writer, and producer",
      },
      {
        "@type": "Person",
        name: "Stephen Colbert",
        description: "Host of The Late Show",
      },
      {
        "@type": "VideoObject",
        name: "Why \"Oppenheimer\" Writer And Director Christopher Nolan Carries A Burner Phone | The Late Show with Stephen Colbert",
        description:
          "Director Christopher Nolan discusses Oppenheimer on The Late Show with Stephen Colbert during the 2024 awards season",
        uploadDate: "2024-02-08T00:35:00-08:00",
        embedUrl: "https://www.youtube.com/embed/WGH8RMbrGLM",
        inLanguage: "en",
      },
    ],
    copy: nolanColbertOppenheimerCopy as Record<"en" | "es" | "ko" | "pt" | "vi", WatchPageCopy>,
  },
  {
    slug: "ramsay-hot-ones",
    videoId: "U9DyHthJ6LA",
    vttSlug: "U9DyHthJ6LA",
    sourceLang: "en",
    tracks: ["en", "es", "ko", "pt"],
    supportedLocales: ["en", "es", "ko", "pt", "vi"],
    language: "English",
    topic: "Food & Craft",
    showName: "Hot Ones",
    datePublished: "2019-01-24",
    structuredDataAbout: [
      {
        "@type": "Person",
        name: "Gordon Ramsay",
        description: "Celebrity chef and restaurateur",
      },
      {
        "@type": "Person",
        name: "Sean Evans",
        description: "Host of Hot Ones",
      },
      {
        "@type": "VideoObject",
        name: "Gordon Ramsay Savagely Critiques Spicy Wings | Hot Ones",
        description:
          "Gordon Ramsay sits down with Sean Evans on First We Feast's Hot Ones for season eight",
        uploadDate: "2019-01-24T08:00:01-08:00",
        embedUrl: "https://www.youtube.com/embed/U9DyHthJ6LA",
        inLanguage: "en",
      },
    ],
    copy: ramsayHotOnesCopy as Record<"en" | "es" | "ko" | "pt" | "vi", WatchPageCopy>,
  },
];

export function initializeCatalog(): void {
  videos.forEach((entry) => {
    registerVideo({ entry });
  });
}
