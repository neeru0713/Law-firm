import React from "react";
import NavBar from "./NavBar";

const Footer = () => {
  return (
    <div className="flex flex-col mx-[20rem] mt-20 bg-teal-950 h-[15rem] w-[80rem">
      <NavBar showButton={false} />
    </div>
  );
};

export default Footer;
