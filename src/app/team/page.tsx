'use client';

import Image from 'next/image';
import StickyHeader from '@/components/sticky-header';
import Link from 'next/link';
import { useState } from 'react';

interface TeamMember {
  name: string;
  position: string;
  image?: string;
  bio?: string;
  slug: string;
  linkedinId?: string;
}

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember|null>(null);
  
  const teamMembers: TeamMember[] = [
    { 
      name: 'Sherard McQueen', 
      position: 'Managing Partner,\nChief Visionary Officer (Entitlement Sales & Marketing)', 
      image: '/images/team/sherard-2.webp',
      bio: `Sherard McQueen brings over 15 years of experience in real estate development and sales, having successfully closed over $2B in transactions and managed 75+ property acquisitions. His expertise in market analysis and strategic planning has been instrumental in M5V's growth and success.

As Co-Founder, Sherard leads our sales and marketing initiatives, ensuring our developments meet market demands while maintaining the highest standards of quality and design. His deep understanding of consumer needs and market trends has helped shape M5V's unique approach to community development.`,
      slug: 'sherard-mcqueen',
      linkedinId: 'sherard-mcqueen'
    },
    { 
      name: 'Yaseen Nimjee', 
      position: 'Managing Partner,\nChief Operating Officer (Construction & Development)', 
      image: '/images/team/yaseen.webp',
      bio: `Yaseen Nimjee is a seasoned professional with extensive experience in construction management and real estate development. His technical expertise and hands-on approach have been crucial in delivering high-quality projects that exceed industry standards.

As Co-Founder, Yaseen oversees all aspects of construction and development, from initial planning to final delivery. His commitment to innovation and efficiency has helped M5V establish a reputation for excellence in the industry.`,
      slug: 'yaseen-nimjee',
      linkedinId: 'yaseen-nimjee-01952636'
    },
    { 
      name: 'Rajeev Viswanathan', 
      position: 'Managing Partner,\nChief Financial Officer (Capital Strategy)', 
      image: '/images/team/rajeev.webp',
      bio: `At M5V, Rajeev leads the firm’s capital strategy and financial operations, supporting the continued growth and expansion of the platform.
      
      Rajeev brings over two decades of experience in capital markets, real estate, and strategic finance. Most recently, he served as Managing Partner & CFO at Forum Asset Management. Prior to Forum, he was the CFO of Dream Global REIT, a $6 billion Western European office platform dual-listed on the TSX and Frankfurt Stock Exchange, which was acquired by Blackstone in 2019. Before that, he spent nearly a decade at Brookfield in various senior finance roles. Rajeev also serves on the board of the Greater Toronto Airports Authority.
      
      Rajeev is a CA, CPA, CFA charter holder and holds the ICD.D designation.`,
      slug: 'rajeev-viswanathan',
      linkedinId: 'rajeev-viswanathan'
    },
    { 
      name: 'Linda Ford', 
      position: 'Director,\nEntitlements', 
      image: '/images/team/linda.webp',
      bio: `Linda Ford specializes in navigating complex entitlement processes and regulatory compliance. With over 15 years of experience in land use planning and development approvals, she ensures our projects meet all regulatory requirements while maximizing their potential.

As Director of Entitlement, Linda works closely with municipalities and stakeholders to secure necessary approvals and permits, helping to streamline the development process and minimize delays.`,
      slug: 'linda-ford',
      linkedinId: 'lindamford'
    },
    { 
      name: 'Sophia Bailey', 
      position: 'Director,\nSales', 
      image: '/images/team/sophie.webp',
      bio: `Sophia Bailey is a dynamic sales leader with a proven track record of building strong client relationships and driving revenue growth. Her customer-centric approach and market expertise have been key to M5V's sales success.

As Director of Sales, Sophia leads our sales team, implementing innovative strategies to connect with potential buyers and create exceptional customer experiences throughout the purchasing process.`,
      slug: 'sophia-bailey',
      linkedinId: ''
    },
    { 
      name: 'Leo Thomas', 
      position: 'VP,\nConstruction', 
      image: '/images/team/leo.webp',
      bio: `Leo Thomas is a seasoned VP of Construction with over 22 years of experience leading multi-million dollar commercial, industrial, and residential projects. His extensive background spans Western Canada and international markets, including the U.K., Middle East, and South America. Leo has a proven track record of successfully managing large teams, including senior project managers and 60+ on-site staff, while overseeing $200M+ in annual projects.

Beyond project oversight, Leo is a strategic leader who has spearheaded company expansions into new markets across Manitoba, BC, and Alberta, securing contracts valued at over $100M. He's driven business development initiatives that significantly increased profit margins and diversified portfolios into high-growth sectors like geothermal energy and green construction.

Committed to operational excellence, Leo has implemented lean management programs and introduced engineering process improvements that resulted in remarkable reductions in construction budgets by up to $13M. He's also adept at developing pre-project feasibility models, revising contracts, and establishing robust internal audit systems to protect corporate margins and enhance overall profitability.`,
      slug: 'leo-thomas',
      linkedinId: 'leo-thomas'
    },
    { 
      name: 'Reza Farahdel', 
      position: '\nController', 
      image: '/images/team/reza-edit1.webp',
      bio: `Reza Farahdel is a Certified Public Accountant with extensive experience in financial management and reporting. His expertise in accounting principles and financial analysis helps ensure M5V's financial operations run smoothly and efficiently.

As Controller, Reza manages all aspects of financial reporting, budgeting, and internal controls, providing valuable insights to support strategic decision-making and business growth.`,
      slug: 'reza-farahdel-cpa',
      linkedinId: 'reza-farahdel'
    },
    { 
      name: 'Yogesh Karia', 
      position: '\nProject Manager', 
      image: '/images/team/yogesh.webp',
      bio: `Yogesh Karia is a highly accomplished Project Manager with over 40 years of experience leading multi-million dollar residential, commercial, hospitality, and industrial projects across Canada and internationally. He's known for flawlessly guiding projects from pre-construction to occupancy, consistently ensuring timely delivery and budget adherence.

Yogesh brings hands-on expertise in advanced construction methods like ICF walls, pile foundations, and precast building systems, even excelling in extreme weather conditions. Holding a Bachelor of Civil Engineering, being a Certified Engineering Technician (CET), and a LEED Accredited Professional, he champions sustainable practices, safety, and quality control. Yogesh's vast experience and commitment to excellence make him an invaluable asset to any project.`,
      slug: 'yogesh-karia',
      linkedinId: 'yogesh-karia-c-e-t-leed-ap-94194620'
    },
    { 
      name: 'Martina Cabrera', 
      position: 'Director,\nMarketing', 
      image: '/images/team/martina.webp',
      bio: `Martina Cabrera is a dynamic Marketing Manager with over 12 years of experience in social media and digital marketing. What began as a creative curiosity has blossomed into a profound passion for building vibrant communities, crafting effective strategies, and driving impactful results that enable brands to truly shine in the digital landscape.

Martina consistently helps brands achieve millions of impressions and significantly expands their online influence. Her impressive portfolio includes collaborations with a prestigious roster of global names such as Disney, L'Oréal Paris, Maybelline, and New York Fashion Week, alongside successful boutique projects. At the core of her work is the consistent goal of creating impactful, engaging, and meaningful connections through strategic social media initiatives.`,
      slug: 'martina-cabrera',
      linkedinId: 'immartinacabrera'
    },
    { 
      name: 'Stephen Lawrence', 
      position: 'Site Supervisor \n(Niagara)', 
      image: '/images/team/stephen-lawrence2.webp',
      bio: `Stephen Lawrence is a highly skilled Construction Manager and a Licensed Professional Engineer (PEO), holding a Bachelor's in Mechanical Engineering from McMaster University. He comes equipped with a robust set of certifications, including Project Management, Working at Heights, Asbestos Abatement (Class 1 & 2), and comprehensive quality systems (IATF 16949 & ISO 9001). This extensive accreditation ensures his unwavering commitment to regulatory compliance and leadership in both safety and quality standards across all projects.

As an experienced Senior Site Supervisor and General Manager, Stephen brings invaluable hands-on experience managing a diverse range of private, commercial, and municipal construction projects. He excels in all facets of site-level project management, from meticulous scheduling and comprehensive crew training to consistently ensuring on-time project completion. Stephen also serves as the crucial primary liaison, fostering strong relationships with clients, architects, and all key stakeholders.`,
      slug: 'stephen-lawrence',
      linkedinId: ''
    },
    { 
      name: 'Nami Sugimoto', 
      position: '\n Operations Manager', 
      image: '/images/team/nami.webp',
      bio: `
      
      `,
      slug: 'nami-sugimoto',
      linkedinId: ''
    },
    { 
      name: 'Cynthia Yvonne', 
      position: '\n Communications & Client Relations', 
      image: '/images/team/cynthia.webp',
      bio: `Boasting a EdD in Education and over 40 years in academia, Cynthia's background as a media personality, author, and principal uniquely positions her to excel in communications and client relations. Her multi-disciplinary expertise ensures impactful messaging and exceptional support.`,
      slug: 'cynthia-yvonne',
      linkedinId: ''
    },
    { 
      name: 'Rodrigo Burgos', 
      position: '\n Construction Estimator', 
      image: '/images/team/rodrigo.webp',
      bio: `Rodrigo Burgos is a highly experienced Construction Estimator with over 20 years of expertise in Quantity Surveying for ICI (Industrial, Commercial, Institutional) and Residential projects. His comprehensive background includes detailed estimation for structural, architectural, mechanical, and civil works, ensuring thorough and accurate project cost analysis.

Rodrigo is a distinguished member of the Canadian Institute of Quantity Surveyors as a Construction Estimator Certified (CIQS-CEC). He also holds a Bachelor of Science in Civil Engineering (BSCE) and is a Registered Licensed Professional Civil Engineer in the Philippines (PRC Licensed), underscoring his deep technical knowledge and professional accreditation.`,
      slug: 'rodrigo-burgos',
      linkedinId: ''
    },
    { 
      name: 'Davian Brooks', 
      position: '\n Analyst', 
      image: '/images/team/davian.webp',
      bio: ``,
      slug: 'davian-brooks',
      linkedinId: 'davianbrooks'
    },
    { 
      name: 'Naijah Paul', 
      position: '\n Administrative Executive', 
      image: '/images/team/naijah.webp',
      bio: ``,
      slug: 'naijah-paul',
      linkedinId: ''
    },
    { 
      name: 'Alex Tran', 
      position: '\n Editor', 
      image: '/images/team/alex.webp',
      bio: `Alex Tran brings a strong foundation in financial reporting, audit, and operations, cultivated through his roles at the Ontario Public Service, the CRA, and Fidelity Investments. Throughout his career, Alex has developed a keen ability to dig into data, identify patterns, and empower teams to make informed, strategic decisions.

Currently on the path to earning his CPA designation, Alex is driven by the opportunity to tackle complex challenges and contribute meaningfully to an organization. His expertise spans audit, advisory, and financial analysis, reflecting his commitment to both precision and insightful contributions.`,
      slug: 'alex-tran',
      linkedinId: 'alex-tran-619853234'
    },
    { 
      name: 'Pritica Kher', 
      position: '\n Project Manager', 
      image: '/images/team/pritica-edit.webp',
      bio: ` `,
      slug: 'pritica-kher',
      linkedinId: 'pritica-kher-5843b8315'
    },
  ];

  return (
    <main className="min-h-screen">
      <StickyHeader />
      
      {/* Hero Section */}
      <div className="w-full relative pt-56 pb-24 px-4 md:px-8 text-white h-[60vh] flex items-end">
        {/* Background image */}
        <Image
          src="/images/banner/niagara-banner.webp"
          alt="Our Team"
          fill
          className="object-cover object-center z-0"
          priority
        />
        {/* Color overlay */}
        <div className="absolute inset-0 bg-[#008DB7]/90 z-10" />
        {/* Headline content */}
        <div className="max-w-6xl mx-auto w-full relative z-20">
          <div>
            <p className="uppercase font-semibold tracking-widest text-sm mb-2">TEAM</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-2">Meet the Minds Building the Future.</h1>
          </div>
        </div>
      </div>

      {/* Team Grid Section */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <button
                key={member.slug}
                onClick={() => setSelectedMember(member)}
                className="group focus:outline-none"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No image available</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 right-0 w-full bg-black bg-opacity-50 p-6 text-right">
                    <h3 className="text-white text-2xl font-medium">{member.name}</h3>
                    <p className="text-white text-sm whitespace-pre-line">{member.position}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#008DB7]/70 overflow-auto"
          onClick={() => setSelectedMember(null)}
        >
          {/* Modal panel */}
          <div 
            className="bg-white rounded-lg shadow-xl w-full max-w-3xl min-h-[50vh] max-h-[90vh] overflow-y-auto overflow-x-hidden flex flex-col sm:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Headshot container */}
            <div className="relative w-full sm:w-2/3 h-[40vh] sm:h-auto overflow-hidden">
              <Image
                src={selectedMember.image!}
                alt={selectedMember.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            {/* Content container */}
            <div className="relative w-full sm:w-2/3 flex flex-col p-4 sm:p-8">
              <button
                onClick={() => setSelectedMember(null)}
                className="self-end text-2xl sm:text-3xl font-bold leading-none cursor-pointer"
                aria-label="Close profile"
              >
                &times;
              </button>
              <h3 className="text-3xl font-medium mb-2">{selectedMember.name}</h3>
              <p className="text-lg text-gray-600 mb-4">{selectedMember.position}</p>
              <div className="flex-1 overflow-y-auto max-h-[35vh] pr-2">
                {selectedMember.bio && (
                  <p className="text-gray-700 whitespace-pre-line">{selectedMember.bio}</p>
                )}
              </div>
              {/* LinkedIn link - sticky at bottom */}
              {selectedMember.linkedinId && selectedMember.linkedinId.trim() !== '' ? (
                <div className="mt-4 flex-shrink-0">
                  <a
                    href={`https://www.linkedin.com/in/${selectedMember.linkedinId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-blue font-medium"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="h-5 w-5 mr-2"
                    >
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                    Add on LinkedIn
                  </a>
                </div>
              ) : (
                <div className="mt-4 flex-shrink-0">
                  <a
                    href="https://www.linkedin.com/company/m5v-developments"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-blue font-medium"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="h-5 w-5 mr-2"
                    >
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                    Visit Company LinkedIn
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 