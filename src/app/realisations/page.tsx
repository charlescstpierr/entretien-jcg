import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { GalleryCard } from "@/components/ui/GalleryCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTABanner } from "@/components/layout/CTABanner";
import { FadeInOnScroll } from "@/components/animations/FadeInOnScroll";
import { galleryItems } from "@/../content/gallery";

export const metadata = createMetadata({
  title: "Nos réalisations - Galerie avant/après",
  description:
    "Découvrez nos réalisations en entretien de pelouse, aménagement paysager et déneigement à Lévis. Photos avant/après de nos projets résidentiels et commerciaux.",
  path: "/realisations",
});

const categoryLabels: Record<string, string> = {
  pelouse: "Entretien de pelouse",
  amenagement: "Aménagement paysager",
  deneigement: "Déneigement",
};

const groupedItems = galleryItems.reduce(
  (acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  },
  {} as Record<string, typeof galleryItems>,
);

const RealisationsPage = () => {
  return (
    <>
      <section className="bg-dark-blue py-20 text-white">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Réalisations" },
            ]}
          />
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            Nos réalisations
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Parcourez nos projets récents et constatez la qualité de notre
            travail grâce à nos photos avant/après.
          </p>
        </Container>
      </section>

      {Object.entries(groupedItems).map(([category, items]) => (
        <section key={category} className="py-16 md:py-24 even:bg-gray-50">
          <Container>
            <FadeInOnScroll>
              <h2 className="mb-10 text-3xl font-bold">
                {categoryLabels[category] ?? category}
              </h2>
            </FadeInOnScroll>
            <div className="grid gap-8 md:grid-cols-2">
              {items.map((item, index) => (
                <FadeInOnScroll key={item.id} delay={index * 100}>
                  <GalleryCard
                    title={item.title}
                    description={item.description}
                    category={item.category}
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                  />
                </FadeInOnScroll>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <CTABanner />
    </>
  );
};

export default RealisationsPage;
