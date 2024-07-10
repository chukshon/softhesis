import React from "react";
import Input from "../atoms/Input";
import { UseFormRegister } from "react-hook-form";

interface FormFieldProps {
  label?: string;
  name: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  required?: boolean;
  error?: string;
}

const FormField = ({
  label,
  name,
  type,
  placeholder,
  register,
  required,
  error,
}: FormFieldProps) => {
  return (
    <div className="mb-3">
      {label && <label className="block text-sm font-bold mb-2">{label}</label>}

      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        register={register}
        required={required}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default FormField;
