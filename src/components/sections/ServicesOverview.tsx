import Link from "next/link";
import { services } from "@/../content/services";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/ui/ServiceCard";

export const ServicesOverview = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-emerald-primary">
            NOS SERVICES
          </span>
          <h2 className="text-4xl font-bold text-dark-blue md:text-5xl">
            Des solutions adapt&eacute;es &agrave; chaque saison
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            De l&apos;entretien de pelouse au d&eacute;neigement, nous prenons
            soin de votre propri&eacute;t&eacute; tout au long de
            l&apos;ann&eacute;e.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 font-medium text-emerald-primary transition-colors hover:text-emerald-dark"
          >
            Voir tous nos services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
};
