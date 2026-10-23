"use client";

import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";
import { ProjectProps } from "@/types/project";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../../../../components/ProjectCard";

const Projects = ({ projects }: { projects: ProjectProps[] }) => {
  const t = useScopedI18n("projects");
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-10 max-w-2xl space-y-4 text-center">
          <p className="font-mono text-sm text-primary">{t("eyebrow")}</p>
          <h2 className="text-2xl font-bold md:text-3xl">{t("title")}</h2>
          <p className="text-muted-foreground">{t("description")}</p>
        </div>
        <div
          ref={projectsRef}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              className={cn("opacity-0", projectsInView && "animate-fade-in")}
              data-delay={index * 100}
              {...project}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/project"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-secondary"
          >
            {t("more")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
