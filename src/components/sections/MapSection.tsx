import { SITE } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export const MapSection = () => {
  return (
    <section className="mesh-dark grain relative py-24 text-white">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Territory */}
          <div>
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-emerald-primary">
              Zone de service
            </span>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Notre territoire
            </h2>
            <p className="mb-10 max-w-lg text-lg text-slate-400">
              Nous desservons fièrement Lévis et ses secteurs environnants pour
              tous vos besoins d&apos;entretien paysager et de déneigement.
            </p>

            <div className="flex flex-wrap gap-3">
              {SITE.territory.map((area) => (
                <span
                  key={area}
                  className="glass-card inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-emerald-primary/40 hover:text-white"
                >
                  <svg
                    className="h-4 w-4 text-emerald-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center">
            <div className="glass-card gradient-border rounded-2xl p-8">
              <h3 className="mb-8 text-xl font-bold">Contactez-nous</h3>

              <div className="space-y-6">
                <a
                  href={SITE.phoneHref}
                  className="group flex items-center gap-4 text-slate-300 transition-colors hover:text-white"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-primary/10 text-emerald-primary transition-colors group-hover:bg-emerald-primary group-hover:text-white">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-slate-500">Téléphone</p>
                    <p className="font-medium">{SITE.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-center gap-4 text-slate-300 transition-colors hover:text-white"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-primary/10 text-emerald-primary transition-colors group-hover:bg-emerald-primary group-hover:text-white">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                      <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-slate-500">Courriel</p>
                    <p className="font-medium">{SITE.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-300">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-primary/10 text-emerald-primary">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs text-slate-500">Adresse</p>
                    <p className="font-medium">{SITE.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
