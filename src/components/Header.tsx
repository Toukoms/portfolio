"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { MdClose, MdMenu } from "react-icons/md";
import Button from "./Button";

const Header = () => {
  const links = ["", "skills", "projects"];
  const path = usePathname();
  const current = path.slice(1, path.length);
  const [showNavBar, setShowNavBar] = React.useState(false);

  const link_style =
    "w-fit text-2xl sm:text-xl text-center sm:text-left capitalize cursor-pointer";

  const toggleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <div
      className={
        `w-full
        sm:h-auto
        flex
        justify-between
        flex-row
        items-start sm:items-center
        shadow-xl
        py-2 sm:py-4
        px-4
        sm:px-12
        fixed
        left-0
        top-0
        z-50
        backdrop-blur-xl
        sm:backdrop-opacity-90
        bg-black
        bg-opacity-50
        sm:bg-opacity-0
        transition-all
        duration-300
        ease-in-out ` +
        (showNavBar
          ? "h-full backdrop-opacity-100"
          : "h-max backdrop-opacity-80")
      }
    >
      <h1 className="font-bebas-neue w-fit text-6xl text-cyan-400 uppercase font-bold">
        Toki.
      </h1>
      <nav
        className={`
        w-full
        z-10
        md:w-auto
        flex
        flex-col
        sm:flex-row
        justify-center sm:justify-end md:justify-normal
        items-center
        gap-8 md:gap-12
        absolute sm:static
        left-0
        duration-300 `
        + (showNavBar ? "top-[35%]" : "top-[-300%]")
      }
      >
        {links.map((link) => (
          <Link
            key={`_${link}`}
            href={`/${link}`}
            className={
              link === current
                ? `text-cyan-400 sm:hover:border-b-2 hover:border-b-cyan-400 ${link_style}`
                : `text-neutral-200  sm:hover:border-b-2 hover:border-b-cyan-400 ${link_style}`
            }
            onClick={() => setTimeout(() => toggleShowNavBar(), 100)}
          >
            {link === "" ? "home" : link}
          </Link>
        ))}
      </nav>
      <div className="z-20 ml-4 flex justify-center items-center gap-2">
        <Button href={"/contact"}>Contact Me</Button>
        {
          showNavBar
          ? (<MdClose size={56} className="sm:hidden cursor-pointer animate-one-rotation" onClick={toggleShowNavBar}/>) 
          : (<MdMenu size={56} className="sm:hidden cursor-pointer animate-one-rotation" onClick={toggleShowNavBar}/>)
        }
      </div>
    </div>
  );
};

export default Header;
