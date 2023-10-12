import React from "react";

function Input({...props}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return <input className="bg-transparent border-2 w-5/6 md:w-full rounded-lg border-cyan-200 text-white p-4 placeholder-gray-400 focus:border-cyan-400 focus:ring-0 focus:outline-none focus-within:outline-none" {...props}/>;
}

export default Input;
