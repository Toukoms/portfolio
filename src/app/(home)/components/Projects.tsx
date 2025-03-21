"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

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

  // const projects = [
  //   {
  //     title: "E-Commerce Dashboard",
  //     description:
  //       "A full-featured admin dashboard for managing online stores with real-time analytics and inventory tracking.",
  //     image:
  //       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  //     technologies: ["React", "Redux", "Node.js", "MongoDB"],
  //     demoUrl: "#",
  //     githubUrl: "#",
  //   },
  //   {
  //     title: "Fitness Tracker App",
  //     description:
  //       "A mobile-responsive app for tracking workouts, nutrition, and health metrics with customizable goals.",
  //     image:
  //       "https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
  //     technologies: ["React Native", "TypeScript", "Firebase"],
  //     demoUrl: "#",
  //     githubUrl: "#",
  //   },
  //   {
  //     title: "Weather Forecast",
  //     description:
  //       "A beautiful weather app with 7-day forecasts, hourly updates, and interactive maps using modern APIs.",
  //     image:
  //       "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  //     technologies: ["JavaScript", "React", "OpenWeather API"],
  //     demoUrl: "#",
  //     githubUrl: "#",
  //   },
  //   {
  //     title: "Task Management",
  //     description:
  //       "A collaborative task manager with real-time updates, task assignments, and progress tracking.",
  //     image:
  //       "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  //     technologies: ["Vue.js", "Vuex", "Express", "PostgreSQL"],
  //     demoUrl: "#",
  //     githubUrl: "#",
  //   },
  //   {
  //     title: "Social Media Dashboard",
  //     description:
  //       "An analytics dashboard for tracking social media performance across multiple platforms.",
  //     image:
  //       "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  //     technologies: ["React", "D3.js", "Express", "Social APIs"],
  //     demoUrl: "#",
  //     githubUrl: "#",
  //   },
  //   {
  //     title: "Real Estate Finder",
  //     description:
  //       "An application for finding, comparing, and saving properties with interactive maps and filters.",
  //     image:
  //       "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
  //     technologies: ["React", "NextJS", "Google Maps API", "MongoDB"],
  //     demoUrl: "#",
  //     githubUrl: "#",
  //   },
  // ];

  const projects = [
    {
      title: "Tapakila",
      description:
        "An event web application to search event like party or festival near you. It still in development!",
      image:
        "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Next.js", "React.js", "TailwindCSS"],
      demoUrl: "https://tapakila.vercel.app/",
      githubUrl: "https://github.com/toukoms/tapakila/",
    },
    {
      title: "Weather Forecast",
      description:
        "A beautiful weather app with 14-day forecasts, hourly updates, and interactive maps using modern APIs.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["JavaScript", "React", "OpenWeather API"],
      demoUrl: "https://weather-app-vert-chi.vercel.app/",
      githubUrl: "https://github.com/toukoms/weather-app",
    },
    {
      title: "Malagasy Storybooks",
      description:
        "Discover traditional Malagasy stories translated into English. Explore the rich cultural heritage of Madagascar with SEO-optimized content, easily found on Google by searching 'Tibooks Malagasy'.",
      image:
        "https://images.unsplash.com/photo-1622647154493-bcbd02b00b48?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "Next.js", "SEO", "Firebase"],
      demoUrl: "https://ti-books.vercel.app/",
      githubUrl: "https://github.com/toukoms/ti-books",
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
          <h2 className="text-sm font-mono text-primary">GAME SELECTION</h2>
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
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
              className={cn("opacity-0", projectsInView && "animate-fade-in")}
              data-delay={index * 100}
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
            href="https://github.com/Toukoms?tab=repositories"
            target="_blank"
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
