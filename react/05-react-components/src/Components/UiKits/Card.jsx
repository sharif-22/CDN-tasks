import React from "react";
import Button from "./Button";

const Card = (props) => {
  return (
    <div className="rounded w-64 h-fit bg-slate-200 space-y-2 hover:shadow-lg duration-700 m-1">
      {props.src ? (
        <img
          className="object-cover rounded-t w-64 h-32"
          src={props.src}
          alt={props.alt}
        />
      ) : (
        ""
      )}
      <div className="p-2 space-y-2">
        {props.title ? (
          <p className="text-lg font-medium"> {props.title}</p>
        ) : (
          <p className="text-lg font-medium"> Provide Title Prop</p>
        )}
        {props.desc ? (
          <p className="text-base font-normal"> {props.desc}</p>
        ) : (
          ""
        )}
        <Button
          btnName={props.btnName}
          bgColor="bg-blue-300"
          bgColorHover="hover:bg-blue-400"
          display="block"
          width="w-full"
        />
      </div>
    </div>
  );
};

export default Card;
