import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { guideLinks } from "@/lib/site-data";

export function BlogCards() {
  return (
    <div className="blog-card-grid">
      {guideLinks.map((guide) => (
        <article key={guide.href} className="blog-card">
          <Link className="blog-card-media" href={guide.href} aria-label={`Lire ${guide.title}`}>
            <Image src={guide.image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
          </Link>
          <div className="blog-card-body">
            <div className="blog-card-meta">
              <span>{guide.label}</span>
              <span>{guide.readTime}</span>
            </div>
            <h3>{guide.title}</h3>
            <p>{guide.text}</p>
            <Link className="text-link" href={guide.href}>
              Lire l’article
              <ArrowIcon />
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
