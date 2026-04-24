import Link from "next/link";
import { contact, navLinks } from "@/lib/site-data";

export function SiteFooter({ label = "Tous droits réservés Entretien JCG" }: { label?: string }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="footer-brand" href="/">
            Entretien JCG
          </Link>
          <p>Déneigement, débroussaillage, fauchage et entretien de terrain à Lévis et environs.</p>
        </div>
        <div className="footer-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="footer-contact">
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={contact.mailto}>{contact.email}</a>
          <Link href="/politique-confidentialite/">Politique de confidentialité</Link>
        </div>
      </div>
      <div className="container footer-bottom">{label}</div>
    </footer>
  );
}
