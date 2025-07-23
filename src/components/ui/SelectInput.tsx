import React from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import type { SelectOptionsType } from "../../types/formTypes";

type Props = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  options: SelectOptionsType[];
};

const SelectInput: React.FC<Props> = ({
  label,
  name,
  register,
  error,
  options,
}) => {
  return (
    <div className="input-field">
      <label htmlFor={name} className="block mb-1 font-semibold">
        {label}
      </label>
      <select
        id={name}
        {...register}
        className={`w-full px-3 py-2 border rounded-md outline-none text-white ${
          error?.message ? "border-red-500" : "border-gray-300"
        }`}
      >
        <option value="" className="text-black font-semibold">
          Selecciona una opción
        </option>
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            className="text-black font-semibold"
          >
            {opt.text}
          </option>
        ))}
      </select>

      {error?.message && (
        <p className="text-red-600 text-sm mt-1">{error.message}</p>
      )}
    </div>
  );
};

export default SelectInput;
