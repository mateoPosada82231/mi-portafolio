import React from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css';

const ProjectModal = ({ project, onClose }) => {
  const { t } = useTranslation();

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>{t(project.titleKey)}</h2>
        <p>{t(project.descriptionKey)}</p>
        <div className="modal-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          {/* <a href={project.live} target="_blank" rel="noopener noreferrer">{t('live_demo')}</a> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
