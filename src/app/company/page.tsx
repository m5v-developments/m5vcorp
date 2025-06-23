'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { newsItems } from '@/lib/news';
import NewsCard from '@/components/news/NewsCard';
import { 
  FaBalanceScale, 
  FaLightbulb, 
  FaUsers, 
  FaCheckCircle 
} from 'react-icons/fa';
import Link from 'next/link';

export default function CompanyPage(): JSX.Element {
  const [activeSlide, setActiveSlide] = useState<'purpose' | 'vision'>('purpose');

  const toggleSlide = () => {
    setActiveSlide(activeSlide === 'purpose' ? 'vision' : 'purpose');
  };

  const principles = [
    {
      title: 'Integrity First',
      Icon: FaBalanceScale,
      description:
        'We uphold the highest standards of honesty and transparency in every transaction.',
    },
    {
      title: 'Innovative Solutions',
      Icon: FaLightbulb,
      description:
        'We challenge conventions—crafting design and delivery processes that push the industry forward.',
    },
    {
      title: 'Community Focus',
      Icon: FaUsers,
      description:
        'We build with people in mind, integrating projects seamlessly into their surrounding neighbourhoods.',
    },
    {
      title: 'Accountability',
      Icon: FaCheckCircle,
      description:
        'We deliver on our promises and own our results—good or bad—so our partners always know where they stand.',
    },
  ];

  return (
    <main className="font-calibre">
      {/* Hero Section */}
      <div className="w-full relative pt-56 pb-24 px-4 md:px-8 text-white h-[60vh] flex items-end">
        <Image
          src="/images/niagara-falls.png"
          alt="Niagara Falls Hero"
          fill
          className="object-cover object-center z-0"
          priority
        />
        <div className="absolute inset-0 bg-accent-blue/80 z-10" />
        <div className="max-w-6xl mx-auto w-full relative z-20">
          <div>
            <p className="text-sm uppercase tracking-widest font-medium mb-2 text-off-white">Company</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-2">Value and Design, Finally on the Same Page.</h1>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-off-white px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col">
          {/* Text Block */}
          <div className="w-full mb-8">
            <div className="text-sm uppercase tracking-wider font-medium mb-2 text-accent-blue">Our Story</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium mb-4">From Brokers to Builders</h2>
            <div className="space-y-4 text-lg leading-relaxed text-black">
              <p>
                M5V began in 2008 as a residential brokerage rooted in Toronto's M5V postal code, where Sherard McQueen and Yaseen Nimjee built a reputation on trust, results, and deep market insight.
              </p>
              <p>
                As the GTA market matured, they saw a new opportunity: to not just sell great homes—but to build them. By 2014, M5V had pivoted into full-scale development.
              </p>
              <p>
                Since then, we've delivered more than 1,000 homes across Niagara and Simcoe counties, spanning townhomes, condos, and senior living—without ever losing the accessibility, quality, and accountability that earned us our start.
              </p>
              <p>
                Today, our focus remains the same: build with purpose, deliver what we promise, and create lasting value for families, partners, and communities alike.
              </p>
            </div>
          </div>
          {/* Image Block */}
          <div className="relative aspect-[3/2] w-full overflow-hidden shadow-lg">
            <Image
              src="/images/company/yaseen-sherard.png"
              alt="Sherard McQueen and Yaseen Nimjee, founders of M5V Developments"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section aria-labelledby="mission-heading" className="py-16 bg-off-white px-4 md:px-8 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Column */}
          <div>
            <div className="text-sm uppercase tracking-widest font-medium mb-2 text-accent-blue font-calibre">
              OUR MISSION
            </div>
            <h2 id="mission-heading" className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 text-black-primary font-calibre">
              Democratizing Real Estate For All
            </h2>
            <p className="text-lg leading-relaxed text-black mb-4 font-calibre">
              At M5V Developments, we believe real estate should be a platform for upward mobility—not a barrier to it. Yet too often, aspiring homeowners and first-time investors are priced out or daunted by complexity. Our mission is to democratize real estate by dismantling those barriers and creating clear, accessible pathways to ownership and wealth building for everyday Canadians.
            </p>
            <p className="text-lg leading-relaxed text-black mb-4 font-calibre">
              We do this by bringing every critical function—land acquisition, design, construction, marketing, and sales—under one roof. Leveraging our in-house expertise and market-leading social reach, we eliminate costly markups and streamline processes, delivering high-quality homes at truly attainable prices in Ontario's secondary markets—where demand is rising but supply is underserved.
            </p>
            <p className="text-lg leading-relaxed text-black font-calibre">
              Above all, we hold ourselves accountable for real-world outcomes. By offering transparent pricing, flexible deposit structures, and guided financing solutions, we empower our buyers with confidence. We don't just build homes—we build equity, opportunity, and generational prosperity, making the dream of property ownership accessible to all.
            </p>
          </div>
          {/* Image Column */}
          <div className="relative aspect-[6/7] w-full overflow-hidden shadow-lg">
            <Image
              src="/images/team/misc/team-working-photo.png"
              alt="Team planning session"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-16 bg-black-primary px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest font-medium mb-2 text-accent-blue">
            Our Principles
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-off-white mb-8">
            What Guides Every Decision
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map(({ title, Icon, description }) => (
              <div
                key={title}
                className="group flex flex-col items-center text-center bg-off-white p-6 shadow-lg transition duration-300 ease-out hover:scale-105 hover:bg-white/90 hover:ring-2 hover:ring-accent-blue"
              >
                <Icon className="text-accent-blue text-4xl mb-4 transition duration-200 ease-out" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-base leading-relaxed text-black">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 md:px-8 bg-off-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest font-medium mb-2 text-accent-blue">Case Studies</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-black-primary mb-8">
            Our Projects Are Built for Success. See It Yourself.
          </h2>

          <div className="space-y-12">
            {newsItems
              .filter(item => item.category === 'Case Study')
              .map(item => (
                <NewsCard key={item.id} item={item} />
              ))
            }
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-4 md:px-8 bg-off-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-widest font-medium mb-2 text-accent-blue">
            Our Partners
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-black-primary mb-8">
            Powering the Future of Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                firstName: 'Sherard',
                lastName: 'McQueen',
                position: 'Sales & Marketing',
                image: '/images/team/sherard.png'
              },
              {
                firstName: 'Yaseen',
                lastName: 'Nimjee',
                position: 'Construction & Development',
                image: '/images/team/yaseen.png'
              },
              {
                firstName: 'Rajeev',
                lastName: 'Viswanathan',
                position: 'Finance & Operations',
                image: '/images/team/rajeev.png'
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="bg-black-primary aspect-[3/4] p-0 relative group"
              >
                <Image
                  src={member.image}
                  alt={`${member.firstName} ${member.lastName}`}
                  fill
                  className="object-cover"
                />
                {/* Permanent Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-40"></div>
                {/* Text Container - Bottom Right */}
                <div className="absolute bottom-8 right-8 text-right">
                  <div className="text-off-white">
                    <p className="text-2xl font-light mb-1">
                      {member.firstName}
                    </p>
                    <p className="text-2xl font-medium mb-3 uppercase">
                      {member.lastName}
                    </p>
                    <p className="text-off-white">
                      {member.position}
                    </p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-accent-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            href="/team"
            className="inline-block border border-black-primary text-black-primary px-6 py-2 hover:bg-accent-blue hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue"
          >
            See Our Team
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-black-primary text-off-white text-center">
        <div className="max-w-6xl mx-auto">
          <p 
            className="uppercase font-medium tracking-widest text-sm mb-8">
            Invest in Vision, Build Lasting Value.
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-medium mb-8">
            Connect With Us to Explore Our Development Pipeline.
          </h2>
          <Link
            href="/contact"
            className="border border-off-white px-6 py-2 hover:bg-off-white hover:text-black-primary transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </main>
  );
} 