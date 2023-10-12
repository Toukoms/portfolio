import Project from "./components/Project";

const Projects = async () => {

  return (
    <div className="flex-1 h-max w-full pb-4 mt-[6vw] pt-16 sm:pt-4 px-12">
      <h1 className="font-semibold mb-8 text-3xl text-center">
        Web application
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 self-start">
        <Project
          imageSrc={"/images/a_star_algorithm.png"}
          title={"A* Algorithm"}
          description={"Path finding algorithm"}
          linkSource={"https://github.com/Toukoms/a_star_algorithm"}
        />
        <Project
          imageSrc={"/images/black_panther.jpeg"}
          title={"Black Panther"}
          description={"Integration of Black Panther's maket"}
          linkDemo={"https://github.com/"}
          linkSource={"https://github.com/Toukoms/a_star_algorithm"}
        />
        <Project
          imageSrc={"/images/black_panther.jpeg"}
          title={"Black Panther"}
          description={"Integration of Black Panther's maket"}
          linkDemo={"https://github.com/"}
          linkSource={"https://github.com/Toukoms/a_star_algorithm"}
        />
        <Project
          imageSrc={"/images/black_panther.jpeg"}
          title={"Black Panther"}
          description={"Integration of Black Panther's maket"}
          linkDemo={"https://github.com/"}
          linkSource={"https://github.com/Toukoms/a_star_algorithm"}
        />
        <Project
          imageSrc={"/images/black_panther.jpeg"}
          title={"Black Panther"}
          description={"Integration of Black Panther's maket"}
          linkDemo={"https://github.com/"}
          linkSource={"https://github.com/Toukoms/a_star_algorithm"}
        />
        <Project
          imageSrc={"/images/black_panther.jpeg"}
          title={"Black Panther"}
          description={"Integration of Black Panther's maket"}
          linkDemo={"https://github.com/"}
          linkSource={"https://github.com/Toukoms/a_star_algorithm"}
        />
        <Project
          imageSrc={"/images/black_panther.jpeg"}
          title={"Black Panther"}
          description={"Integration of Black Panther's maket"}
          linkDemo={"https://github.com/"}
          linkSource={"https://github.com/Toukoms/a_star_algorithm"}
        />
      </div>

      {/* <h1 className="font-semibold my-8 text-3xl text-center">Mobile application</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 self-start">
        
      </div> */}

      {/* <h1 className="font-semibold my-8 text-3xl text-center">Algorithm</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 self-start">
        <Project
          imageSrc={"/images/a_star_algorithm.png"}
          title={"A* Algorithm"}
          description={"A path finding algorithm"}
          linkDemo={""}
          linkSource={"https://github.com/Toukoms/a_star_algorithm"}
        />
      </div> */}
    </div>
  );
};

export default Projects;
