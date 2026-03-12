import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  const updateQuantity = (index, change) => {
    const updateOrders = orders.map((order, i) =>{
      if (i === index){
        return{
          ...order, quantity : order.quantity + change
        };
      }
      return order;
    });

    setOrders(updateOrders);
  };


  const calculateTotal = () =>{
    return orders.reduce((sum, order) =>{
      return ( sum + order.price * order.quantity);
    }, 0);
  };

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order, index) =>(
          <OrderCard
            key={index}
            product={order.product}
            price={order.price}
            quantity={order.quantity}
            adding={() => updateQuantity(index, 1)}
            removing={() => updateQuantity(index, -1)}     
          />
        ))}
      </div>

      <CheckoutButton total= {calculateTotal()}></CheckoutButton>
    </>
  );
}
