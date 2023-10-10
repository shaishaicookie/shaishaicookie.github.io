import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

export function TabButton({ active, selectTab, children }) {
  const buttonClasses = active ? "text-black" : "text-gray-400";
  return (
    <button onClick={selectTab}>
      <p className={`mr-4 font-semibold hover:text-black ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#ff6188] mt-2 mr-3 rounded-full"
      ></motion.div>
    </button>
  );
}

export default TabButton;
