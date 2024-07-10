import React from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  required?: boolean;
}

const Input = ({ name, type, placeholder, register, required }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, { required })}
      className="text-[#1C1C1C] text-regular-14 rounded-[8px] outline-none placeholder:text-[rgba(28,28,28,0.2)] border py-[8px] px-[16px] h-[40px] w-full focus:border-[#95A4FC] border-[rgba(28,28,28,0.1)]"
    />
  );
};

export default Input;
