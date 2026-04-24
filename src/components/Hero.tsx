import Image from "next/image";
import { ArrowIcon, PhoneIcon } from "@/components/Icons";
import { contact, proofPoints } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="home-hero" id="accueil">
      <div className="home-hero-media">
        <Image
          src="/assets/snow-tractor-home-optimized.jpg"
          alt="Tracteur de déneigement Entretien JCG devant une entrée résidentielle"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="container home-hero-grid">
        <div className="home-hero-copy">
          <span className="section-kicker">Déneigement • Débroussaillage • Entretien</span>
          <h1>Votre terrain, prêt en toute saison</h1>
          <p>
            Entretien JCG aide les propriétaires de Lévis à garder leurs accès, terrains et espaces extérieurs propres,
            sécuritaires et prêts pour les travaux.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" type="button" data-open-quote>
              Demander une soumission
              <ArrowIcon />
            </button>
            <a className="btn btn-outline" href={contact.phoneHref}>
              <PhoneIcon />
              {contact.phone}
            </a>
          </div>
        </div>

        <aside className="hero-proof" aria-label="Avantages Entretien JCG">
          {proofPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </aside>
      </div>
    </section>
  );
}
