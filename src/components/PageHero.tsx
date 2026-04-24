import { ArrowIcon } from "@/components/Icons";
import type { CSSProperties } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PageHero({ eyebrow, title, text, image, ctaLabel = "Demander une soumission", ctaHref = "/contact/" }: PageHeroProps) {
  return (
    <section className="page-hero" style={image ? { "--page-hero-image": `url(${image})` } as CSSProperties : undefined}>
      <div className="container page-hero-inner">
        <span className="section-kicker">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>
        <a className="btn btn-primary" href={ctaHref}>
          {ctaLabel}
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
