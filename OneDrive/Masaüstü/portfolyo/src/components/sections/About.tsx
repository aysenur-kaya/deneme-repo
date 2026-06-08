"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp } from "@/lib/animations";
import { motion } from "framer-motion";

function ProfileAvatar() {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative mb-6 h-24 w-24 shrink-0"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70" />
      <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 p-[2px] shadow-lg shadow-violet-500/10 transition-shadow duration-300 group-hover:shadow-violet-500/30">
        <div className="relative h-full w-full overflow-hidden rounded-[14px] bg-[#0a0a0f]">
          <Image
            src="/images/profile.png"
            alt="Ayşenur Kaya"
            fill
            className="object-cover object-[center_20%]"
            sizes="96px"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <AnimatedSection
      id="hakkimda"
      className="relative px-6 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Hakkımda"
          title="Dijital çözümler üreten bir geliştirici"
          align="left"
        />

        <div className="grid items-center gap-12 lg:grid-cols-5">
          <motion.div
            variants={fadeInUp}
            className="relative lg:col-span-2"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 to-cyan-500/10 p-8 backdrop-blur-sm">
              <ProfileAvatar />
              <h3 className="text-2xl font-bold text-white">Ayşenur Kaya</h3>
              <p className="mt-1 text-violet-300">
                Full-Stack Developer & Designer
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Frontend", "Backend", "SEO", "Tasarım"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
              Merhaba, ben Ayşenur Kaya. Web geliştirme, SEO ve grafik tasarım
              alanlarında modern dijital çözümler üretiyorum. Frontend tarafında
              kullanıcı dostu ve mobil uyumlu arayüzler geliştirirken, backend
              tarafında yönetim panelleri, veritabanı bağlantıları ve dinamik
              sistemler oluşturuyorum.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-400 md:text-lg">
              E-ticaret siteleri, kurumsal web siteleri, admin panelleri, SEO
              uyumlu sayfalar ve marka odaklı grafik tasarım çalışmaları
              hazırlıyorum.
            </p>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
