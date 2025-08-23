import React from "react";

import { useState } from "react";

const Carousel = ({ projects, onSelect }) => {
  const [index, setIndex] = useState(0);
  const total = projects.length;

  const prev = () => setIndex((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setIndex((i) => (i === total - 1 ? 0 : i + 1));

  return (
    <div className="carousel">
      <button className="carousel-arrow left" onClick={prev}>&lt;</button>
      <div className="carousel-track">
        {projects.map((p, i) => (
          <div
            key={p.id}
            className={`carousel-item${i === index ? ' active' : ''}`}
            style={{ display: i === index ? 'block' : 'none' }}
            onClick={() => onSelect(p)}
          >
            <img src={p.img} alt={p.title} />
            <div className="carousel-title">{p.title}</div>
          </div>
        ))}
      </div>
      <button className="carousel-arrow right" onClick={next}>&gt;</button>
      <div className="carousel-progress">
        <div
          className="carousel-progress-bar"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Carousel;
