/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Lottie from 'lottie-react';
import { useRef, useEffect } from 'react';

interface LottieAnimationProps {
  animationData: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  width?: number | string;
  height?: number | string;
}

export default function LottieAnimation({
  animationData,
  className = '',
  loop = true,
  autoplay = true,
  speed = 1,
  width = '100%',
  height = '100%',
}: LottieAnimationProps) {
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(speed);
    }
  }, [speed]);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
      style={{
        width,
        height,
      }}
    />
  );
}
