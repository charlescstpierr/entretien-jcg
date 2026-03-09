import { createMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { MapSection } from "@/components/sections/MapSection";
import { CTABanner } from "@/components/layout/CTABanner";
import { FadeInOnScroll } from "@/components/animations/FadeInOnScroll";

export const metadata = createMetadata();

const HomePage = () => {
  return (
    <>
      <Hero />
      <FadeInOnScroll>
        <ServicesOverview />
      </FadeInOnScroll>
      <FadeInOnScroll delay={100}>
        <WhyChooseUs />
      </FadeInOnScroll>
      <FadeInOnScroll delay={200}>
        <TestimonialsCarousel />
      </FadeInOnScroll>
      <FadeInOnScroll delay={100}>
        <MapSection />
      </FadeInOnScroll>
      <CTABanner />
    </>
  );
};

export default HomePage;
