import React from "react";
import { useTranslation } from "react-i18next";
import { FaDownload, FaCertificate } from "react-icons/fa";
import "./Certificates.css";

const CertificateModal = ({ cert, onClose }) => {
  const { t } = useTranslation();

  return (
    <div className="cert-modal-backdrop" onClick={onClose}>
      <div
        className="cert-modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ "--cert-color": cert.color }}
      >
        <button className="cert-modal-close" onClick={onClose}>
          &times;
        </button>

        <div className="cert-modal-icon">
          <FaCertificate />
        </div>

        <h2 className="cert-modal-title">{t(cert.titleKey)}</h2>

        <div className="cert-modal-details">
          <p>
            <strong>{t("cert_issued_by")}:</strong> {t(cert.issuerKey)}
          </p>
          <p>
            <strong>{t("cert_date")}:</strong> {t(cert.dateKey)}
          </p>
        </div>

        <div className="cert-modal-actions">
          <a
            href={cert.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-download-btn"
          >
            <FaDownload />
            {t("cert_download")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
