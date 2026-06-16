"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Share2,
  Palette,
  TrendingUp,
  Code2,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { NeonButtonWithArrow } from "@/components/ui/NeonButton";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Share2,
  Palette,
  TrendingUp,
  Code2,
};

interface ServiceCardProps {
  service: (typeof services)[0];
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Globe;

  return (
    <Reveal delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group relative h-full"
      >
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-neon/0 via-neon/0 to-neon/0 opacity-0 blur transition-all duration-500 group-hover:from-neon/20 group-hover:via-neon/10 group-hover:to-neon/20 group-hover:opacity-100" />

        <div className="relative flex h-full flex-col rounded-2xl glass p-6 sm:p-8 transition-all duration-500 group-hover:border-neon/40 group-hover:shadow-neon">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-neon/10 border border-neon/20 transition-all duration-300 group-hover:bg-neon/20 group-hover:shadow-neon-sm">
            <Icon className="h-7 w-7 text-neon" />
          </div>

          <h3 className="mb-3 text-xl font-bold text-white group-hover:text-neon transition-colors">
            {service.title}
          </h3>

          <p className="mb-6 flex-grow text-sm leading-relaxed text-soft-gray">
            {service.description}
          </p>

          <ul className="mb-6 space-y-2">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-xs text-soft-gray"
              >
                <span className="h-1 w-1 rounded-full bg-neon" />
                {feature}
              </li>
            ))}
          </ul>

          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neon transition-all group-hover:gap-3"
          >
            Detay
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </Reveal>
  );
}

export function ServicesPreview() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-neon/5 blur-[150px]" />

      <div className="container-custom relative">
        <SectionHeading
          badge="Hizmetlerimiz"
          title="Dijital Başarınız İçin Her Şey"
          description="Markanızı dijital dünyada zirveye taşıyacak kapsamlı hizmetler sunuyoruz."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <NeonButtonWithArrow href="/hizmetler" variant="outline">
            Tüm Hizmetleri Gör
          </NeonButtonWithArrow>
        </Reveal>
      </div>
    </section>
  );
}

export function ServicesGrid({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-grid-neon bg-grid opacity-20" />
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-neon/5 blur-[150px]" />

      <div className="container-custom relative">
        {showHeading && (
          <SectionHeading
            badge="Hizmetlerimiz"
            title="Premium Dijital Çözümler"
            description="Her hizmetimiz, markanızın dijital dünyada fark yaratması için özenle tasarlandı."
          />
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
