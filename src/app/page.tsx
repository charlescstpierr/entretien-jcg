import type { Metadata } from "next";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ContactPanel } from "@/components/ContactPanel";
import { EquipmentPreview } from "@/components/EquipmentPreview";
import { GuideSection } from "@/components/GuideSection";
import { Hero } from "@/components/Hero";
import { QuoteModal } from "@/components/QuoteModal";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCards } from "@/components/ServiceCards";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteInteractions } from "@/components/SiteInteractions";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export const metadata: Metadata = {
  title: "Entretien JCG | Déneigement, débroussaillage et entretien de terrain à Lévis",
  description:
    "Entretien JCG offre le déneigement résidentiel, le défrichage, le débroussaillage, le fauchage mécanique et l’entretien de terrain à Lévis.",
  alternates: { canonical: "https://www.entretienjcg.ca/" },
};

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <section className="services-section" id="services">
          <div className="container">
            <SectionHeader
              eyebrow="Services"
              title="Des travaux extérieurs propres, rapides et bien planifiés"
              text="Choisissez le service adapté à votre terrain, puis passez directement à une soumission claire."
            />
            <ServiceCards />
          </div>
        </section>
        <BeforeAfter />
        <EquipmentPreview />
        <GuideSection />
        <ContactPanel />
      </main>
      <SiteFooter />
      <QuoteModal />
      <StickyMobileCta />
      <SiteInteractions />
    </>
  );
}
