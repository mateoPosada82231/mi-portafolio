import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./Skills.css";

import reactLogo from "../../assets/react-2.svg";
import jsLogo from "../../assets/javascript-2.svg";
import htmlLogo from "../../assets/html.svg";
import cssLogo from "../../assets/css-3.svg";
import nodeLogo from "../../assets/nodejs-1.svg";
import javaLogo from "../../assets/java-4.svg";
import gitLogo from "../../assets/git.svg";
import githubLogo from "../../assets/reshot-icon-github-NY46M9DGFU.svg";
import pythonLogo from "../../assets/python-5.svg";
import sqlLogo from "../../assets/mysql-logo-pure.svg";
import postgresLogo from "../../assets/postgresql.svg";
import springLogo from "../../assets/spring-boot.svg";
import linux from "../../assets/Linux.svg";
import typescript from "../../assets/TypeScript.svg";

const skills = [
  { name: "React", logo: reactLogo, color: "#61DAFB" },
  { name: "JavaScript", logo: jsLogo, color: "#F7DF1E" },
  { name: "TypeScript", logo: typescript, color: "#3178C6" },
  { name: "HTML5", logo: htmlLogo, color: "#E34F26" },
  { name: "CSS3", logo: cssLogo, color: "#1572B6" },
  { name: "Node.js", logo: nodeLogo, color: "#8CC84B" },
  { name: "Spring Boot", logo: springLogo, color: "#6db33f" },
  { name: "Java", logo: javaLogo, color: "#007396" },
  { name: "Python", logo: pythonLogo, color: "#3776AB" },
  { name: "PostgreSQL", logo: postgresLogo, color: "#336791" },
  { name: "SQL", logo: sqlLogo, color: "#4479A1" },
  { name: "Git", logo: gitLogo, color: "#F05032" },
  { name: "GitHub", logo: githubLogo, color: "#8b949e" },
  { name: "Linux", logo: linux, color: "#FCC624" },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <span className="skills-label">TECH STACK</span>
        <h2 className="section-title">{t("skills_title")}</h2>
      </div>

      <motion.div
        className="skills-cloud"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="skill-chip"
            variants={item}
            whileHover={{
              y: -6,
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 15 },
            }}
            whileTap={{ scale: 0.97 }}
            style={{ "--chip-color": skill.color }}
          >
            <img src={skill.logo} alt={skill.name} className="skill-chip__logo" />
            <span className="skill-chip__name">{skill.name}</span>
            <span className="skill-chip__glow" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
