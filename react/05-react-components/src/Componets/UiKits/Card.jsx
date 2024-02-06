import React from "react";
import Button from "./Button";

const Card = (props) => {
  return (
    <div className="rounded w-64 bg-slate-200 space-y-2">
      {props.src ? (
        <img
          className="object-cover rounded-t w-64 "
          src={props.src}
          alt={props.alt}
        />
      ) : (
        <img
          className="object-cover rounded-t w-64 h-32"
          src="https://img.freepik.com/free-vector/speech-bubble-with-emoji_24908-78068.jpg?w=826&t=st=1707246260~exp=1707246860~hmac=de9a2f7950ac22163b2b8d4c1d35f5baa91b542e43a0f638c03ee584422db812"
          alt="img from freepik"
        />
      )}
      <div className="p-2">
        {props.title ? (
          <p className="text-lg font-medium"> {props.title}</p>
        ) : (
          <p className="text-lg font-medium"> Provide Title Prop</p>
        )}
        {props.desc ? (
          <p className="text-lg font-medium"> {props.desc}</p>
        ) : (
          <p className="text-sm font-normal">
            {" "}
            Provide desc Prop | Some quick example text to build on the card
            title and make up the bulk of the card's content.
          </p>
        )}
        <Button bgColor="bg-blue-300" bgColorHover="hover:bg-blue-400" />
      </div>
    </div>
  );
};

export default Card;
