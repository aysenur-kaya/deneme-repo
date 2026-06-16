"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Gauge,
  Smartphone,
  FileText,
  Zap,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { seoDemoResults } from "@/lib/data";
import { NeonButton } from "@/components/ui/NeonButton";
import { Reveal } from "@/components/ui/Reveal";

const resultItems = [
  { key: "performance", label: "Performans", icon: Gauge, getValue: () => seoDemoResults.performance },
  { key: "mobile", label: "Mobil Uyumluluk", icon: Smartphone, getValue: () => seoDemoResults.mobile },
  { key: "meta", label: "Meta Açıklama", icon: FileText, getValue: () => seoDemoResults.metaDescription },
  { key: "speed", label: "Sayfa Hızı", icon: Zap, getValue: () => seoDemoResults.pageSpeed },
];

export function SeoAnalysisTool() {
  const [domain, setDomain] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim()) return;

    setIsAnalyzing(true);
    setShowResults(false);

    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <div className="container-custom relative section-padding pt-32">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-4 py-2">
            <Search className="h-4 w-4 text-neon" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neon">
              SEO Analiz Aracı
            </span>
          </div>

          <h1 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            Web Sitenin SEO Gücünü{" "}
            <span className="neon-text">Ölç</span>
          </h1>

          <p className="mt-6 text-base text-soft-gray sm:text-lg">
            Domain adresini yaz, web sitenin SEO performansını analiz et ve
            dijital büyüme fırsatlarını keşfet.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.2} className="mx-auto mt-12 max-w-2xl">
        <form onSubmit={handleAnalyze} className="relative">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-soft-gray" />
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="ornekdomain.com"
                className="w-full rounded-xl border border-white/10 bg-dark-200/80 py-4 pl-12 pr-4 text-white placeholder:text-soft-gray/50 backdrop-blur-xl transition-all focus:border-neon/50 focus:outline-none focus:ring-2 focus:ring-neon/20"
              />
            </div>
            <NeonButton
              type="submit"
              variant="primary"
              className="sm:min-w-[200px]"
              disabled={isAnalyzing}
            >
              {isAnalyzing ? "Analiz Ediliyor..." : "SEO Analizi Başlat"}
            </NeonButton>
          </div>
        </form>
      </Reveal>

      <AnimatePresence>
        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mx-auto mt-12 max-w-md text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="mx-auto h-16 w-16 rounded-full border-2 border-neon/20 border-t-neon"
            />
            <p className="mt-4 text-sm text-soft-gray">
              {domain} analiz ediliyor...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-16 max-w-4xl"
          >
            <div className="mb-8 text-center">
              <p className="text-sm text-soft-gray">Analiz Sonucu: {domain}</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-1"
              >
                <div className="flex h-full flex-col items-center justify-center rounded-2xl glass p-8 border border-neon/20">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="relative"
                  >
                    <svg className="h-40 w-40 -rotate-90" viewBox="0 0 160 160">
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="8"
                      />
                      <motion.circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="#39FF14"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={440}
                        initial={{ strokeDashoffset: 440 }}
                        animate={{
                          strokeDashoffset: 440 - (440 * seoDemoResults.score) / 100,
                        }}
                        transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                        style={{ filter: "drop-shadow(0 0 10px rgba(57,255,20,0.5))" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-black text-neon">
                        {seoDemoResults.score}
                      </span>
                      <span className="text-sm text-soft-gray">/100</span>
                    </div>
                  </motion.div>
                  <p className="mt-4 text-lg font-bold text-white">SEO Skoru</p>
                </div>
              </motion.div>

              <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
                {resultItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="rounded-xl glass p-5 border border-white/10 hover:border-neon/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon/10">
                        <item.icon className="h-5 w-5 text-neon" />
                      </div>
                      <div>
                        <p className="text-xs text-soft-gray">{item.label}</p>
                        <p className="font-semibold text-white">{item.getValue()}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 rounded-2xl glass p-6 sm:p-8 border border-neon/20"
            >
              <div className="mb-4 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-neon" />
                <h3 className="text-lg font-bold text-white">Öneriler</h3>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {seoDemoResults.recommendations.map((rec, index) => (
                  <motion.li
                    key={rec}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-3 rounded-lg bg-dark-300/30 p-3"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-neon" />
                    <span className="text-sm text-soft-gray">{rec}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
