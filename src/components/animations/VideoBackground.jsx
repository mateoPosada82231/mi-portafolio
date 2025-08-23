import React from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
  return (
    <div className="video-background-container">
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
    </div>
  );
};

export default VideoBackground;