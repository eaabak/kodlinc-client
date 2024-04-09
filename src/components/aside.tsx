"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

export const Aside = () => {
  return (
    <aside
      className={`flex flex-col items-center justify-end w-[48px] py-4 border-r border-solid dark:border-[#242424] dark:bg-[rgb(51,51,51)] bg-white border-b border-[#eee]`}
    >
      <Link href={"https://github.com/eaabak"} passHref target="_blank">
        <FaGithub
          className={`w-6 h-6
text-[#24292ead] hover:text-black dark:text-[#9e9d9d] dark:hover:text-gray-200 cursor-pointer`}
        />
      </Link>
    </aside>
  );
};

export default Aside;
