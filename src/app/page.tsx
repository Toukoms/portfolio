import About from "@/components/About";
import React from "react";
import Image from "next/image";

type Props = {};

const Home = (props: Props) => {
  return (
      <div className="pb-4 mt-[6vw] pt-8 sm:pt-4 w-fit h-full flex flex-col-reverse justify-center items-center md:gap-4 md:flex-row">
        <About></About>
        <Image
          src="/images/geek.png"
          alt="profile"
          width={168}
          height={168}
          className="w-64 h-64 md:w-80 md:h-80 animate-floating"
        />
      </div>
  );
};

export default Home;
