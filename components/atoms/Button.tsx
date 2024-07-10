import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ type, onClick, children }: ButtonProps) => {
  return (
    <button
      className="text-neutral-0 bg-blue-500 text-white py-2 px-4 rounded"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
