import type { Metadata } from "next";
import { ContactPanel } from "@/components/ContactPanel";
import { PageHero } from "@/components/PageHero";
import { QuoteModal } from "@/components/QuoteModal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteInteractions } from "@/components/SiteInteractions";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export const metadata: Metadata = {
  title: "Contact et soumission | Entretien JCG",
  description: "Contactez Entretien JCG pour une soumission de déneigement, défrichage, fauchage ou entretien de terrain.",
  alternates: { canonical: "https://www.entretienjcg.ca/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Décrivez votre terrain, on prépare la suite"
          text="Appelez directement ou envoyez les détails du projet pour recevoir une soumission claire."
          image="/assets/snow-tractor-home-optimized.jpg"
          ctaLabel="Appeler Entretien JCG"
          ctaHref="tel:+14182346807"
        />
        <ContactPanel />
      </main>
      <SiteFooter />
      <QuoteModal />
      <StickyMobileCta />
      <SiteInteractions />
    </>
  );
}
