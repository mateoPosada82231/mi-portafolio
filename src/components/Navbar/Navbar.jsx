import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';
import { FaVideo, FaVideoSlash, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ videoEnabled, toggleVideo }) => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">Mateo</a>
        
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={closeMenu}>{t('about')}</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links" onClick={closeMenu}>{t('projects')}</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-links" onClick={closeMenu}>{t('skills_title')}</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links" onClick={closeMenu}>{t('contact')}</a>
          </li>
          <li className="nav-item-lang">
            <button className="lang-btn" onClick={() => handleLanguageChange('es')}>ES</button>
            <button className="lang-btn" onClick={() => handleLanguageChange('en')}>EN</button>
          </li>
        </ul>
        
        <div className="nav-controls">
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          
          {theme === 'dark' && (
            <button onClick={toggleVideo} className="video-toggle-btn" aria-label="Toggle video background">
              {videoEnabled ? <FaVideo /> : <FaVideoSlash />}
            </button>
          )}
          
          <button className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
