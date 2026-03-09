import { createMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CTABanner } from "@/components/layout/CTABanner";
import { FadeInOnScroll } from "@/components/animations/FadeInOnScroll";
import { SITE } from "@/lib/constants";

export const metadata = createMetadata({
  title: "À propos d'Entretien JCG - Votre partenaire à Lévis",
  description:
    "Apprenez-en plus sur Entretien JCG, votre partenaire de confiance pour l'entretien paysager et le déneigement à Lévis. Équipe locale, service de qualité.",
  path: "/a-propos",
});

const values = [
  {
    title: "Qualité",
    description:
      "Chaque intervention est réalisée avec soin et professionnalisme. Nous ne faisons aucun compromis sur la qualité de notre travail, que ce soit pour une simple tonte ou un projet d'aménagement complet.",
  },
  {
    title: "Fiabilité",
    description:
      "Vous pouvez compter sur nous. Ponctualité, régularité et respect des engagements sont au coeur de notre service. Nous sommes là quand vous avez besoin de nous, beau temps, mauvais temps.",
  },
  {
    title: "Service client",
    description:
      "Votre satisfaction est notre priorité. Nous prenons le temps d'écouter vos besoins, de vous conseiller et de vous accompagner tout au long de la saison. Un seul appel suffit pour nous joindre.",
  },
  {
    title: "Expertise locale",
    description:
      "Nous connaissons le climat, les sols et les défis propres à la région de Lévis. Notre expertise locale nous permet de vous offrir des solutions adaptées et efficaces pour votre terrain.",
  },
];

const AProposPage = () => {
  return (
    <>
      <section className="bg-dark-blue py-20 text-white">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Accueil", href: "/" },
              { label: "À propos" },
            ]}
          />
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            À propos d&apos;Entretien JCG
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Votre partenaire de confiance pour l&apos;entretien extérieur à Lévis et
            environs.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <FadeInOnScroll>
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold">Notre histoire</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Fondée à Lévis, Entretien JCG est née de la passion pour
                  l&apos;entretien extérieur et du désir d&apos;offrir un service de
                  qualité aux résidents et commerces de la région. Notre
                  équipe locale connaît le terrain et les particularités
                  du climat québécois.
                </p>
                <p>
                  Depuis nos débuts, nous avons bâti notre réputation sur un
                  travail soigné, une communication transparente et un
                  engagement envers la satisfaction de chaque client. Que ce
                  soit pour l&apos;entretien de votre pelouse pendant la belle
                  saison ou le déneigement en hiver, nous sommes présents
                  toute l&apos;année.
                </p>
                <p>
                  Notre équipe est composée de professionnels passionnés qui
                  partagent les mêmes valeurs : faire un travail dont nous
                  sommes fiers, respecter nos engagements et traiter chaque
                  propriété comme si c&apos;était la nôtre.
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <FadeInOnScroll>
            <h2 className="mb-10 text-center text-3xl font-bold">
              Nos valeurs
            </h2>
          </FadeInOnScroll>
          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <FadeInOnScroll key={value.title} delay={index * 100}>
                <div className="rounded-lg bg-white p-8 shadow-sm">
                  <h3 className="mb-3 text-xl font-semibold text-emerald-primary">
                    {value.title}
                  </h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <FadeInOnScroll>
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold">
                Notre territoire desservi
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                Nous desservons fièrement l&apos;ensemble de la ville de Lévis et
                ses environs. Notre équipe se déplace dans tous les secteurs
                pour vous offrir un service rapide et de proximité.
              </p>
              <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {SITE.territory.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-emerald-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInOnScroll>
        </Container>
      </section>

      <CTABanner />
    </>
  );
};

export default AProposPage;
