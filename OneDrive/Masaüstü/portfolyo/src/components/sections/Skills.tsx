"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <AnimatedSection
      id="uzmanlik"
      className="relative px-6 py-20 md:px-8 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Uzmanlık Alanları"
          title="Uçtan uca dijital çözümler"
          description="Frontend'den backend'e, SEO'dan tasarıma kadar geniş bir yelpazede profesyonel hizmet sunuyorum."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <GlassCard key={skill.title}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/30 to-cyan-500/20 text-2xl">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{skill.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {skill.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
