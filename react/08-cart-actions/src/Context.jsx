import React from "react";
import { createContext, useState } from "react";
import data from "../data/data.json";

export const Cart = createContext();

const Context = ({ children }) => {
  const [cartItems, setCartItems] = useState(data);

  return (
    <Cart.Provider value={[cartItems, setCartItems]}>{children}</Cart.Provider>
  );
};

export default Context;
