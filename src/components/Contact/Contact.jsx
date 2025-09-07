import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  // Función para manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Función para enviar el formulario
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    // Configuración de EmailJS (reemplaza con tus IDs reales)
    const serviceID = 'service_cbceyi7';
    const templateID = 'template_pm8zngo';
    const publicKey = '46oQfC2rhLC6kMNEL';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Limpiar el formulario
        form.current.reset();
      })
      .catch((error) => {
        console.log('FAILED...', error.text);
        setStatus('error');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">{t('contact_title')}</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>{t('contact_info_title')}</h3>
          <p>{t('contact_info_text')}</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/mateo-posada-saldarriaga/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/mateoPosada82231" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <input 
              type="text" 
              name="name"
              placeholder={t('form_name')} 
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <input 
              type="email" 
              name="email"
              placeholder={t('form_email')} 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <textarea 
              name="message"
              placeholder={t('form_message')} 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Enviando...' : t('form_send')}
            </button>
            
            {/* Mensajes de estado */}
            {status === 'success' && (
              <div className="status-message success">
                ¡Mensaje enviado exitosamente! Te contactaré pronto.
              </div>
            )}
            {status === 'error' && (
              <div className="status-message error">
                Hubo un error al enviar el mensaje. Intenta nuevamente.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
