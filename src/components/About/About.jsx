import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaPalette, FaRocket } from "react-icons/fa";
import "./About.css";
import profilePic from "../../assets/profile.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const highlights = [
  { icon: FaCode, key: "about_highlight_frontend" },
  { icon: FaServer, key: "about_highlight_backend" },
  { icon: FaPalette, key: "about_highlight_design" },
  { icon: FaRocket, key: "about_highlight_learning" },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">{t("about_me_title")}</h2>
      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="about-image-wrapper" variants={itemVariants}>
          <div className="about-image-glow" />
          <img src={profilePic} alt={t("about_img_alt")} />
        </motion.div>

        <motion.div className="about-text" variants={itemVariants}>
          <p className="about-description">{t("about_me_text")}</p>

          <div className="about-highlights">
            {highlights.map(({ icon: Icon, key }) => (
              <div key={key} className="about-highlight-item">
                <span className="about-highlight-icon">
                  <Icon />
                </span>
                <span>{t(key)}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
