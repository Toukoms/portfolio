import Link, {LinkProps} from "next/link";
import React from "react";

type Props = LinkProps &
  React.PropsWithChildren;

const Button = (props: Props) => {
  return (
    <Link
      className="
      font-oswald
      w-fit
      border-2
      p-2
      border-cyan-400
      text-cyan-400
      rounded-md
      text-xl
      whitespace-nowrap
      cursor-pointer
      duration-200
      ease-in-out
      hover:text-black
      hover:bg-cyan-400
      focus:border-transparent
      focus:text-gray-600
      focus:bg-cyan-300
      active:bg-cyan-200
      active:text-gray-800
      "
      {...props}
    >
      <>{props.children}</>
    </Link>
  );
};

export default Button;
