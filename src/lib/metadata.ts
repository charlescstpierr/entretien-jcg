import type { Metadata } from "next";
import { SITE, METADATA } from "./constants";

export const createMetadata = (
  options: {
    title?: string;
    description?: string;
    path?: string;
    noIndex?: boolean;
  } = {}
): Metadata => {
  const title = options.title || METADATA.defaultTitle;
  const description = options.description || METADATA.defaultDescription;
  const url = options.path ? `${SITE.url}${options.path}` : SITE.url;

  return {
    title,
    description,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: "fr_CA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: options.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
};
