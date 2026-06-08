"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={
        hover
          ? {
              y: -6,
              boxShadow: "0 20px 40px rgba(124, 58, 237, 0.15)",
              borderColor: "rgba(139, 92, 246, 0.4)",
            }
          : undefined
      }
      transition={{ duration: 0.3 }}
      className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 md:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}
