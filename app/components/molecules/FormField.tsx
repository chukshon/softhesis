import React from "react";
import Input from "../atoms/Input";
import { UseFormRegister } from "react-hook-form";

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  required?: boolean;
}

const FormField = ({
  label,
  name,
  type,
  placeholder,
  register,
  required,
}: FormFieldProps) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2">{label}</label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        register={register}
        required={required}
      />
    </div>
  );
};

export default FormField;
