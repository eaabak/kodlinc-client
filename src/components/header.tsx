import React from "react";
import { useTheme } from "../ThemeProvider";
import { FiMoon, FiSun } from "react-icons/fi";

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const whichMod = () => {
    if (resolvedTheme === "dark") {
      return (
        <div
          className="flex items-center gap-1 hover:text-gray-300 hover:bg-gray-200 p-1 rounded cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <FiSun className="w-[18px] h-[18px] text-[#6a737d] " />
          <span className="text-[#6a737d] text-[10px] custom-font-family">
            Light
          </span>
        </div>
      );
    }

    if (resolvedTheme === "light") {
      return (
        <div
          className="flex items-center gap-1 hover:text-gray-300 hover:bg-gray-200 p-1 rounded cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          <FiMoon className="w-[18px] h-[18px] text-[#6a737d] " />
          <span className="text-[#6a737d] text-[10px] custom-font-family">
            Dark
          </span>
        </div>
      );
    }
  };

  return (
    <header
      className={`border-b dark:bg-[rgb(51,51,51)] dark:border-gray-800 bg-white border-[#eee] h-[35px] flex items-center justify-end`}
    >
      <div className="mr-2">{whichMod()}</div>
    </header>
  );
};

export default Header;
