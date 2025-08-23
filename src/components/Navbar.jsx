// ...existing code...


import React, { useState } from "react";
import '../styles/navbar-right.css';

const Navbar = ({ onSectionChange, currentSection, t, children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const sections = [
    { id: 'home', label: t?.home || 'Inicio' },
    { id: 'about', label: t?.about || 'Acerca de mí' },
    { id: 'projects', label: t?.projects || 'Proyectos' },
    { id: 'skills', label: t?.skills || 'Habilidades' },
    { id: 'contact', label: t?.contact || 'Contacto' },
  ];

  const handleMenuClick = () => setMenuOpen((open) => !open);
  const handleNavClick = (section) => {
    setMenuOpen(false);
    onSectionChange(section);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" style={{ fontWeight: 700, fontSize: '1.3rem', letterSpacing: '2px', userSelect: 'none' }}>
        <span className="logo-spin">M</span>
      </div>
      <ul className="navbar-menu desktop">
        {sections.map((section) => (
          <li
            key={section.id}
            className={`navbar-item${currentSection === section.id ? ' active' : ''}`}
            onClick={() => handleNavClick(section.id)}
            style={{ cursor: 'pointer', transition: 'color 0.2s' }}
          >
            {section.label}
          </li>
        ))}
      </ul>
      <div className="navbar-right">
        {children}
      </div>
      <div className={`navbar-burger${menuOpen ? ' open' : ''}`} onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-menu mobile${menuOpen ? ' show' : ''}`}>
        {sections.map((section) => (
          <li
            key={section.id}
            className={`navbar-item${currentSection === section.id ? ' active' : ''}`}
            onClick={() => handleNavClick(section.id)}
            style={{ cursor: 'pointer', transition: 'color 0.2s' }}
          >
            {section.label}
          </li>
        ))}
      </ul>
      {menuOpen && <div className="navbar-backdrop" onClick={handleMenuClick}></div>}
    </nav>
  );
};

export default Navbar;
