import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Easing functions for smooth animations
 */
export const easingFunctions = {
  // Linear: no easing
  linear: (t: number) => t,
  
  // Ease-out functions (start fast, slow down)
  easeOutQuad: (t: number) => 1 - Math.pow(1 - t, 2),
  easeOutCubic: (t: number) => 1 - Math.pow(1 - t, 3),
  easeOutQuart: (t: number) => 1 - Math.pow(1 - t, 4),
  easeOutQuint: (t: number) => 1 - Math.pow(1 - t, 5),
  easeOutExpo: (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  
  // Ease-in functions (start slow, speed up)
  easeInQuad: (t: number) => t * t,
  easeInCubic: (t: number) => t * t * t,
  easeInQuart: (t: number) => t * t * t * t,
  easeInQuint: (t: number) => t * t * t * t * t,
  easeInExpo: (t: number) => t === 0 ? 0 : Math.pow(2, 10 * t - 10),
  
  // Ease-in-out functions (slow, fast, slow)
  easeInOutQuad: (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
  easeInOutCubic: (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  easeInOutQuart: (t: number) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2,
  easeInOutQuint: (t: number) => t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2,
  
  // Bounce effects
  easeOutBounce: (t: number) => {
    const n1 = 7.5625;
    const d1 = 2.75;
    
    if (t < 1 / d1) {
      return n1 * t * t;
    } else if (t < 2 / d1) {
      return n1 * (t -= 1.5 / d1) * t + 0.75;
    } else if (t < 2.5 / d1) {
      return n1 * (t -= 2.25 / d1) * t + 0.9375;
    } else {
      return n1 * (t -= 2.625 / d1) * t + 0.984375;
    }
  },
  
  // Elastic effects
  easeOutElastic: (t: number) => {
    const c4 = (2 * Math.PI) / 3;
    return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  }
};

/**
 * Custom hook for intersection observer
 * Detects when an element comes into view
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
  options: IntersectionObserverInit = {}
): [React.RefObject<T>, boolean] {
  const elementRef = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options]);

  return [elementRef, isIntersecting];
}

/**
 * Custom hook for animated counter with easing
 * Animates a number from 0 to target value with smooth easing
 */
export function useAnimatedCounter(
  targetValue: number,
  duration: number = 2000,
  shouldAnimate: boolean = false,
  easingFunction: keyof typeof easingFunctions = 'easeOutCubic'
): number {
  const [currentValue, setCurrentValue] = useState(0);
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const hasAnimatedRef = useRef(false);

  const animate = useCallback((timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp;
    }

    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);

    // Apply the selected easing function
    const easedProgress = easingFunctions[easingFunction](progress);
    const newValue = Math.floor(targetValue * easedProgress);

    setCurrentValue(newValue);

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      // Animation completed
      hasAnimatedRef.current = true;
    }
  }, [targetValue, duration, easingFunction]);

  useEffect(() => {
    // Only start animation if we should animate, haven't animated yet, and have a valid target
    if (shouldAnimate && !hasAnimatedRef.current && targetValue > 0) {
      console.log('Starting counter animation for target:', targetValue);
      setCurrentValue(0);
      startTimeRef.current = undefined;
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [shouldAnimate, targetValue, animate]);

  // If we shouldn't animate or there's no target value, show the final value immediately
  if (!shouldAnimate || targetValue <= 0) {
    return targetValue;
  }

  return currentValue;
}

/**
 * Custom hook to check if user prefers reduced motion
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
} 