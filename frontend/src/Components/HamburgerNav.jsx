import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './HamburgerNav.css'; // Ensure you have the CSS file for styling


export default function HamburgerNav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <nav
      className="navbar"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="navbar-container">
        <h1 className="logo" onClick={() => navigate('/')}>Bull Review</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      <ul className={`dropdown ${isOpen ? 'show' : ''}`}>
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/authorinfo')}>Author Info</li>
        <li onClick={() => navigate('/resources')}>Resources</li>
      </ul>
    </nav>
  );
}

