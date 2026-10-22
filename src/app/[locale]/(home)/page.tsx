import Projects from "@/app/[locale]/(home)/_components/Projects";
import {
  getCaseStudiesContent,
  getExperiences,
  getFavoriteProjects,
  getResumeContent,
} from "@/lib/portfolio-data";
import About from "./_components/About";
import CaseStudies from "./_components/CaseStudies";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";

export const revalidate = 60;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: "en" | "fr" }>;
}) {
  const { locale } = await params;
  const [projects, experiences, resume, caseStudies] = await Promise.all([
    getFavoriteProjects(locale),
    getExperiences(),
    getResumeContent(),
    getCaseStudiesContent(),
  ]);

  return (
    <main className="min-h-screen">
      <Hero resume={resume} />
      <About experiences={experiences} resume={resume} />
      <CaseStudies content={caseStudies} locale={locale} />
      <Projects projects={projects} />
      <Contact resume={resume} />
    </main>
  );
}
