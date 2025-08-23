import React from "react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="project-modal" onClick={onClose}>
      <div className="project-modal-content" onClick={e => e.stopPropagation()}>
        <img src={project.img} alt={project.title} className="project-modal-img" />
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className="project-modal-actions">
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
        </div>
        <button className="project-modal-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default ProjectModal;
