import About from "./_components/About";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
