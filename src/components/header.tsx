"use client";

import React from "react";
import ThemeSwitch from "./themeSwitch";
import Logo from "./logo";

const Header = () => {
  return (
    <header
      className={`border-b dark:bg-[rgb(51,51,51)] dark:border-gray-800 bg-white border-[#eee] h-[35px] flex items-center justify-end`}
    >
      {/* <div className="ml-2">
        <Logo width={24} height={24} />
      </div> */}

      <div className="mr-2">
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
