import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
function App(){
 return(
  <div className="landing-page">
   <h1>Paradise Nursery</h1>
   <p>Where Green Meets Serenity</p>
   <Link to="/products"><button>Comenzar</button></Link>
   <Link to="/products"><button>Get Started</button></Link>
  </div>
 )
}
export default App;
