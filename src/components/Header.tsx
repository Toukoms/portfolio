"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { MdClose, MdMenu } from "react-icons/md";
import { ToggleThemeButton } from "./ToggleThemeButton";
import { cn } from "@/lib/utils";

const Header = () => {
  const links = [
    { href: "about", delay: "delay-0" },
    { href: "projects", delay: "delay-[100ms]" },
    { href: "skills", delay: "delay-[200ms]" },
    { href: "education", delay: "delay-[300ms]" },
    { href: "contact", delay: "delay-[400ms]" },
  ];
  const path = usePathname();
  const current = path.slice(1, path.length);
  const [showNavBar, setShowNavBar] = React.useState(false);

  const toggleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <header
      className={cn(
        "w-screen sm:h-auto dark:shadow-sm px-4 md:px-0 py-2 sm:py-4 pt-3 sm:pt-6 fixed left-0 top-0 z-50 backdrop-blur-xl sm:backdrop-opacity-90  bg-secondary/75 transition-all duration-300 ease-in-out border-b dark:border-none",
        showNavBar
          ? "h-screen backdrop-opacity-100"
          : "h-max backdrop-opacity-80"
      )}
    >
      <div className="flex items-center justify-between max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold uppercase font-bebas-neue w-fit text-primary">
          Toki.
        </h1>
        <nav
          className={
            cn("w-screen sm:w-auto mx-auto sm:mx-0 z-10 flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-2 sm:gap-4 absolute sm:static left-0", showNavBar ? "top-1/2 transform -translate-y-1/2" : "-top-96")
          }
        >
          {links.map((link) => (
            <Link
              key={`_${link.href}`}
              href={`#${link.href}`}
              className={
                "sm:hover:border-b-2 hover:border-b-primary text-lg sm:text-sm w-fit text-center sm:text-left capitalize cursor-pointer"
              }
              // FIXME: Quick changing position when clicking on link
              onClick={() => setTimeout(() => toggleShowNavBar(), 100)}
            >
              {link.href}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2 items-center mr-2 sm:m-0">
          <ToggleThemeButton />
          {showNavBar ? (
            <MdClose
              size={32}
              className="cursor-pointer sm:hidden animate-one-rotation"
              onClick={toggleShowNavBar}
            />
          ) : (
            <MdMenu
              size={32}
              className="cursor-pointer sm:hidden animate-one-rotation"
              onClick={toggleShowNavBar}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
