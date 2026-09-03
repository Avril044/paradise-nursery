import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plantsArray = [
  // CATEGORIA 1 - Interior - 6 plantas
  { name: "Monstera", cost: "$15", image: "https://via.placeholder.com/150", category: "Interior" },
  { name: "Snake Plant", cost: "$12", image: "https://via.placeholder.com/150", category: "Interior" },
  { name: "Pothos", cost: "$10", image: "https://via.placeholder.com/150", category: "Interior" },
  { name: "Peace Lily", cost: "$18", image: "https://via.placeholder.com/150", category: "Interior" },
  { name: "Spider Plant", cost: "$8", image: "https://via.placeholder.com/150", category: "Interior" },
  { name: "Fiddle Leaf", cost: "$20", image: "https://via.placeholder.com/150", category: "Interior" },
  // CATEGORIA 2 - Suculentas - 6 plantas
  { name: "Aloe Vera", cost: "$9", image: "https://via.placeholder.com/150", category: "Suculentas" },
  { name: "Echeveria", cost: "$7", image: "https://via.placeholder.com/150", category: "Suculentas" },
  { name: "Cactus", cost: "$5", image: "https://via.placeholder.com/150", category: "Suculentas" },
  { name: "Jade Plant", cost: "$11", image: "https://via.placeholder.com/150", category: "Suculentas" },
  { name: "Haworthia", cost: "$6", image: "https://via.placeholder.com/150", category: "Suculentas" },
  { name: "Agave", cost: "$13", image: "https://via.placeholder.com/150", category: "Suculentas" },
  // CATEGORIA 3 - Aromaticas - 6 plantas
  { name: "Lavender", cost: "$14", image: "https://via.placeholder.com/150", category: "Aromaticas" },
  { name: "Mint", cost: "$4", image: "https://via.placeholder.com/150", category: "Aromaticas" },
  { name: "Basil", cost: "$3", image: "https://via.placeholder.com/150", category: "Aromaticas" },
  { name: "Rosemary", cost: "$6", image: "https://via.placeholder.com/150", category: "Aromaticas" },
  { name: "Thyme", cost: "$5", image: "https://via.placeholder.com/150", category: "Aromaticas" },
  { name: "Oregano", cost: "$4", image: "https://via.placeholder.com/150", category: "Aromaticas" },
];

function ProductList(){
 const dispatch = useDispatch();
 const cartItems = useSelector(state => state.cart.items);
 const totalQuantity = cartItems.reduce((a,b)=>a+b.quantity,0);

 const handleAdd = (plant) => {
  dispatch(addItem(plant));
 };

 return (
  <div>
   <div className="navbar">
    <a href="/">Inicio</a>
    <a href="/products">Plantas</a>
    <a href="/cart">Carrito 🛒 {totalQuantity}</a>
   </div>
   <h1>Paradise Nursery</h1>
   {plantsArray.map((plant, idx) => {
     const added = cartItems.find(i=>i.name===plant.name);
     return (
      <div key={idx}>
       <h3>{plant.name}</h3>
       <p>{plant.cost}</p>
       <p>{plant.category}</p>
       <button onClick={()=>handleAdd(plant)} disabled={!!added}>{added ? "Added" : "Add to Cart"}</button>
       <button onClick={()=>handleAdd(plant)} disabled={!!added}>Agregar al Carrito</button>
      </div>
     )
   })}
  </div>
 );
}
export default ProductList;
