import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, animationClass }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`${inView ? 'animate' : 'pre-animate'} ${animationClass || ''}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
