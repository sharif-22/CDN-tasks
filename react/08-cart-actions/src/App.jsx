import React, { useState, useContext } from "react";
import Navbar from "./components/Navbar";
import CartItems from "./components/CartItems";
import { Cart } from "./Context";
import CartSummary from "./components/CartSummary";
import { LiaRupeeSignSolid } from "react-icons/lia";

const App = () => {
  const [cartItems, setCartItems] = useContext(Cart);

  let sum = cartItems.reduce((prev, curr) => {
    console.log(prev, curr);
    return parseInt(prev) + parseInt(curr.toPay);
  }, 0);

  return (
    <>
      <Navbar />
      <main className="bg-slate-100 p-3">
        <section className="flex lg:flex-row flex-col mx-auto w-fit gap-6">
          {/* products */}
          <div>
            {cartItems.map((data) => {
              const {
                description,
                id,
                image,
                name,
                price,
                specs,
                maxQuantity,
                stock,
                toPay,
              } = data;
              return (
                <CartItems
                  key={id}
                  description={description}
                  image={image}
                  name={name}
                  price={price}
                  specs={specs}
                  maxQuantity={maxQuantity}
                  stock={stock}
                  toPay={toPay}
                />
              );
            })}
          </div>
          {/* cart summary */}
          <div className="bg-slate-200 lg:w-72 h-fit sticky top-[85px] rounded shadow-md hover:shadow-lg duration-700 p-4">
            <h2 className="text-xl">Products ready to deliver</h2>
            {cartItems.map((data, index) => {
              const { name, image, price, quantity, toPay } = data;
              return (
                <CartSummary
                  key={index}
                  name={name}
                  image={image}
                  quantity={quantity}
                  price={price}
                  toPay={toPay}
                />
              );
            })}
            <p className="flex items-center">
              Total Bill Amount : <LiaRupeeSignSolid size={16} />
              {sum}
            </p>
            <button
              type="button"
              className="bg-yellow-300 hover:bg-yellow-400 duration-500 hover:shadow-md font-medium w-full py-3 mt-4 rounded-md"
            >
              Place Order
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
