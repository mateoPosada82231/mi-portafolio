import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navbar
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',

      // Home
      frontend_developer: 'Frontend Developer',
      home_description: 'Passionate about creating dynamic and modern web applications. Turning ideas into intuitive and engaging user experiences.',

      // About
      about_me_title: 'About Me',
      about_me_text: 'I am a proactive and creative web developer with a strong passion for technology and modern design. I specialize in building responsive and efficient web applications, always seeking to learn and apply the latest industry trends.',

      // Projects
      projects_title: 'My Projects',
      project1_description: 'Description for project 1. A brief summary of the technologies used and its purpose.',
      project2_description: 'Description for project 2. A brief summary of the technologies used and its purpose.',
      project3_description: 'Description for project 3. A brief summary of the technologies used and its purpose.',
      live_demo: 'Live Demo',

      // Skills
      skills_title: 'My Skills',
      level_low: 'Beginner',
      level_intermediate: 'Intermediate',
      level_high: 'Advanced',

      // Contact
      contact_title: 'Get in Touch',
      contact_info_title: 'Let\'s Connect!',
      contact_info_text: 'I am currently looking for new opportunities. Feel free to contact me. I will get back to you as soon as possible!',
      form_name: 'Your Name',
      form_email: 'Your Email',
      form_message: 'Your Message',
      form_send: 'Send Message'
    }
  },
  es: {
    translation: {
      // Navbar
      about: 'Sobre mí',
      projects: 'Proyectos',
      contact: 'Contacto',

      // Home
      frontend_developer: 'Desarrollador Frontend',
      home_description: 'Apasionado por la creación de aplicaciones web dinámicas y modernas. Convierto ideas en experiencias de usuario intuitivas y atractivas.',

      // About
      about_me_title: 'Sobre Mí',
      about_me_text: 'Soy un desarrollador web proactivo y creativo, con una fuerte pasión por la tecnología y el diseño moderno. Me especializo en la construcción de aplicaciones web responsivas y eficientes, buscando siempre aprender y aplicar las últimas tendencias de la industria.',

      // Projects
      projects_title: 'Mis Proyectos',
      project1_description: 'Descripción para el proyecto 1. Un breve resumen de las tecnologías usadas y su finalidad.',
      project2_description: 'Descripción para el proyecto 2. Un breve resumen de las tecnologías usadas y su finalidad.',
      project3_description: 'Descripción para el proyecto 3. Un breve resumen de las tecnologías usadas y su finalidad.',
      live_demo: 'Ver Demo',

      // Skills
      skills_title: 'Mis Habilidades',
      level_low: 'Básico',
      level_intermediate: 'Intermedio',
      level_high: 'Avanzado',

      // Contact
      contact_title: 'Ponte en Contacto',
      contact_info_title: '¡Conectemos!',
      contact_info_text: 'Actualmente estoy en búsqueda de nuevas oportunidades. No dudes en contactarme. ¡Te responderé lo antes posible!',
      form_name: 'Tu Nombre',
      form_email: 'Tu Correo',
      form_message: 'Tu Mensaje',
      form_send: 'Enviar Mensaje'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
