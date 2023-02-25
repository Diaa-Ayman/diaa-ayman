import React from "react";
function Contact({ Icon, title, desc }) {
  return (
    <div className="flex items-center space-x-2">
      <div className="icon-container bg-white text-yellow-500 w-fit p-2 rounded-md">
        <Icon />
      </div>
      <div className="info flex flex-col leading-5 text-white">
        <span className="font-semibold text-sm">{title}</span>
        <span className="text-sm  text-yellow-500">{desc}</span>
      </div>
    </div>
  );
}

export default Contact;
