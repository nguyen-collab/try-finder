// Animation variants for Framer Motion
import { Variants } from 'framer-motion';

// Respect reduced motion preferences
export const shouldReduceMotion =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

// Fade in with slight upward movement
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

// Fade in from bottom with gentle slide
export const fadeInBottom: Variants = {
  hidden: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

// Staggered children animation for container elements
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // 100ms delay between each child
      delayChildren: 0.1, // Initial delay before starting children animations
    },
  },
};

// Use this for child elements within staggered containers
export const staggerItems: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
