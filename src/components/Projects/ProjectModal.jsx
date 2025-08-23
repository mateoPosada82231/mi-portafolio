import React from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css'; // Asegúrate de que los estilos del modal estén aquí o importados

const ProjectModal = ({ project, onClose }) => {
  const { t } = useTranslation();

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>{project.title}</h2>
        <p>{t(project.description)}</p>
        <div className="modal-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={project.live} target="_blank" rel="noopener noreferrer">{t('live_demo')}</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
