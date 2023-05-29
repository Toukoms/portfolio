import React from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";

type Props = {};

function Skills({}: Props) {
  return (
    <div className="flex w-full h-full gap-4 align-start p-4 self-start">
      <div className="w-full">
        <h1 className="text-2xl font-bold mb-6">Experiences</h1>
        <Experience
          duration={"April 2022 - May 2023"}
          company={"Express In Code"}
          work={"FullStack Developper"}
          description={
            "12-month apprenticeship internship at Express in Code as a fullstack developer, in-person for the first 9 months and remote for the final 3 months."
          }
          technologies={["React", "TypeScript", "WindiCSS", "Nodejs", "Prisma", "MongoDb", "API Rest", "CI/CD Github"]}
        />
      </div>

      <div className="w-full">
        <h1 className="text-2xl font-bold mb-6">Education</h1>
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
  );
}

export default Skills;
