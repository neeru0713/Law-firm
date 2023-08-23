import React from "react";
import picture from "./profile.png";
import TeamMates from "./TeamMates";

const Team = () => {
  return (
    <div className="flex flex-col mx-[20rem] mt-10 pt-20 ">
      <div className="text-white text-5xl font-bold m-auto">Our Team</div>
      <TeamMates />
    </div>
  );
};

export default Team;
