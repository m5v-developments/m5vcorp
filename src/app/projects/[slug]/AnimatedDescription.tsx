'use client';

import { useEffect, useRef } from 'react';

interface AnimatedDescriptionProps {
  description: string;
}

export default function AnimatedDescription({ description }: AnimatedDescriptionProps) {
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up-on-view');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (descriptionRef.current) {
      observer.observe(descriptionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={descriptionRef} className="prose max-w-none mt-48 mb-48 px-4 sm:px-8 md:px-24 opacity-0">
      <p className="text-2xl sm:text-3xl text-gray-700">{description}</p>
    </div>
  );
} 