import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Contact.css";

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

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">{t("contact_title")}</h2>
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="contact-info" variants={itemVariants}>
          <h3>{t("contact_info_title")}</h3>
          <p className="contact-info-text">{t("contact_info_text")}</p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <FaEnvelope className="contact-detail-icon" />
              <span>mateoposadamontoya@gmail.com</span>
            </div>
            <div className="contact-detail-item">
              <FaMapMarkerAlt className="contact-detail-icon" />
              <span>Antioquia, Colombia</span>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/mateo-posada-montoya-072583352"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/mateoPosada82231"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
