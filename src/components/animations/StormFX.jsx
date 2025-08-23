import React from 'react';
import './StormFX.css';

const StormFX = () => {
  return (
    <div className="storm-container">
      <div className="rain-layer"></div>
      <div className="cloud-layer"></div>
      <div className="lightning-bolt bolt-1"></div>
      <div className="lightning-bolt bolt-2"></div>
      <div className="lightning-bolt bolt-3"></div>
    </div>
  );
};

export default StormFX;