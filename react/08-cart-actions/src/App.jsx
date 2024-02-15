import React from "react";
import Navbar from "./components/Navbar";
import CartItems from "./components/CartItems";
import data from "../data/data.json";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="bg-slate-100 p-3">
        <section className="flex lg:flex-row flex-col mx-auto w-fit gap-6">
          <div>
            {data.map((data) => {
              const {
                description,
                id,
                image,
                name,
                price,
                specs,
                maxQuantity,
                stock,
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
                />
              );
            })}
          </div>
          <div className="bg-slate-200 lg:w-72 h-96 sticky top-[85px] rounded shadow-md hover:shadow-lg duration-700 p-4">
            <h2 className="text-xl">Products ready to deliver</h2>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
