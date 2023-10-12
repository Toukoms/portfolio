import React from "react";

type Props = {
  duration: string;
  company: string;
  work: string;
  description: string;
  technologies: string[];
};

const Experience = ({
  duration,
  description,
  company,
  work,
  technologies,
}: Props) => {
  return (
    <div className="w-fit flex flex-col gap-4 pb-2">
      <span className="bg-cyan-800 rounded-full px-4 py-2 font-semibold w-min whitespace-nowrap">
        {duration}
      </span>
      <div className="border-l-2 border-gray-400 pl-2 ml-4">
        <div className="border-2 border-cyan-200 ml-6 rounded-md p-4 flex flex-col gap-2">
          <h3 className="text-md font-bold">
            {work}{" "}
            <span className="font-normal italic text-gray-200">
              - {company}
            </span>
          </h3>
          <p className="text-gray-400 text-sm">{description}</p>
          <p className='text-sm text-cyan-100'>
            <span className='underline text-cyan-400'>Used Technologies:</span>
            {technologies.map((tech) => (
              <span key={`_${tech}`}> {tech},</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
