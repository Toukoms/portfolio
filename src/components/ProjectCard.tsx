"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ProjectDialog from "./ProjectDialog";
import { FiInfo } from "react-icons/fi";
import { ProjectProps } from "@/types/project";
import { useInView } from "react-intersection-observer";

const ProjectCard: React.FC<ProjectProps & { className?: string }> = (
  props
) => {
  const { title, description, image, technologies, className } = props;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "game-card group h-[280px] md:h-[320px] transition-all duration-300 hover:transform hover:scale-[1.03] hover:shadow-md hover:shadow-primary/10",
        inView ? "opacity-100" : "opacity-0 translate-y-10",
        className
      )}
    >
      <ProjectDialog {...props} />
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/80 opacity-60 z-10 transition-opacity duration-300 rounded-lg group-hover:opacity-80" />
      <Image
        src={image}
        alt={title}
        width={1920}
        height={1080}
        className="w-full h-full object-cover rounded-lg"
      />

      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
        <div
          className={cn(
            "transform transition-all duration-300 group-hover:translate-y-0 translate-y-2"
          )}
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>

          <p
            className={cn(
              "text-sm text-gray-200 mb-3 transition-all duration-300 line-clamp-2 group-hover:opacity-100 opacity-80"
            )}
          >
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-muted/30 backdrop-blur-sm rounded text-primary/90"
              >
                {tech}
              </span>
            ))}
          </div>

          <div
            className={cn(
              "transition-all bg-accent/50 backdrop-blur-md p-2 rounded-md duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
            )}
          >
            <div className="flex items-center gap-2 opacity-80">
              <FiInfo className="size-6" />
              <p className="text-sm font-semibold">
                Click to learn more about this project
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
