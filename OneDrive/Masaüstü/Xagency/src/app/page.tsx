import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesPreview } from "@/components/sections/ServicesSection";
import { WhyUsSection, StatsSection } from "@/components/sections/WhyUsSection";
import { SeoCtaSection, BlogPreviewSection } from "@/components/sections/CtaSections";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <WhyUsSection />
      <StatsSection />
      <SeoCtaSection />
      <BlogPreviewSection />
      <ContactSection />
    </>
  );
}
