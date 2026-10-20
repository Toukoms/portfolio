import Projects from "@/app/[locale]/(home)/_components/Projects";
import { getExperiences, getFavoriteProjects } from "@/lib/portfolio-data";
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
  const [projects, experiences] = await Promise.all([
    getFavoriteProjects(locale),
    getExperiences(),
  ]);

  return (
    <div id="home" className="min-h-screen">
      <Hero />
      <About experiences={experiences} />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}
