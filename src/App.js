import React from 'react';
import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useNavigate } from 'react-router-dom';

function App() {


  const navigate = useNavigate();
  return (
    <div id='main-wrapper'>
      <Header navigate={navigate}/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
