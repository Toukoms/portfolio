import React from "react";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import { SuperLink } from "./SuperLink";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="w-full mb-16">
      <h2 className="pb-8 text-4xl font-light text-center sm:text-left font-montserrat">
        Welcome to my portfolio
      </h2>
      <div className="flex gap-4 pb-4">
        <div className="w-24 overflow-hidden rounded-md sm:w-32 aspect-square">
          <Image
            className="object-cover object-top w-full h-full"
            src="https://raw.githubusercontent.com/Toukoms/club-multi/main/assets/images/teams/Toki.jpg"
            alt="profile"
            width={168}
            height={168}
          />
        </div>
        <div>
          <h3 className="pb-2 text-4xl font-bold uppercase sm:text-6xl font-oswald whitespace-nowrap">
            I am Tokiniaina
          </h3>
          <h4 className="pb-4 text-2xl font-bold sm:text-4xl font-montserrat text-primary">
            Web Developper
          </h4>
        </div>
      </div>
      <p className="mb-4 text-sm leading-6 text-justify text-muted-foreground font-montserrat">
        Passionate about application development, I am constantly seeking
        challenges that allow me to push my limits and develop my{" "}
        <Button variant={"link"} className="p-0" asChild><Link href="#skills">skills</Link></Button>. I enjoy working on
        innovative <Button variant={"link"} className="p-0" asChild><Link href="#projects">projects</Link></Button> within a
        dynamic and creative team, where collaboration is encouraged and valued.
        If you share this passion and are looking for a motivated collaborator,
        please feel free to <Button variant={"link"} className="p-0" asChild><Link href="#contact">contact me</Link></Button> to
        explore potential collaboration opportunities.
      </p>
      <Button asChild><Link href="CV Tokiniaina - FR.pdf">Download my CV</Link></Button>
    </div>
  );
};

export default AboutSection;
