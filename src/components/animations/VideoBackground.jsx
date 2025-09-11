import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './VideoBackground.css';

const VideoBackground = () => {
  const { theme } = useTheme();

  return (
    <div className="video-background-container">
      {theme === 'dark' ? (
        <>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="background-video"
          >
            <source src="/videos/storm_background.mp4" type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
          <div className="video-overlay"></div>
        </>
      ) : (
        <div className="light-background"></div>
      )}
    </div>
  );
};

export default VideoBackground;