import { useState } from "react";

export default function StuffForm({addStuff}) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  function getName(event){
    setName(event.target.value)
  }

  const getPrice= (e) =>{
    setPrice(Number(e.target.value));
  }

  const add = (e) =>{
    e.preventDefault();
    addStuff(name, price);
  }

  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input onChange={getName} type="search" placeholder="Banana" />

      <p>Stuff price</p>
      <input onChange={getPrice} type="search" placeholder="15" />

      <button onClick={add}>Add Stuff</button>
    </form>
  );
}
