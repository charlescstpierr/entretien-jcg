import Link from "next/link";
import { navigation } from "@/../content/navigation";
import { SITE } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

const serviceLinks = [
  { label: "Entretien de pelouse", href: "/services/entretien-de-pelouse" },
  { label: "Aménagement paysager", href: "/services/amenagement-paysager" },
  { label: "Déneigement", href: "/services/deneigement" },
];

const navigationLinks = navigation.filter(
  (item) => item.label !== "Services"
);

export const Footer = () => {
  return (
    <footer className="mesh-dark">
      <Container>
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 pt-20 sm:grid-cols-2 md:grid-cols-4">
          {/* Col 1 — Brand */}
          <div>
            <Link href="/" className="mb-4 inline-block text-xl font-bold">
              <span className="text-white">Entretien</span>{" "}
              <span className="text-gradient">JCG</span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              Services professionnels d&apos;entretien paysager et de
              déneigement à Lévis et environs. Qualité, fiabilité et
              satisfaction garantie.
            </p>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-emerald-primary"
              aria-label="Suivez-nous sur Facebook"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
              Facebook
            </a>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-emerald-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Navigation */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-emerald-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                {SITE.address}
              </li>
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-emerald-primary"
                >
                  <svg
                    className="h-4 w-4 shrink-0"
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
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-emerald-primary"
                >
                  <svg
                    className="h-4 w-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator + Bottom */}
        <div className="mt-16 border-t border-slate-800/50 pt-8 pb-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-slate-500">
              &copy; 2025 Entretien JCG. Tous droits réservés.
            </p>
            <p className="text-xs text-slate-500">
              {SITE.territory.join(" \u00B7 ")}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
