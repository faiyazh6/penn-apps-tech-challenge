import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.tsx';
import Apply_section from "./Apply-section"; 
import About_section from "./About-section"; 
import banner from './banner.png';
import landingBackground from './landing-background.png';
import footer from './footer-background.png'; 
import Countdown from "./Countdown.jsx"; 

function App() {
  return (
    
    <Router>
      <div className="App"> 
      
      <header className="App-header"> 
        <img src={banner} className="fixed-header" alt="The Banner" />
        <div className="text-container">
          <p>September 8-10, 2023</p>
        </div>
        <Countdown />
        <img src={landingBackground} className="fixed-landing" alt="The landing"/>
      </header>

      <Navbar />
      
      <Apply_section />

      <About_section />

      <img src={footer} className="footer"/>

    </div>
    </Router>
  );
}

export default App;