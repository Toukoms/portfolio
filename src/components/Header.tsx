"use client";
import Link from "next/link";
import React from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { ToggleThemeButton } from "./ToggleThemeButton";
import { cn } from "@/lib/utils";
import { useSnapshot } from "valtio";
import { linkState } from "@/states/active-link";

const Header = () => {
  const { links } = useSnapshot(linkState);

  const [showNavBar, setShowNavBar] = React.useState(false);

  const toggleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <header
      className={cn(
        "w-screen sm:h-auto shadow-sm px-8 pl-6 lg:px-0 py-2 sm:py-4 pt-3 sm:pt-6 fixed left-0 top-0 z-50 backdrop-blur-3xl sm:backdrop-opacity-90 bg-secondary/75 transition-transform sm:transition-none duration-300 ease-in-out border-b dark:border-none",
        showNavBar
          ? "h-screen backdrop-opacity-100"
          : "h-max backdrop-opacity-80"
      )}
    >
      <div className="flex items-center justify-between max-w-3xl 2xl:max-w-6xl mx-auto">
        <h1>
          <a
            href="/"
            className="text-3xl xl:text-5xl font-bold uppercase font-bebas-neue w-fit text-primary"
          >
            Toki.
          </a>
        </h1>
        <nav
          className={cn(
            "w-screen sm:w-auto mx-auto sm:mx-0 z-10 flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-2 sm:gap-4 xl:gap-4 absolute sm:static left-0 sm:transform-none transition-colors duration-300",
            showNavBar ? "top-1/2 transform -translate-y-1/2" : "-top-96"
          )}
        >
          {links.map((link) => (
            <Link
              key={`_${link.href}`}
              href={`#${link.href}`}
              className={cn(
                "text-muted-foreground hover:border-b-2 hover:border-b-primary text-lg xl:text-xl sm:text-sm w-fit text-center sm:text-left capitalize cursor-pointer font-medium",
                { "text-primary": link.active }
              )}
              onClick={() => setTimeout(() => toggleShowNavBar(), 100)}
            >
              {link.href}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 mr-2 sm:m-0">
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
