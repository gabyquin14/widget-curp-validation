import React from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

const InputField: React.FC<Props> = ({
  label,
  name,
  placeholder = "",
  register,
  error,
  type = "text",
}) => {
  return (
    <div className="input-field">
      <label htmlFor={name} className="block mb-1 font-semibold">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register}
        className={`w-full px-3 py-2 border rounded-md outline-none ${
          error?.message ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error?.message && (
        <p className="text-red-600 text-sm mt-1">{error.message}</p>
      )}
    </div>
  );
};

export default InputField;
