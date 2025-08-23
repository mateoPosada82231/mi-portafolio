import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';
import AnimatedSection from '../animations/AnimatedSection';
import '../animations/animations.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <AnimatedSection animationClass="slide-in-left">
          <div className="home-text">
            <h1 className="home-name">Mateo Posada</h1>
            <h2 className="home-title">{t('frontend_developer')}</h2>
            <p className="home-description">{t('home_description')}</p>
          </div>
        </AnimatedSection>
        <AnimatedSection animationClass="fade-in">
          <div className="home-animation">
            <div className="spinning-m-container">
              <div className="spinning-m">M</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Home;
