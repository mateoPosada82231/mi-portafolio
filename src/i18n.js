import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navbar
      about: "About",
      projects: "Projects",
      contact: "Contact",

      // Home
      home: {
        intro: "Hi, my name is",
        name: "Mateo Posada",
        title: "Frontend Developer",
        description:
          "Passionate about creating dynamic and modern web applications. Turning ideas into intuitive and engaging user experiences.",
      },

      // About
      about_me_title: "About Me",
      about_me_text:
        "I am a proactive and creative web developer with a strong passion for technology and modern design. I specialize in building responsive and efficient web applications, always seeking to learn and apply the latest industry trends.",

      // Projects
      projects_title: "My Projects",
      project1_title: "Marvel Character Finder",
      project1_description:
        "Project built with React, Tailwind CSS and the Marvel API. Allows you to search for characters, view details and explore related comics. Includes pagination and responsive design.",
      project2_title: "Car Dealership",
      project2_description:
        "Application that connects backend and frontend to manage a car dealership. Allows users to view, search, delete and modify vehicles.",
      project3_title: "Hangman - ARM Assembly",
      project3_description:
        "Classic Hangman game written entirely in ARM Assembly language, designed to run on a Raspberry Pi emulated with QEMU. Explores low-level programming, registers, and system calls.",
      project4_title: "BookHub",
      project4_description:
        "Social network-style booking platform for beauty and wellness services. Built with Java 21, Spring Boot 3.5 and Next.js 16 with TypeScript. Features JWT authentication, user roles and appointment management with PostgreSQL.",
      project5_title: "Huffman Compressor",
      project5_description:
        "Lossless file compressor implemented in C++ using the Huffman algorithm. Features a custom .HUB binary format, compression statistics, interactive menu, and cross-platform support with CMake.",
      project6_title: "Polyglot Social Network",
      project6_description:
        "Social network (AmigosDB) with polyglot persistence using PostgreSQL and Neo4j. Includes automated migration between databases, Tkinter GUI, JSON backups, detailed reports, and post-migration integrity validation. Built with Python.",
      live_demo: "Live Demo",
      click_more: "Click to see more",

      // Skills
      skills_title: "My Skills",
      level_low: "Learning",
      level_intermediate: "Intermediate",
      level_high: "Advanced",

      // Certificates (EN)
      certificates: "Certificates",
      certificates_title: "My Certificates",
      cert_download: "Download PDF",
      cert_open_pdf: "Open PDF",
      cert_pdf_fallback: "PDF preview not available on this device.",
      cert_issued_by: "Issued by",
      cert_date: "Date",

      // 1
      cert1_title: "Linux Essentials",
      cert1_issuer: "Cisco Networking Academy / NDG",
      cert1_date: "Nov 2025",

      // 2
      cert2_title: "MongoDB for SQL Professionals",
      cert2_issuer: "MongoDB, Inc.",
      cert2_date: "Aug 2025",

      // 3
      cert3_title: "Cloud Computing Fundamentals",
      cert3_issuer: "IBM",
      cert3_date: "Jan 2026",

      // 4
      cert4_title: "Artificial Intelligence Fundamentals",
      cert4_issuer: "IBM",
      cert4_date: "Dec 2025",

      // 5
      cert5_title: "Backend Development",
      cert5_issuer: "Nodo - Eafit",
      cert5_date: "Dec 2025",

      // 6
      cert6_title: "Data Fundamentals",
      cert6_issuer: "IBM",
      cert6_date: "Jan 2026",

      // 7
      cert7_title: "English A2",
      cert7_issuer: "Speexx",
      cert7_date: "Jan 2026",

      // 8
      cert8_title: "Software Testing with Generative AI",
      cert8_issuer: "Simplilearn",
      cert8_date: "Feb 2026",

      // Contact
      contact_title: "Get in Touch",
      contact_info_title: "Let's Connect!",
      contact_info_text:
        "I am currently looking for new opportunities. Feel free to contact me. I will get back to you as soon as possible!",
      form_name: "Your Name",
      form_email: "Your Email",
      form_message: "Your Message",
      form_send: "Send Message",
    },
  },
  es: {
    translation: {
      // Navbar
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",

      // Home
      home: {
        intro: "Hola, mi nombre es",
        name: "Mateo Posada",
        title: "Desarrollador Frontend",
        description:
          "Apasionado por la creación de aplicaciones web dinámicas y modernas. Convierto ideas en experiencias de usuario intuitivas y atractivas.",
      },

      // About
      about_me_title: "Sobre Mí",
      about_me_text:
        "Soy un desarrollador web proactivo y creativo, con una fuerte pasión por la tecnología y el diseño moderno. Me especializo en la construcción de aplicaciones web responsivas y eficientes, buscando siempre aprender y aplicar las últimas tendencias de la industria.",

      // Projects
      projects_title: "Mis Proyectos",
      project1_title: "Buscador de personajes Marvel",
      project1_description:
        "Proyecto realizado con React, Tailwind CSS y la API de Marvel. Permite buscar personajes, ver detalles y explorar cómics relacionados. Incluye paginación y diseño responsivo.",
      project2_title: "Concesionario de Autos",
      project2_description:
        "Aplicación que une backend y frontend para gestionar un concesionario de coches. Permite a los usuarios ver, buscar, eliminar y modificar vehículos.",
      project3_title: "Ahorcado - ARM Assembly",
      project3_description:
        "Juego clásico del Ahorcado escrito completamente en lenguaje ensamblador ARM, diseñado para ejecutarse en una Raspberry Pi emulada con QEMU. Explora programación a bajo nivel, registros y llamadas al sistema.",
      project4_title: "BookHub",
      project4_description:
        "Plataforma estilo red social para descubrir y reservar servicios de belleza y bienestar. Desarrollada con Java 21, Spring Boot 3.5 y Next.js 16 con TypeScript. Incluye autenticación JWT, roles de usuario y gestión de citas con PostgreSQL.",
      project5_title: "Compresor Huffman",
      project5_description:
        "Compresor de archivos sin pérdidas implementado en C++ usando el algoritmo de Huffman. Incluye formato binario .HUB personalizado, estadísticas de compresión, menú interactivo y soporte multiplataforma con CMake.",
      project6_title: "Red Social Políglota",
      project6_description:
        "Red social (AmigosDB) con persistencia políglota usando PostgreSQL y Neo4j. Incluye migración automatizada entre bases de datos, interfaz gráfica con Tkinter, backups en JSON, reportes detallados y validación de integridad post-migración. Desarrollada en Python.",
      live_demo: "Ver Demo",
      click_more: "Haz clic para ver más",

      // Skills
      skills_title: "Mis Habilidades",
      level_low: "Aprendiendo",
      level_intermediate: "Intermedio",
      level_high: "Avanzado",

      // Certificates (ES)
      certificates: "Certificados",
      certificates_title: "Mis Certificados",
      cert_download: "Descargar PDF",
      cert_open_pdf: "Abrir PDF",
      cert_pdf_fallback: "Vista previa no disponible en este dispositivo.",
      cert_issued_by: "Emitido por",
      cert_date: "Fecha",

      // 1
      cert1_title: "Linux Essentials",
      cert1_issuer: "Cisco Networking Academy / NDG",
      cert1_date: "Nov 2025",

      // 2
      cert2_title: "MongoDB for SQL Professionals",
      cert2_issuer: "MongoDB, Inc.",
      cert2_date: "Ago 2025",

      // 3
      cert3_title: "Cloud Computing Fundamentals",
      cert3_issuer: "IBM",
      cert3_date: "Ene 2026",

      // 4
      cert4_title: "Artificial Intelligence Fundamentals",
      cert4_issuer: "IBM",
      cert4_date: "Dic 2025",

      // 5
      cert5_title: "Backend Development",
      cert5_issuer: "Nodo - Eafit",
      cert5_date: "Dic 2025",

      // 6
      cert6_title: "Data Fundamentals",
      cert6_issuer: "IBM",
      cert6_date: "Dic 2025",

      // 7
      cert7_title: "English A2",
      cert7_issuer: "Speexx",
      cert7_date: "Ene 2026",

      // 8
      cert8_title: "Software Testing with Generative AI",
      cert8_issuer: "Simplilearn",
      cert8_date: "Feb 2026",

      // Contact
      contact_title: "Ponte en Contacto",
      contact_info_title: "¡Conectemos!",
      contact_info_text:
        "Actualmente estoy en búsqueda de nuevas oportunidades. No dudes en contactarme. ¡Te responderé lo antes posible!",
      form_name: "Tu Nombre",
      form_email: "Tu Correo",
      form_message: "Tu Mensaje",
      form_send: "Enviar Mensaje",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
