import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTABanner } from "@/components/layout/CTABanner";
import { FAQ } from "@/components/sections/FAQ";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { FadeInOnScroll } from "@/components/animations/FadeInOnScroll";
import { Button } from "@/components/ui/Button";
import { services } from "@/../content/services";
import { faqCategories } from "@/../content/faq";

const service = services.find((s) => s.slug === "entretien-de-pelouse")!;
const faqCategory = faqCategories.find((c) => c.slug === "entretien-de-pelouse");
const faqItems = faqCategory?.items ?? [];

export const metadata = createMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: "/services/entretien-de-pelouse",
});

const EntretienDePelousePage = () => {
  return (
    <>
      <ServiceSchema name={service.title} description={service.description} />

      <section className="bg-dark-blue py-20 text-white">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Entretien de pelouse" },
            ]}
          />
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            {service.description}
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <FadeInOnScroll>
            <h2 className="mb-10 text-3xl font-bold">Nos services inclus</h2>
          </FadeInOnScroll>
          <div className="grid gap-6 md:grid-cols-2">
            {service.features.map((feature, index) => (
              <FadeInOnScroll key={index} delay={index * 50}>
                <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-5">
                  <svg
                    className="mt-0.5 h-6 w-6 flex-shrink-0 text-emerald-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-gray-700">{feature}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <FadeInOnScroll>
            <h2 className="mb-10 text-3xl font-bold">
              Pourquoi choisir Entretien JCG?
            </h2>
          </FadeInOnScroll>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit, index) => (
              <FadeInOnScroll key={index} delay={index * 50}>
                <div className="rounded-lg bg-white p-6 shadow-sm">
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
          <FadeInOnScroll>
            <div className="mt-10 text-center">
              <Button variant="primary" href="/contactez-nous">
                {service.cta}
              </Button>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>

      {faqItems.length > 0 && (
        <section className="py-16 md:py-24">
          <Container>
            <FadeInOnScroll>
              <h2 className="mb-10 text-center text-3xl font-bold">
                Questions fréquentes
              </h2>
              <FAQ items={faqItems} />
            </FadeInOnScroll>
          </Container>
        </section>
      )}

      <CTABanner />
    </>
  );
};

export default EntretienDePelousePage;
