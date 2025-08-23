import React, { useState } from "react";
import Carousel from "./Carousel";
import ProjectModal from "./ProjectModal";

// Ejemplo de proyectos (puedes reemplazar por tus datos reales)
const demoProjects = [
  {
    id: 1,
    title: 'Portafolio Personal',
    img: 'https://placehold.co/300x180/232b4a/6ec6ff?text=Proyecto+1',
    description: 'Mi portafolio personal con animaciones y diseño moderno.',
    github: 'https://github.com/',
    demo: 'https://demo.com/'
  },
  {
    id: 2,
    title: 'E-commerce React',
    img: 'https://placehold.co/300x180/232b4a/6ec6ff?text=Proyecto+2',
    description: 'Tienda online con React y Node.js.',
    github: 'https://github.com/',
    demo: 'https://demo.com/'
  },
  {
    id: 3,
    title: 'Blog Animado',
    img: 'https://placehold.co/300x180/232b4a/6ec6ff?text=Proyecto+3',
    description: 'Blog personal con animaciones y dark mode.',
    github: 'https://github.com/',
    demo: 'https://demo.com/'
  }
];

const Projects = ({ t }) => {
  const [selected, setSelected] = useState(null);
  return (
    <section className="projects">
      <div className="projects-container">
        <h3>{t?.title || 'Proyectos'}</h3>
        <p className="projects-intro">
          {t?.intro || 'Haz clic en un proyecto para ver más detalles y enlaces'}
        </p>
        <Carousel projects={demoProjects} onSelect={setSelected} />
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  );
};

export default Projects;
