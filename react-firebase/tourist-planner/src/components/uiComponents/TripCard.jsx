import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MdDeleteForever, MdEditDocument } from "react-icons/md";
import { LuIndianRupee } from "react-icons/lu";

import { formatDateTimeStamp } from "../../utils/utils";

const TripCard = ({
  budget,
  location,
  startDate,
  returnDate,
  numOfTravelers,
  transportationPref,
  review,
  thumbnail,
  id,
  deleteData,
}) => {
  const Navigate = useNavigate();

  const [onHover, setOnHover] = useState(false);
  const showBtn = () => {
    setOnHover(true);
  };
  const hideBtn = () => {
    setOnHover(false);
  };

  //get - update Doc

  const edit = (e) => {
    const docId = e.target.closest("section").id;
    Navigate(`/updateTrip/${docId}`);
    console.log(docId);
    // singleDb(docId);
  };

  return (
    <section
      onMouseOver={showBtn}
      onMouseOut={hideBtn}
      id={id}
      className="my-2 w-[300px] lg:w-[380px] h-fit mx-auto bg-slate-100 rounded hover:bg-slate-50 hover:shadow hover:cursor-pointer duration-300 relative"
    >
      <div className="overflow-hidden rounded-t">
        <img
          className={`w-[300px] lg:w-[380px] h-48  object-cover ${
            onHover && "scale-110"
          } transition-all duration-1000`}
          src={thumbnail}
          alt={location}
        />
      </div>

      <div className="p-2 space-y-2">
        <h2 className="text-2xl capitalize font-medium">{location}</h2>
        <p className="flex items-center gap-0.5 h-fit">
          Budget : <LuIndianRupee size={14} />
          {budget}
        </p>
        <div className="flex gap-2">
          <p className="bg-slate-200 p-1 rounded text-xs cursor-pointer hover:bg-slate-300/90">
            Start Date : {formatDateTimeStamp(startDate)}
          </p>
          {returnDate > 3 && (
            <p className="bg-slate-200 p-1 rounded text-xs cursor-pointer hover:bg-slate-300/90">
              Return Date : {formatDateTimeStamp(returnDate)}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <p className="bg-slate-200 p-1 rounded text-xs w-fit cursor-pointer hover:bg-slate-300/90">
            no of Travelers : {numOfTravelers}
          </p>
          <p className="bg-slate-200 p-1 rounded text-xs w-fit cursor-pointer hover:bg-slate-300/90">
            Transportation Preference : {transportationPref}
          </p>
        </div>
      </div>
      {onHover && (
        <div className="transition flex gap-4 duration-1000 ease-in absolute top-4 right-4">
          <MdDeleteForever
            size={32}
            className=" text-secondary hover:text-red-600 hover:scale-125 hover:drop-shadow-md duration-300 cursor-pointer"
            onClick={deleteData}
          />
          <MdEditDocument
            onClick={edit}
            size={32}
            className=" text-secondary hover:text-danger2 hover:scale-125 hover:drop-shadow-md duration-300 cursor-pointer"
          />
        </div>
      )}
    </section>
  );
};

export default TripCard;
