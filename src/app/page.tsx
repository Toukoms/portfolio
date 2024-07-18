"use client";

import AboutSection from "@/components/AboutSection";
import React, { useEffect } from "react";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";
import ContactSection from "@/components/ContactSection";
import { useSnapshot } from "valtio";
import { linkState } from "@/states/active-link";

type Props = {};

const Home = (props: Props) => {
  const { setLinkActive, deactivateLinks } = useSnapshot(linkState);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section");

      let i = 0;
      deactivateLinks();

      sections.forEach((section) => {
        if (
          section.offsetTop - 350 <= window.scrollY
        ) {
          i++;
        }
      });

      if (i <= 1) {
        setLinkActive("about");
      } else if (i === 2) {
        setLinkActive("projects");
      } else if (i === 3) {
        setLinkActive("skills");
      } else {
        setLinkActive("contact");
      }
    });
  }, [deactivateLinks, setLinkActive]);

  return (
    <main className="h-full max-w-3xl px-8 mx-auto mt-20 mb-16 sm:mt-32 md:px-2">
      <AboutSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
    </main>
  );
};

export default Home;
