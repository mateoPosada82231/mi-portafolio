import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
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
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    const serviceID = "service_cbceyi7";
    const templateID = "template_pm8zngo";
    const publicKey = "46oQfC2rhLC6kMNEL";

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
              <span>mateo.posada@example.com</span>
            </div>
            <div className="contact-detail-item">
              <FaMapMarkerAlt className="contact-detail-icon" />
              <span>Colombia</span>
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

        <motion.div className="contact-form" variants={itemVariants}>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t("form_name")}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t("form_email")}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder={t("form_message")}
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" disabled={isLoading} className="submit-btn">
              {isLoading ? (
                <span className="btn-loading">
                  <span className="spinner" />
                  Enviando...
                </span>
              ) : (
                t("form_send")
              )}
            </button>

            {status === "success" && (
              <motion.div
                className="status-message success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {t("form_success")}
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                className="status-message error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {t("form_error")}
              </motion.div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
