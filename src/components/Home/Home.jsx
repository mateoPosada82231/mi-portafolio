import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <p className="home-intro">{t('home.intro')}</p>
        <h1 className="home-name animated-text-gradient">{t('home.name')}</h1>
        <h2 className="home-title">{t('home.title')}</h2>
        <p className="home-description">{t('home.description')}</p>
        <div className="home-buttons">
          {/* Add any buttons or links here */}
        </div>
      </div>
      <div className="home-animation">
        <div className="rotating-m">M</div>
      </div>
    </section>
  );
};

export default Home;
