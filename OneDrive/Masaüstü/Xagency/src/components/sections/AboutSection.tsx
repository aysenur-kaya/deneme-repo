"use client";

import { motion } from "framer-motion";
import { Users, Target, Eye, Heart } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { NeonButton } from "@/components/ui/NeonButton";

const values = [
  {
    icon: Target,
    title: "Misyonumuz",
    description:
      "Markaların dijital dünyada sadece var olmasını değil, domine etmesini sağlamak. Her projede ölçülebilir büyüme ve sürdürülebilir başarı hedefliyoruz.",
  },
  {
    icon: Eye,
    title: "Vizyonumuz",
    description:
      "Türkiye'nin en yenilikçi dijital ajansı olmak. Teknoloji ve yaratıcılığı birleştirerek sektörde yeni standartlar belirlemek.",
  },
  {
    icon: Heart,
    title: "Değerlerimiz",
    description:
      "Şeffaflık, yenilikçilik, mükemmellik ve müşteri odaklılık. Her kararımızda bu değerleri rehber alıyoruz.",
  },
];

const team = [
  { role: "Kreatif Direktör", focus: "Tasarım & Marka" },
  { role: "Teknik Lider", focus: "Yazılım & Altyapı" },
  { role: "SEO Uzmanı", focus: "Arama & Analitik" },
  { role: "Dijital Stratejist", focus: "Reklam & Sosyal Medya" },
];

export function AboutContent() {
  return (
    <>
      <section className="relative section-padding pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-neon bg-grid opacity-10" />
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-neon/5 blur-[150px]" />

        <div className="container-custom relative">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <span className="mb-4 inline-block rounded-full border border-neon/30 bg-neon/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-neon">
                Hakkımızda
              </span>
              <h1 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl">
                Dijital Geleceği{" "}
                <span className="neon-text">Birlikte İnşa Ediyoruz</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-soft-gray">
                XTRAGENCY, tasarım, yazılım, SEO ve dijital pazarlamayı tek çatı
                altında birleştiren yeni nesil bir dijital ajans. Klasik ajans
                modellerinin sınırlarını aşarak, teknoloji ve yaratıcılığı harmanlayan
                çözümler sunuyoruz.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mx-auto mt-16 max-w-3xl">
            <div className="rounded-2xl glass p-8 sm:p-12 border border-neon/10">
              <p className="text-base leading-relaxed text-soft-gray sm:text-lg">
                Her markanın benzersiz bir hikayesi olduğuna inanıyoruz. Bu hikayeyi
                dijital dünyada en etkili şekilde anlatmak için veri odaklı stratejiler,
                premium tasarım anlayışı ve ileri teknoloji altyapısını bir araya
                getiriyoruz. Ekibimiz; deneyimli tasarımcılar, yazılım geliştiriciler,
                SEO uzmanları ve dijital pazarlama profesyonellerinden oluşuyor.
              </p>
              <p className="mt-4 text-base leading-relaxed text-soft-gray sm:text-lg">
                Sadece proje teslim etmiyoruz — markanızın dijital yolculuğunda
                stratejik bir partner oluyoruz. Güven veren ama iddialı yaklaşımımızla,
                her müşterimize özel çözümler üretiyor ve sürdürülebilir büyüme
                sağlıyoruz.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative section-padding overflow-hidden bg-dark-100/50">
        <div className="container-custom relative">
          <SectionHeading
            badge="Değerlerimiz"
            title="Neye İnanıyoruz?"
            description="XTRAGENCY'nin temelini oluşturan prensipler."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-2xl glass p-8 transition-all hover:border-neon/30 hover:shadow-neon-sm"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-neon/10">
                    <item.icon className="h-7 w-7 text-neon" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-soft-gray">
                    {item.description}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative section-padding overflow-hidden">
        <div className="container-custom relative">
          <SectionHeading
            badge="Ekibimiz"
            title="Uzman Kadro, Güçlü Sonuçlar"
            description="Disiplinler arası ekibimiz, her projede mükemmelliği hedefler."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <Reveal key={member.role} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="group rounded-2xl glass p-6 text-center transition-all hover:border-neon/30"
                >
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-neon/20 to-dark-300 border border-neon/20 transition-all group-hover:shadow-neon-sm">
                    <Users className="h-8 w-8 text-neon" />
                  </div>
                  <h3 className="font-bold text-white">{member.role}</h3>
                  <p className="mt-1 text-sm text-neon">{member.focus}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <NeonButton href="/#iletisim" variant="primary">
              Birlikte Çalışalım
            </NeonButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
