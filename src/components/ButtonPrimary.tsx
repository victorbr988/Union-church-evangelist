import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

export const ButtonPrimary: React.FC<ButtonProps> = ({children}) => {
  return (
    <button
      className="bg-white flex gap-2 text-blue-600 items-center px-4 p-1"
      >
        {children}
      </button>
  );
};
