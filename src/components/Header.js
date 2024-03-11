// Header.js

import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Box from './Box';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="navigation-container">
        <h2><Link to= "/myshop" className='title'>Sundar</Link></h2>       
     
      <nav className={`menu-container ${isOpen ? 'open': ''}`}>
      <div className='links'>
      {isOpen && <button className="close-btn" onClick={closeMenu}>X</button>}

        <ul>
          <li><Link to = "/myshop">Home</Link></li>
          <li><Link to = "/product">Product</Link></li>
          <li><a href="#">About</a></li>
          <li><Link to = "/contact">Contact</Link></li>
        </ul>
        </div>

      </nav>
      <div className='myIcons'>     
      <h3><Link to={"/signin"} className= "signinText" >signin</Link></h3>

      {/* Cart button */}
      <div className="cart-button">
        <button className="cart-icon">
          <i className="fa fa-shopping-cart"></i> {/* You can use any cart icon here */}
        </button>
      </div>
      <div className='menu-icon' onClick = {toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>

       </div>
       </div>

       {isOpen && <div className="overlay" onClick={closeMenu}></div>} {/* Overlay element */}


    </header>
  );
}

export default Header;
