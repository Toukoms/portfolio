import AboutSection from "@/components/AboutSection";
import React from "react";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";
import ContactSection from "@/components/ContactSection";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="h-full max-w-3xl px-8 mx-auto mt-20 mb-8 sm:mt-32 sm:mb-16 md:px-2">
      <AboutSection/>
      <ProjectSection/>
      <SkillSection />
      <ContactSection/>
    </main>
  );
};

export default Home;
