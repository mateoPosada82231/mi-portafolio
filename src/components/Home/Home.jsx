import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>Mateo</h1>
        <h2>{t('frontend_developer')}</h2>
        <p>{t('home_description')}</p>
      </div>
      <div className="home-animation">
        <div className="rotating-m">M</div>
      </div>
    </section>
  );
};

export default Home;
