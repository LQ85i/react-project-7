import React, { useState } from 'react';
import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useNavigate } from 'react-router-dom';
import Cart from './Components/Cart';
import SidebarCart from './Components/SidebarCart';


function App() {
  const cart = new Cart();
  const [showCart, setShowCart] = useState("hidden");
  const navigate = useNavigate();

  return (
    <div id='main-wrapper'>
      <Header navigate={navigate} cart={cart} showCart={showCart} setShowCart={setShowCart} />
      <SidebarCart cart={cart} showCart={showCart} setShowCart={setShowCart}/>
      <Content navigate={navigate} cart={cart}/>
      <Footer />
    </div>
  );
}

export default App;
