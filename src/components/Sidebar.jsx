import React from "react";
import logo from "../assets/brand/logo.svg";
import SidebarSection from "./SidebarSection";
import { sections } from "../dummyData";

export default function Sidebar() {
  return (
    <div className="w-[300px] h-[96vh] m-[10px] rounded-[20px] p-4 flex flex-col 
                    bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <img src={logo} alt="Logo" />
      <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-700 mt-4" />
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <SidebarSection {...section} />
          {index !== sections.length - 1 && (
            <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-700 my-4" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
