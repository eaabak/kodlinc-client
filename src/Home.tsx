"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import CollaborationSvg from "./components/collaboration-svg";
import { MainContainer } from "./components/mainContainer";

const Home: React.FC = () => {
  return (
    <div
      className={`dark:bg-[#1e1e1e] bg-white min-h-screen w-full overflow-hidden flex`}
    >
      <MainContainer>
        <div className="flex flex-col items-center gap-4 w-full">
          <span className="dark:text-[#e6e6e6] text-[#f1f1f1] text-[6rem] tracking-widest font-bold custom-font-family">
            Kodlinc
          </span>
          <div
            className={`dark:text-[#e6e6e6] text-[#24292ead] w-[50%] text-center pt-4`}
          >
            <span className="text-sm custom-font-family">
              Kodlinc allows you to quickly convert selected code fragments into
              a shareable link and easily edit them in an online editor.
            </span>
          </div>
          <span
            className={`dark:text-[#e6e6e6] text-[#24292ead] text-[18px] text-sm custom-font-family`}
          >
            Powered by{" "}
            <a
              href={"https://loodos.com/"}
              className="hover:text-[#3bafbf] text-sm custom-font-family"
              target="_blank"
              rel="noreferrer"
            >
              Loodos
            </a>
          </span>
          <div title="https://github.com/eaabak">
            <a
              href={"https://github.com/eaabak"}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                className={`w-8 h-8
                 text-[#24292ead] hover:text-black dark:text-[#4e4c4c] dark:hover:text-gray-300 cursor-pointer`}
              />
            </a>
          </div>
        </div>
        <div className="flex items-center w-full">
          <CollaborationSvg />
        </div>
      </MainContainer>
    </div>
  );
};

export default Home;
