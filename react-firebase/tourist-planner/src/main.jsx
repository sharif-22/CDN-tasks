import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { collection, getDocs } from "firebase/firestore";

import db from "./firebase/index";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"; // React-Router

import Home from "./pages/Home";
import AddTrip from "./pages/AddTrip";
import PastTrips from "./pages/PastTrips";

const Template = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

//get overall data
const getFirebaseDatas = async () => {
  const querySnapshot = await getDocs(collection(db, "location"));
  const data = querySnapshot.docs.map((doc) => {
    const getData = doc.data();
    const getId = doc.id;
    const finalData = { ...getData, id: getId };
    return finalData;
  });
  console.log(data);
  if (querySnapshot.docs.length === 0) {
    console.log("norecord exist");
  }
};
getFirebaseDatas();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pastTrips",
        element: <PastTrips />,
      },
      {
        path: "/addTrip",
        element: <AddTrip />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
