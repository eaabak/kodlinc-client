import React from "react";
import { useTheme } from "../ThemeProvider";
import { FiMoon, FiSun } from "react-icons/fi";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { generateUUID } from "../utils/generateUUID";

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
const navigate = useNavigate()
  const whichMod = () => {
    if (resolvedTheme === "dark") {
      return (
        <div
          className="flex items-center gap-1 hover:text-gray-300 hover:bg-gray-200 p-1 rounded cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <FiSun className="w-[18px] h-[18px] text-[#6a737d]" />
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
  const handleNewBlankEditor = () => {
    navigate(`/${generateUUID()}`)
  }

  return (
    <header
      className={` dark:bg-[rgb(51,51,51)] dark:border-gray-800 bg-white border-[#eee] h-[35px] flex items-center justify-between`}
    >
      <div className="ml-4" title="New Editor" onClick={handleNewBlankEditor}>
        <BsFileEarmarkCodeFill  className="w-[18px] h-[18px] text-[#24292ead] hover:text-black dark:text-[#868585] dark:hover:text-gray-300 cursor-pointer" />
      </div>
      <div className="mr-2">{whichMod()}</div>
    </header>
  );
};

export default Header;
