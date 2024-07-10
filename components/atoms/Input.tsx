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
      className="border p-2 w-full"
    />
  );
};

export default Input;
