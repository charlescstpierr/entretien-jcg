import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden grain mesh-hero">
      {/* Floating organic shapes for depth */}
      <div className="absolute -left-48 top-1/4 h-96 w-96 rounded-full bg-emerald-primary/20 blur-3xl animate-float" />
      <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-emerald-primary/10 blur-3xl animate-float delay-300" />
      <div className="absolute left-1/3 -top-24 h-72 w-72 rounded-full bg-emerald-light/10 blur-3xl animate-pulse-soft delay-500" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <Container className="relative z-10 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="animate-fade-up delay-100 mb-8 inline-block rounded-full border border-emerald-primary/30 bg-emerald-primary/10 px-4 py-1.5 text-sm font-medium text-emerald-light">
            Services résidentiels et commerciaux à Lévis
          </span>

          {/* Heading */}
          <h1 className="animate-fade-up delay-200 mb-8 text-6xl font-extrabold tracking-tight leading-[0.95] text-white md:text-7xl lg:text-[5.5rem]">
            Votre terrain mérite le{" "}
            <span className="text-gradient">meilleur</span> entretien
          </h1>

          {/* Paragraph */}
          <p className="animate-fade-up delay-300 mb-10 max-w-xl text-lg font-light text-slate-400 md:text-xl">
            Entretien de pelouse, aménagement paysager et déneigement
            professionnel à Lévis et environs. Qualité, fiabilité et
            satisfaction garantie.
          </p>

          {/* Buttons */}
          <div className="animate-fade-up delay-400 flex flex-wrap gap-4">
            <Button href="/contactez-nous" variant="primary" size="lg">
              Soumission gratuite
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Nos services
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="animate-fade-up delay-700 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs font-medium tracking-widest uppercase text-slate-500">
          Défiler
        </span>
        <svg
          className="h-5 w-5 animate-bounce text-slate-500"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </section>
  );
};
