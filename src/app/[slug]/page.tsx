import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QuoteModal } from "@/components/QuoteModal";
import { MainMarkup } from "@/components/StaticMarkup";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteInteractions } from "@/components/SiteInteractions";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { getStaticPage, staticPageSlugs } from "@/lib/static-content";

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return staticPageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getStaticPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.canonical },
  };
}

export default async function StaticContentPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getStaticPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      {page.jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: page.jsonLd }}
        />
      ) : null}
      <MainMarkup html={page.mainHtml} />
      <SiteFooter label={page.footerLabel} />
      <QuoteModal />
      <StickyMobileCta />
      <SiteInteractions />
    </>
  );
}
