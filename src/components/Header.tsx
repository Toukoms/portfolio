"use client"
import Link from "next/link";
import React from "react";
import { usePathname} from 'next/navigation'

const Header = () => {
  const links = ["", "skills", "projects", "contact"];
  const path = usePathname();
  const current = path.slice(1, path.length);
  console.log(path, current);
  
  const link_style = "text-sm capitalize cursor-pointer md:text-lg lg:text-xl";
  return (
    <div className="w-full py-2 px-4 flex justify-between items-center shadow-dark-100">
      <h1 className="text-4xl uppercase font-bold">Toki.</h1>
      <nav className="flex gap-2 md:gap-4 lg:gap-8 pr-4 items-center">
        {links.map((link) =>
          link === "contact" ? (
            <Link
              key={`_${link}`}
              href={link}
              className={
                  `border-2 border-cyan-400 text-cyan-400 rounded-md py-2 px-3 hover:text-gray-100 hover:bg-cyan-400 ${link_style}`
              }
            >
              contact
            </Link>
          ) : (
            <Link
              key={`_${link}`}
              href={link}
              className={
                link === current
                  ? `text-cyan-400 hover:border-b-2 hover:border-b-cyan-400 ${link_style}`
                  : `text-neutral-200 hover:text-cyan-400 hover:border-b-2 hover:border-b-cyan-400 ${link_style}`
              }
            >
              {link === "" ? "home" : link}
            </Link>
          )
        )}
      </nav>
    </div>
  );
};

export default Header;
