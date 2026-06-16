"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  Layers,
  BarChart3,
  Award,
  Search,
  Monitor,
  Lightbulb,
  Zap,
  LucideIcon,
} from "lucide-react";
import { whyUs, stats } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const whyIcons: Record<string, LucideIcon> = {
  Rocket,
  Layers,
  BarChart3,
  Award,
};

const statIcons: Record<string, LucideIcon> = {
  Search,
  Monitor,
  Lightbulb,
  Zap,
};

export function WhyUsSection() {
  return (
    <section className="relative section-padding overflow-hidden bg-dark-100/50">
      <div className="absolute inset-0 bg-gradient-radial-neon opacity-20" />

      <div className="container-custom relative">
        <SectionHeading
          badge="Neden XTRAGENCY?"
          title="Fark Yaratan Dijital Partner"
          description="Sıradan ajans deneyiminin ötesinde, geleceğin teknolojileriyle bugünün sonuçlarını birleştiriyoruz."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, index) => {
            const Icon = whyIcons[item.icon] || Rocket;
            return (
              <Reveal key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group relative rounded-2xl glass p-6 transition-all duration-300 hover:border-neon/30 hover:shadow-neon-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-neon/10 transition-all group-hover:bg-neon/20">
                    <Icon className="h-6 w-6 text-neon" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-soft-gray">
                    {item.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="container-custom relative">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = statIcons[stat.icon] || Zap;
            return (
              <Reveal key={stat.label} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-dark-200/50 p-8 text-center transition-all duration-300 hover:border-neon/40 hover:shadow-neon"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-neon/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                  />

                  <div className="relative">
                    <Icon className="mx-auto mb-4 h-8 w-8 text-neon" />
                    <motion.p
                      className="text-3xl font-black text-white sm:text-4xl"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="mt-2 text-sm font-medium text-soft-gray">
                      {stat.label}
                    </p>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-neon"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                  />
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
