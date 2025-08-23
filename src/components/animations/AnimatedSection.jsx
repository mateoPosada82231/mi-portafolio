import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children }) => {
  const MotionDiv = motion.div;
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </MotionDiv>
  );
};

export default AnimatedSection;