import React, { useState } from "react";
import "./i18n";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import AnimatedSection from "./components/animations/AnimatedSection";
import VideoBackground from "./components/animations/VideoBackground";

function App() {
  const [videoEnabled, setVideoEnabled] = useState(true);

  const toggleVideo = () => {
    setVideoEnabled((prev) => !prev);
  };

  return (
    <ThemeProvider>
      {videoEnabled && <VideoBackground />}

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
          <Certificates />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
    </ThemeProvider>
  );
}

export default App;
