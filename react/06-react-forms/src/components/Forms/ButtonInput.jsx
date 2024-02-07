import React from "react";

const ButtonInput = ({
  bgColor,
  bgColorHover,
  textColor,
  textColorHover,
  display,
  width,
  btnName,
  children,
}) => {
  return (
    <button
      className={`p-2 mx-3 rounded ${bgColor} ${bgColorHover} ${textColor} ${textColorHover} ${display} ${width}  font-medium text-base duration-700`}
    >
      {children ? children : <>{btnName ? btnName : "Button"} </>}
    </button>
  );
};

export default ButtonInput;
