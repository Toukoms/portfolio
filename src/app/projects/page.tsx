import React from "react";
import Project from "./components/Project";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="h-max w-full px-8">
      <h1 className="font-bold text-2xl my-8">Web application</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 self-start">
        <Project
          imageSrc={"/images/black_panther.jpeg"}
          title={"Black Panther"}
          description={"Integration of Black Panther's maket"}
          linkDemo={"https://github.com/"}
          linkSource={"https://github.com/Toukoms/a_star_algorithm"}
        />
      </div>

      <h1 className="font-bold text-2xl my-8">Mobile application</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 self-start">
        <Project
          imageSrc={"/images/black_panther.jpeg"}
          title={"Black Panther"}
          description={"Integration of Black Panther's maket"}
          linkDemo={"https://github.com/"}
          linkSource={"https://github.com/Toukoms/a_star_algorithm"}
        />
      </div>

      <h1 className="font-bold text-2xl my-8">Algorithm</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 self-start">
        <Project
          imageSrc={"/images/a_star_algorithm.png"}
          title={"A* Algorithm"}
          description={"A path finding algorithm"}
          linkDemo={""}
          linkSource={"https://github.com/Toukoms/a_star_algorithm"}
        />
      </div>
    </div>
  );
};

export default Projects;
