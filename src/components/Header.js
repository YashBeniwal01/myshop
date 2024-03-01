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
        <h2 className="title">Sundar</h2>       
     
      <nav className={`menu-container ${isOpen ? 'open': ''}`}>
      <div className='links'>
      {isOpen && <button className="close-btn" onClick={closeMenu}>X</button>}

        <ul>
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/box">Product</Link></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        </div>

      </nav>
      <div className='myIcons'>     

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

    </header>
  );
}

export default Header;
