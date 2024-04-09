"use client";

import React from "react";
import ThemeSwitch from "./themeSwitch";

const Header = () => {
  return (
    <header
      className={`border-b dark:bg-[rgb(51,51,51)] dark:border-gray-800 bg-white border-[#eee] h-[35px] flex items-center justify-end`}
    >
      <div className="mr-2">
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
