"use client";
import { cn } from "@/lib/utils";
import { PROFILE_IMAGE_PATH } from "@/data";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { ExperienceRecord } from "@/types/experience";
import { ResumeContent } from "@/types/portfolio-content";
import { differenceInYears, formatDate, parseISO } from "date-fns";
import { enUS, fr } from "date-fns/locale";
import Image from "next/image";
import React from "react";
import { FaCode, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiPostgresql,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";

const skillIcons: Record<string, React.ReactNode> = {
  "Next.js": <RiNextjsFill className="h-6 w-6 text-primary" />,
  React: <FaReact className="h-6 w-6 text-primary" />,
  TypeScript: <SiTypescript className="h-6 w-6 text-primary" />,
  "Tailwind CSS": <SiTailwindcss className="h-6 w-6 text-primary" />,
  Supabase: <SiSupabase className="h-6 w-6 text-primary" />,
  Stripe: <SiStripe className="h-6 w-6 text-primary" />,
  PostgreSQL: <SiPostgresql className="h-6 w-6 text-primary" />,
  "Functional testing": <FaCode className="h-6 w-6 text-primary" />,
  "Installation testing": <FaCode className="h-6 w-6 text-primary" />,
  "Role-based access testing": <FaCode className="h-6 w-6 text-primary" />,
};

interface SkillProps {
  name: string;
  icon: React.ReactNode;
  category: "frontend" | "backend" | "tools";
}

interface ExperienceProps {
  id: string;
  title: string;
  company: string;
  startAt: string;
  endAt: string | null;
  description: string;
  contributions: string[];
}

interface AboutProps {
  className?: string;
  experiences: ExperienceRecord[];
  resume: ResumeContent;
}

const About: React.FC<AboutProps> = ({ className, experiences, resume }) => {
  const tAbout = useScopedI18n("about");
  const tSkills = useScopedI18n("skills");
  const tExperience = useScopedI18n("experience");
  const currentLocale = useCurrentLocale();
  const locale = currentLocale === "fr" ? fr : enUS;
  const localizedExperiences: ExperienceProps[] = experiences.map((exp) => ({
    id: exp.id,
    title: currentLocale === "fr" ? exp.title_fr : exp.title_en,
    company: exp.company,
    startAt: exp.start_at,
    endAt: exp.end_at,
    description:
      currentLocale === "fr" ? exp.description_fr : exp.description_en,
    contributions:
      currentLocale === "fr" ? exp.contributions_fr : exp.contributions_en,
  }));
  const earliestFullTimeExperienceStart = experiences
    .filter((experience) => experience.employment_type === "full_time")
    .map((experience) => experience.start_at)
    .sort()[0];
  const yearsOfExperience = earliestFullTimeExperienceStart
    ? Math.max(
        0,
        differenceInYears(
          new Date(),
          parseISO(earliestFullTimeExperienceStart)
        )
      )
    : null;
  const skills: SkillProps[] = resume.skills.flatMap((group) =>
    group.items.map((item) => ({
      name: item[currentLocale],
      icon: skillIcons[item.en],
      category: group.section,
    }))
  );

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
            <p className="text-sm font-mono text-primary">
              {tAbout("eyebrow")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              {tAbout("title")}
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
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
              <div className="w-48 h-48 rounded-full bg-primary flex items-center justify-center">
                <div className="w-[98%] h-[98%] overflow-hidden rounded-full bg-background flex items-center justify-center">
                  <Image
                    src={PROFILE_IMAGE_PATH}
                    alt={resume.contact.avatar.alt[currentLocale]}
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl mb-4">{resume.name}</h3>
                <p className="text-primary text-2xl">
                  {resume.role[currentLocale]}
                </p>
                {yearsOfExperience !== null && (
                  <p className="text-accent font-bold text-xl">
                    {yearsOfExperience}+ {tExperience("duration")}
                  </p>
                )}
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
              {resume.biography.p1[currentLocale]}
            </p>
            <p className="mb-4 text-muted-foreground">
              {resume.biography.p2[currentLocale]}
            </p>
            <p className="text-muted-foreground">
              {resume.biography.p3[currentLocale]}
            </p>
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
                    <span aria-hidden="true">{skill.icon}</span>
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
                    <span aria-hidden="true">{skill.icon}</span>
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
                    <span aria-hidden="true">{skill.icon}</span>
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
              {localizedExperiences.map((exp, index) => (
                <div
                  key={exp.id}
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
                      {formatDate(parseISO(exp.startAt), "MMMM yyyy", {
                        locale,
                      })}{" "}
                      -{" "}
                      {exp.endAt
                        ? formatDate(parseISO(exp.endAt), "MMMM yyyy", {
                            locale,
                          })
                        : tExperience("present")}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {exp.description}
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {exp.contributions.map((contribution) => (
                      <li key={contribution}>{contribution}</li>
                    ))}
                  </ul>
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
