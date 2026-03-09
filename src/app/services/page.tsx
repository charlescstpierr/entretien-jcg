import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTABanner } from "@/components/layout/CTABanner";
import { FAQ } from "@/components/sections/FAQ";
import { FadeInOnScroll } from "@/components/animations/FadeInOnScroll";
import { services } from "@/../content/services";
import { faqCategories } from "@/../content/faq";

export const metadata = createMetadata({
  title: "Nos services d'entretien paysager et déneigement à Lévis",
  description:
    "Découvrez nos services professionnels d'entretien de pelouse, d'aménagement paysager et de déneigement à Lévis et environs. Soumission gratuite.",
  path: "/services",
});

const allFaqItems = faqCategories.flatMap((cat) => cat.items);

const ServicesPage = () => {
  return (
    <>
      <section className="bg-dark-blue py-20 text-white">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Services" },
            ]}
          />
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            Nos services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Entretien JCG offre une gamme complète de services pour l&apos;entretien
            et la mise en valeur de votre propriété, été comme hiver.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <FadeInOnScroll key={service.slug}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href={`/services/${service.slug}`}
                />
              </FadeInOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <FadeInOnScroll>
            <h2 className="mb-10 text-center text-3xl font-bold">
              Questions fréquentes
            </h2>
            <FAQ items={allFaqItems} />
          </FadeInOnScroll>
        </Container>
      </section>

      <CTABanner />
    </>
  );
};

export default ServicesPage;
