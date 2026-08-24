import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import { FaSun, FaMoon, FaVideo, FaVideoSlash } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ videoEnabled, toggleVideo }) => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLang = (lng) => {
    i18n.changeLanguage(lng);
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { href: "#about", label: t("about") },
    { href: "#projects", label: t("projects") },
    { href: "#skills", label: t("skills_title") },
    { href: "#certificates", label: t("certificates") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo" onClick={closeMenu}>
          Mateo
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href} className="navbar__item">
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__controls">
          <div className="navbar__lang">
            <button
              className={`navbar__lang-btn ${i18n.language === "es" ? "active" : ""}`}
              onClick={() => handleLang("es")}
            >
              ES
            </button>
            <button
              className={`navbar__lang-btn ${i18n.language === "en" ? "active" : ""}`}
              onClick={() => handleLang("en")}
            >
              EN
            </button>
          </div>

          <button onClick={toggleTheme} className="navbar__icon-btn" aria-label="Toggle theme">
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          {theme === "dark" && (
            <button onClick={toggleVideo} className="navbar__icon-btn" aria-label="Toggle video">
              {videoEnabled ? <FaVideo /> : <FaVideoSlash />}
            </button>
          )}

          <button
            className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`navbar__mobile ${menuOpen ? "open" : ""}`}>
        <ul className="navbar__mobile-links">
          {navLinks.map((link, i) => (
            <li key={link.href} style={{ transitionDelay: `${0.07 * (i + 1)}s` }}>
              <a href={link.href} className="navbar__mobile-link" onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__mobile-extras">
          <div className="navbar__lang navbar__lang--mobile">
            <button
              className={`navbar__lang-btn ${i18n.language === "es" ? "active" : ""}`}
              onClick={() => handleLang("es")}
            >
              ES
            </button>
            <button
              className={`navbar__lang-btn ${i18n.language === "en" ? "active" : ""}`}
              onClick={() => handleLang("en")}
            >
              EN
            </button>
          </div>

          <div className="navbar__mobile-icons">
            <button onClick={toggleTheme} className="navbar__icon-btn" aria-label="Toggle theme">
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
            {theme === "dark" && (
              <button onClick={toggleVideo} className="navbar__icon-btn" aria-label="Toggle video">
                {videoEnabled ? <FaVideo /> : <FaVideoSlash />}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
