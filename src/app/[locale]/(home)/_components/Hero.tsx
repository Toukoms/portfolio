"use client";
import { cn } from "@/lib/utils";
import { RESUME_PDF_PATH } from "@/data";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { ResumeContent } from "@/types/portfolio-content";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

function Hero({
  className,
  resume,
}: {
  className?: string;
  resume: ResumeContent;
}) {
  const t = useScopedI18n("hero")
  const locale = useCurrentLocale();
  const [subtitleRef, subtitleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 100,
  });

  const [buttonRef, buttonInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 200,
  });

  const [techRef, techInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    delay: 300,
  });

  return (
    <section
      id="home"
      className={cn("min-h-screen flex items-center justify-center", className)}
    >
      <div className="container mx-auto px-4 md:px-6 pt-20">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1
            ref={subtitleRef}
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight transition-all duration-700 delay-100 transform",
              subtitleInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <span className="neon-text animate-neon-pulse">
              {resume.role[locale]}
            </span>
          </h1>

          <p
            className={cn(
              "text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-5xl leading-relaxed transition-all duration-700 delay-200 transform",
              subtitleInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            {resume.hero.subtitle[locale]}
          </p>

          <div
            ref={buttonRef}
            className={cn(
              "space-y-4 w-full max-w-md transition-all duration-700 delay-300 transform",
              buttonInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                const aboutSection = document.getElementById("about");
                aboutSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full py-4 bg-primary text-primary-foreground font-medium rounded-md transition-all duration-300 hover:shadow-[0_0_15px_var(--orange)] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <span className="flex items-center justify-center gap-2">
                <span>{t("cta")}</span>
                <ArrowRight size={20} />
              </span>
            </button>

            <div className="flex space-x-3 justify-center">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={resume.contact.social.github}
                className="flex-1 py-3 border border-border text-center font-medium rounded-md transition-all hover:bg-muted/30"
              >
                GitHub Profile
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={RESUME_PDF_PATH}
                className="flex-1 py-3 border border-border text-center font-medium rounded-md transition-all hover:bg-muted/30"
              >
                Download Resume
              </Link>
            </div>
          </div>

          <div
            ref={techRef}
            className={cn(
              "mt-16 flex flex-wrap justify-center items-center gap-6 opacity-70 transition-all duration-700 delay-500 transform",
              techInView
                ? "opacity-70 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <div className="text-lg font-medium">
              {resume.hero.highlights.workflows[locale]}
            </div>
            <div className="text-lg font-medium">
              {resume.hero.highlights.delivery[locale]}
            </div>
            <div className="text-lg font-medium">
              {resume.hero.highlights.quality[locale]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
