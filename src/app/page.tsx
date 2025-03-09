import AboutSection from "@/components/AboutSection";
import React, { useEffect } from "react";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";
import ContactSection from "@/components/ContactSection";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="h-full max-w-3xl 2xl:max-w-6xl px-8 mx-auto mt-20 mb-16 sm:mt-32 md:px-2">
      <AboutSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
    </main>
  );
};

export default Home;
