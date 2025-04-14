"use client";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

function Hero({ className }: { className?: string }) {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
          <div
            ref={titleRef}
            className={cn(
              "mb-8 relative transition-all duration-700 transform",
              titleInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple opacity-75 blur rounded-full"></div>
            <span className="relative bg-background rounded-full font-mono text-xl px-4 py-1.5">
              Portfolio 1.1.0
            </span>
          </div>

          <h2
            ref={subtitleRef}
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight transition-all duration-700 delay-100 transform",
              subtitleInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            Creating{" "}
            <span className="neon-text animate-neon-pulse">Immersive</span>{" "}
            Digital Experiences
          </h2>

          <p
            className={cn(
              "text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed transition-all duration-700 delay-200 transform",
              subtitleInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            Web developer specializing in modern, responsive, and interactive
            websites and applications.
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
              className="w-full py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-background font-medium rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <span className="flex items-center justify-center gap-2">
                <span>Start Exploring</span>
                <ArrowRight size={20} />
              </span>
            </button>

            <div className="flex space-x-3 justify-center">
              <Link
                target="_blank"
                href="https://github.com/toukoms"
                className="flex-1 py-3 border border-border text-center font-medium rounded-md transition-all hover:bg-muted/30"
              >
                GitHub Profile
              </Link>
              <Link
                href="/CV_Tokiniaina.pdf"
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
            <div className="text-2xl font-bold">React</div>
            <div className="text-xl font-medium">TypeScript</div>
            <div className="text-lg">Node.js</div>
            <div className="text-2xl font-bold">Next.js</div>
            <div className="text-xl font-medium">Tailwind</div>
            <div className="text-lg">MongoDB</div>
            <div className="text-2xl font-bold">PostgreSQL</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
