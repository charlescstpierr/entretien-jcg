"use client";

import { testimonials } from "@/../content/testimonials";
import { Container } from "@/components/ui/Container";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export const TestimonialsCarousel = () => {
  const displayedTestimonials = testimonials.slice(0, 3);

  return (
    <section className="bg-white py-24">
      <Container>
        {/* Header */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-primary">
            Témoignages
          </span>
          <h2 className="mt-4 text-4xl font-bold text-dark-blue md:text-5xl">
            La confiance de nos clients
          </h2>
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {displayedTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              location={testimonial.location}
              rating={testimonial.rating}
              text={testimonial.text}
              service={testimonial.service}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
