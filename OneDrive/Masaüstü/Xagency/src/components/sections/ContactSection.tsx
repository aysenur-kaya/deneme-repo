"use client";

import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { NeonButton } from "@/components/ui/NeonButton";

export function ContactSection() {
  return (
    <section id="iletisim" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-neon opacity-20" />

      <div className="container-custom relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full border border-neon/30 bg-neon/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-neon">
              İletişim
            </span>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Projenizi <span className="neon-text">Başlatalım</span>
            </h2>
            <p className="mt-4 text-soft-gray">
              Dijital dönüşüm yolculuğunuzda yanınızdayız. Hemen iletişime geçin.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-5">
          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl glass p-6 sm:p-8 border border-white/10"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium text-soft-gray">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    placeholder="Adınız Soyadınız"
                    className="w-full rounded-lg border border-white/10 bg-dark-300/50 px-4 py-3 text-sm text-white placeholder:text-soft-gray/50 focus:border-neon/50 focus:outline-none focus:ring-1 focus:ring-neon/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium text-soft-gray">
                    E-posta
                  </label>
                  <input
                    type="email"
                    placeholder="ornek@email.com"
                    className="w-full rounded-lg border border-white/10 bg-dark-300/50 px-4 py-3 text-sm text-white placeholder:text-soft-gray/50 focus:border-neon/50 focus:outline-none focus:ring-1 focus:ring-neon/20"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-2 block text-xs font-medium text-soft-gray">
                  Mesaj
                </label>
                <textarea
                  rows={4}
                  placeholder="Projeniz hakkında bize bilgi verin..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-dark-300/50 px-4 py-3 text-sm text-white placeholder:text-soft-gray/50 focus:border-neon/50 focus:outline-none focus:ring-1 focus:ring-neon/20"
                />
              </div>
              <div className="mt-6">
                <NeonButton type="submit" variant="primary" className="w-full sm:w-auto">
                  <Send className="h-4 w-4" />
                  Teklif Al
                </NeonButton>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              {[
                { icon: Mail, label: "E-posta", value: "info@xtragency.com" },
                { icon: Phone, label: "Telefon", value: "+90 (212) 000 00 00" },
                { icon: MapPin, label: "Adres", value: "İstanbul, Türkiye" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 rounded-xl glass p-4 border border-white/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neon/10">
                    <item.icon className="h-5 w-5 text-neon" />
                  </div>
                  <div>
                    <p className="text-xs text-soft-gray">{item.label}</p>
                    <p className="text-sm font-medium text-white">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
