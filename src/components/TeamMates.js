import React from "react";
import TeamMember from "./TeamMember";
const TeamMates = () => {
  return (
    <div class="grid grid-rows-2 grid-cols-3 gap-3 ">
      <TeamMember itemName="Danial Def" cases="301 cases" />
      <TeamMember itemName="Sanfole" cases="850 cases" />
      <TeamMember itemName="Cesforila" cases="470 cases" />
      <TeamMember itemName="Colleen" cases="180 cases" />
      <TeamMember itemName="Haldone" cases="212 cases" />
      <TeamMember itemName="Nik Jeo" cases="350 cases" />
    </div>
  );
};

export default TeamMates;
