import React from "react";
import { LeadMagnetSections } from "./LeadMagnetEditor";
import { IconType } from "react-icons";
import { BsBook, BsPerson } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
  TbMail,
  TbPrompt,
} from "react-icons/tb";

interface LeadMagnetEditorSidebarProps {
  isSidebarCollapsed: boolean;
  setSelectedEditor: React.Dispatch<React.SetStateAction<LeadMagnetSections>>;
  setIsSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const EDITOR_OPTIONS: {
  label: string;
  icon: IconType;
  value: LeadMagnetSections;
}[] = [
  { label: "Content Editor", icon: BsBook, value: "content" },
  { label: "Prompt Editor", icon: TbPrompt, value: "prompt" },
  { label: "Email Capture", icon: TbMail, value: "email" },
  { label: "Profile Editor", icon: BsPerson, value: "profile" },
  { label: "Settings", icon: FiSettings, value: "settings" },
];

function LeadMagnetEditorSidebar({
  isSidebarCollapsed,
  setIsSidebarCollapsed,
  setSelectedEditor,
}: LeadMagnetEditorSidebarProps) {
  return (
    <div
      className="flex h-full w-fit flex-col border-r border-purple-600 bg-black  transition-all duration-300 relative overflow-y-clip"
      style={{ height: `calc(100vh - 131px)` }}
    >
      <div
        className={`flex h-full flex-col px-4 pb-4 ${
          isSidebarCollapsed ? "w-fit" : "min-w-[210px]"
        }`}
      >
        {EDITOR_OPTIONS.map((option) => (
          <button
            key={option.value}
            className="mt-4 flex h-[30px] items-center text-lg font-semibold text-white"
            onClick={() => setSelectedEditor(option.value)}
          >
            <span className="text-purple-600">
              <option.icon />
            </span>
            {!isSidebarCollapsed && (
              <span className="ml-2">{option.label}</span>
            )}
          </button>
        ))}
        <button
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="absolute right-4 bottom-4 text-2xl text-purple-600"
        >
          {isSidebarCollapsed ? (
            <TbLayoutSidebarRightCollapse />
          ) : (
            <TbLayoutSidebarLeftCollapse />
          )}
        </button>
      </div>
    </div>
  );
}

export default LeadMagnetEditorSidebar;