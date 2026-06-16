"use client";

import { motion } from "framer-motion";

export function NeonGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-neon bg-grid opacity-40" />
      <motion.div
        className="absolute inset-0 bg-gradient-radial-neon"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function FloatingOrbs() {
  return (
    <>
      <motion.div
        className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-neon/10 blur-[100px]"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-neon/5 blur-[120px]"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-neon/5 blur-[150px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

export function ScanLine() {
  return (
    <motion.div
      className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent"
      animate={{ top: ["-10%", "110%"] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />
  );
}

export function GlowLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.line
        x1="0"
        y1="30%"
        x2="100%"
        y2="30%"
        stroke="url(#neonGradient)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.line
        x1="0"
        y1="70%"
        x2="100%"
        y2="70%"
        stroke="url(#neonGradient)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 0.3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <defs>
        <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(57,255,20,0)" />
          <stop offset="50%" stopColor="rgba(57,255,20,0.8)" />
          <stop offset="100%" stopColor="rgba(57,255,20,0)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
