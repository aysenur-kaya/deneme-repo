"use client";

import { motion } from "framer-motion";
import {
  Search,
  TrendingUp,
  Gauge,
  Smartphone,
  CheckCircle2,
} from "lucide-react";
import { NeonButton } from "@/components/ui/NeonButton";

const trustItems = [
  { label: "SEO Uyumlu", icon: Search },
  { label: "Mobil Odaklı", icon: Smartphone },
  { label: "Hızlı Web Siteleri", icon: Gauge },
];

const metrics = [
  { label: "SEO Score", value: "92/100", progress: 92 },
  { label: "Organic Growth", value: "+247%", progress: 85 },
  { label: "Page Speed", value: "96", progress: 96 },
];

const chartBars = [35, 48, 42, 58, 52, 68, 62, 78, 72, 88];

function SeoPerformanceCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
      className="relative w-full"
    >
      <div className="rounded-2xl border border-white/10 bg-dark-200/60 p-6 backdrop-blur-xl sm:p-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-widest text-soft-gray">
              SEO Performance
            </p>
            <p className="mt-0.5 text-sm font-semibold text-white">
              Site Analiz Özeti
            </p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-neon/20 bg-neon/5 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-neon" />
            <span className="text-[11px] font-medium text-neon">Live</span>
          </div>
        </div>

        {/* Main score */}
        <div className="mb-6 flex items-end gap-4">
          <div>
            <p className="text-5xl font-bold tracking-tight text-white">92</p>
            <p className="text-xs text-soft-gray">/100 SEO Score</p>
          </div>
          <div className="mb-1 flex items-center gap-1 rounded-lg bg-neon/10 px-2.5 py-1">
            <TrendingUp className="h-3.5 w-3.5 text-neon" />
            <span className="text-xs font-semibold text-neon">+247%</span>
          </div>
        </div>

        {/* Progress bars */}
        <div className="mb-6 space-y-4">
          {metrics.map((metric, i) => (
            <div key={metric.label}>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-xs text-soft-gray">{metric.label}</span>
                <span className="text-xs font-semibold text-white">
                  {metric.value}
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.progress}%` }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-neon/60 to-neon"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Ready badge */}
        <div className="mb-6 flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2.5">
          <Smartphone className="h-4 w-4 text-neon/80" />
          <span className="text-xs text-soft-gray">Mobile Ready</span>
          <span className="ml-auto flex items-center gap-1 text-xs font-semibold text-neon">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Active
          </span>
        </div>

        {/* Minimal chart */}
        <div>
          <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-soft-gray/70">
            Organic Traffic
          </p>
          <div className="flex h-16 items-end gap-1.5">
            {chartBars.map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.04, ease: "easeOut" }}
                className="flex-1 rounded-sm bg-neon/30 first:rounded-l-md last:rounded-r-md"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Subtle border glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-neon/10 via-transparent to-transparent opacity-50" />
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
      {/* Soft background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-dark-100" />
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-neon/[0.04] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left — Copy */}
          <div className="max-w-xl lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wider text-soft-gray">
                Yeni Nesil SEO & Dijital Ajans
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-[1.75rem] font-bold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
            >
              <span className="text-neon">SEO Odaklı</span> Web Siteleri ve{" "}
              Dijital Büyüme Çözümleri
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-5 max-w-lg text-base leading-relaxed text-soft-gray sm:text-[17px] sm:leading-7"
            >
              XTRAGENCY; markalar için modern web tasarımı, teknik SEO, dijital
              reklam, sosyal medya yönetimi ve yazılım çözümleri üreten yeni nesil
              dijital ajanstır.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <NeonButton
                href="/seo-analiz"
                variant="primary"
                className="w-full px-7 py-3.5 text-base sm:w-auto"
              >
                Ücretsiz SEO Analizi Yap
              </NeonButton>
              <NeonButton
                href="/hizmetler"
                variant="outline"
                className="w-full px-7 py-3.5 text-base sm:w-auto"
              >
                Hizmetleri İncele
              </NeonButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/5 pt-6"
            >
              {trustItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4 text-neon/70" />
                  <span className="text-sm text-soft-gray">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — SEO Card */}
          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <SeoPerformanceCard />
          </div>
        </div>
      </div>
    </section>
  );
}
