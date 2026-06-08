"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { technologies } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Technologies() {
  return (
    <AnimatedSection
      id="teknolojiler"
      className="relative px-6 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Teknolojiler"
          title="Kullandığım araçlar ve teknolojiler"
          description="Modern web geliştirme, tasarım ve yapay zeka araçlarıyla projeler üretiyorum."
        />

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                opacity: { delay: index * 0.03, duration: 0.4 },
                y: {
                  delay: index * 0.03,
                  duration: 0.4,
                },
              }}
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(139, 92, 246, 0.5)",
                boxShadow: "0 8px 24px rgba(124, 58, 237, 0.15)",
              }}
              className="tech-badge rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-colors hover:text-white md:px-5 md:py-3"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
