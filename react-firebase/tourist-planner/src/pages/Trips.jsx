import React from "react";
import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";

import db from "../firebase/index";

const Trips = () => {
  useEffect(() => {
    const getFirebaseDatas = async () => {
      const querySnapshot = await getDocs(collection(db, "location"));
      const data = querySnapshot.docs.map((doc) => {
        const getData = doc.data();
        const getId = doc.id;
        const finalData = { ...getData, id: getId };
        return finalData;
      });
      setPastTrips(data);
      if (querySnapshot.docs.length === 0) {
        console.log("norecord exist");
      }
    };
    getFirebaseDatas();
  }, []);

  const [pastTrips, setPastTrips] = useState([]);

  return (
    <>
      <div className="max-w-7xl mx-auto">
        {pastTrips.map((trips) => (
          <div
            key={trips.id}
            id={trips.id}
            className="my-2 bg-slate-100 p-5 rounded space-y-2"
          >
            <h2 className="text-2xl capitalize font-medium">
              {trips.location}
            </h2>
            <p>Budget : {trips.budget}</p>
            <div className="flex gap-4">
              <p className="bg-slate-200 p-1 rounded">
                Start Date : {trips.startDate}
              </p>
              <p className="bg-slate-200 p-1 rounded">
                Return Date : {trips.returnDate}
              </p>
            </div>
            <div className="flex gap-4">
              <p className="bg-slate-200 p-1 rounded">
                Num Of Travelers : {trips.numOfTravelers}
              </p>
              <p className="bg-slate-200 p-1 rounded">
                Transpotation Preference : {trips.transpotationPref}
              </p>
            </div>
            <p>Review : {trips.review}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Trips;
