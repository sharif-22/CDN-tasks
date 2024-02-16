import React from "react";

const CartSummary = ({ image, name, quantity, price, toPay }) => {
  return (
    <div className="my-2 flex cursor-pointer gap-2 bg-slate-100 hover:bg-slate-50 rounded-md">
      <img className="w-16 object-cover rounded-l-md" src={image} alt={name} />
      <div>
        <p>{name}</p>
        <span className="text-xs">
          {quantity} X {price} = {toPay}
        </span>
      </div>
    </div>
  );
};

export default CartSummary;
