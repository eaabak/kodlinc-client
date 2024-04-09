"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <></>;

  if (resolvedTheme === "dark") {
    return (
      <div
        className="flex items-center gap-1 hover:text-gray-300 hover:bg-gray-200 p-1 rounded cursor-pointer"
        onClick={() => setTheme("light")}
      >
        <FiSun className="w-[18px] h-[18px] text-[#6a737d] " />
        <span className="text-[#6a737d] text-[10px]">Light</span>
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
        <span className="text-[#6a737d] text-[10px]">Dark</span>
      </div>
    );
  }
}
