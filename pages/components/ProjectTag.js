import React from "react";

export function ProjectTag({ name, onClick, isSelected }) {
  const buttonStyles = isSelected
    ? "text-[#ff6188] border-[#ff6188]"
    : "text-gray-600 border-gray-600 hover:border-[#ff6188]";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-3.5 md:px-6 py-3 text-sm md:text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}

export default ProjectTag;
