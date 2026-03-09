import Link from "next/link";
import type { JSX } from "react";

type IconType = "leaf" | "shovel" | "snowflake";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: IconType;
  href: string;
};

const LeafIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c4 0 8.68-3 11-8a3.29 3.29 0 0 0 .63-2.18C20.16 7 16.83 4 12 4c0 0-1 2-2 3" />
    <path d="M6 15s-2 2-3 4" />
  </svg>
);

const ShovelIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <path d="M2 22l6-6" />
    <path d="M7.5 13.5L10 11" />
    <path d="M11 15l4-4" />
    <path d="M14.5 5.5a4 4 0 0 1 5.66 0l.34.34a4 4 0 0 1 0 5.66l-6.5 6.5-6-6 6.5-6.5z" />
  </svg>
);

const SnowflakeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
    <line x1="12" y1="2" x2="9" y2="5" />
    <line x1="12" y1="2" x2="15" y2="5" />
    <line x1="12" y1="22" x2="9" y2="19" />
    <line x1="12" y1="22" x2="15" y2="19" />
    <line x1="2" y1="12" x2="5" y2="9" />
    <line x1="2" y1="12" x2="5" y2="15" />
    <line x1="22" y1="12" x2="19" y2="9" />
    <line x1="22" y1="12" x2="19" y2="15" />
  </svg>
);

const icons: Record<IconType, () => JSX.Element> = {
  leaf: LeafIcon,
  shovel: ShovelIcon,
  snowflake: SnowflakeIcon,
};

export const ServiceCard = ({
  title,
  description,
  icon,
  href,
}: ServiceCardProps) => {
  const Icon = icons[icon];

  return (
    <Link
      href={href}
      className="glass-card gradient-border group block rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-primary/10 text-emerald-primary transition-all duration-500 group-hover:bg-emerald-primary group-hover:text-white">
        <Icon />
      </div>

      <h3 className="mt-6 mb-3 text-xl font-bold text-white">{title}</h3>

      <p className="mb-6 text-sm leading-relaxed text-slate-400">
        {description}
      </p>

      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-primary">
        En savoir plus
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </Link>
  );
};
