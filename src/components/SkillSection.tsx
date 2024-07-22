import { skills } from "@/constants/skills";
import React from "react";
import Skill from "./Skill";
import { SuperLink } from "./SuperLink";

const SkillSection = () => {
  return (
    <section id="skills" className="w-full">
      <h1 className="mb-4 text-4xl text-secondary-foreground font-montserrat">
        How can I help you ?
      </h1>
      <div className="mb-4">
        <h2 className="mb-2 text-4xl text-secondary-foreground font-oswald">
          Skills
        </h2>
        <p className="description">
          I can create user-friendly websites that are both attractive and
          functional. Here are the technologies I have already used:
        </p>
      </div>
      <div className="w-full mb-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <Skill key={skill.name} name={skill.name} image={skill.image} />
        ))}
      </div>
      <p  className="description">
        I learned the SCRUM methodology through{" "}
        <SuperLink href="https://chingu.io" target="_blank">Chingu</SuperLink>, an online
        platform that connects developers worldwide. This experience has
        sharpened my ability to work effectively in diverse teams and manage
        tasks efficiently.
      </p>
    </section>
  );
};

export default SkillSection;
