import React from "react";
import Project from "./Project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { projects } from "@/constants/projects";

const ProjectSection = () => {
  return (
    <section id="projects" className="w-full">
      <h1 className="mb-4 text-4xl text-secondary-foreground font-montserrat">
        What have I done ?
      </h1>
      <div className="mb-4">
        <h2 className="mb-2 text-4xl text-secondary-foreground font-oswald">
          Projects
        </h2>
        <p className="description">
          I appreciate using my skills to create applications and tools that
          benefit others. Here are some of the projects I have worked on, both
          individually and as part of a team:
        </p>
      </div>
      <Carousel
        className="w-full max-w-xs md:max-w-2xl mx-auto"
        opts={{
          align: "start",
          slidesToScroll: 1,
          breakpoints: {
            "(min-width: 768px)": {
              slidesToScroll: 2,
            },
          },
        }}
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.name}>
              <Project {...project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-transparent" />
        <CarouselNext className="bg-transparent" />
      </Carousel>
    </section>
  );
};

export default ProjectSection;
