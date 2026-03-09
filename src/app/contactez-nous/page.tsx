import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { MapSection } from "@/components/sections/MapSection";
import { FadeInOnScroll } from "@/components/animations/FadeInOnScroll";
import { SITE } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Contactez-nous - Soumission gratuite à Lévis",
  description:
    "Contactez Entretien JCG pour une soumission gratuite. Entretien de pelouse, aménagement paysager et déneigement à Lévis et environs.",
  path: "/contactez-nous",
});

const ContactPage = () => {
  return (
    <>
      <section className="bg-dark-blue py-20 text-white">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "Contactez-nous" },
            ]}
          />
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            Contactez-nous
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Demandez votre soumission gratuite ou posez-nous vos questions.
            Nous vous répondons dans les 24 heures.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <FadeInOnScroll>
                <h2 className="mb-6 text-2xl font-bold">
                  Demande de soumission gratuite
                </h2>
                <QuoteForm />
              </FadeInOnScroll>
            </div>

            <div className="lg:col-span-1">
              <FadeInOnScroll delay={200}>
                <div className="rounded-lg bg-gray-50 p-8">
                  <h2 className="mb-6 text-2xl font-bold">Nos coordonnées</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">
                        Téléphone
                      </h3>
                      <a
                        href={SITE.phoneHref}
                        className="text-lg text-emerald-primary hover:underline"
                      >
                        {SITE.phone}
                      </a>
                    </div>

                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">
                        Courriel
                      </h3>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-emerald-primary hover:underline"
                      >
                        {SITE.email}
                      </a>
                    </div>

                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">
                        Adresse
                      </h3>
                      <p className="text-gray-700">{SITE.address}</p>
                    </div>

                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">
                        Heures d&apos;ouverture
                      </h3>
                      <ul className="space-y-1 text-gray-700">
                        <li>Lundi au vendredi : 8 h - 17 h</li>
                        <li>Samedi : 9 h - 12 h</li>
                        <li>Dimanche : Fermé</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900">
                        Territoire desservi
                      </h3>
                      <p className="text-gray-700">
                        {SITE.territory.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </Container>
      </section>

      <MapSection />
    </>
  );
};

export default ContactPage;
