import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Skill = ({ skill }) => {
  const { t } = useTranslation();
  const [offset, setOffset] = useState(283); // 2 * PI * 45 (radius)

  useEffect(() => {
    const progress = skill.level / 100;
    setOffset(283 * (1 - progress));
  }, [skill.level]);

  const getLevelText = (level) => {
    if (level >= 85) return t('level_high');
    if (level >= 60) return t('level_intermediate');
    return t('level_low');
  };

  return (
    <div className="skill-item">
      <div className="skill-circle">
        <svg>
          <circle className="circle-bg" cx="60" cy="60" r="45"></circle>
          <circle
            className="circle-progress"
            cx="60"
            cy="60"
            r="45"
            strokeDasharray="283"
            strokeDashoffset={offset}
          ></circle>
        </svg>
        <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
      </div>
      <h3>{skill.name}</h3>
      <p className="skill-level">{getLevelText(skill.level)}</p>
    </div>
  );
};

export default Skill;
