import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";

export function BeforeAfter() {
  return (
    <section className="before-after" id="realisations">
      <div className="container before-after-grid">
        <div className="before-copy">
          <span className="section-kicker">Résultats visibles</span>
          <h2>Un terrain transformé, sans perdre de temps</h2>
          <p>
            Comparez l’état du terrain avant et après l’intervention. L’objectif : un espace plus propre, plus sûr et
            plus simple à utiliser.
          </p>
          <Link className="btn btn-primary" href="/realisations/">
            Voir les réalisations
            <ArrowIcon />
          </Link>
        </div>
        <div className="compare-card">
          <div className="compare-surface" aria-hidden="true">
            <Image src="/assets/after-yard-real-optimized.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 56vw" />
          </div>
          <div className="compare-overlay" aria-hidden="true">
            <Image src="/assets/before-yard-real-optimized.jpg" alt="" fill sizes="(max-width: 900px) 100vw, 56vw" />
          </div>
          <span className="compare-label before">Avant</span>
          <span className="compare-label after">Après</span>
          <div className="compare-handle">
            <span />
          </div>
          <input className="compare-range" type="range" min="0" max="100" defaultValue="50" aria-label="Comparer avant et après" />
        </div>
      </div>
    </section>
  );
}
