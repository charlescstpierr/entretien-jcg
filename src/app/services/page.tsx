import type { Metadata } from "next";
import { ContactPanel } from "@/components/ContactPanel";
import { PageHero } from "@/components/PageHero";
import { QuoteModal } from "@/components/QuoteModal";
import { ServiceCards } from "@/components/ServiceCards";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteInteractions } from "@/components/SiteInteractions";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export const metadata: Metadata = {
  title: "Services | Entretien JCG",
  description: "Défrichage, débroussaillage, entretien de terrain et déneigement résidentiel à Lévis.",
  alternates: { canonical: "https://www.entretienjcg.ca/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Services"
          title="Le bon équipement pour chaque terrain"
          text="Des services clairs pour les accès, grands terrains, entrées résidentielles et travaux saisonniers."
          image="/assets/jcg-defrichage.jpg"
        />
        <section className="services-section">
          <div className="container">
            <ServiceCards detailed />
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
