"use client";
import { cn } from "@/lib/utils";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { formatDate } from "date-fns";
import { enUS, fr } from "date-fns/locale";
import Image from "next/image";
import React from "react";
import { FaCode, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiJest,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";

const skills: SkillProps[] = [
  // Frontend
  {
    name: "Next.js",
    icon: <RiNextjsFill className="h-6 w-6 text-neon-cyan" />,
    category: "frontend",
  },
  {
    name: "React",
    icon: <FaReact className="h-6 w-6 text-neon-cyan" />,
    category: "frontend",
  },
  {
    name: "Vue.js",
    icon: <FaVuejs className="h-6 w-6 text-neon-cyan" />,
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="h-6 w-6 text-neon-cyan" />,
    category: "frontend",
  },
  {
    name: "HTML/CSS/JS",
    icon: <FaCode className="h-6 w-6 text-neon-cyan" />,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="h-6 w-6 text-neon-cyan" />,
    category: "frontend",
  },

  // Backend
  {
    name: "Node.js",
    icon: <FaNodeJs className="h-6 w-6 text-neon-purple" />,
    category: "backend",
  },
  {
    name: "Express",
    icon: <SiExpress className="h-6 w-6 text-neon-purple" />,
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="h-6 w-6 text-neon-purple" />,
    category: "backend",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="h-6 w-6 text-neon-purple" />,
    category: "backend",
  },
  // {
  //   name: "GraphQL",
  //   icon: <SiGraphql className="h-6 w-6 text-neon-purple" />,
  //   category: "backend",
  // },

  // Tools & Others
  {
    name: "Git",
    icon: <SiGit className="h-6 w-6 text-neon-blue" />,
    category: "tools",
  },
  {
    name: "Docker",
    icon: <SiDocker className="h-6 w-6 text-neon-blue" />,
    category: "tools",
  },
  {
    name: "Jest",
    icon: <SiJest className="h-6 w-6 text-neon-blue" />,
    category: "tools",
  },
  {
    name: "Figma",
    icon: <SiFigma className="h-6 w-6 text-neon-blue" />,
    category: "tools",
  },
  // {
  //   name: "AWS",
  //   icon: <FaAws className="h-6 w-6 text-neon-blue" />,
  //   category: "tools",
  // },
];

interface SkillProps {
  name: string;
  icon: React.ReactNode;
  category: string;
}

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface AboutProps {
  className?: string;
}

const BIRTHDAY = new Date("2005-06-09");

const About: React.FC<AboutProps> = ({ className }) => {
  const tAbout = useScopedI18n("about");
  const tSkills = useScopedI18n("skills");
  const tExperience = useScopedI18n("experience");
  const locale = useCurrentLocale() === "fr" ? fr : enUS;

  const experiences: ExperienceProps[] = [
    {
      title: tExperience("xp2.title"),
      company: tExperience("xp2.company"),
      period: tExperience("xp2.date"),
      description: tExperience("xp2.description"),
    },
    {
      title: tExperience("xp1.title"),
      company: tExperience("xp1.company"),
      period: tExperience("xp1.date"),
      description: tExperience("xp1.description"),
    },
  ];

  // Main section ref for the entire section
  const [sectionRef] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Individual refs for each element
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [profileRef, profileInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [bioRef, bioInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [frontendRef, frontendInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [backendRef, backendInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [toolsRef, toolsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className={cn("py-20", className)} ref={sectionRef}>
      <div className="container mx-auto px-2 md:px-4 lg:px-6">
        <div className="text-center mb-12" ref={titleRef}>
          <div
            className={cn(
              "space-y-2 transition-all duration-700",
              titleInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <h2 className="text-sm font-mono text-primary">
              CHARACTER PROFILE
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold">
              {tAbout("title")}
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mx-auto" />
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-4 lg:gap-6">
          {/* Profile Card - Spans 1 column on mobile, 1 column on md, and 1 column on lg */}
          <div
            ref={profileRef}
            className={cn(
              "glass-panel p-6 h-full flex flex-col justify-center md:col-span-1 rounded-xl transition-all duration-700",
              profileInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                <div className="w-30 h-30 overflow-hidden rounded-full bg-background flex items-center justify-center">
                  <Image
                    src={"/pdp.jpg"}
                    alt={"Avatar Image"}
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
              <div className="text-center">
                <h1 className="font-bold text-xl mb-4">
                  RAHAJANIRINA Fanomezantsoa Tokiniaina
                </h1>
                <p className="font-mono text-sm w-fit px-4 mx-auto mb-3 text-center text-muted-foreground bg-muted rounded-full">
                  <span className="font-semibold">{tAbout("birth")}</span>{" "}
                  {formatDate(BIRTHDAY, "PPP", { locale: locale })}
                </p>
                <p className="text-primary  text-2xl">{tAbout("role")}</p>
                <p className="text-accent font-bold text-xl">
                  3 {tAbout("experience")}
                </p>
              </div>
            </div>
          </div>

          {/* Bio Card - Spans full width on mobile, 2 columns on md, and 3 columns on lg */}
          <div
            ref={bioRef}
            className={cn(
              "glass-panel text-left p-6 md:col-span-2 lg:col-span-3 rounded-xl transition-all duration-700",
              bioInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="font-mono text-lg mb-4">
              {tAbout("biography.title")}
            </h3>
            <p className="mb-4 text-muted-foreground">
              {tAbout("biography.p1")}
            </p>
            <p className="mb-4 text-muted-foreground">
              {tAbout("biography.p2")}
            </p>
            <p className="text-muted-foreground">{tAbout("biography.p3")}</p>
          </div>

          {/* Frontend Skills - Spans 1 column on mobile, 1 column on md, and 2 columns on lg */}
          <div
            ref={frontendRef}
            className={cn(
              "glass-panel p-6 md:col-span-1 lg:col-span-2 rounded-xl transition-all duration-700",
              frontendInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <h3 className="font-mono text-lg mb-4 uppercase">
              {tSkills("frontend")}
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {skills
                .filter((skill) => skill.category === "frontend")
                .map((skill, index) => (
                  <div
                    key={skill.name}
                    className={cn(
                      "flex flex-col items-center justify-center p-3 bg-muted/30 rounded-md hover:bg-muted/50 transition-all duration-500",
                      frontendInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    )}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    {skill.icon}
                    <span className="mt-2 text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Backend Skills - Spans 1 column on mobile, 1 column on md, and 1 column on lg */}
          <div
            ref={backendRef}
            className={cn(
              "glass-panel p-6 md:col-span-1 lg:col-span-1 rounded-xl transition-all duration-700",
              backendInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="font-mono text-lg mb-4 uppercase">
              {tSkills("backend")}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
              {skills
                .filter((skill) => skill.category === "backend")
                .map((skill, index) => (
                  <div
                    key={skill.name}
                    className={cn(
                      "flex flex-col items-center justify-center p-3 bg-muted/30 rounded-md hover:bg-muted/50 transition-all duration-500",
                      backendInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    )}
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    {skill.icon}
                    <span className="mt-2 text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Tools Skills - Spans 1 column on mobile, 1 column on md, and 1 column on lg */}
          <div
            ref={toolsRef}
            className={cn(
              "glass-panel p-6 md:col-span-1 lg:col-span-1 rounded-xl transition-all duration-700",
              toolsInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "500ms" }}
          >
            <h3 className="font-mono text-lg mb-4 uppercase">
              {tSkills("tools")}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skills
                .filter((skill) => skill.category === "tools")
                .map((skill, index) => (
                  <div
                    key={skill.name}
                    className={cn(
                      "flex flex-col items-center justify-center p-3 bg-muted/30 rounded-md hover:bg-muted/50 transition-all duration-500",
                      toolsInView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    )}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    {skill.icon}
                    <span className="mt-2 text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Experience Timeline - Spans full width on all screens */}
          <div
            ref={experienceRef}
            className={cn(
              "glass-panel p-6 col-span-1 md:col-span-3 lg:col-span-4 rounded-xl transition-all duration-700",
              experienceInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: "600ms" }}
          >
            <h3 className="font-mono text-lg mb-6 uppercase">
              {tExperience("title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={cn(
                    "border-l-2 border-primary/50 pl-4 pb-2 transition-all duration-700",
                    experienceInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `${700 + index * 200}ms` }}
                >
                  <h4 className="text-lg font-bold">{exp.title}</h4>
                  <div className="flex justify-between mb-2">
                    <span className="text-primary font-medium">
                      {exp.company}
                    </span>
                    <span className="text-sm text-muted-foreground font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
