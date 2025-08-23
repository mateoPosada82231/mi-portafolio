import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';
import profilePic from '../../assets/profile.jpg'; // Asegúrate de tener una imagen de perfil en src/assets

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">{t('about_me_title')}</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={profilePic} alt="Mateo" />
        </div>
        <div className="about-text">
          <p>{t('about_me_text')}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
