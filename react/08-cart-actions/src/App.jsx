import React, { useState, useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import CartItems from "./components/CartItems";
import { Cart } from "./Context";
import CartSummary from "./components/CartSummary";
import { LiaRupeeSignSolid } from "react-icons/lia";
import Footer from "./components/Footer";

const App = () => {
  const [cartItems, setCartItems, gadgetNames, setGadgetNames] =
    useContext(Cart);
  // console.log(useContext(Cart));
  // total sum of cart products for bill
  let sum = cartItems.reduce((prev, curr) => {
    // console.log(prev, curr);
    return parseInt(prev) + parseInt(curr.toPay);
  }, 0);

  //  deleteFavoriteGadget

  const deleteFavoriteGadget = (e) => {
    setGadgetNames(
      gadgetNames.filter((removeItem) => removeItem != gadgetNames[e.target.id])
    );
  };
  useEffect(() => {
    console.log(gadgetNames);
  }, [gadgetNames]);

  return (
    <>
      <Navbar />
      <main className="bg-slate-100 py-3">
        <section className="flex lg:flex-row flex-col mx-auto w-fit gap-6">
          {/* products */}
          <div className="">
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
            <div className="max-w-4xl space-y-2">
              <h3 className="text-2xl px-5">Favorite gadget</h3>
              <ol className="flex flex-wrap gap-2 h-72 content-start justify-start p-5 ">
                {gadgetNames.length != 0 ? (
                  gadgetNames.map((gadget, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-slate-300 w-fit h-fit text-xs py-1.5 space-x-2 rounded hover:bg-white cursor-pointer duration-500"
                      >
                        <span className="p-1.5">{gadget}</span>

                        <span
                          id={index}
                          onClick={deleteFavoriteGadget}
                          className="p-1.5 font-medium rounded-r text-slate-300 hover:text-black hover:bg-slate-400 duration-500"
                        >
                          X
                        </span>
                      </li>
                    );
                  })
                ) : (
                  <li>
                    <img
                      className="h-72 object-cover"
                      src="/empty-cart-1.png"
                    />
                  </li>
                )}
              </ol>
            </div>
          </div>
          {/* cart summary */}
          <div>
            <div className="bg-slate-200 lg:w-72 h-fit lg:sticky top-[85px] rounded shadow-md hover:shadow-lg duration-700 p-4">
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
