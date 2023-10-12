import { skills } from "@/constants/skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skill from "./components/Skill";

import React from "react";
import ImageWithErrorHandler from "@/components/ImageWithErrorHandler";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div className="w-full h-max gap-4 pb-4 mt-[6vw] pt-16 sm:pt-4 px-12 self-start ">
      <div className="w-full mb-8">
        <h1 className="text-2xl font-bold mb-6 text-center sm:text-left">
          Skills
        </h1>

        <div className="w-full h-max p-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-4 items-center">
          {skills.map((skill) => (
            <div className="h-28 w-full flex justify-center items-center" key={skill}>
              <ImageWithErrorHandler
                src={skill}
                alt={skill}
                className="object-scale-down object-center w-full h-full"
                errorMessage="Error"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="w-full mb-4">
          <h1 className="text-2xl font-bold mb-6 text-center sm:text-left">
            Experiences
          </h1>
          <Experience
            duration={"May 2022 - April 2023"}
            company={"Express In Code"}
            work={"FullStack Developper"}
            description={
              "12-month apprenticeship internship at Express in Code as a fullstack developer, in-person for the first 9 months and remote for the final 3 months."
            }
            technologies={[
              "React",
              "TypeScript",
              "WindiCSS",
              "Nodejs",
              "Prisma",
              "MongoDb",
              "API Rest",
              "CI/CD Github",
            ]}
          />
        </div>

        <div className="w-full">
          <h1 className="text-2xl font-bold mb-6 text-center sm:text-left">
            Education
          </h1>
          <div className="w-fit ml-6">
            <Education
              duration={"2021 - Present"}
              title={"Bachelor's degree"}
              description={
                'Currently pursuing a Bachelor\'s degree in Electronic and Computer Engineering, expected completion 2024 at "Institut Supérieur de Sciences et de Technologie à Mahajanga (ISSTM)"'
              }
            />
            <Education
              duration={"2021"}
              title={"Technical Baccalaureate"}
              description={
                'Accounting and Management - With Honors - at technical high school "Lycée Technique et Professionnelle Marie Auxiliatrice Antanimasaja Mahajanga"'
              }
            />
            <Education
              duration={"2021"}
              title={"Professional Study Certificate"}
              description={
                'Accounting and Management - With Honors - at technical high school "Lycée Technique et Professionnelle Marie Auxiliatrice Antanimasaja Mahajanga"'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
