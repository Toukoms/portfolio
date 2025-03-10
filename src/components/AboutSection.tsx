import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SuperLink } from "./SuperLink";
import Link from "next/link";
import { Badge } from "./ui/badge";

const AboutSection = () => {
  return (
    <section id="about" className="w-full">
      <div className="w-full anime_hidden">
        <h2 className="pb-8 text-4xl font-light text-center sm:text-left font-montserrat">
          Welcome to my portfolio
        </h2>
        <div className="flex gap-4 pb-4">
          <div className="relative bg-[#F6F4F0] w-24 overflow-hidden rounded-md aspect-[3/4] border border-primary">
            <Image
              className="absolute top-4 left-0 object-cover object-top w-full h-full scale-105"
              src="https://raw.githubusercontent.com/Toukoms/club-multi/main/assets/images/teams/Toki.jpg"
              alt="profile"
              width={168}
              height={168}
            />
          </div>
          <div>
            <h3 className="pb-2 text-4xl font-bold uppercase sm:text-5xl font-oswald whitespace-nowrap">
              I am Tokiniaina
            </h3>
            <h4 className="pb-2 text-2xl font-bold sm:text-3xl font-montserrat text-primary">
              Web Developper
            </h4>
            <Badge
              variant={"outline"}
              className="text-orange-400 border-orange-400"
            >
              Open to work
            </Badge>
          </div>
        </div>
        <p className="mb-4 font-montserrat description">
          Passionate about application development, I am constantly seeking
          challenges that allow me to push my limits and develop my{" "}
          <SuperLink href="#skills">skills</SuperLink>. I enjoy working on
          innovative <SuperLink href="#projects">projects</SuperLink> within a
          dynamic and creative team, where collaboration is encouraged and
          valued. If you share this passion and are looking for a motivated
          collaborator, please feel free to{" "}
          <SuperLink href="#contact">contact me</SuperLink> to explore potential
          collaboration opportunities.
        </p>
        <Button asChild>
          <Link href="CV Tokiniaina - FR.pdf">Download my CV</Link>
        </Button>
      </div>
    </section>
  );
};

export default AboutSection;
