import type { Metadata } from "next";
import { SeoAnalysisTool } from "@/components/sections/SeoAnalysisSection";
import { FloatingOrbs, NeonGrid } from "@/components/ui/BackgroundEffects";

export const metadata: Metadata = {
  title: "SEO Analiz",
  description:
    "Web sitenizin SEO performansını analiz edin ve dijital büyüme fırsatlarını keşfedin.",
};

export default function SeoAnalizPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <NeonGrid />
      <FloatingOrbs />
      <SeoAnalysisTool />
    </div>
  );
}
