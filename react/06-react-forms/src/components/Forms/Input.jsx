import React from "react";

const Input = ({
  label,
  name,
  placeholder,
  required,
  value,
  type,
  width,
  handleOnChange,
}) => {
  return (
    <div className={`flex flex-col p-3 gap-y-2 ${width}`}>
      <div>
        <label htmlFor={name}>{label}</label>
        {required ? <span className="text-red-500 font-bold px-1">*</span> : ""}
      </div>
      <input
        className="outline-none rounded bg-slate-200 p-2"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
};

export default Input;
