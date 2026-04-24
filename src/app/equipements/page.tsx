import type { Metadata } from "next";
import { ContactPanel } from "@/components/ContactPanel";
import { EquipmentPreview } from "@/components/EquipmentPreview";
import { PageHero } from "@/components/PageHero";
import { QuoteModal } from "@/components/QuoteModal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteInteractions } from "@/components/SiteInteractions";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export const metadata: Metadata = {
  title: "Équipements | Entretien JCG",
  description: "Machinerie, équipements de coupe, déneigement et entretien de terrain utilisés par Entretien JCG.",
  alternates: { canonical: "https://www.entretienjcg.ca/equipements/" },
};

export default function EquipementsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Équipements"
          title="Une flotte entretenue pour travailler proprement"
          text="Machinerie compacte, accessoires spécialisés et capacité quatre saisons pour les terrains résidentiels et commerciaux."
          image="/assets/jcg-hero-truck-optimized.jpg"
        />
        <EquipmentPreview full />
        <ContactPanel />
      </main>
      <SiteFooter />
      <QuoteModal />
      <StickyMobileCta />
      <SiteInteractions />
    </>
  );
}
