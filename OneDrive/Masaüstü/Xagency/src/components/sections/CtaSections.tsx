"use client";

import { motion } from "framer-motion";
import { Search, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { NeonButton } from "@/components/ui/NeonButton";

export function SeoCtaSection() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-grid-neon bg-grid opacity-10" />

      <div className="container-custom relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-neon/20 bg-gradient-to-br from-dark-200 via-dark-100 to-dark-200 p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-neon/10 blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-neon/5 blur-[100px]" />

            <div className="relative grid items-center gap-8 lg:grid-cols-2">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-neon/10 px-4 py-2">
                  <Search className="h-4 w-4 text-neon" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-neon">
                    Ücretsiz SEO Analizi
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Web Sitenin SEO Gücünü{" "}
                  <span className="neon-text">Keşfet</span>
                </h2>

                <p className="mt-4 text-base text-soft-gray sm:text-lg">
                  Domain adresini gir, web sitenin SEO performansını analiz et ve
                  dijital büyüme fırsatlarını keşfet.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    "Anında SEO skoru",
                    "Detaylı performans raporu",
                    "Kişiselleştirilmiş öneriler",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-soft-gray">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-neon" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <NeonButton href="/seo-analiz" variant="primary">
                    SEO Analizi Başlat
                  </NeonButton>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-neon/20"
                />
                <motion.div
                  className="relative mx-auto flex h-48 w-48 items-center justify-center rounded-full border-2 border-neon/30 sm:h-56 sm:w-56"
                  animate={{ boxShadow: ["0 0 20px rgba(57,255,20,0.2)", "0 0 40px rgba(57,255,20,0.4)", "0 0 20px rgba(57,255,20,0.2)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-center">
                    <motion.p
                      className="text-5xl font-black text-neon sm:text-6xl"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      82
                    </motion.p>
                    <p className="text-sm text-soft-gray">Demo SEO Skoru</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { blogPosts } from "@/lib/data";

export function BlogPreviewSection() {

  return (
    <section className="relative section-padding overflow-hidden bg-dark-100/30">
      <div className="container-custom relative">
        <SectionHeading
          badge="Blog"
          title="Dijital Dünyadan İçgörüler"
          description="SEO, web tasarım ve dijital pazarlama hakkında güncel yazılar."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post: typeof blogPosts[0], index: number) => (
            <Reveal key={post.id} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl glass transition-all duration-300 hover:border-neon/30 hover:shadow-neon-sm"
              >
                <div className="relative h-48 overflow-hidden bg-dark-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon/20 via-dark-300 to-dark-200" />
                  <div className="absolute inset-0 bg-grid-neon bg-grid opacity-30" />
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-neon/20 px-3 py-1 text-xs font-semibold text-neon">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-grow flex-col p-6">
                  <div className="mb-3 flex items-center gap-3 text-xs text-soft-gray">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} okuma</span>
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-white transition-colors group-hover:text-neon">
                    {post.title}
                  </h3>

                  <p className="mb-4 flex-grow text-sm leading-relaxed text-soft-gray">
                    {post.excerpt}
                  </p>

                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-neon transition-all group-hover:gap-3"
                  >
                    Devamını Oku
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neon hover:gap-3 transition-all"
          >
            Tüm Yazıları Gör
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
