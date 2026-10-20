import { getProjectsByCategory } from "@/lib/portfolio-data";
import ProjectCard from "./ProjectCard";
import { cn } from "@/lib/utils";
import { ProjectProps } from "@/types/project";

interface ProjectGridProps {
  category: ProjectProps["category"];
  locale: "en" | "fr";
  className?: string;
}

const ProjectGrid: React.FC<ProjectGridProps> = async ({
  category,
  locale,
  className,
}) => {
  const projects = await getProjectsByCategory(category, locale);

  return (
    <div className={cn("p-4", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} data-delay={index * 100} {...project} />
        ))}

        {projects.length === 0 && (
          <p className="text-center col-span-full text-gray-500">
            No {category} project for the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectGrid;
