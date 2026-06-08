"use client";

import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <div className="relative flex h-[320px] w-full items-center justify-center md:h-[420px] lg:h-[480px]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600/20 via-transparent to-cyan-500/20" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute h-64 w-64 rounded-full border border-violet-500/20 md:h-80 md:w-80"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute h-48 w-48 rounded-full border border-dashed border-cyan-500/30 md:h-60 md:w-60"
      />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-[85%] max-w-sm rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl md:max-w-md md:p-6"
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
        </div>
        <div className="space-y-3 font-mono text-xs md:text-sm">
          <p className="text-violet-300">
            <span className="text-cyan-400">const</span> developer = {"{"}
          </p>
          <p className="pl-4 text-zinc-300">
            name: <span className="text-emerald-400">&quot;Ayşenur&quot;</span>,
          </p>
          <p className="pl-4 text-zinc-300">
            role:{" "}
            <span className="text-emerald-400">
              &quot;Full-Stack Developer&quot;
            </span>
            ,
          </p>
          <p className="pl-4 text-zinc-300">
            skills:{" "}
            <span className="text-emerald-400">
              [&quot;React&quot;, &quot;Next.js&quot;, &quot;SEO&quot;]
            </span>
          </p>
          <p className="text-violet-300">{"}"}</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-4 top-8 rounded-xl border border-violet-500/30 bg-violet-500/10 px-3 py-2 text-xs text-violet-300 backdrop-blur-sm md:right-8"
      >
        Next.js
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-12 left-4 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-300 backdrop-blur-sm md:left-8"
      >
        React
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-2 top-1/2 h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-600/40 to-cyan-500/40 blur-sm md:h-20 md:w-20"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -left-4 bottom-1/4 h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-600/30 blur-sm"
      />
    </div>
  );
}
