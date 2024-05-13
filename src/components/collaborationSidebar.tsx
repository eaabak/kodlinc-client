import React from "react";
import { TbWorld } from "react-icons/tb";

const CollaborationSidebar = (props: any) =>{
  console.log("props.collaborators", props.collaborators);
  return (
    <aside
      className={`flex flex-col items-center justify-between w-[48px] py-4 border-r border-solid dark:border-[#242424] dark:bg-[rgb(51,51,51)] bg-white border-b border-[#eee]`}
    >
      <div className="flex flex-col items-center">
        {props.collaborators.map((coll: any, index: any) => (
          <div className="flex justify-center items-center w-[32px] h-[32px] rounded-full mb-2 bg-gray-300 border-[2px] border-lime-500 cursor-pointer">
            <span className="text-[10px] custom-font-family">U-{index}</span>
          </div>
        ))}
      </div>
      <div>
        <a href={"https://kodlinc.dev/"} target="_blank" rel="noreferrer">
          <TbWorld
            className={`w-6 h-6 text-[#24292ead] hover:text-black dark:text-[#9e9d9d] dark:hover:text-gray-200 cursor-pointer`}
          />
        </a>
      </div>
    </aside>
  );
}
export default React.memo(CollaborationSidebar)