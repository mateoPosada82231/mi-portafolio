import React from "react";
import { useTranslation } from "react-i18next";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import "../Certificates/Certificates.css";

const CvModal = ({ onClose }) => {
  const { t } = useTranslation();
  const cvUrl = import.meta.env.BASE_URL + "Mateo-Posada-Montoya-CV.pdf";

  return (
    <div className="cert-modal-backdrop" onClick={onClose}>
      <div
        className="cert-modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ "--cert-color": "var(--primary-color)" }}
      >
        <button className="cert-modal-close" onClick={onClose}>
          &times;
        </button>

        <h2 className="cert-modal-title">{t("cv")}</h2>

        <div className="cert-pdf-viewer">
          <embed
            src={cvUrl}
            type="application/pdf"
            className="cert-pdf-embed"
          />
          <div className="cert-pdf-fallback">
            <p>{t("cert_pdf_fallback")}</p>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-open-btn"
            >
              <FaExternalLinkAlt />
              {t("cert_open_pdf")}
            </a>
          </div>
        </div>

        <div className="cert-modal-actions">
          <a href={cvUrl} download className="cert-download-btn">
            <FaDownload />
            {t("cv_download")}
          </a>
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-open-btn"
          >
            <FaExternalLinkAlt />
            {t("cert_open_pdf")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CvModal;
