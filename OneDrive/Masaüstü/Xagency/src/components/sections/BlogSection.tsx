"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function BlogGrid() {
  return (
    <section className="relative section-padding pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-neon bg-grid opacity-10" />
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-neon/5 blur-[150px]" />

      <div className="container-custom relative">
        <SectionHeading
          badge="Blog"
          title="Dijital Dünyadan İçgörüler"
          description="SEO, web tasarım ve dijital pazarlama alanında güncel bilgiler ve stratejiler."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.1}>
              <motion.article
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl glass transition-all duration-300 hover:border-neon/40 hover:shadow-neon"
              >
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon/30 via-dark-300 to-dark-200 transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-grid-neon bg-grid opacity-40" />

                  <motion.div
                    className="absolute inset-0 bg-neon/10 opacity-0 transition-opacity group-hover:opacity-100"
                  />

                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="flex items-center gap-1 rounded-full bg-dark/80 px-3 py-1 text-xs font-semibold text-neon backdrop-blur-sm">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-grow flex-col p-6 sm:p-8">
                  <div className="mb-4 flex items-center gap-4 text-xs text-soft-gray">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-neon">
                    {post.title}
                  </h2>

                  <p className="mb-6 flex-grow text-sm leading-relaxed text-soft-gray">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-neon transition-all group-hover:gap-3"
                  >
                    Devamını Oku
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
