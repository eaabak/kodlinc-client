type Props = {
  position: any;
};

export const Footer: React.FC<Props> = ({ position }) => {
 
  return (
    <footer className="h-[22px] border-t dark:border-gray-800 bg-[#AAD4C8] border-[#eee]">
      <div className="flex items-center justify-end gap-2 mr-[4rem] pt-1">
        {position && (
          <div className="flex gap-1">
            <span className="text-[10px] font-medium">
              Ln {position?.lineNumber},{" "}
            </span>
            <span className="text-[10px] font-medium">
              Col {position?.column}
            </span>
          </div>
        )}
        <span className="text-[10px] font-medium cursor-pointer hover:text-[#727374]">Select language mode</span>
      </div>
    </footer>
  );
};
