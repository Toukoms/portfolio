export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "web" | "mobile" | "desktop" | "other";
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}
