import React from 'react';
import { useTranslation } from 'react-i18next';
import './Skills.css';
import Skill from './Skill';
import AnimatedSection from '../animations/AnimatedSection';
// ... (tus importaciones de logos)
import reactLogo from '../../assets/react-2.svg';
import jsLogo from '../../assets/javascript-2.svg';
import htmlLogo from '../../assets/html.svg';
import cssLogo from '../../assets/css-3.svg';
import nodeLogo from '../../assets/nodejs-1.svg';
import phpLogo from '../../assets/php-6.svg';
import javaLogo from '../../assets/java-4.svg';
import gitLogo from '../../assets/git.svg';
import githubLogo from '../../assets/reshot-icon-github-NY46M9DGFU.svg';
import pythonLogo from '../../assets/python-5.svg';
import sqlLogo from '../../assets/mysql-logo-pure.svg';
import postgresLogo from '../../assets/postgresql.svg';
import mongoLogo from '../../assets/mongodb-icon-1.svg';

const skillsData = [
    { name: 'React', level: 90, logo: reactLogo },
    { name: 'JavaScript', level: 85, logo: jsLogo },
    { name: 'HTML5', level: 95, logo: htmlLogo },
    { name: 'CSS3', level: 90, logo: cssLogo },
    { name: 'Node.js', level: 75, logo: nodeLogo },
    { name: 'PHP', level: 60, logo: phpLogo },
    { name: 'Java', level: 50, logo: javaLogo },
    { name: 'Git', level: 85, logo: gitLogo },
    { name: 'GitHub', level: 90, logo: githubLogo },
    { name: 'Python', level: 70, logo: pythonLogo },
    { name: 'SQL', level: 80, logo: sqlLogo },
    { name: 'PostgreSQL', level: 75, logo: postgresLogo },
    { name: 'MongoDB', level: 65, logo: mongoLogo },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills-section">
      <AnimatedSection animationClass="fade-in">
        <h2 className="section-title">{t('skills_title')}</h2>
      </AnimatedSection>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <AnimatedSection key={skill.name} animationClass="fade-in">
            <div style={{ transitionDelay: `${index * 100}ms` }}>
              <Skill {...skill} />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Skills;