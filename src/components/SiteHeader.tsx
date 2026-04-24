import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, MenuIcon, PhoneIcon } from "@/components/Icons";
import { contact, navLinks } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand" href="/" aria-label="Entretien JCG">
          <Image
            className="brand-logo"
            src="/assets/jcg-logo-alpha.png"
            alt="Entretien JCG"
            width={600}
            height={182}
            priority
          />
        </Link>
        <button className="menu-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded="false">
          <MenuIcon />
        </button>
        <nav className="nav" aria-label="Navigation principale">
          <ul className="nav-links">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <a className="header-phone" href={contact.phoneHref} aria-label="Appeler Entretien JCG">
          <PhoneIcon />
          <span>{contact.phone}</span>
        </a>
        <button className="header-quote" type="button" data-open-quote>
          Soumission
          <ArrowIcon />
        </button>
      </div>
    </header>
  );
}
