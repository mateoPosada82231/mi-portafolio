import React from 'react';
import { useTranslation } from 'react-i18next';
import './Skills.css';

const Skill = ({ name, level, logo }) => {
  const { t } = useTranslation();

  const getLevelText = (level) => {
    if (level < 60) return t('level_low');
    if (level < 85) return t('level_intermediate');
    return t('level_high');
  };

  return (
    <div className="skill-item">
      <div className="skill-circle-container">
        <div className="skill-circle" style={{ '--p': level }}>
          <img src={logo} alt={`${name} logo`} className="skill-logo" />
        </div>
      </div>
      <h3 className="skill-name">{name}</h3>
      <p className="skill-level">{getLevelText(level)}</p>
    </div>
  );
};

export default Skill;
