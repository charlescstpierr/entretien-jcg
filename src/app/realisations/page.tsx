import Image from "next/image";
import type { Metadata } from "next";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ContactPanel } from "@/components/ContactPanel";
import { PageHero } from "@/components/PageHero";
import { QuoteModal } from "@/components/QuoteModal";
import { SectionHeader } from "@/components/SectionHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteInteractions } from "@/components/SiteInteractions";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { realizationItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Réalisations | Entretien JCG",
  description: "Voyez des exemples de terrains dégagés, entretenus et préparés par Entretien JCG.",
  alternates: { canonical: "https://www.entretienjcg.ca/realisations/" },
};

export default function RealisationsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Réalisations"
          title="Des résultats concrets, visibles sur le terrain"
          text="Avant/après, terrains nettoyés et accès mieux préparés pour les propriétaires de la région."
          image="/assets/after-yard-real-optimized.jpg"
        />
        <BeforeAfter />
        <section className="gallery-section">
          <div className="container">
            <SectionHeader
              eyebrow="Projets"
              title="Travaux récents et situations typiques"
              text="Chaque projet dépend de l’accès, de la saison et du niveau de végétation ou de neige à gérer."
            />
            <div className="gallery-grid">
              {realizationItems.map((item) => (
                <article key={item.title} className="gallery-card">
                  <div>
                    <Image src={item.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <ContactPanel />
      </main>
      <SiteFooter />
      <QuoteModal />
      <StickyMobileCta />
      <SiteInteractions />
    </>
  );
}
