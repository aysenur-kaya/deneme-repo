"use client";

import { FormEvent, useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/lib/animations";
import { projectTypes } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatedSection
      id="iletisim"
      className="relative px-6 py-20 md:px-8 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-violet-950/10 to-transparent" />

      <div className="relative mx-auto max-w-3xl">
        <SectionHeading
          label="İletişim"
          title="Projeni birlikte hayata geçirelim"
          description="Formu doldurarak proje detaylarını paylaşabilirsin. En kısa sürede dönüş yapacağım."
        />

        <motion.div
          variants={fadeInUp}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-10"
        >
          {submitted ? (
            <div className="py-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-3xl">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-white">
                Mesajın alındı!
              </h3>
              <p className="mt-2 text-zinc-400">
                Teşekkürler. En kısa sürede seninle iletişime geçeceğim.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    Ad Soyad
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Adınız Soyadınız"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    E-posta
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="ornek@email.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Proje Türü
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30"
                >
                  <option value="" disabled className="bg-[#0a0a0f]">
                    Proje türü seçin
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#0a0a0f]">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-zinc-300"
                >
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Projeniz hakkında detayları paylaşın..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 py-3.5 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-shadow hover:shadow-violet-500/40 md:text-base"
              >
                Mesaj Gönder
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
