import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">{t('contact_title')}</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>{t('contact_info_title')}</h3>
          <p>{t('contact_info_text')}</p>
          <div className="social-links">
            <a href="mailto:mateo@email.com">Email</a>
            <a href="https://linkedin.com">LinkedIn</a>
            <a href="https://github.com">GitHub</a>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder={t('form_name')} required />
            <input type="email" placeholder={t('form_email')} required />
            <textarea placeholder={t('form_message')} rows="5" required></textarea>
            <button type="submit">{t('form_send')}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
