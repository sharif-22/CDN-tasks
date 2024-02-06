import React, { useState } from "react";

const Alert = (props) => {
  const [collapse, setCollapse] = useState(true);

  return (
    <div
      className={
        collapse
          ? `max-w-lg pl-4 pr-2 py-2 rounded ${props.bgColor} ${props.bgHoverColor} my-1 flex justify-between`
          : "hidden"
      }
    >
      {props.children ? (
        props.children
      ) : (
        <div>
          <p className="text-xl font-medium">{props.alertTitle}</p>
          <p className="text-sm">{props.alertMsg}</p>
        </div>
      )}
      <svg
        onClick={() => {
          setCollapse(!collapse);
        }}
        className={`${props.bgColorClose} rounded-full hover:shadow-lg cursor-pointer hover:-rotate-180 duration-500`}
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 48 48"
      >
        <path
          fill="none"
          stroke="#ffffff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
          d="m14 14l20 20m-20 0l20-20"
        />
      </svg>
    </div>
  );
};

export default Alert;
