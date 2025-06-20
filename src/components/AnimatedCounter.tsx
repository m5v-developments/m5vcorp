'use client';

import { useAnimatedCounter } from '@/lib/hooks';
import { parseNumberString, formatNumber } from '@/lib/utils';

interface AnimatedCounterProps {
  value: string;
  shouldAnimate: boolean;
  duration?: number;
  easingFunction?: keyof typeof import('@/lib/hooks').easingFunctions;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  shouldAnimate,
  duration = 2000,
  easingFunction = 'easeOutExpo'
}) => {
  // Parse the value string to extract numeric value, prefix, and suffix
  const { value: numericValue, prefix, suffix } = parseNumberString(value);
  
  // Use the animated counter hook
  const animatedValue = useAnimatedCounter(numericValue, duration, shouldAnimate, easingFunction);
  
  // Format the animated value with the original prefix and suffix
  const displayValue = formatNumber(animatedValue, prefix, suffix);
  
  return (
    <span className="text-accent-blue text-5xl font-bold">
      {displayValue}
    </span>
  );
};

export default AnimatedCounter; 