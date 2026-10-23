import Projects from "@/app/[locale]/(home)/_components/Projects";
import {
  getExperiences,
  getFavoriteProjects,
  getResumeContent,
} from "@/lib/portfolio-data";
import About from "./_components/About";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";

export const revalidate = 60;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: "en" | "fr" }>;
}) {
  const { locale } = await params;
  const [projects, experiences, resume] = await Promise.all([
    getFavoriteProjects(locale),
    getExperiences(),
    getResumeContent(),
  ]);

  return (
    <main className="min-h-screen">
      <Hero resume={resume} />
      <About experiences={experiences} resume={resume} />
      <Projects projects={projects} />
      <Contact resume={resume} />
    </main>
  );
}
