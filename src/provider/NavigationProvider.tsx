"use client";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SplashScreen from "@/components/SplashScreen";
import { cn } from "@/lib/utils";
import { useCurrentLocale } from "@/locales/client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const locale = useCurrentLocale();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  const handleSplashComplete = () => {
    setLoading(false);
  };

  const handleNavigation = (section: string) => {
    router.push(`/${locale}#${section}`);
  };

  // Update active section based on scroll position
  useEffect(() => {
    if (pathname !== `/${locale}`) {
      setActiveSection("");
    }

    const handleScroll = () => {
      const aboutRef = document.getElementById("about");
      const projectsRef = document.getElementById("projects");
      const contactRef = document.getElementById("contact");

      const aboutPosition = aboutRef?.offsetTop || 0;
      const projectsPosition = projectsRef?.offsetTop || 0;
      const contactPosition = contactRef?.offsetTop || 0;
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      if (scrollPosition >= contactPosition) {
        setActiveSection("contact");
      } else if (scrollPosition >= projectsPosition) {
        setActiveSection("projects");
      } else if (scrollPosition >= aboutPosition) {
        setActiveSection("about");
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection, pathname, locale]);

  return (
    <div className="min-h-screen">
      <SplashScreen
        onComplete={handleSplashComplete}
        className={cn({
          hidden: !loading,
        })}
      />
      <div
        className={cn({
          hidden: loading,
        })}
      >
        <Header activeSection={activeSection} onNavigate={handleNavigation} />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default NavigationProvider;
