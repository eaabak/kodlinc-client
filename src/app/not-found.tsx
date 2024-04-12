import Logo404 from "@/components/logo-404";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="flex items-center gap-4">
        <span className="text-[#AAD4C8] text-[130px]">Kodlin</span>
        <Logo404 width={150} height={150} />
      </div>
      <div className={`w-[50%] text-center`}>
        <span className="dark:text-[#4e4c4c] text-[#24292ead] text-xl leading-4 font-medium">
          No such page found
        </span>
      </div>
    </div>
  );
}
