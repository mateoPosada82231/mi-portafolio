import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import { FaVideo, FaVideoSlash } from 'react-icons/fa';

const Navbar = ({ videoEnabled, toggleVideo }) => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">Mateo</a>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={() => setMenuOpen(false)}>{t('about')}</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links" onClick={() => setMenuOpen(false)}>{t('projects')}</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-links" onClick={() => setMenuOpen(false)}>{t('skills_title')}</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={() => setMenuOpen(false)}>{t('contact')}</a>
          </li>
          <li className="nav-item-lang">
            <button className="lang-btn" onClick={() => handleLanguageChange('es')}>ES</button>
            <button className="lang-btn" onClick={() => handleLanguageChange('en')}>EN</button>
          </li>
        </ul>
        <div className="nav-controls">
          <button onClick={toggleVideo} className="video-toggle-btn" aria-label="Toggle video background">
            {videoEnabled ? <FaVideo /> : <FaVideoSlash />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
