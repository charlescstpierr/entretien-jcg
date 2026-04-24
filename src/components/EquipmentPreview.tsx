import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { equipmentItems } from "@/lib/site-data";

type EquipmentPreviewProps = {
  full?: boolean;
};

export function EquipmentPreview({ full = false }: EquipmentPreviewProps) {
  return (
    <section className="equipment-section" id="equipements">
      <div className="container equipment-layout">
        <div className="equipment-visual">
          <Image src="/assets/jcg-hero-truck-optimized.jpg" alt="Machinerie Entretien JCG" fill sizes="(max-width: 900px) 100vw, 44vw" />
        </div>
        <div>
          <span className="section-kicker">Équipements</span>
          <h2>Une flotte prête pour chaque saison</h2>
          <p>
            Des équipements entretenus, polyvalents et adaptés aux accès résidentiels, grands terrains et conditions
            d’hiver.
          </p>
          <div className="equipment-cards">
            {equipmentItems.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          {!full ? (
            <Link className="btn btn-outline" href="/equipements/">
              Voir les équipements
              <ArrowIcon />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
