import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const CertificateCard = ({ cert, onClick }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="certificate-card"
      style={{ "--cert-color": cert.color }}
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
    >
      <div className="cert-icon-wrapper">
        <FaCertificate className="cert-icon" />
      </div>
      <div className="cert-info">
        <h3 className="cert-title">{t(cert.titleKey)}</h3>
        <p className="cert-issuer">{t(cert.issuerKey)}</p>
        <span className="cert-date">{t(cert.dateKey)}</span>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
