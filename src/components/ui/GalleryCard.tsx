import Image from "next/image";

type GalleryCardProps = {
  title: string;
  description: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
};

export const GalleryCard = ({
  title,
  description,
  category,
  beforeImage,
  afterImage,
  beforeAlt = "Avant les travaux",
  afterAlt = "Après les travaux",
}: GalleryCardProps) => {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="grid grid-cols-2">
        <figure className="relative aspect-4/3">
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
          <span className="absolute bottom-2 left-2 rounded bg-dark-blue/70 px-2 py-0.5 text-xs font-medium text-white">
            Avant
          </span>
        </figure>
        <figure className="relative aspect-4/3">
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
          <span className="absolute bottom-2 left-2 rounded bg-emerald-primary/80 px-2 py-0.5 text-xs font-medium text-white">
            Après
          </span>
        </figure>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-heading text-lg font-bold text-dark-blue">
            {title}
          </h3>
          <span className="rounded-full bg-emerald-primary/10 px-3 py-1 text-xs font-medium text-emerald-primary">
            {category}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </article>
  );
};
