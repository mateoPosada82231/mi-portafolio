import React from "react";
import { useState } from "react";

// Importar iconos locales
import emailIcon from '../assets/icons/email.svg';
import phoneIcon from '../assets/icons/phone.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import githubContactIcon from '../assets/icons/github-contact.svg';

const Contact = ({ t }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Por favor completa todos los campos.');
      return;
    }
    // Aquí puedes integrar EmailJS, Formspree, etc.
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact">
      <h3>{t?.title || 'Contacto'}</h3>
      <div className="contact-content">
        <div className="contact-info">
          <h4>Información de Contacto</h4>
          <div className="contact-detail">
            <img src={emailIcon} alt="Email" className="contact-icon" />
            <span>tuemail@dominio.com</span>
          </div>
          <div className="contact-detail">
            <img src={phoneIcon} alt="Teléfono" className="contact-icon" />
            <span>+1 (234) 567-8900</span>
          </div>
          <div className="contact-detail">
            <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
            <span>linkedin.com/in/tuusuario</span>
          </div>
          <div className="contact-detail">
            <img src={githubContactIcon} alt="GitHub" className="contact-icon" />
            <span>github.com/tuusuario</span>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="name"
            placeholder={t?.name || 'Nombre'}
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t?.email || 'Correo electrónico'}
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder={t?.message || 'Mensaje'}
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
          />
          <button type="submit">{t?.send || 'Enviar'}</button>
          {error && <div className="contact-error">{error}</div>}
          {sent && <div className="contact-success">¡Mensaje enviado! 🚀</div>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
