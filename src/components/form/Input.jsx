import React, { forwardRef } from "react";

export const Input = forwardRef(
  (
    { text, type, name, placeholder, helperText, multiple, value, ...props },
    ref
  ) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2">
          {text}:
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          defaultValue={value}
          className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...(multiple ? { multiple } : {})}
          ref={ref}
          {...props}
        />
        <span className="text-red-500 text-xs italic">{helperText}</span>
      </div>
    );
  }
);
