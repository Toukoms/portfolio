import Projects from "@/app/[locale]/(home)/_components/Projects";
import { db } from "@/lib/firebase.admin";
import { ProjectProps } from "@/types/project";
import About from "./_components/About";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";

async function getFavoriteProjects(): Promise<ProjectProps[]> {
  const snapshot = await db
    .collection("projects")
    .where("isFavorite", "==", true)
    .limit(3)
    .get();

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    delete data.createdAt;
    return {
      id: doc.id,
      ...data,
    };
  }) as ProjectProps[];
}

export default async function Home() {
  const projects = await getFavoriteProjects();

  return (
    <div id="home" className="min-h-screen">
      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}
