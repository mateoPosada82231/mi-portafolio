import React from "react";
import '../styles/Hero.css';

const Hero = ({ t }) => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>{t?.title || 'Mateo'}</h1>
        <h2>{t?.subtitle || 'Desarrollador Frontend'}</h2>
        <p>{t?.description || 'Apasionado por crear experiencias web modernas, dinámicas y atractivas.'}</p>
      </div>
      <div className="hero-animation">
        <div className="hero-m-spin">
          <span>M</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
