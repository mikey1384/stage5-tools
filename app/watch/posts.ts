import type { Locale } from "../lib/locales";

export type TrackLang = "en" | "es" | "ko" | "pt";

export interface PostCard {
  slug: string;
  title: string;
  description: string;
  language: string;
  topic: string;
  sourceLang: TrackLang;
  tracks: TrackLang[];
  supportedLocales: Locale[];
}

export const posts: PostCard[] = [
  {
    slug: "ferran-adria-wild-project",
    title: "Ferran Adrià on The Wild Project",
    description:
      "The legendary El Bulli chef talks about creativity, craft, and building something that changes how people think about food.",
    language: "Spanish",
    topic: "Food & Craft",
    sourceLang: "es",
    tracks: ["en", "ko", "pt"],
    supportedLocales: ["en", "es", "ko", "pt"],
  },
  {
    slug: "pique-la-resistencia",
    title: "Gerard Piqué on La Resistencia",
    description:
      "Barcelona defender invited himself onto Spanish late-night TV via Twitter. Most English speakers bounce off because it's in Spanish—they miss Broncano's crude opening, football talk, and the net worth comment that became a headline.",
    language: "Spanish",
    topic: "Sports",
    sourceLang: "es",
    tracks: ["en", "ko", "pt"],
    supportedLocales: ["en", "es", "ko", "pt"],
  },
  {
    slug: "park-chan-wook-lee-dong-jin",
    title: "Park Chan-wook on Lee Dong-jin's Piarchia",
    description:
      "Director Park Chan-wook discusses Decision to Leave with film critic Lee Dong-jin. A Korean-language interview about filmmaking, misunderstandings, and craft that English speakers rarely get to see.",
    language: "Korean",
    topic: "Film",
    sourceLang: "ko",
    tracks: ["en", "es", "pt"],
    supportedLocales: ["en", "es", "ko", "pt"],
  },
  {
    slug: "lee-jung-jae-hunt-piarchia",
    title: "Lee Jung-jae on Lee Dong-jin's Piarchia",
    description:
      "Actor-turned-director Lee Jung-jae discusses Hunt, his directorial debut, with film critic Lee Dong-jin. A Korean-language interview about directing for the first time, action sequences, and working with actors.",
    language: "Korean",
    topic: "Film",
    sourceLang: "ko",
    tracks: ["en", "es", "pt"],
    supportedLocales: ["en", "es", "ko", "pt"],
  },
  {
    slug: "yoo-ji-tae-piarchia",
    title: "Yoo Ji-tae on Lee Dong-jin's Piarchia",
    description:
      "Actor Yoo Ji-tae discusses One Fine Spring Day and Oldboy with film critic Lee Dong-jin. A Korean-language interview about improvisation, love scenes, and creating Lee Woo-jin.",
    language: "Korean",
    topic: "Film",
    sourceLang: "ko",
    tracks: ["en", "es", "pt"],
    supportedLocales: ["en", "es", "ko", "pt"],
  },
  {
    slug: "kore-eda-piarchia",
    title: "Hirokazu Kore-eda on Lee Dong-jin's Piarchia",
    description:
      "Director Hirokazu Kore-eda discusses his film career with critic Lee Dong-jin. A Korean-language interview about filmmaking craft, looking back at works like Shoplifters, Nobody Knows, After Life, and Broker.",
    language: "Korean",
    topic: "Film",
  },
  {
    slug: "calvo-wild-project",
    title: "Alejandro G. Calvo on The Wild Project",
    description:
      "Spanish film critic Alejandro G. Calvo discusses the TOP 60 películas with Jordi Wild. A Spanish-language conversation about cinema that English speakers rarely get to hear.",
    language: "Spanish",
    topic: "Film",
  },
];
