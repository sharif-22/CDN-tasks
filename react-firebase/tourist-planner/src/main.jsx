import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
