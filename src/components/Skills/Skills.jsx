import React from "react";
import "./Skills.css";
import Skill from "./Skill";

// Importa tus logos de skills
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
import mongoLogo from "../../assets/mongodb-icon-1.svg";
import springLogo from "../../assets/spring-boot.svg";
import linux from "../../assets/linux.svg";
import typescript from "../../assets/typescript.svg";
import docker from "../../assets/docker.svg";

const skillsData = [
  { name: "React", level: 90, logo: reactLogo, color: "#61DAFB" },
  { name: "JavaScript", level: 85, logo: jsLogo, color: "#F7DF1E" },
  { name: "HTML5", level: 95, logo: htmlLogo, color: "#E34F26" },
  { name: "CSS3", level: 90, logo: cssLogo, color: "#1572B6" },
  { name: "Node.js", level: 75, logo: nodeLogo, color: "#8CC84B" },
  { name: "Spring Boot", level: 60, logo: springLogo, color: "#57ff5d" },
  { name: "Java", level: 50, logo: javaLogo, color: "#007396" },
  { name: "Git", level: 85, logo: gitLogo, color: "#F05032" },
  { name: "GitHub", level: 90, logo: githubLogo, color: "#bbbbbbff" },
  { name: "Linux", level: 57, logo: linux, color: "#FCC624" },
  { name: "Python", level: 70, logo: pythonLogo, color: "#3776AB" },
  { name: "SQL", level: 80, logo: sqlLogo, color: "#E34F26" },
  { name: "PostgreSQL", level: 75, logo: postgresLogo, color: "#336791" },
  { name: "MongoDB", level: 65, logo: mongoLogo, color: "#47A248" },
  { name: "TypeScript", level: 70, logo: typescript, color: "#3178C6" },
  { name: "Docker", level: 50, logo: docker, color: "#2496ED" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Mis Habilidades</h2>
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
