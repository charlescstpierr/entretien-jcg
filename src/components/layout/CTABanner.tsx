import { SITE } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export const CTABanner = () => {
  return (
    <section className="mesh-cta grain relative py-20 md:py-24">
      <Container className="relative z-10 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Prêt à transformer votre espace extérieur?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Obtenez une soumission gratuite en quelques minutes. Notre équipe vous
          répond en moins de 24&nbsp;heures.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {/* Primary CTA */}
          <a
            href="/contactez-nous"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-emerald-800 transition-all hover:bg-slate-100 hover:shadow-xl"
          >
            Demander une soumission
          </a>

          {/* Phone CTA */}
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            {SITE.phone}
          </a>
        </div>
      </Container>
    </section>
  );
};
