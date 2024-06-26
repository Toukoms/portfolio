import React from "react";
import Project from "./Project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

const ProjectSection = () => {
  return (
    <section className="w-full">
      <h1 className="mb-8 text-4xl text-secondary-foreground font-montserrat">
        What have I done ?
      </h1>
      <div className="mb-8">
        <h2 className="mb-2 text-4xl text-secondary-foreground font-oswald">
          Projects
        </h2>
        <p className="">
          I appreciate using my skills to create applications and tools that
          benefit others.
        </p>
      </div>
      <Carousel
        className="w-full max-w-xs md:max-w-2xl mx-auto"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <Project
              title={"A* algorithm"}
              description={
                "Implementation of one of the best path finding algorithm"
              }
              imageSrc={"/images/a_star_algorithm.png"}
              linkSource={""}
            />
          </CarouselItem>
          <CarouselItem>
            <Project
              title={"A* algorithm"}
              description={
                "Implementation of one of the best path finding algorithm"
              }
              imageSrc={"/images/black_panther.jpeg"}
              linkSource={""}
              linkDemo="a"
            />
          </CarouselItem>
          <CarouselItem>
            <Project
              title={"A* algorithm"}
              description={
                "Implementation of one of the best path finding algorithm"
              }
              imageSrc={"/images/a_star_algorithm.png"}
              linkSource={""}
            />
          </CarouselItem>
          <CarouselItem>
            <Project
              title={"A* algorithm"}
              description={
                "Implementation of one of the best path finding algorithm"
              }
              imageSrc={"/images/black_panther.jpeg"}
              linkSource={""}
            />
          </CarouselItem>
          <CarouselItem>
            <Project
              title={"A* algorithm"}
              description={
                "Implementation of one of the best path finding algorithm"
              }
              imageSrc={"/images/a_star_algorithm.png"}
              linkSource={""}
            />
          </CarouselItem>
          <CarouselItem>
            <Project
              title={"A* algorithm"}
              description={
                "Implementation of one of the best path finding algorithm"
              }
              imageSrc={"/images/black_panther.jpeg"}
              linkSource={""}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="bg-transparent" />
        <CarouselNext className="bg-transparent" />
      </Carousel>
    </section>
  );
};

export default ProjectSection;
