export interface PostCard {
  slug: string;
  title: string;
  description: string;
  language: string;
  topic: string;
}

export const posts: PostCard[] = [
  {
    slug: "ferran-adria-wild-project",
    title: "Ferran Adrià on The Wild Project",
    description:
      "The legendary El Bulli chef talks about creativity, craft, and building something that changes how people think about food.",
    language: "Spanish",
    topic: "Food & Craft",
  },
  {
    slug: "pique-la-resistencia",
    title: "Gerard Piqué on La Resistencia",
    description:
      "Barcelona defender invited himself onto Spanish late-night TV via Twitter. Most English speakers bounce off because it's in Spanish—they miss Broncano's crude opening, football talk, and the net worth comment that became a headline.",
    language: "Spanish",
    topic: "Sports",
  },
  {
    slug: "park-chan-wook-lee-dong-jin",
    title: "Park Chan-wook on Lee Dong-jin's Piarchia",
    description:
      "Director Park Chan-wook discusses Decision to Leave with film critic Lee Dong-jin. A Korean-language interview about filmmaking, misunderstandings, and craft that English speakers rarely get to see.",
    language: "Korean",
    topic: "Film",
  },
];
