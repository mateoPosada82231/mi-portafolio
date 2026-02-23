import React from "react";
import { useTranslation } from "react-i18next";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
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

        <h2 className="cert-modal-title">{t(cert.titleKey)}</h2>

        <div className="cert-modal-meta">
          <span className="cert-modal-issuer">{t(cert.issuerKey)}</span>
          <span className="cert-modal-separator">•</span>
          <span className="cert-modal-date">{t(cert.dateKey)}</span>
        </div>

        <div className="cert-pdf-viewer">
          <embed
            src={cert.pdfUrl}
            type="application/pdf"
            className="cert-pdf-embed"
          />
          <div className="cert-pdf-fallback">
            <p>{t("cert_pdf_fallback")}</p>
            <a
              href={cert.pdfUrl}
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
          <a href={cert.pdfUrl} download className="cert-download-btn">
            <FaDownload />
            {t("cert_download")}
          </a>
          <a
            href={cert.pdfUrl}
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

export default CertificateModal;
