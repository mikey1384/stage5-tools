import { getPostCards } from "../../lib/watch";

export type { PostCard, TrackLang } from "../../lib/watch";

export const posts = getPostCards();
