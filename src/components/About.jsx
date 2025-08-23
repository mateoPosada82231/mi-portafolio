import React from "react";
import '../styles/About.css';

const About = ({ t }) => {
  return (
    <section className="about">
      <div className="about-photo">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Mateo"
          className="about-img"
        />
      </div>
      <div className="about-text">
        <h3>{t?.title || 'Acerca de mí'}</h3>
        <p>{t?.description || 'Aquí va una breve descripción personal y profesional.'}</p>
      </div>
    </section>
  );
};

export default About;
