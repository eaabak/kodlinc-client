import React from "react";

type Props = {
  children: React.ReactNode;
};

export const MainContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className='w-full px-4 flex items-center'>
      {children}
    </div>
  );
};
