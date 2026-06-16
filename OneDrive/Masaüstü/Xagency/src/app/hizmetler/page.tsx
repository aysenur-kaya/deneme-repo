import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Web tasarım, sosyal medya yönetimi, kurumsal kimlik, SEO, dijital reklam ve yazılım çözümleri.",
};

export default function HizmetlerPage() {
  return (
    <>
      <PageHero
        badge="Hizmetlerimiz"
        title="Premium Dijital"
        highlight="Çözümler"
        description="Markanızı dijital dünyada zirveye taşıyacak kapsamlı hizmetler sunuyoruz."
      />
      <ServicesGrid showHeading={false} />
      <ContactSection />
    </>
  );
}
