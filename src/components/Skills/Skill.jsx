import React from "react";
import { useTranslation } from "react-i18next";
import "./Skills.css";

const Skill = ({ name, level, logo, color }) => {
  const { t } = useTranslation();
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  const getLevelText = (level) => {
    if (level < 60) return t("level_low");
    if (level < 85) return t("level_intermediate");
    return t("level_high");
  };

  return (
    <div className="skill-item" style={{ "--skill-color": color }}>
      <div className="skill-progress-container">
        <svg
          className="skill-progress-ring"
          viewBox="0 0 120 120"
          width="100%"
          height="100%"
        >
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
