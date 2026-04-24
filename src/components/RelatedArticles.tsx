import Link from "next/link";
import { getRelatedArticles } from "@/lib/articles";

type RelatedArticlesProps = {
  currentHref: string;
};

export function RelatedArticles({ currentHref }: RelatedArticlesProps) {
  const links = getRelatedArticles(currentHref);

  return (
    <aside className="related-articles" aria-label="Articles reliés">
      <span className="section-kicker">Voir aussi</span>
      <h2>Services et guides reliés</h2>
      <div className="related-grid">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.title}
          </Link>
        ))}
      </div>
    </aside>
  );
}
