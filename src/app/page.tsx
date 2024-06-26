import AboutSection from "@/components/AboutSection";
import React from "react";
import ProjectSection from "@/components/ProjectSection";
import { Separator } from "@/components/ui/separator";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="h-full max-w-3xl px-8 mx-auto mt-20 mb-8 sm:mt-32 sm:mb-16 md:px-2">
      <AboutSection/>
      <ProjectSection/>
    </main>
  );
};

export default Home;
