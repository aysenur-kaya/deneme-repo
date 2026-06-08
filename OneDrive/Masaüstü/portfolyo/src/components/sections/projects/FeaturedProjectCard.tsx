"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import type { Project } from "@/data/portfolio";

type FeaturedProjectCardProps = {
  project: Project;
};

export default function FeaturedProjectCard({
  project,
}: FeaturedProjectCardProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.article
      variants={fadeInUp}
      className="group relative mb-12 overflow-hidden rounded-3xl border border-violet-500/25 bg-gradient-to-br from-violet-950/40 via-white/[0.03] to-cyan-950/20 p-6 backdrop-blur-xl md:mb-16 md:p-10"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-600/15 blur-[80px] transition-all duration-500 group-hover:bg-violet-600/25" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-[70px] transition-all duration-500 group-hover:bg-cyan-500/20" />
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-gradient-to-r from-violet-600/30 to-cyan-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-200">
                Öne Çıkan Proje
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                {project.category}
              </span>
            </div>
            <h3 className="mt-5 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
              {project.title}
            </h3>
          </div>

          <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-600/30 to-cyan-500/20 text-2xl md:flex">
            ⭐
          </div>
        </div>

        <p className="mt-5 max-w-4xl text-sm leading-relaxed text-zinc-400 md:text-base">
          {project.description}
        </p>

        <div className="mt-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
            Teknolojiler
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 transition-colors group-hover:border-violet-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-colors hover:border-violet-500/40 hover:bg-white/10 hover:text-white"
          >
            <span>{expanded ? "Detayları Gizle" : "Detayları Gör"}</span>
            <svg
              className={`h-4 w-4 shrink-0 transition-transform ${expanded ? "rotate-180" : "rotate-0"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.button>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-8 border-t border-white/10 pt-8">
                <p className="mb-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Özellikler
                </p>
                <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-zinc-400"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
