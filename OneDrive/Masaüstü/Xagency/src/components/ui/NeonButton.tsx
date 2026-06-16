"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface NeonButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function NeonButton({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: NeonButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-lg overflow-hidden group";

  const variants = {
    primary:
      "bg-neon text-dark hover:shadow-neon-lg hover:scale-105 active:scale-95",
    secondary:
      "glass text-white hover:border-neon/50 hover:shadow-neon-sm hover:scale-105 active:scale-95",
    outline:
      "border border-neon/40 text-neon hover:bg-neon/10 hover:shadow-neon-sm hover:scale-105 active:scale-95",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-neon via-white/20 to-neon opacity-0 group-hover:opacity-100"
          initial={false}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 100%" }}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {content}
    </motion.button>
  );
}

export function NeonButtonWithArrow({
  href,
  children,
  variant = "primary",
  className = "",
}: Omit<NeonButtonProps, "onClick">) {
  return (
    <NeonButton href={href} variant={variant} className={className}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </NeonButton>
  );
}
