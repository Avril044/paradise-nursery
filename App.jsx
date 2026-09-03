import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
function App() {
  const [showProductList, setShowProductList] = useState(false);
  const handleGetStartedClick = () => { setShowProductList(true); };
  return (
    <div>
      <div className="landing-page">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Where Green Meets Serenity</p>
        <button onClick={handleGetStartedClick}>Get Started</button>
        <button onClick={handleGetStartedClick}>Comenzar</button>
      </div>
      {showProductList && <ProductList />}
    </div>
  );
}
export default App;
