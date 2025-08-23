import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Projects.css';
import ProjectModal from './ProjectModal';
import AnimatedSection from '../animations/AnimatedSection';

// Importa tus imágenes de proyectos
import proj1 from '../../assets/proj1.png';
import proj2 from '../../assets/proj2.png';
import proj3 from '../../assets/proj3.png';

const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'project1_description',
    image: proj1,
    github: 'https://github.com',
    live: 'https://github.com',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'project2_description',
    image: proj2,
    github: 'https://github.com',
    live: 'https://github.com',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'project3_description',
    image: proj3,
    github: 'https://github.com',
    live: 'https://github.com',
  },
];

const Projects = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="projects-section">
        <AnimatedSection animationClass="fade-in">
          <h2 className="section-title">{t('projects_title')}</h2>
        </AnimatedSection>
        <AnimatedSection animationClass="slide-in-up">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ type: 'progressbar' }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="projects-carousel"
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id} className="project-slide" onClick={() => setSelectedProject(project)}>
                <img src={project.image} alt={`Project ${project.id}`} />
                <div className="project-overlay">
                  <p>Ver Detalles</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedSection>
      </section>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
};

export default Projects;
