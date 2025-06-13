import Projects from "@/app/[locale]/(home)/_components/Projects";
import About from "./_components/About";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div id="home" className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
