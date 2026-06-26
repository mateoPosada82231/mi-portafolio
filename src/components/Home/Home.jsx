import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import CvModal from './CvModal';

const Home = () => {
  const { t } = useTranslation();
  const [showCv, setShowCv] = useState(false);

  return (
    <section id="home" className="home-section">
      {/* Columna de Texto */}
      <div className="home-content">
        <p className="home-intro">{t('home.intro')}</p>
        <h1 className="home-name animated-text-gradient">{t('home.name')}</h1>
        <h2 className="home-title">{t('home.title')}</h2>
        <p className="home-description">{t('home.description')}</p>
        <div className="home-buttons">
          <button className="btn btn-cv" onClick={() => setShowCv(true)}>
            <FaFileAlt /> {t('cv')}
          </button>
          <a href="https://github.com/mateoPosada82231" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/mateo-posada-montoya-072583352" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>

      {/* Columna de Animación */}
      <div className="home-animation-container">
        <span className="rotating-m">M</span>
      </div>

      {showCv && <CvModal onClose={() => setShowCv(false)} />}
    </section>
  );
};

export default Home;
