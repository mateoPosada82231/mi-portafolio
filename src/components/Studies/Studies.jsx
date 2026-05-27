import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCode,
  FaServer,
  FaDatabase,
  FaProjectDiagram,
} from "react-icons/fa";
import "./Studies.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
  },
};

const Studies = () => {
  const { t } = useTranslation();

  return (
    <section id="studies" className="studies-section">
      <h2 className="section-title">{t("studies_title")}</h2>

      <motion.div
        className="studies-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >

        {/* Degree Card */}
        <motion.div className="studies-card-wrapper" variants={itemVariants}>
          <div className="studies-timeline-dot" />
          <div className="studies-card studies-degree">
            <div className="studies-card-top">
              <div className="studies-icon-wrapper">
                <FaGraduationCap className="studies-card-icon" />
              </div>
              <span className="studies-badge studies-badge-current">
                {t("studies_badge_current")}
              </span>
            </div>
            <h3 className="studies-card-title">{t("studies_degree_title")}</h3>
            <div className="studies-card-meta">
              <span className="studies-meta-item">
                <FaMapMarkerAlt className="studies-meta-icon" />
                {t("studies_degree_institution")}
              </span>
              <span className="studies-meta-item">
                <FaCalendarAlt className="studies-meta-icon" />
                {t("studies_degree_period")}
              </span>
            </div>
            <p className="studies-card-desc">{t("studies_degree_desc")}</p>
            <div className="studies-tags">
              <span className="studies-tag">
                <FaCode /> {t("studies_tag_software")}
              </span>
              <span className="studies-tag">
                <FaServer /> {t("studies_tag_algorithms")}
              </span>
              <span className="studies-tag">
                <FaDatabase /> {t("studies_tag_databases")}
              </span>
              <span className="studies-tag">
                <FaProjectDiagram /> {t("studies_tag_systems")}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bootcamp Card */}
        <motion.div className="studies-card-wrapper" variants={itemVariants}>
          <div className="studies-timeline-dot" />
          <div className="studies-card studies-bootcamp">
            <div className="studies-card-top">
              <div className="studies-icon-wrapper">
                <FaLaptopCode className="studies-card-icon" />
              </div>
              <span className="studies-badge studies-badge-progress">
                {t("studies_badge_in_progress")}
              </span>
            </div>
            <h3 className="studies-card-title">
              {t("studies_bootcamp_title")}
            </h3>
            <div className="studies-card-meta">
              <span className="studies-meta-item">
                <FaMapMarkerAlt className="studies-meta-icon" />
                {t("studies_bootcamp_institution")}
              </span>
              <span className="studies-meta-item">
                <FaCalendarAlt className="studies-meta-icon" />
                {t("studies_bootcamp_period")}
              </span>
            </div>
            <p className="studies-card-desc">{t("studies_bootcamp_desc")}</p>
            <div className="studies-tags">
              <span className="studies-tag">
                <FaCode /> {t("studies_tag_frontend")}
              </span>
              <span className="studies-tag">
                <FaServer /> {t("studies_tag_backend")}
              </span>
              <span className="studies-tag">
                <FaDatabase /> {t("studies_tag_api")}
              </span>
              <span className="studies-tag">
                <FaProjectDiagram /> {t("studies_tag_projects")}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Studies;
