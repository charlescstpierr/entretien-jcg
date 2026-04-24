import type { CSSProperties, ReactNode } from "react";
import { ContactPanel } from "@/components/ContactPanel";
import { RelatedArticles } from "@/components/RelatedArticles";
import { QuoteModal } from "@/components/QuoteModal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteInteractions } from "@/components/SiteInteractions";
import { StickyMobileCta } from "@/components/StickyMobileCta";

type ServiceArticlePageProps = {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  currentHref: string;
  children: ReactNode;
  jsonLd?: object;
};

export function ServiceArticlePage({
  eyebrow,
  title,
  lead,
  image,
  currentHref,
  children,
  jsonLd,
}: ServiceArticlePageProps) {
  return (
    <>
      <SiteHeader />
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <main className="service-article">
        <section className="article-hero" style={{ "--hero-image": `url(${image})` } as CSSProperties}>
          <div className="container">
            <span className="eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p className="hero-lead">{lead}</p>
          </div>
        </section>
        <div className="container article-shell article-shell-single">
          <article className="article-card">
            {children}
            <RelatedArticles currentHref={currentHref} />
          </article>
        </div>
        <ContactPanel />
      </main>
      <SiteFooter />
      <QuoteModal />
      <StickyMobileCta />
      <SiteInteractions />
    </>
  );
}
