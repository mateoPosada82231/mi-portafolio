import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./Certificates.css";
import CertificateCard from "./CertificateCard";
import CertificateModal from "./CertificateModal";

const certificatesData = [
  {
    id: 1,
    titleKey: "cert1_title",
    issuerKey: "cert1_issuer",
    dateKey: "cert1_date",
    pdfUrl: "/certificados/LinuxEssentialsUpdate20251118-31-psud9f.pdf",
    color: "#054ADA",
  },
  {
    id: 2,
    titleKey: "cert2_title",
    issuerKey: "cert2_issuer",
    dateKey: "cert2_date",
    pdfUrl: "/certificados/IBMDesign20251211-32-19py9l.pdf",
    color: "#BE95FF",
  },
  {
    id: 3,
    titleKey: "cert3_title",
    issuerKey: "cert3_issuer",
    dateKey: "cert3_date",
    pdfUrl: "/certificados/IBMDesign20251215-31-43xc9f.pdf",
    color: "#08BDBA",
  },
  {
    id: 4,
    titleKey: "cert4_title",
    issuerKey: "cert4_issuer",
    dateKey: "cert4_date",
    pdfUrl: "/certificados/IBMDesign20260105-34-qbenh5.pdf",
    color: "#FF7EB6",
  },
  {
    id: 5,
    titleKey: "cert5_title",
    issuerKey: "cert5_issuer",
    dateKey: "cert5_date",
    pdfUrl: "/certificados/Certificado_mateo-posada-montoya.pdf",
    color: "#F7DF1E",
  },
  {
    id: 6,
    titleKey: "cert6_title",
    issuerKey: "cert6_issuer",
    dateKey: "cert6_date",
    pdfUrl: "/certificados/certificate A2.pdf",
    color: "#4CAF50",
  },
  {
    id: 7,
    titleKey: "cert7_title",
    issuerKey: "cert7_issuer",
    dateKey: "cert7_date",
    pdfUrl: "/certificados/9838227_10131642_1770940533433.pdf",
    color: "#FF6B6B",
  },
  {
    id: 8,
    titleKey: "cert8_title",
    issuerKey: "cert8_issuer",
    dateKey: "cert8_date",
    pdfUrl:
      "/certificados/mateo-posada-montoya-b79964e1-aff4-4d83-a30a-c80dfd88f145-certificate.pdf",
    color: "#61DAFB",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const Certificates = () => {
  const { t } = useTranslation();
  const [modalData, setModalData] = useState(null);

  const openModal = (cert) => {
    setModalData(cert);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <section id="certificates" className="certificates-section">
      <h2 className="section-title">{t("certificates_title")}</h2>
      <motion.div
        className="certificates-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {certificatesData.map((cert) => (
          <CertificateCard
            key={cert.id}
            cert={cert}
            onClick={() => openModal(cert)}
          />
        ))}
      </motion.div>

      {modalData && <CertificateModal cert={modalData} onClose={closeModal} />}
    </section>
  );
};

export default Certificates;
