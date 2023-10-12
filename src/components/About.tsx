import React from "react";
import Button from "./Button";

const About = () => {
  return (
    <div className="w-fit md:w-1/2 px-4 md:p-2 text-center md:text-left">
      <h2 className="text-4xl font-montserrat font-light pb-2">Welcome to my portfolio</h2>
      <h3 className="text-4xl sm:text-6xl font-oswald uppercase font-bold pb-2 whitespace-nowrap">
        I am Tokiniaina
      </h3>
      <h4 className="font-montserrat font-bold text-cyan-400 text-3xl pb-4">Web Developper</h4>
      <p className="font-montserrat leading-6 text-gray-300 text-lg mb-8 text-justify sm:text-left px-2 sm:p-0">
        Passionate about application development, I am constantly seeking
        challenges that allow me to push my limits and develop my skills. I
        enjoy working on innovative projects within a dynamic and creative team,
        where collaboration is encouraged and valued. If you share this passion
        and are looking for a motivated collaborator, please feel free to
        contact me to explore potential collaboration opportunities.
      </p>
      <Button href="CV Tokiniaina - FR.pdf">
        Download my CV
      </Button>
    </div>
  );
};

export default About;
