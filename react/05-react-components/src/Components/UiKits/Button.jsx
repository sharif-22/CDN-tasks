import React from "react";

const Button = (props) => {
  return (
    <button
      className={`px-4 py-2 rounded ${props.bgColor} ${props.bgColorHover} ${props.textColor} ${props.textColorHover} ${props.display} ${props.width}  font-medium text-base duration-700`}
    >
      {props.children ? (
        props.children
      ) : (
        <>{props.btnName ? props.btnName : "Button"} </>
      )}
    </button>
  );
};

export default Button;
