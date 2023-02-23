import React from "react";

function Skill({ Icon, skill }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="bg-[#FEB824] p-2 rounded-lg">
        {" "}
        <Icon className=" w-8 h-10 text-gray-100" />
      </div>
      <span className="text-md">{skill}</span>
    </div>
  );
}

export default Skill;
