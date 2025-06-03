"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  useChangeLocale,
  useCurrentLocale,
  useScopedI18n,
} from "@/locales/client";
import React, { useEffect, useState } from "react";

type TNav = "home" | "about" | "projects" | "contact";

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  className,
}) => {
  const t = useScopedI18n("nav");
  
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".nav-menu") && !target.closest(".menu-button")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn("fixed top-0 left-0 w-full z-40 py-4 border-b backdrop-blur-md", className)}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-mono text-lg font-bold text-neon-cyan">
              TOKINIAINA
              <span className="text-neon-pink">/</span>
              <span className="text-neon-purple">PORTFOLIO</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button
              className="menu-button md:hidden flex items-center space-x-1 bg-muted/30 backdrop-blur-sm rounded-md px-3 py-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="text-sm">Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn(
                  "transition-transform",
                  menuOpen ? "rotate-180" : ""
                )}
              >
                {menuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {["home", "about", "projects", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => handleNavClick(section)}
                    className={cn(
                      "px-3 py-1.5 font-medium rounded-md transition-all relative cursor-pointer",
                      activeSection === section
                        ? "text-primary bg-muted/30 backdrop-blur-sm"
                        : "text-foreground/70 hover:text-primary hover:bg-muted/10"
                    )}
                  >
                    <span className="font-mono text-xs opacity-70 absolute -top-1 -left-1 capitalize">
                      {section === t("home")
                        ? "01"
                        : section === t("about")
                        ? "02"
                        : section === t("projects")
                        ? "03"
                        : "04"}
                    </span>
                    {t(section as TNav)}
                  </button>
                )
              )}
            </nav>

            <Select
              defaultValue={locale}
              onValueChange={(value) => changeLocale(value as "en" | "fr")}
            >
              <SelectTrigger className="w-[64px] uppercase font-bold">
                {locale}
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="fr">{t("language.fr")}</SelectItem>
                  <SelectItem value="en">{t("language.en")}</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "nav-menu fixed inset-x-0 top-[64px] bg-background/90 backdrop-blur-lg border-t border-b border-border transition-all duration-300 md:hidden",
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-3">
            {["home", "about", "projects", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className={cn(
                    "px-4 py-3 font-medium rounded-md transition-all text-left cursor-pointer",
                    activeSection === section
                      ? "text-primary bg-muted/40 backdrop-blur-sm"
                      : "text-foreground/70 hover:text-primary"
                  )}
                >
                  <span className="font-mono text-xs opacity-70 mr-2 capitalize">
                    {section === t("home")
                      ? "01:"
                      : section === t("about")
                      ? "02:"
                      : section === t("projects")
                      ? "03:"
                      : "04:"}
                  </span>
                  {t(section as TNav)}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
