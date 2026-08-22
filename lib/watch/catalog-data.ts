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
    supportedLocales: ["en", "es", "ko", "pt"],
    language: "Spanish",
    topic: "Food & Craft",
    showName: "Wild Project #287",
    datePublished: "2024-05-14",
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
        uploadDate: "2024-05-14",
        contentUrl: "https://www.youtube.com/watch?v=xzSOmaZGtiI",
        embedUrl: "https://www.youtube.com/embed/xzSOmaZGtiI",
        inLanguage: "es",
      },
    ],
    copy: ferranAdriaWildProjectCopy as Record<"en" | "es" | "ko" | "pt", WatchPageCopy>,
  },
  {
    slug: "pique-la-resistencia",
    videoId: "AcGwBcHPMPQ",
    vttSlug: "pique-la-resistencia",
    sourceLang: "es",
    tracks: ["en", "ko", "pt"],
    supportedLocales: ["en", "es", "ko", "pt"],
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
        contentUrl: "https://www.youtube.com/watch?v=AcGwBcHPMPQ",
        embedUrl: "https://www.youtube.com/embed/AcGwBcHPMPQ",
        inLanguage: "es",
      },
    ],
    copy: piqueLaResistenciaCopy as Record<"en" | "es" | "ko" | "pt", WatchPageCopy>,
  },
  {
    slug: "park-chan-wook-lee-dong-jin",
    videoId: "CjVz6F62T4w",
    vttSlug: "park-chan-wook-lee-dong-jin",
    sourceLang: "ko",
    tracks: ["en", "es", "pt"],
    supportedLocales: ["en", "es", "ko", "pt"],
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
        contentUrl: "https://www.youtube.com/watch?v=CjVz6F62T4w",
        embedUrl: "https://www.youtube.com/embed/CjVz6F62T4w",
        inLanguage: "ko",
        duration: "PT1H11M46S",
      },
    ],
    copy: parkChanWookLeeDongJinCopy as Record<"en" | "es" | "ko" | "pt", WatchPageCopy>,
  },
  {
    slug: "lee-jung-jae-hunt-piarchia",
    videoId: "mF6xumJOVss",
    vttSlug: "lee-jung-jae-hunt-piarchia",
    sourceLang: "ko",
    tracks: ["en", "es", "pt"],
    supportedLocales: ["en", "es", "ko", "pt"],
    language: "Korean",
    topic: "Film",
    showName: "Lee Dong-jin's Piarchia",
    datePublished: "2022-08-08",
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
        uploadDate: "2022-08-08",
        contentUrl: "https://www.youtube.com/watch?v=mF6xumJOVss",
        embedUrl: "https://www.youtube.com/embed/mF6xumJOVss",
        inLanguage: "ko",
      },
    ],
    copy: leeJungJaeHuntPiarchiaCopy as Record<"en" | "es" | "ko" | "pt", WatchPageCopy>,
  },
  {
    slug: "yoo-ji-tae-piarchia",
    videoId: "PYY10Yq50bA",
    vttSlug: "yoo-ji-tae-piarchia",
    sourceLang: "ko",
    tracks: ["en", "es", "pt"],
    supportedLocales: ["en", "es", "ko", "pt"],
    language: "Korean",
    topic: "Film",
    showName: "Lee Dong-jin's Piarchia",
    datePublished: "2022-03-07",
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
        uploadDate: "2022-03-07",
        contentUrl: "https://www.youtube.com/watch?v=PYY10Yq50bA",
        embedUrl: "https://www.youtube.com/embed/PYY10Yq50bA",
        inLanguage: "ko",
      },
    ],
    copy: yooJiTaePiarchiaCopy as Record<"en" | "es" | "ko" | "pt", WatchPageCopy>,
  },
  {
    slug: "kore-eda-piarchia",
    videoId: "j29oHrGMmtY",
    vttSlug: "kore-eda-piarchia",
    sourceLang: "ko",
    tracks: ["en", "es", "pt"],
    supportedLocales: ["en", "es", "ko", "pt"],
    language: "Korean",
    topic: "Film",
    showName: "Lee Dong-jin's Piarchia",
    datePublished: "2022-06-13",
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
        uploadDate: "2022-06-13",
        contentUrl: "https://www.youtube.com/watch?v=j29oHrGMmtY",
        embedUrl: "https://www.youtube.com/embed/j29oHrGMmtY",
        inLanguage: "ko",
      },
    ],
    copy: koreEdaPiarchiaCopy as Record<"en" | "es" | "ko" | "pt", WatchPageCopy>,
  },
  {
    slug: "calvo-wild-project",
    videoId: "Wk_4tQOvdWU",
    vttSlug: "Wk_4tQOvdWU",
    sourceLang: "es",
    tracks: ["en", "ko", "pt"],
    supportedLocales: ["en", "es", "ko", "pt"],
    language: "Spanish",
    topic: "Film",
    showName: "The Wild Project",
    datePublished: "2024-01-09",
    structuredDataAbout: [
      {
        "@type": "Person",
        name: "Alejandro G. Calvo",
        description: "Spanish film critic",
      },
      {
        "@type": "VideoObject",
        name: "The Wild Project #245 - Alejandro G. Calvo & J. Maquiavello",
        description:
          "Spanish film critic Alejandro G. Calvo discusses the TOP 60 películas with Jordi Wild",
        uploadDate: "2024-01-09",
        contentUrl: "https://www.youtube.com/watch?v=Wk_4tQOvdWU",
        embedUrl: "https://www.youtube.com/embed/Wk_4tQOvdWU",
        inLanguage: "es",
      },
    ],
    copy: calvoWildProjectCopy as Record<"en" | "es" | "ko" | "pt", WatchPageCopy>,
  },
  {
    slug: "nolan-colbert-oppenheimer",
    videoId: "WGH8RMbrGLM",
    vttSlug: "WGH8RMbrGLM",
    sourceLang: "en",
    tracks: ["en", "es", "ko", "pt", "vi"],
    supportedLocales: ["en", "es", "ko", "pt", "vi"],
    language: "English",
    topic: "Film",
    showName: "The Late Show",
    datePublished: "2024-01-16",
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
        uploadDate: "2024-01-16",
        contentUrl: "https://www.youtube.com/watch?v=WGH8RMbrGLM",
        embedUrl: "https://www.youtube.com/embed/WGH8RMbrGLM",
        inLanguage: "en",
      },
    ],
    copy: nolanColbertOppenheimerCopy,
  },
  {
    slug: "ramsay-hot-ones",
    videoId: "U9DyHthJ6LA",
    vttSlug: "U9DyHthJ6LA",
    sourceLang: "en",
    tracks: ["en", "es", "ko", "pt", "vi"],
    supportedLocales: ["en", "es", "ko", "pt", "vi"],
    language: "English",
    topic: "Food & Craft",
    showName: "Hot Ones",
    datePublished: "2018-01-18",
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
        uploadDate: "2018-01-18",
        contentUrl: "https://www.youtube.com/watch?v=U9DyHthJ6LA",
        embedUrl: "https://www.youtube.com/embed/U9DyHthJ6LA",
        inLanguage: "en",
      },
    ],
    copy: ramsayHotOnesCopy,
  },
];

export function initializeCatalog(): void {
  videos.forEach((entry) => {
    registerVideo({ entry });
  });
}
