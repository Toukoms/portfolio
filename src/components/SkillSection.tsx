import { skills } from "@/constants/skills";
import React from "react";
import Skill from "./Skill";

const SkillSection = () => {
  return (
    <section id="skills" className="w-full">
      <h1 className="mb-4 text-4xl text-secondary-foreground font-montserrat">
        How can I help you ?
      </h1>
      <div className="mb-8">
        <h2 className="mb-2 text-4xl text-secondary-foreground font-oswald">
          Skills
        </h2>
        <p>
          I can create user-friendly websites that are both attractive and
          functional. Here are the technologies I have already used:
        </p>
      </div>
      <div className="w-full mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {
          skills.map(skill => (
            <Skill key={skill.name} name={skill.name} image={skill.image}/>
          ))
        }
      </div>
    </section>
  );
};

export default SkillSection;
