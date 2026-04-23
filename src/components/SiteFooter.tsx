import Link from "next/link";

export function SiteFooter({ label = "Tous droits réservés Entretien JCG" }: { label?: string }) {
  return (
    <footer className="site-footer">
      <div className="container footer-bar">
        <div>{label}</div>
        <div className="footer-links">
          <a href="tel:+14182346807">418 234-6807</a>
          <Link className="footer-policy-button" href="/politique-confidentialite/">
            Politique de confidentialité
          </Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
