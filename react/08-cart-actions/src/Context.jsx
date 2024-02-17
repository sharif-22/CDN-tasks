import React from "react";
import { createContext, useState } from "react";
import data from "../data/data.json";

export const Cart = createContext();

const Context = ({ children }) => {
  const [cartItems, setCartItems] = useState(data);
  const [gadgetNames, setGadgetNames] = useState([
    "Apple AirPods Pro",
    "Fitbit Charge 4",
    "GoPro Hero 9 Black",
    "Apple MacBook Pro",
    "Nintendo Switch",
    "DJI Osmo Pocket",
    "Kindle Paperwhite",
  ]);
  return (
    <Cart.Provider
      value={[cartItems, setCartItems, gadgetNames, setGadgetNames]}
    >
      {children}
    </Cart.Provider>
  );
};

export default Context;
