import React from "react";

type Props = {
  duration: string;
  title: string;
  description: string;
};

const Education = ({ duration, title, description }: Props) => {
  return (
    <div className="w-fit flex flex-col gap-4 pb-2">
      <span className="bg-cyan-800 rounded-full px-4 py-2 font-semibold w-min whitespace-nowrap">
        {duration}
      </span>
      <div className="border-l-2 border-gray-400 pl-2 ml-4">
        <div className="border-2 border-cyan-200 ml-6 rounded-md p-4">
          <h3 className="text-md font-bold">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
