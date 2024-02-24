import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/index";

import TripCard from "../components/uiComponents/TripCard";
import {
  AntSkeletonText,
  AntSkeletonBtn,
} from "../components/uiComponents/AntSkeleton";

const Trips = () => {
  const [pastTrips, setPastTrips] = useState([]);
  const [render, reRender] = useState(false);

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
      console.log(pastTrips);
      if (querySnapshot.docs.length === 0) {
        console.log("norecord exist");
      }
    };
    getFirebaseDatas();
  }, [render]);

  return (
    <>
      <div
        className={`mx-auto max-w-7xl  py-4 ${
          pastTrips.length > 3 ? "h-auto" : "lg:h-[80dvh] "
        }`}
      >
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center">
          {pastTrips.length <= 0 ? (
            <AntSkeletonText />
          ) : (
            pastTrips.map((trip) => {
              const {
                budget,
                location,
                startDate,
                returnDate,
                numOfTravelers,
                transportationPref,
                review,
                thumbnail,
                id,
              } = trip;
              // delete date
              const deleteData = async () => {
                await deleteDoc(doc(db, "location", id));
                reRender(!render);
              };

              return (
                <TripCard
                  key={id}
                  thumbnail={thumbnail}
                  deleteData={deleteData}
                  budget={budget}
                  location={location}
                  startDate={startDate}
                  returnDate={returnDate}
                  numOfTravelers={numOfTravelers}
                  transportationPref={transportationPref}
                  review={review}
                  id={id}
                />
              );
            })
          )}
        </div>
        {pastTrips.length <= 0 ? (
          <div className="mx-auto w-fit my-7">
            <AntSkeletonBtn />
          </div>
        ) : (
          <Link
            to="/addTrip"
            className="block w-fit p-3 my-4 bg-secondary hover:shadow-lg duration-500 hover:bg-secondary/70 text-white mx-auto font-medium rounded px-6"
          >
            Plan trips
          </Link>
        )}
      </div>
    </>
  );
};

export default Trips;
