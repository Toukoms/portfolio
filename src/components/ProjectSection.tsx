import React from "react";
import Project from "./Project";
import { projects } from "@/constants/projects";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const ProjectSection = () => {
  return (
    <section id="projects" className="w-full">
      <div className="w-full anime_hidden">
        <h1 className="mb-4 text-4xl text-secondary-foreground font-montserrat">
          What I have built?
        </h1>
        <div className="mb-4">
          <h2 className="mb-2 text-4xl text-secondary-foreground font-oswald">
            Projects
          </h2>
          <p className="description">
            I appreciate using my skills to create applications and tools that
            benefit others. Here are some of the projects I have worked on, both
            individually and as part of a team:
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full">
          {projects.slice(0, 4).map((project) => (
            <Project key={project.name} {...project} />
          ))}
        </div>
        {projects.length > 4 && (
          <div className="relative">
            <input
              type="checkbox"
              id="show"
              className="peer absolute opacity-0"
            />
            <label
              htmlFor="show"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "mx-auto my-4 cursor-pointer before:content-['Show_More'] peer-checked:before:content-['Show_Less']"
              )}
            />
            <div className="hidden peer-checked:grid grid-cols-1 xl:grid-cols-2 gap-4 w-full pt-4 ">
              {projects.slice(4).map((project) => (
                <Project key={project.name} {...project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
