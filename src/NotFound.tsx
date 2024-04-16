import React from "react";
import Logo404 from "./components/logo-404";

interface NotFoundProps {
    text:string
}

export default function NotFound({text}: NotFoundProps) {
  return (
    <div className="dark:bg-[#1e1e1e] bg-white flex flex-col justify-center items-center h-[100vh] gap-4">
      <div className="flex items-center">
        <Logo404 width={150} height={150} />
      </div>
      <div className={`w-[50%] text-center`}>
        <span className="dark:text-[#4e4c4c] text-[#24292ead] text-xl leading-4">
          {text}
        </span>
      </div>
    </div>
  );
}
