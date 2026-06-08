"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
};

const variants = {
  primary:
    "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40",
  secondary:
    "bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/15 hover:border-white/30",
  outline:
    "border border-violet-500/50 text-violet-300 hover:bg-violet-500/10 hover:border-violet-400",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 md:px-8 md:py-3.5 md:text-base ${variants[variant]} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
