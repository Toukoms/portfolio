import Input from "@/components/Input";
import React from "react";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="flex flex-col gap-4 mt-[18vw] flex-grow h-full justify-end items-center w-full">
      <h1 className="text-3xl text-gray-400 uppercase font-bold mt-4 md:m-0">Contact me</h1>
      <form action="" method="post" className="w-full md:w-auto flex flex-col items-center gap-4">
        <Input id="name" name="name" placeholder="Full Name" type="text" />
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4">
          <Input placeholder="Adress Email" type="email" />
          <Input placeholder="Email Object" type="text" />
        </div>
        <textarea
          placeholder="Your Message Here"
          className="resize-none w-5/6 md:w-full h-44 bg-transparent border-2 rounded-lg border-cyan-200 text-white p-4 placeholder-gray-400 focus:border-cyan-400 focus:ring-0 focus:outline-none focus-within:outline-none"
        ></textarea>
        <button type="submit" className="w-min border-2 border-cyan-400 text-cyan-400 rounded-md sm:mt-8 py-2 px-6 text-xl cursor-pointer hover:text-gray-100 hover:bg-cyan-400">Send</button>
      </form>
    </div>
  );
}

export default Contact;
