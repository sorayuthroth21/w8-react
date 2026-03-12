import React from "react";

export default function OrderCard({product, price, quantity, adding, removing}) {


  const minusDisabled = quantity === 0;

  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>{"$" + price}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" onClick={!minusDisabled ? removing : null}  style={{ backgroundColor: minusDisabled && "#bfbfbf" }}>-</div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={adding}>+</div>
      </div>
    </div>
  );
}
