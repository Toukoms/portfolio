"use client";
import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";
import { ProjectProps } from "@/types/project";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../../../../components/ProjectCard";

interface ProjectsProps {
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className }) => {
  const t = useScopedI18n("projects");

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects: ProjectProps[] = [
    {
      title: t("weather.title"),
      description: t("weather.description"),
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["TypeScript", "React", "OpenWeather API"],
      demoUrl: "https://weather-app-vert-chi.vercel.app/",
      githubUrl: "https://github.com/toukoms/weather-app",
      category: "web",
      id: "2",
    },
    {
      title: t("tibooks.title"),
      description: t("tibooks.description"),
      image:
        "https://images.unsplash.com/photo-1622647154493-bcbd02b00b48?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Next.js", "SEO", "Firebase"],
      demoUrl: "https://ti-books.vercel.app/",
      githubUrl: "https://github.com/toukoms/ti-books",
      category: "web",
      id: "3",
    },
    {
      title: t("webinart.title"),
      description: t("webinart.description"),
      image:
        "https://raw.githubusercontent.com/Toukoms/web-in-art/refs/heads/main/assets/screenshot.png",
      technologies: [
        "Next.js",
        "React.js",
        "TailwindCSS",
        "TypeScript",
        "Zustand",
        "Clerk",
        "PostgreSQL",
      ],
      demoUrl: "https://webinart.vercel.app/",
      githubUrl: "https://github.com/toukoms/web-in-art/",
      category: "web",
      id: "1",
    },
  ];

  return (
    <section id="projects" className={cn("py-20", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={headerRef}
          className={cn(
            "space-y-2 text-center mb-12 transition-all duration-700 transform",
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-sm font-mono text-primary">PROJECT SELECTION</h2>
          <h3 className="text-3xl md:text-4xl font-bold">{t("title")}</h3>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            {t("description")}
          </p>
        </div>

        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              className={cn("opacity-0", projectsInView && "animate-fade-in")}
              data-delay={index * 100}
              {...project}
            />
          ))}
        </div>

        <div
          ref={ctaRef}
          className={cn(
            "mt-12 text-center transition-all duration-700 transform",
            ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <Link
            href="/project"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-300 bg-gradient-to-r from-neon-cyan to-neon-blue bg-[length:200%_100%] hover:bg-[position:100%_0%] text-background"
          >
            {t("more")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
