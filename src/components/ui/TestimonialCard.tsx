type TestimonialCardProps = {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
};

const serviceLabels: Record<string, string> = {
  "entretien-de-pelouse": "Entretien de pelouse",
  "amenagement-paysager": "Aménagement paysager",
  deneigement: "Déneigement",
};

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={filled ? 0 : 1.5}
    className={`h-4 w-4 ${filled ? "text-amber-400" : "text-slate-200"}`}
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
  </svg>
);

const getInitials = (name: string): string => {
  const parts = name.split(" ");
  if (parts.length < 2) return name.charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

export const TestimonialCard = ({
  name,
  location,
  rating,
  text,
  service,
}: TestimonialCardProps) => {
  const clampedRating = Math.min(5, Math.max(0, Math.round(rating)));

  return (
    <article className="flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-emerald-primary/20 hover:shadow-xl">
      {/* Quote mark */}
      <span
        className="mb-2 block font-serif text-6xl leading-none text-emerald-primary/20 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Testimonial text */}
      <blockquote className="mb-6 flex-1 text-base italic leading-relaxed text-slate-600">
        <p>{text}</p>
      </blockquote>

      {/* Star rating */}
      <div
        className="mb-6 flex gap-0.5"
        role="img"
        aria-label={`${clampedRating} étoiles sur 5`}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} filled={i < clampedRating} />
        ))}
      </div>

      {/* Author + service */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar placeholder */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-primary/10">
            <span className="text-sm font-bold text-emerald-primary">
              {getInitials(name)}
            </span>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">{name}</p>
            <p className="text-xs text-slate-400">{location}</p>
          </div>
        </div>

        <span className="rounded-full bg-emerald-primary/10 px-2 py-0.5 text-xs text-emerald-primary">
          {serviceLabels[service] ?? service}
        </span>
      </div>
    </article>
  );
};
