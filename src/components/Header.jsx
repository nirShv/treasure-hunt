import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <img src="/logo.png" alt="לוגו" className="logo" />
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</div>
      <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <a href="#about">על השירות</a>
        <a href="#packages">חבילות</a>
        <a href="#gallery">גלריה</a>
        <a href="#testimonials">המלצות</a>
        <a href="#contact">צור קשר</a>
      </nav>
    </header>
  );
}

export default Header;
