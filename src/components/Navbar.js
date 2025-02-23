import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import '../styles/Navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={process.env.PUBLIC_URL + '/iilm-logo.png'} alt="IILM Logo" />
        <span>IILM University</span>
      </div>
      <div className={`nav-links ${isNavOpen ? "active" : ""}`}>
        <a href="#theme" onClick={handleNavLinkClick}>Themes</a>
        <a href="#about-us" onClick={handleNavLinkClick}>About</a>
        <a href="#footer" onClick={handleNavLinkClick}>Contact Us</a>
        <a 
          href="https://docs.google.com/forms/u/3/d/1u-BKbWGZjpMlvq_fzaJo2tMfiMfY8mbNsfkrUd6cH-U/preview?edit_requested=true" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={handleNavLinkClick}
        >
          <button className="register-btn">REGISTER NOW</button>
        </a>
      </div>
      <button className={`nav__button ${isNavOpen ? "fixed" : ""}`} onClick={handleNavToggle}>
        {isNavOpen ? <FaTimes size={25} style={{color: 'white'}} /> : <FaBars size={25} style={{color: 'white'}} />}
      </button>
    </nav>
  );
};

export default Navbar;
