const ButtonInput = ({
  textColor,
  disabled,
  textColorHover,
  display,
  btnName,
  children,
  styles,
  bgColor = "bg-red-500",
  bgColorHover = "hover:bg-slate-200",
  width = "w-full",
}) => {
  return (
    <div className={`p-3 ${width}`}>
      <button
        disabled={disabled}
        className={`p-2 rounded ${bgColor} ${width} ${bgColorHover} ${textColor} ${textColorHover} ${display} ${styles} font-medium text-base duration-700`}
      >
        {children ? children : <>{btnName ? btnName : "Button"} </>}
      </button>
    </div>
  );
};

export default ButtonInput;
