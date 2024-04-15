"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";

export const Aside = () => {
  return (
    <aside
      className={`flex flex-col items-center justify-end w-[48px] py-4 border-r border-solid dark:border-[#242424] dark:bg-[rgb(51,51,51)] bg-white border-b border-[#eee]`}
    >
      <a href={"https://github.com/eaabak"} target="_blank" rel="noreferrer">
        <FaGithub
          className={`w-6 h-6
text-[#24292ead] hover:text-black dark:text-[#9e9d9d] dark:hover:text-gray-200 cursor-pointer`}
        />
      </a>
    </aside>
  );
};

export default Aside;
