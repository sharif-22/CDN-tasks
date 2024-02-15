import React, { useState } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
const CartItems = ({
  image,
  name,
  specs,
  description,
  price,
  stock,
  maxQuantity,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevState) => {
      if (prevState < maxQuantity) {
        if (prevState >= 1) {
          return prevState + 1;
        }
      } else {
        return (prevState = maxQuantity);
      }
    });
  };

  const handleDecrement = () => {
    setQuantity((prevState) => {
      if (prevState > 1) {
        return prevState - 1;
      } else {
        return setQuantity(1);
      }
    });
  };

  return (
    <>
      <div className="max-w-4xl mx-auto bg-white my-4 rounded flex flex-col lg:flex-row shadow-sm hover:bg-slate-50 hover:shadow-lg duration-500">
        <img
          className="lg:w-72 w-full  mx-auto object-cover block rounded-l"
          src={image}
          alt={name}
        />
        <div className="lg:py-4 p-4 flex flex-col gap-4">
          <h2 className="text-2xl">{name}</h2>
          <p>{description}</p>
          <ol className="flex gap-2 flex-wrap text-xs">
            {specs.map((specs) => {
              return (
                <li className="bg-slate-200 w-fit p-1.5 rounded hover:bg-slate-100 cursor-pointer duration-500">
                  {specs}
                </li>
              );
            })}
          </ol>
          <p className="flex items-center font-medium text-lg">
            <LiaRupeeSignSolid size={20} /> {price}
          </p>
          <div>
            <p className="mb-1 mx-0.5">Quantity</p>
            <div className="flex">
              <button
                onClick={handleDecrement}
                className={
                  quantity == 1
                    ? "cursor-not-allowed quantity-btn"
                    : "quantity-btn"
                }
                type="button"
              >
                -
              </button>
              <div className="quantity-btn ">
                {quantity >= 1 ? quantity : 1}
              </div>
              <button
                onClick={handleIncrement}
                className={
                  quantity >= maxQuantity
                    ? "cursor-not-allowed quantity-btn"
                    : "quantity-btn"
                }
                type="button"
              >
                +
              </button>
            </div>
          </div>
          <p className="text-xs text-orange-400">
            {maxQuantity <= quantity ? (
              `${stock} ${maxQuantity} pieces per customer.`
            ) : (
              <span>&nbsp;</span>
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default CartItems;
