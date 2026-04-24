import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { services } from "@/lib/site-data";

type ServiceCardsProps = {
  detailed?: boolean;
};

export function ServiceCards({ detailed = false }: ServiceCardsProps) {
  return (
    <div className={detailed ? "service-grid service-grid-detailed" : "service-grid"}>
      {services.map((service) => (
        <article className="service-card" key={service.title}>
          <div className="service-image">
            <Image src={service.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
          </div>
          <div className="service-body">
            <span>{service.eyebrow}</span>
            <h3>{service.title}</h3>
            <p>{detailed ? service.detail : service.summary}</p>
            {detailed ? (
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
            <div className="service-actions">
              <Link className="text-link" href={service.href}>
                En savoir plus
                <ArrowIcon />
              </Link>
              <Link className="text-link muted-link" href={`/contact/?service=${encodeURIComponent(service.serviceValue)}`}>
                Soumission
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
