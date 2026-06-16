import type { Metadata } from "next";
import { AboutContent } from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "XTRAGENCY; tasarım, yazılım, SEO ve dijital pazarlamayı birleştiren yeni nesil dijital ajans.",
};

export default function HakkimizdaPage() {
  return <AboutContent />;
}
