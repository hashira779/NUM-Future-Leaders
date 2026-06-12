import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

// Reveals content on scroll with a small directional lift.
export default function AnimatedSection({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  amount = 28,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const reduceMotion = useReducedMotion();

  const offsets = {
    up: { y: amount, x: 0 },
    down: { y: -amount, x: 0 },
    left: { x: amount, y: 0 },
    right: { x: -amount, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = reduceMotion ? { x: 0, y: 0 } : offsets[direction] || offsets.up;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{
        type: 'spring',
        stiffness: 120,
        damping: 22,
        mass: 0.8,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
