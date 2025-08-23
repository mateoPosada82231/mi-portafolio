import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css'; // Usaremos el mismo CSS por ahora

const ProjectModal = ({ project, onClose }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        <img src={project.image} alt="Project" className="modal-image" />
        <div className="modal-body">
          <p>{t(project.description)}</p>
          <div className="modal-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-link">GitHub</a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="modal-link">{t('live_demo')}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
