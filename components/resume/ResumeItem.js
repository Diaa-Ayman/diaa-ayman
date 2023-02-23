import { BookOpenIcon } from "@heroicons/react/24/outline";
import React from "react";
import Dot from "../Dot";

export default function ResumeItem({ title, date, desc }) {
  return (
    <div className="edu-body">
      <div className="flex  space-x-5">
        <Dot />
        <div className="text-lg font-semibold tracking-[-.5px] mt-0 leading-5">
          <span>{title}</span>
          <div className="text-[16px]  text-gray-300">{date}</div>
          <div className="text-sm text-gray-400 font-sans lg:w-[70%]">
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
}
