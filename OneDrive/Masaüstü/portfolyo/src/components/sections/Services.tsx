"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/lib/animations";
import { services } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <AnimatedSection
      id="hizmetler"
      className="relative px-6 py-20 md:px-8 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Hizmetler"
          title="Sunduğum profesyonel hizmetler"
          description="İhtiyacınıza uygun, uçtan uca dijital çözümler sunuyorum."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service}
              variants={fadeInUp}
              whileHover={{
                y: -4,
                borderColor: "rgba(139, 92, 246, 0.4)",
              }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.07]"
            >
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/30 to-cyan-500/20 text-sm font-bold text-violet-300 transition-colors group-hover:from-violet-600/50 group-hover:to-cyan-500/30">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-medium text-white">{service}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
