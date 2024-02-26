// Header.js

import React, { useState } from 'react';
import './Header.css';

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
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        </div>

      </nav>

      <div className='menu-icon' onClick = {toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
       </div>

    </header>
  );
}

export default Header;
