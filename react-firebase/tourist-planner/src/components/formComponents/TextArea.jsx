const TextAreaInput = ({
  label,
  name,
  placeholder,
  required,
  value,
  type,
  register,
  width = "w-full",
  row = 3,
}) => {
  return (
    <div className={`flex flex-col p-3 gap-y-2 ${width}`}>
      <div>
        <label htmlFor={name}>{label}</label>
        {required ? <span className="text-red-500 font-bold px-1">*</span> : ""}
      </div>
      <textarea
        className="outline-none rounded p-2"
        type={type}
        name={name}
        id={name}
        {...register}
        placeholder={placeholder}
        required={required}
        value={value}
        rows={row}
      ></textarea>
    </div>
  );
};

export default TextAreaInput;
