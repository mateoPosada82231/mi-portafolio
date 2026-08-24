import React from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css';

const ProjectModal = ({ project, onClose }) => {
  const { t } = useTranslation();

  const isSimsProject =
    project.github.includes(' | ') &&
    project.github.includes('github.com');

  const renderLinks = () => {
    if (isSimsProject) {
      const entries = project.github.split(' | ');
      return (
        <div className="modal-links">
          <a href={entries[0].replace(/^[^:]+: /, '')} target="_blank" rel="noopener noreferrer">
            GitHub Front
          </a>
          <a href={entries[1].replace(/^[^:]+: /, '')} target="_blank" rel="noopener noreferrer">
            GitHub Back
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              {t('live_demo')}
            </a>
          )}
        </div>
      );
    }

    return (
      <div className="modal-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
      </div>
    );
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>{t(project.titleKey)}</h2>
        <p>{t(project.descriptionKey)}</p>
        {renderLinks()}
      </div>
    </div>
  );
};

export default ProjectModal;