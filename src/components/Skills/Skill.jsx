import React from 'react';
import { useTranslation } from 'react-i18next';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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
      <div style={{ width: '120px', height: '120px' }}>
        <CircularProgressbar
          value={level}
          styles={buildStyles({
            pathColor: `rgba(100, 255, 218, ${level / 100})`,
            textColor: 'var(--text-color)',
            trailColor: 'var(--border-color)',
            backgroundColor: 'var(--section-background-color)',
          })}
        >
          <img src={logo} alt={`${name} logo`} className="skill-logo" />
        </CircularProgressbar>
      </div>
      <h3 className="skill-name">{name}</h3>
      <p className="skill-level">{getLevelText(level)}</p>
    </div>
  );
};

export default Skill;