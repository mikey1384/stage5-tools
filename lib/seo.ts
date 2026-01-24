import type { Metadata } from "next";

const defaultImage = {
  url: "https://translator.tools/thumb.jpg",
  width: 1200,
  height: 630,
  alt: "Translator by Stage5",
};

interface BuildMetadataProps {
  title: string;
  description: string;
  path: string;
  keywords: string[];
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
}: BuildMetadataProps): Metadata {
  const url = `https://translator.tools${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Translator",
      type: "website",
      images: [defaultImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultImage.url],
    },
  };
}

export const defaultOpenGraphImage = defaultImage;
