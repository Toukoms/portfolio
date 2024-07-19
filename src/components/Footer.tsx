import React from "react";
import { SuperLink } from "./SuperLink";

const Footer = () => {
  return (
    <p className=" w-2/3 mx-auto sm:w-full self-end pb-4 mt-8 text-sm text-center text-gray-500">
      © 2024 Designed and Developed by Tokiniaina - Source code available{" "}
      <SuperLink href="https://github.com/Toukoms/portfolio" target="_blank">
        here
      </SuperLink>
      .
    </p>
  );
};

export default Footer;
