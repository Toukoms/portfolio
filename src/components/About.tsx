import React from "react";

const About = () => {
  return (
    <div className="w-fit text-center md:w-[50vw] md:text-left">
      <h2 className="text-2xl font-semibold pb-2">Welcome to my portfolio</h2>
      <h3 className="text-6xl font-bold pb-2 whitespace-nowrap">
        I am Tokiniaina
      </h3>
      <h4 className="text-cyan-400 text-3xl pb-4">Web Developper</h4>
      <p className="text-lg mb-8 text-justify px-4 md:p-0 md:text-left">
        Passionate about application development, I am constantly seeking
        challenges that allow me to push my limits and develop my skills. I
        enjoy working on innovative projects within a dynamic and creative team,
        where collaboration is encouraged and valued. If you share this passion
        and are looking for a motivated collaborator, please feel free to
        contact me to explore potential collaboration opportunities.
      </p>
      <a
        href={"CV Tokiniaina - FR.pdf"}
        className="border-2 border-cyan-400 text-cyan-400 rounded-md py-2 px-3 text-xl cursor-pointer hover:text-gray-100 hover:bg-cyan-400"
      >
        Download my CV
      </a>
    </div>
  );
};

export default About;
