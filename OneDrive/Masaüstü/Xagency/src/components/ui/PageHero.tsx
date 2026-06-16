"use client";

interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
}

export function PageHero({ badge, title, highlight, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="absolute inset-0 bg-grid-neon bg-grid opacity-20" />
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-neon/5 blur-[150px]" />

      <div className="container-custom relative px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <span className="mb-4 inline-block rounded-full border border-neon/30 bg-neon/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-neon">
              {badge}
            </span>
          )}
          <h1 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            {title}{" "}
            {highlight && <span className="neon-text">{highlight}</span>}
          </h1>
          {description && (
            <p className="mt-6 text-base text-soft-gray sm:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
