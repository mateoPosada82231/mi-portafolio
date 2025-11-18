import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Projects.css';
import ProjectModal from './ProjectModal';

// Importa tus imágenes de proyectos
import proj1 from '../../assets/p-marvel.jpg';
import proj2 from '../../assets/p-hairhub.jpg';
// import proj3 from '../../assets/proj3.jpg';

const projectsData = [
  {
    id: 1,
    titleKey: 'project1_title',
    descriptionKey: 'project1_description',
    image: proj1,
    github: 'https://github.com/mateoPosada82231/marvel',
    live: 'https://github.com',
  },
  {
    id: 2,
    titleKey: 'project2_title',
    descriptionKey: 'project2_description',
    image: proj2,
    github: 'https://github.com/mateoPosada82231/car-dealership',
    live: 'https://cardealership.com',
  },
  // {
  //   id: 3,
  //   titleKey: 'project3_title',
  //   descriptionKey: 'project3_description',
  //   image: proj3,
  //   github: 'https://github.com',
  //   live: 'https://github.com',
  // },
];

// Variantes para la animación de entrada escalonada
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const Projects = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalData, setModalData] = useState(null);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
  };

  const openModal = (project) => {
    setModalData(project);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const progress = ((currentIndex + 1) / projectsData.length) * 100;

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">{t('projects_title')}</h2>
      <div className="carousel-container">
        <button onClick={prevProject} className="carousel-arrow prev-arrow">‹</button>
        <motion.div
          className="carousel-track-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                className="carousel-item"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                onClick={() => openModal(project)}
              >
                <div className="project-content-wrapper">
                  <motion.img
                    src={project.image}
                    alt={t(project.titleKey)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="project-overlay">
                    <h3>{t(project.titleKey)}</h3>
                    <p>{t('click_more')}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <button onClick={nextProject} className="carousel-arrow next-arrow">›</button>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      {modalData && <ProjectModal project={modalData} onClose={closeModal} />}
    </section>
  );
};

export default Projects;
