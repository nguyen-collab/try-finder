'use client';

import { motion, Variants, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  variants: Variants;
  className?: string;
  viewportAmount?: number;
  once?: boolean;
  delay?: number;
}

export default function ScrollAnimationWrapper({
  children,
  variants,
  className = '',
  viewportAmount = 0.25, // Show when 25% of element is visible
  once = true, // Only animate once
  delay = 0,
}: ScrollAnimationWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: viewportAmount, once });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
