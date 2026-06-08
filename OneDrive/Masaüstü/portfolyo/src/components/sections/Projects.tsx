"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import FeaturedProjectCard from "@/components/sections/projects/FeaturedProjectCard";
import ProjectCard from "@/components/sections/projects/ProjectCard";
import { featuredProject, showcaseProjects } from "@/data/portfolio";

export default function Projects() {
  return (
    <AnimatedSection
      id="projeler"
      className="relative px-6 py-20 md:px-8 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="Projeler"
          title="Agency showcase — seçilmiş çalışmalar"
          description="Full-stack web uygulamalarından kurumsal branding projelerine kadar farklı alanlardaki profesyonel çalışmalarım."
        />

        <FeaturedProjectCard project={featuredProject} />

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {showcaseProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
