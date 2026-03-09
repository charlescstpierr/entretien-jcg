"use client";

import { Container } from "@/components/ui/Container";
import { StatCounter } from "@/components/ui/StatCounter";

const stats = [
  { target: 150, label: "Clients satisfaits", suffix: "+" },
  { target: 5, label: "Ann\u00e9es d\u2019exp\u00e9rience", suffix: "+" },
  { target: 100, label: "Satisfaction", suffix: "%" },
  { target: 24, label: "Temps de r\u00e9ponse", suffix: "h" },
];

const checkpoints = [
  "\u00c9quipe locale et fiable",
  "\u00c9quipement professionnel",
  "Soumission gratuite et rapide",
  "Service personnalis\u00e9",
];

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-5 w-5 shrink-0 text-emerald-primary"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
      clipRule="evenodd"
    />
  </svg>
);

export const WhyChooseUs = () => {
  return (
    <section className="mesh-dark grain relative py-24">
      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-emerald-primary">
            POURQUOI NOUS CHOISIR
          </span>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            L&apos;excellence &agrave; chaque intervention
          </h2>
        </div>

        {/* Stats grid */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              target={stat.target}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>

        {/* Checkmark points */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-5 md:grid-cols-2">
          {checkpoints.map((point) => (
            <div key={point} className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-primary/10">
                <CheckIcon />
              </div>
              <span className="text-slate-300">{point}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
