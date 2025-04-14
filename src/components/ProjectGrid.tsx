import { db } from "@/lib/firebase.admin";
import ProjectCard from "./ProjectCard";
import { cn } from "@/lib/utils";
import { ProjectProps } from "@/types/project";

export const revalidate = 60 * 60 * 24 * 7; // 7 days
// This is the revalidation time for the project grid. It will be revalidated every 7 days.

interface ProjectGridProps {
  category: string;
  className?: string;
}

async function getProjects(category: string) {
  const spnashot = db
    .collection("projects")
    .where("category", "==", category)
    .orderBy("createdAt", "desc")
    .get();

  const projects: ProjectProps[] = (await spnashot).docs.map((doc) => {
    const { ...rest } = doc.data();
    delete rest.createdAt;
    return {
      id: doc.id,
      ...rest,
    };
  }) as ProjectProps[];

  return projects;
}

const ProjectGrid: React.FC<ProjectGridProps> = async ({
  category,
  className,
}) => {
  const projects = await getProjects(category);

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
