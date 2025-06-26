'use client';

import { useState } from 'react';
import Image from 'next/image';

const InvestmentPhilosophy = () => {
  const [activePoint, setActivePoint] = useState<number | null>(0);

  const points = [
    {
      number: '1',
      title: 'Construction Excellence',
      description: 'Clustering projects, using pre-fab systems, and sourcing globally lets us reduce costs and accelerate build times.',
      image: '/images/m5v_portfolio/the-niagara-phase-1/sherard-construction-1.webp'
    },
    {
      number: '2',
      title: 'Marketing Innovation',
      description: 'With 2M+ monthly reach and in-house sales, we achieve rapid sell-through while cutting marketing costs by up to 90%.',
      image: '/images/misc/atlanta-group.webp'
    },
    {
      number: '3',
      title: 'Strategic Land Acquisition',
      description: 'We target underutilized sites and unlock value through rezoning and density optimization.',
      image: '/images/m5v_portfolio/the-niagara-phase-1/the-niagara-drawings-3.webp'
    },
    {
      number: '4',
      title: 'Financial Discipline',
      description: 'We minimize risk with strong financing, pre-sales, and private/institutional lending relationships to maintain stable cash flow.',
      image: '/images/misc/office/rn-sitdown-office.webp'
    }
  ];

  return (
    <section className="bg-off-white py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-sm uppercase tracking-widest font-medium mb-6 text-accent-blue">
              How We Do It
            </h2>
            <p className="text-h2 leading-tight font-medium text-primary-black mb-16">
              Our integrated model maximizes value at every stage of development.
            </p>

            {/* Points List */}
            <div className="space-y-12">
              {points.map((point, index) => (
                <div 
                  key={index}
                  className="group"
                >
                  <div className="flex gap-6">
                    {/* Number */}
                    <div className="text-4xl font-bold text-accent-blue">
                      {point.number}
                    </div>
                    {/* Content */}
                    <div className="flex-1">
                      <button
                        className="w-full text-left"
                        aria-expanded={activePoint === index}
                        onClick={() => setActivePoint(activePoint === index ? null : index)}
                      >
                        <h3 className="text-xl font-medium text-primary-black mb-3 flex items-center justify-between">
                          {point.title}
                          <svg 
                            className={`w-4 h-4 text-accent-blue transition-transform duration-300 ${
                              activePoint === index ? 'rotate-90' : ''
                            }`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </h3>
                      </button>
                      <div 
                        className={`transition-[max-height] duration-300 overflow-hidden ${
                          activePoint === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-black/80 leading-relaxed mb-4">
                          {point.description}
                        </p>
                        {/* Mobile Image */}
                        <div className="mt-4 block md:hidden">
                          <div className="aspect-video relative">
                            <Image
                              src={point.image}
                              alt={point.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                              quality={90}
                              priority={index === 0}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < points.length - 1 && <hr className="border-t border-black my-6" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Desktop Images */}
          <div className="hidden md:block w-1/2">
            <div className="relative aspect-[8/7] w-full">
              {points.map((point, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    activePoint === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    willChange: activePoint === index ? 'opacity' : 'auto'
                  }}
                >
                  <Image
                    src={point.image}
                    alt={point.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                    style={{
                      willChange: activePoint === index ? 'transform' : 'auto'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPhilosophy; 