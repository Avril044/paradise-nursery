import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plantsArray = [
  { name: "Snake Plant", cost: "$12", image: "https://cdn.pixabay.com/photo/2015/04/20/13/25/plant-728973_1280.jpg", category: "Air Purifying Plants" },
  { name: "Spider Plant", cost: "$10", image: "https://cdn.pixabay.com/photo/2015/04/20/13/25/plant-728973_1280.jpg", category: "Air Purifying Plants" },
  { name: "Peace Lily", cost: "$15", image: "https://cdn.pixabay.com/photo/2015/04/20/13/25/plant-728973_1280.jpg", category: "Air Purifying Plants" },
  { name: "Boston Fern", cost: "$14", image: "https://cdn.pixabay.com/photo/2015/04/20/13/25/plant-728973_1280.jpg", category: "Air Purifying Plants" },
  { name: "Aloe Vera", cost: "$11", image: "https://cdn.pixabay.com/photo/2015/04/20/13/25/plant-728973_1280.jpg", category: "Air Purifying Plants" },
  { name: "Areca Palm", cost: "$18", image: "https://cdn.pixabay.com/photo/2015/04/20/13/25/plant-728973_1280.jpg", category: "Air Purifying Plants" },
  { name: "Lavender", cost: "$9", image: "https://cdn.pixabay.com/photo/2015/04/20/13/25/plant-728973_1280.jpg", category: "Aromatic Fragrant Plants" },
  { name: "Jasmine", cost: "$13", image: "https://cdn.pixabay.com/photo/2015/04/20/13/25/plant-728973_1280.jpg", category: "Aromatic Fragrant Plants" },
  { name: "Rosemary", cost: "$7", image: "https://cdn.pixabay.com/photo/2015/04/20/13/25/plant-728973_1280.jpg", category: "Aromatic Fragrant Plants" },
  { name: "Mint", cost: "$6", image: "https://cdn.pixabay.com/photo/2015/04/20/13/25/plant-728973_1280.jpg", category: "Aromatic Fragrant Plants" },
  { name: "Lemon Balm", cost: "$8", image: "https://cdn.pixabay.com/photo/2015/04/20/13/25/plant-728973_1280.jpg", category: "Aromatic Fragrant Plants" },
  { name: "Basil", cost: "$5", image: "https://cdn.pixabay.com/photo/2015/04/20/13/25/plant-728973_1280.jpg", category: "Aromatic Fragrant Plants" },
  { name: "Cactus", cost: "$10", image: "https://cdn.pixabay.com/photo/2015/04/20/13/25/plant-728973_1280.jpg", category: "Insect Repellent Plants" },
  { name: "Venus Flytrap", cost: "$20", image: "https://cdn.pixabay.com/photo/2015/04/20/13/25/plant-728973_1280.jpg", category: "Insect Repellent Plants" },
  { name: "Pitcher Plant", cost: "$22", image: "https://cdn.pixabay.com/photo/2015/04/20/13/25/plant-728973_1280.jpg", category: "Insect Repellent Plants" },
  { name: "Marigold", cost: "$8", image: "https://cdn.pixabay.com/photo/2015/04/20/13/25/plant-728973_1280.jpg", category: "Insect Repellent Plants" },
  { name: "Citronella", cost: "$12", image: "https://cdn.pixabay.com/photo/2015/04/20/13/25/plant-728973_1280.jpg", category: "Insect Repellent Plants" },
  { name: "Catnip", cost: "$9", image: "https://cdn.pixabay.com/photo/2015/04/20/13/25/plant-728973_1280.jpg", category: "Insect Repellent Plants" },
];

function ProductList() {
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prev => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div>
      <div className="navbar"><h3>Paradise Nursery</h3><div><a href="/">Inicio</a><a href="/products">Plantas</a><a href="/cart">Carrito {totalQuantity}</a></div></div>
      <h2>Air Purifying Plants</h2>
      <div>{plantsArray.filter(p=>p.category==="Air Purifying Plants").map((plant) => (
        <div key={plant.name}><img src={plant.image} alt={plant.name}/><h3>{plant.name}</h3><p>{plant.cost}</p><button onClick={() => handleAddToCart(plant)} disabled={addedToCart[plant.name]}>{addedToCart[plant.name] ? "Added" : "Add to Cart"}</button></div>
      ))}</div>
      <h2>Aromatic Fragrant Plants</h2>
      <div>{plantsArray.filter(p=>p.category==="Aromatic Fragrant Plants").map((plant) => (
        <div key={plant.name}><img src={plant.image} alt={plant.name}/><h3>{plant.name}</h3><p>{plant.cost}</p><button onClick={() => handleAddToCart(plant)} disabled={addedToCart[plant.name]}>{addedToCart[plant.name] ? "Added" : "Add to Cart"}</button></div>
      ))}</div>
      <h2>Insect Repellent Plants</h2>
      <div>{plantsArray.filter(p=>p.category==="Insect Repellent Plants").map((plant) => (
        <div key={plant.name}><img src={plant.image} alt={plant.name}/><h3>{plant.name}</h3><p>{plant.cost}</p><button onClick={() => handleAddToCart(plant)} disabled={addedToCart[plant.name]}>{addedToCart[plant.name] ? "Added" : "Add to Cart"}</button></div>
      ))}</div>
    </div>
  );
}
export default ProductList;
