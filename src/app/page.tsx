import About from "@/components/About";
import React from "react";
import Image from 'next/image'

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex justify-center">
      <div className="w-fit h-full flex flex-col-reverse justify-evenly items-center md:flex-row">
      <About></About>
        <Image
          src="/images/geek.png"
          alt="profile"
          width={168}
          height={168}
          className="w-64 h-64 md:w-80 md:h-80 animate-floating"
        />
      </div>
    </div>
  );
};

export default Home;
