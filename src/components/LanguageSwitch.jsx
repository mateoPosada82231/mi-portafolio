import React from "react";

const LanguageSwitch = ({ language, onToggle }) => {
  return (
    <button className="language-switch" onClick={onToggle}>
      <span className="language-text">{language === "es" ? "ES" : "EN"}</span>
      <span className="language-icon">🌐</span>
    </button>
  );
};

export default LanguageSwitch;
