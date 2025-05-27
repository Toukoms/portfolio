"use client";
import { cn } from "@/lib/utils";
import { ProjectProps } from "@/types/project";
import Link from "next/link";
import React from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../../../../components/ProjectCard";

interface ProjectsProps {
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className }) => {
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
      title: "Tapakila",
      description:
        "An event web application to search event like party or festival near you. It still in development!",
      image:
        "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: [
        "Next.js",
        "React.js",
        "TailwindCSS",
        "TypeScript",
        "Zustand",
        "Express",
        "PostgreSQL",
      ],
      demoUrl: "https://tapakila.vercel.app/",
      githubUrl: "https://github.com/toukoms/tapakila/",
      category: "web",
      id: "1",
    },
    {
      title: "Weather Forecast",
      description:
        "A beautiful weather app with 14-day forecasts, hourly updates, and interactive maps using modern APIs.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["TypeScript", "React", "OpenWeather API"],
      demoUrl: "https://weather-app-vert-chi.vercel.app/",
      githubUrl: "https://github.com/toukoms/weather-app",
      category: "web",
      id: "2",
    },
    {
      title: "Ti-books Malagasy",
      description:
        "Discover traditional Malagasy stories translated into English. Explore the rich cultural heritage of Madagascar with SEO-optimized content, easily found on Google by searching 'Tibooks Malagasy'.",
      image:
        "https://images.unsplash.com/photo-1622647154493-bcbd02b00b48?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Next.js", "SEO", "Firebase"],
      demoUrl: "https://ti-books.vercel.app/",
      githubUrl: "https://github.com/toukoms/ti-books",
      category: "web",
      id: "3",
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
          <h3 className="text-3xl md:text-4xl font-bold">Featured Projects</h3>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Here are some of my best projects, blending clean code, great
            design, and smooth interactions. Each project showcases my passion
            and my skills.
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
            View More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
