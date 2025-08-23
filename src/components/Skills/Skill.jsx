import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Skill = ({ name, level, logo }) => {
  const { t } = useTranslation();
  const [offset, setOffset] = useState(283); // 2 * PI * 45 (radius)

  useEffect(() => {
    const progress = level / 100;
    setOffset(283 * (1 - progress));
  }, [level]);

  const getLevelText = (level) => {
    if (level < 60) return t('level_low');
    if (level < 85) return t('level_intermediate');
    return t('level_high');
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
        <img src={logo} alt={`${name} logo`} className="skill-logo" />
      </div>
      <h3 className="skill-name">{name}</h3>
      <p className="skill-level">{getLevelText(level)}</p>
    </div>
  );
};

export default Skill;