import Link from "next/link";
import { BlogCards } from "@/components/BlogCards";
import { ArrowIcon } from "@/components/Icons";

export function GuideSection() {
  return (
    <section className="guide-section" id="blog">
      <div className="container">
        <div className="guide-head">
          <div>
            <span className="section-kicker">Blog terrain</span>
            <h2>Des conseils utiles avant de planifier vos travaux</h2>
          </div>
          <p>
            Déneigement, défrichage et fauchage : les articles regroupent les bons repères pour préparer votre terrain,
            poser les bonnes questions et demander une soumission plus claire.
          </p>
        </div>
        <BlogCards />
        <div className="guide-actions">
          <Link className="btn btn-secondary" href="/blog/">
            Voir tous les articles
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
