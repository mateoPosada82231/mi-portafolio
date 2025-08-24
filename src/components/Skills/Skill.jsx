import React from 'react';
import './Skills.css';

const Skill = ({ name, level, logo, color }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  const getLevelText = (level) => {
    if (level < 60) return 'Básico';
    if (level < 85) return 'Intermedio';
    return 'Avanzado';
  };

  return (
    // Aquí está el cambio principal: aplicamos el color como una variable CSS
    <div className="skill-item" style={{ '--skill-color': color }}>
      <div className="skill-progress-container">
        <svg className="skill-progress-ring" width="120" height="120">
          <circle
            className="skill-progress-ring__circle-bg"
            strokeWidth="10"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
          />
          <circle
            className="skill-progress-ring__circle"
            strokeWidth="10"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: offset,
              // Ya no necesitamos el 'stroke' en línea aquí
            }}
          />
        </svg>
        <img src={logo} alt={`${name} logo`} className="skill-logo-overlay" />
      </div>
      <h3 className="skill-name">{name}</h3>
      <p className="skill-level">{getLevelText(level)}</p>
    </div>
  );
};

export default Skill;
