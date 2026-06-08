"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
};

function TechBadges({
  items,
  label = "Teknolojiler",
}: {
  items: string[];
  label?: string;
}) {
  return (
    <div>
      <p className="mb-2.5 text-xs font-medium uppercase tracking-wider text-zinc-500">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((tech) => (
          <span
            key={tech}
            className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const isPremium = project.premium;

  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{
        y: -8,
        scale: 1.01,
        boxShadow: isPremium
          ? "0 24px 48px rgba(124, 58, 237, 0.25), 0 0 60px rgba(6, 182, 212, 0.1)"
          : "0 20px 40px rgba(124, 58, 237, 0.15)",
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-colors duration-300 md:p-8 ${
        isPremium
          ? "border-violet-500/30 bg-gradient-to-br from-violet-950/40 via-white/[0.04] to-cyan-950/30"
          : "border-white/10 bg-white/5 hover:border-violet-500/30"
      }`}
    >
      {isPremium && (
        <>
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-600/20 blur-[60px] transition-opacity group-hover:opacity-100" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-cyan-500/15 blur-[50px] transition-opacity group-hover:opacity-100" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </>
      )}

      <div className="relative">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              isPremium
                ? "border border-violet-400/30 bg-violet-500/20 text-violet-200"
                : "border border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
            }`}
          >
            {project.category}
          </span>
          {isPremium &&
            project.brandingBadges?.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-fuchsia-500/25 bg-fuchsia-500/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-fuchsia-300"
              >
                {badge}
              </span>
            ))}
        </div>

        <h3
          className={`mt-4 font-bold text-white ${isPremium ? "text-xl md:text-2xl" : "text-lg md:text-xl"}`}
        >
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <div className="mt-5">
          <TechBadges
            items={project.technologies}
            label={project.techLabel || "Teknolojiler"}
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-medium text-zinc-300 backdrop-blur-sm transition-colors hover:border-violet-500/40 hover:bg-white/10 hover:text-white md:text-sm"
          >
            <span>{expanded ? "Detayları Gizle" : "Detayları Gör"}</span>
            <svg
              className={`h-3.5 w-3.5 shrink-0 transition-transform ${expanded ? "rotate-180" : "rotate-0"}`}
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
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Özellikler
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-zinc-400"
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
