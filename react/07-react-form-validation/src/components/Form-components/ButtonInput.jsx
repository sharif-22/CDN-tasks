import React from "react";

const ButtonInput = ({
  bgColor = "bg-red-500",
  bgColorHover = "hover:bg-slate-200",
  textColor,
  textColorHover,
  display,
  width = "w-full",
  btnName,
  children,
  styles,
}) => {
  return (
    <div className={`p-3 ${width}`}>
      <button
        className={`p-2 rounded ${bgColor} ${width} ${bgColorHover} ${textColor} ${textColorHover} ${display} ${styles}  font-medium text-base duration-700`}
      >
        {children ? children : <>{btnName ? btnName : "Button"} </>}
      </button>
    </div>
  );
};

export default ButtonInput;
