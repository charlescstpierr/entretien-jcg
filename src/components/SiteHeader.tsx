import Image from "next/image";
import Link from "next/link";

const homeLinks = [
  ["#accueil", "Accueil"],
  ["#services", "Services"],
  ["#apropos", "À propos"],
  ["#realisations", "Réalisations"],
  ["#equipements", "Équipements"],
  ["#blog", "Blog"],
  ["#contact", "Contact"],
] as const;

const articleLinks = [
  ["/#services", "Services"],
  ["/#blog", "Blog"],
  ["/#contact", "Contact"],
] as const;

export function SiteHeader({ home = false }: { home?: boolean }) {
  const links = home ? homeLinks : articleLinks;
  const logo = (
    <Image
      className="brand-logo"
      src="/assets/jcg-logo-alpha.png"
      alt="Entretien JCG"
      width={600}
      height={182}
      priority
    />
  );

  return (
    <header className="site-header">
      <div className="container nav-shell">
        {home ? (
          <a className="brand" href="#accueil" aria-label="Entretien JCG">
            {logo}
          </a>
        ) : (
          <Link className="brand" href="/" aria-label="Entretien JCG">
            {logo}
          </Link>
        )}
        <button className="menu-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded="false">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
          </svg>
        </button>
        <nav className="nav" aria-label="Navigation principale">
          <ul className="nav-links">
            {links.map(([href, label], index) => (
              <li key={href}>
                <a className={home && index === 0 ? "active" : undefined} href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="header-phone" href="tel:+14182346807" aria-label="Appeler Entretien JCG">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2a1.5 1.5 0 0 1 1.5-.36 12 12 0 0 0 3.77.6A1.33 1.33 0 0 1 22 16.8V21A1 1 0 0 1 21 22C10.5 22 2 13.5 2 3a1 1 0 0 1 1-1h4.2a1.33 1.33 0 0 1 1.33 1.33 12 12 0 0 0 .6 3.77 1.5 1.5 0 0 1-.36 1.5z" />
          </svg>
          <span>418 234-6807</span>
        </a>
      </div>
    </header>
  );
}
