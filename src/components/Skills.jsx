
import React from "react";
import { skillIcons } from './skillIcons';
import '../styles/skills.css';



const skillsData = [
  { name: 'React', level: 90, color: '#61DAFB', category: 'frontend' },
  { name: 'JavaScript', level: 85, color: '#F7DF1E', category: 'frontend' },
  { name: 'HTML', level: 90, color: '#E34F26', category: 'frontend' },
  { name: 'CSS', level: 85, color: '#1572B6', category: 'frontend' },
  { name: 'Node.js', level: 70, color: '#339933', category: 'backend' },
  { name: 'PHP', level: 60, color: '#777BB4', category: 'backend' },
  { name: 'Java', level: 65, color: '#ED8B00', category: 'backend' },
  { name: 'Git', level: 80, color: '#F05032', category: 'tools' },
  { name: 'GitHub', level: 80, color: '#FFFFFF', category: 'tools' },
  { name: 'Python', level: 60, color: '#3776AB', category: 'backend' },
  { name: 'SQL', level: 65, color: '#4479A1', category: 'database' },
  { name: 'Postgres', level: 60, color: '#336791', category: 'database' },
  { name: 'MongoDB', level: 55, color: '#47A248', category: 'database' },
  { name: 'MySQL', level: 65, color: '#4479A1', category: 'database' },
];

function getLevelText(level) {
  if (level < 60) return 'Bajo';
  if (level < 80) return 'Intermedio';
  return 'Alto';
}

function getStarsCount(level) {
  if (level < 60) return 1;
  if (level < 80) return 2;
  return 3;
}


const Skills = ({ t }) => {
  return (
    <div className="skills-container">
      <h3>{t?.title || 'Habilidades'}</h3>
      <div className="skills-grid">
        {skillsData.map((skill) => {
          const levelClass = getLevelText(skill.level).toLowerCase();
          const starsCount = getStarsCount(skill.level);
          return (
            <div
              className={`skill-card skill-level-${levelClass}`}
              key={skill.name}
              data-skill={skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}
              style={{ '--skill-color': skill.color }}
            >
              <div className="skill-card-inner">
                <div className="skill-icon-wrapper">
                  {skillIcons[skill.name]
                    ? React.createElement(skillIcons[skill.name], {
                        className: 'skill-icon',
                        style: { color: skill.color, width: 36, height: 36 },
                        title: skill.name
                      })
                    : <span className="skill-icon-fallback">{skill.name.charAt(0)}</span>
                  }
                </div>
                <h4 className="skill-name">{skill.name}</h4>
                <div className="skill-level-indicator">
                  <div className="skill-stars">
                    {[...Array(3)].map((_, i) => (
                      <span
                        key={i}
                        className={`skill-star ${i < starsCount ? 'active' : ''}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="skill-level-text">{getLevelText(skill.level)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;


