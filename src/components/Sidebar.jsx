import React from "react";
import logo from "../assets/brand/logo.svg";
import SidebarSection from "./SidebarSection";
import { sections } from "../dummyData";

export default function Sidebar() {
  return (
    <div className="bg-white w-[300px] h-[96vh] m-[10px] rounded-[20px] p-4 flex flex-col">
      <img src={logo} alt="Logo"  />
      <div className="w-full h-[1px] bg-[#E5E7EB] mt-4" />
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <SidebarSection {...section} />
          {index !== sections.length - 1 && (
            <div className="w-full h-[1px] bg-[#E5E7EB] my-4" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
