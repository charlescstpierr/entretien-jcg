import type { Metadata } from "next";
import Link from "next/link";
import { BlogCards } from "@/components/BlogCards";
import { ArrowIcon, PhoneIcon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { QuoteModal } from "@/components/QuoteModal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteInteractions } from "@/components/SiteInteractions";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Blog terrain | Conseils déneigement, défrichage et fauchage | Entretien JCG",
  description:
    "Articles pratiques d’Entretien JCG pour planifier le déneigement résidentiel, le défrichage de terrain et le fauchage mécanique à Lévis.",
  alternates: { canonical: "https://www.entretienjcg.ca/blog/" },
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Blog terrain"
          title="Conseils simples pour mieux préparer vos travaux"
          text="Avant une soumission, voyez quoi prévoir selon la saison, le type de terrain et l’accès à dégager."
          image="/assets/jcg-defrichage.jpg"
          ctaLabel="Demander une soumission"
          ctaHref="/contact/"
        />
        <section className="blog-index-section">
          <div className="container">
            <div className="blog-lead">
              <span className="section-kicker">Articles pratiques</span>
              <h2>Les bons repères avant de passer à l’action</h2>
              <p>
                Le blog regroupe les guides utiles pour comprendre le bon service, préparer votre terrain et accélérer
                la discussion avec Entretien JCG.
              </p>
            </div>
            <BlogCards />
          </div>
        </section>
        <section className="blog-cta-band">
          <div className="container blog-cta-inner">
            <div>
              <span className="section-kicker">Projet prêt?</span>
              <h2>On peut regarder ça avec vous.</h2>
              <p>
                Appelez directement ou envoyez une demande avec quelques photos et les détails du terrain pour recevoir
                une soumission claire.
              </p>
            </div>
            <div className="blog-cta-actions">
              <a className="btn btn-primary" href={contact.phoneHref}>
                <PhoneIcon />
                {contact.phone}
              </a>
              <Link className="btn btn-secondary" href="/contact/">
                Soumission
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <QuoteModal />
      <StickyMobileCta />
      <SiteInteractions />
    </>
  );
}
