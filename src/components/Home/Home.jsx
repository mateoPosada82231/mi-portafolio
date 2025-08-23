import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="home-section">
      {/* Columna de Texto */}
      <div className="home-content">
        <p className="home-intro">{t('home.intro')}</p>
        <h1 className="home-name animated-text-gradient">{t('home.name')}</h1>
        <h2 className="home-title">{t('home.title')}</h2>
        <p className="home-description">{t('home.description')}</p>
        <div className="home-buttons">
          <a href="https://github.com/mateoPosada82231" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/mateo-posada-saldarriaga/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>

      {/* Columna de Animación */}
      <div className="home-animation-container">
        <span className="rotating-m">M</span>
      </div>
    </section>
  );
};

export default Home;
