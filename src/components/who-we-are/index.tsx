'use client';

import { useState, useEffect } from 'react';
import { useIntersectionObserver, usePrefersReducedMotion } from '@/lib/hooks';
import AnimatedCounter from '@/components/AnimatedCounter';

const WhoWeAre = () => {
  const metrics = [
    {
      value: '$3B',
      label: 'Real estate sales achieved since 2008',
      footnote: 'in Canadian dollars, as of January 1, 2025'
    },
    {
      value: '$500M+',
      label: 'Development pipeline currently in progress',
      footnote: 'in Canadian dollars, as of January 1, 2025'
    },
    {
      value: '100+',
      label: 'Years of combined real estate experience among our leadership'
    },
    {
      value: '2',
      label: 'Core regions served: Niagara and Simcoe counties'
    }
  ];

  // Use intersection observer to detect when section comes into view
  const [sectionRef, isSectionVisible] = useIntersectionObserver<HTMLDivElement>();
  
  // Check if user prefers reduced motion
  const prefersReducedMotion = usePrefersReducedMotion();
  
  // State to track if animation should start
  const [shouldStartAnimation, setShouldStartAnimation] = useState(false);
  
  // Start animation when section becomes visible (but only once)
  useEffect(() => {
    if (isSectionVisible && !shouldStartAnimation && !prefersReducedMotion) {
      setShouldStartAnimation(true);
    }
  }, [isSectionVisible, shouldStartAnimation, prefersReducedMotion]);

  return (
    <section className="bg-black-primary text-off-white py-24 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Intro text */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-sm uppercase tracking-wider font-medium mb-2">Who We Are</h2>
          <p className="text-h2 leading-tight font-medium">
            We are builders of communities, not just buildings.
          </p>
        </div>

        {/* Metrics grid */}
        <div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-accent-blue text-5xl font-bold mb-4">
                {prefersReducedMotion ? (
                  // Show static value if user prefers reduced motion
                  <span>{metric.value}</span>
                ) : (
                  // Show animated counter
                  <AnimatedCounter 
                    value={metric.value}
                    shouldAnimate={shouldStartAnimation}
                    duration={2500}
                  />
                )}
              </div>
              <p className="text-body mb-2">
                {metric.label}
              </p>
              {metric.footnote && (
                <p className="text-sm text-off-white/60">
                  {metric.footnote}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre; 