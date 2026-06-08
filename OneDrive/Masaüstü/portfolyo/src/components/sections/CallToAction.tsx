"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <AnimatedSection className="relative px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          variants={fadeInUp}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-950/50 via-[#0f0f18] to-cyan-950/30 p-8 text-center backdrop-blur-xl md:p-14"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-600/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-cyan-500/15 blur-[80px]" />

          <div className="relative">
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Markan için modern bir{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                dijital çözüm
              </span>{" "}
              geliştirelim.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 md:text-lg">
              Web sitesi, e-ticaret, SEO, grafik tasarım veya özel yazılım
              ihtiyaçların için benimle iletişime geçebilirsin.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="#iletisim">Teklif Al</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
