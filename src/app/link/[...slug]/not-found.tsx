import Logo404 from "@/components/logo-404";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] gap-4">
      <div className="flex items-center">
        <Logo404 width={150} height={150} />
      </div>
      <div className={`w-[50%] text-center`}>
        <span className="dark:text-[#4e4c4c] text-[#24292ead] text-xl leading-4 font-medium">
          No code for such a ID was found
        </span>
      </div>
    </div>
  );
}
