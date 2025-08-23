import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';
import profilePic from '../../assets/profile.jpg';
import AnimatedSection from '../animations/AnimatedSection';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <AnimatedSection animationClass="fade-in">
        <h2 className="section-title">{t('about_me_title')}</h2>
      </AnimatedSection>
      <div className="about-content">
        <AnimatedSection animationClass="slide-in-left">
          <div className="about-image">
            <img src={profilePic} alt="Mateo" />
          </div>
        </AnimatedSection>
        <AnimatedSection animationClass="slide-in-right">
          <div className="about-text">
            <p>{t('about_me_text')}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
