import type { Metadata } from "next";
import { HomeInteractions } from "@/components/HomeInteractions";
import { MainMarkup } from "@/components/StaticMarkup";
import { QuoteModal } from "@/components/QuoteModal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getHomeMainHtml, getHomeMetadata } from "@/lib/static-content";

const homeMetadata = getHomeMetadata();

export const metadata: Metadata = {
  title: homeMetadata.title,
  description: homeMetadata.description,
  alternates: { canonical: homeMetadata.canonical },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader home />
      <MainMarkup html={getHomeMainHtml()} />
      <SiteFooter />
      <QuoteModal />
      <HomeInteractions />
    </>
  );
}
