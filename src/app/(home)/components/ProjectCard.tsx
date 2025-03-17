import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  technologies,
  demoUrl,
  githubUrl,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "game-card h-[280px] md:h-[320px] transition-all duration-300",
        isHovered ? "transform scale-[1.03] shadow-lg shadow-primary/20" : "",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/80 opacity-60 z-10 transition-opacity duration-300 rounded-lg"
        style={{ opacity: isHovered ? 0.8 : 0.6 }}
      />

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
            "transform transition-all duration-300",
            isHovered ? "translate-y-0" : "translate-y-2"
          )}
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>

          <p
            className={cn(
              "text-sm text-gray-200 mb-3 transition-all duration-300 line-clamp-2",
              isHovered ? "opacity-100" : "opacity-80"
            )}
          >
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
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
              "flex gap-3 transition-all duration-300",
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium px-3 py-1.5 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition"
              >
                Live Demo
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium px-3 py-1.5 rounded bg-muted hover:bg-muted/80 transition"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
