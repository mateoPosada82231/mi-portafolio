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
        title: "Full Stack Developer",
        description:
          "Passionate about building end-to-end web applications with modern frontends, APIs, and cloud-ready backend services. I turn ideas into robust, scalable experiences.",
      },

      // About
      about_me_title: "About Me",
      about_me_text:
        "I am a proactive and creative full stack developer with a strong passion for technology and modern design. I specialize in building responsive user interfaces, RESTful APIs, and backend services while continuously learning the latest industry trends.",
      about_img_alt: "Mateo Posada profile photo",
      about_highlight_frontend: "Frontend Development",
      about_highlight_backend: "Backend & APIs",
      about_highlight_design: "UI/UX Design",
      about_highlight_learning: "Continuous Learning",

      // Projects
      projects_title: "My Projects",
      project1_title: "Marvel Character Finder",
      project1_description:
        "Project built with React, Tailwind CSS and the Marvel API. Allows you to search for characters, view details and explore related comics. Includes pagination and responsive design.",
      project2_title: "Car Dealership",
      project2_description:
        "Full stack application that connects backend and frontend to manage a car dealership. Features a REST API, CRUD operations, search filters, and a responsive UI.",
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
      project7_title: "Electronic Arts Technical Challenge",
      project7_description:
        "Full stack technical challenge for Electronic Arts. REST API built with Spring Boot and PostgreSQL for simulating expansion package management and purchase for the Sims game.",
      live_demo: "Live Demo",
      click_more: "Click to see more",

      // Skills
      skills_title: "My Skills",
      level_low: "Learning",
      level_intermediate: "Intermediate",
      level_high: "Advanced",

      // Studies (EN)
      studies_title: "Studies",
      studies_badge_current: "In Progress",
      studies_badge_in_progress: "In Progress",
      studies_degree_title: "BSc. in Computer Engineering",
      studies_degree_institution: "Politécnico Colombiano Jaime Isaza Cadavid",
      studies_degree_period: "2022 - Present",
      studies_degree_desc: "Currently in the 7th semester. Solid foundation in software engineering, algorithms, data structures, systems design, and computer architecture. Passionate about applying theoretical knowledge to build real-world full stack solutions.",
      studies_bootcamp_title: "Web Development Bootcamp",
      studies_bootcamp_institution: "Nodo - EAFIT",
      studies_bootcamp_period: "2025 - Present",
      studies_bootcamp_desc: "Intensive full stack training covering both backend (APIs, databases, authentication) and frontend (React, modern frameworks). Emphasis on teamwork, agile methodologies, and real-world project-based learning.",
      studies_tag_software: "Software Eng.",
      studies_tag_algorithms: "Algorithms",
      studies_tag_databases: "Databases",
      studies_tag_systems: "Systems Design",
      studies_tag_frontend: "Frontend",
      studies_tag_backend: "Backend",
      studies_tag_api: "APIs",
      studies_tag_projects: "Real Projects",
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
      form_success: "Message sent successfully! I will get back to you soon.",
      form_error: "Something went wrong. Please try again.",
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
        title: "Desarrollador Full Stack",
        description:
          "Apasionado por construir aplicaciones web de extremo a extremo con frontends modernos, APIs y servicios backend preparados para la nube. Convierto ideas en experiencias robustas y escalables.",
      },

      // About
      about_me_title: "Sobre Mí",
      about_me_text:
        "Soy un desarrollador full stack proactivo y creativo, con una fuerte pasión por la tecnología y el diseño moderno. Me especializo en crear interfaces responsivas, APIs REST y servicios backend, buscando siempre aprender y aplicar las últimas tendencias de la industria.",
      about_img_alt: "Foto de perfil de Mateo Posada",
      about_highlight_frontend: "Desarrollo Frontend",
      about_highlight_backend: "Backend y APIs",
      about_highlight_design: "Diseño UI/UX",
      about_highlight_learning: "Aprendizaje Continuo",

      // Projects
      projects_title: "Mis Proyectos",
      project1_title: "Buscador de personajes Marvel",
      project1_description:
        "Proyecto realizado con React, Tailwind CSS y la API de Marvel. Permite buscar personajes, ver detalles y explorar cómics relacionados. Incluye paginación y diseño responsivo.",
      project2_title: "Concesionario de Autos",
      project2_description:
        "Aplicación full stack que une backend y frontend para gestionar un concesionario de coches. Incluye API REST, operaciones CRUD, filtros de búsqueda y una interfaz responsiva.",
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
      project7_title: "Reto Técnico Electronic Arts",
      project7_description:
        "Reto técnico backend para Electronic Arts. API REST construida con Spring Boot y PostgreSQL para simular manejo y compra de paquetes de expasión para el juego de los sisms.",
      live_demo: "Ver Demo",
      click_more: "Haz clic para ver más",

      // Skills
      skills_title: "Mis Habilidades",
      level_low: "Aprendiendo",
      level_intermediate: "Intermedio",
      level_high: "Avanzado",

      // Studies (ES)
      studies_title: "Estudios",
      studies_badge_current: "En Curso",
      studies_badge_in_progress: "En Curso",
      studies_degree_title: "Ingeniería Informática",
      studies_degree_institution: "Politécnico Colombiano Jaime Isaza Cadavid",
      studies_degree_period: "2022 - Presente",
      studies_degree_desc: "Actualmente en 7º semestre. Sólida formación en ingeniería de software, algoritmos, estructuras de datos, diseño de sistemas y arquitectura de computadores. Apasionado por aplicar conocimientos teóricos para construir soluciones full stack del mundo real.",
      studies_bootcamp_title: "Bootcamp Desarrollo Web",
      studies_bootcamp_institution: "Nodo - EAFIT",
      studies_bootcamp_period: "2025 - Presente",
      studies_bootcamp_desc: "Formación full stack intensiva que cubre tanto backend (APIs, bases de datos, autenticación) como frontend (React, frameworks modernos). Énfasis en trabajo en equipo, metodologías ágiles y aprendizaje basado en proyectos reales.",
      studies_tag_software: "Ing. Software",
      studies_tag_algorithms: "Algoritmos",
      studies_tag_databases: "Bases de Datos",
      studies_tag_systems: "Diseño Sistemas",
      studies_tag_frontend: "Frontend",
      studies_tag_backend: "Backend",
      studies_tag_api: "APIs",
      studies_tag_projects: "Proyectos Reales",
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
      form_success: "¡Mensaje enviado con éxito! Te responderé pronto.",
      form_error: "Algo salió mal. Intenta de nuevo.",
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
