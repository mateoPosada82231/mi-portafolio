import React, { useState } from 'react'; // Importa useState
import './i18n';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import AnimatedSection from './components/animations/AnimatedSection';
import VideoBackground from './components/animations/VideoBackground';

function App() {
  // Estado para controlar la visibilidad del video
  const [videoEnabled, setVideoEnabled] = useState(true);

  // Función para cambiar el estado
  const toggleVideo = () => {
    setVideoEnabled(prev => !prev);
  };

  return (
    <>
      {/* Renderiza el video solo si el estado es true */}
      {videoEnabled && <VideoBackground />}
      
      {/* Pasa el estado y la función al Navbar */}
      <Navbar videoEnabled={videoEnabled} toggleVideo={toggleVideo} />
      
      <main>
        <Home />
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
    </>
  );
}

export default App;
