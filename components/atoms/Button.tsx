import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ type, onClick, children }: ButtonProps) => {
  return (
    <button
      className={`text-[14px] py-[10px] px-[16px]  text-neutral-0 bg-[#1C1C1C] rounded-[8px] text-white w-full text-center`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
