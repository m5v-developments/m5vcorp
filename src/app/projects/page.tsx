"use client";
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectFilters from '@/components/ProjectFilters';

interface Project {
  name: string;
  slug: string;
  location: string;
  city: string;
  status: 'Active' | 'Completed' | 'Coming Soon';
  type: string;
  class: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    name: 'Le FALLS',
    slug: 'le-falls',
    location: 'Niagara Falls, Ontario',
    city: 'Niagara Falls',
    status: 'Active',
    type: 'Development',
    class: 'Townhomes',
    description: "Bold rooftop townhomes bringing modern design to Niagara's green heart.",
    image: '/images/m5v_portfolio/le-falls/le_falls_aerial.webp',
  },
  {
    name: 'NIAGARA ON THE BEACH',
    slug: 'niagara-on-the-beach',
    location: 'Fort Erie, Ontario',
    city: 'Fort Erie',
    status: 'Active',
    type: 'Development',
    class: 'Townhomes',
    description: "Bold rooftop townhomes bringing modern design to Niagara's green heart.",
    image: '/images/m5v_portfolio/niagara-on-the-beach/notb-daytime-3.webp',
  },
  {
    name: 'SUNDIAL RETIREMENT',
    slug: 'sundial-retirement',
    location: 'Orillia, Ontario',
    city: 'Orillia',
    status: 'Completed',
    type: 'Operating',
    class: 'Retirement Home',
    description: 'Purpose-built retirement living focused on care, comfort, and community in Orillia.',
    image: '/images/m5v_portfolio/sundial-lakeview-retirement/sundial-lakeview-close-up.webp',
  },
  {
    name: 'THE NIAGARA PHASE 1',
    slug: 'niagara-phase-1',
    location: 'Niagara Falls, Ontario',
    city: 'Niagara Falls',
    status: 'Completed',
    type: 'Development',
    class: 'Stacked Townhomes',
    description: 'The first of our stacked townhome series that redefined urban density in Niagara Falls.',
    image: '/images/m5v_portfolio/the-niagara-phase-1/drone.webp',
  },
  {
    name: 'THE NIAGARA PHASE 2',
    slug: 'the-niagara-phase-2',
    location: 'Niagara Falls, Ontario',
    city: 'Niagara Falls',
    status: 'Coming Soon',
    type: 'Development',
    class: 'Stacked Townhomes',
    description: 'Expanded living through design, the second release of our sought-after Niagara townhomes.',
    image: '/images/m5v_portfolio/the-niagara-phase-2/niagara2-render.webp',
  },
  {
    name: 'THE MUSKOKA',
    slug: 'the-muskoka',
    location: 'Georgian Bay, Ontario',
    city: 'Georgian Bay',
    status: 'Active',
    type: 'Development',
    class: 'Detached',
    description: 'Modern, Airbnb-friendly cottages crafted for second-home living in Muskoka.',
    image: '/images/m5v_portfolio/the-muskoka/muskoka_severn.webp',
  },
];

const statusColors: Record<string, string> = {
  'Active': 'bg-gray-300 text-gray-900',
  'Completed': 'bg-green-200 text-green-800',
  'Coming Soon': 'bg-sky-200 text-sky-800',
};

// Dynamically generate city options from projects
const CITY_OPTIONS = Array.from(new Set(projects.map(p => p.city)));

const Projects = (): JSX.Element => {
  // --- filter state ---
  const [search, setSearch] = useState('');
  const [locations, setLocations] = useState<string[]>([]);
  const [statuses, setStatuses] = useState<string[]>([]);

  // --- filtered list ---
  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchesLocation =
        !locations.length || locations.includes(p.city);
      const matchesStatus =
        !statuses.length || statuses.includes(p.status);
      return matchesSearch && matchesLocation && matchesStatus;
    });
  }, [search, locations, statuses]);

  // Only pass city names to ProjectFilters
  const selectedCities = locations;

  return (
    <div className="bg-off-white min-h-screen text-black-primary">
      {/* Hero Section */}
      <div className="w-full relative pt-56 pb-24 px-4 md:px-8 text-off-white h-[60vh] flex items-end">
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
            <p className="uppercase font-semibold tracking-widest text-sm mb-2">Projects</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-2">Where Vision Meets Opportunity. See Our Projects in Action.</h1>
          </div>
        </div>
      </div>

      {/* --- Search & Filters Row --- */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 border-b">
        <ProjectFilters
          count={filteredProjects.length}
          locations={selectedCities}
          statuses={statuses}
          cityOptions={CITY_OPTIONS}
          onChange={({ search: s, locations: l, statuses: st, clearAll }: { search?: string; locations?: string[]; statuses?: string[]; clearAll?: boolean }) => {
            if (clearAll) {
              setSearch('');
              setLocations([]);
              setStatuses([]);
            }
            if (s !== undefined) setSearch(s);
            if (l !== undefined) setLocations(l);
            if (st !== undefined) setStatuses(st);
          }}
        />
      </div>

      {/* --- Projects List --- */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 space-y-12">
        {filteredProjects.map((project) => (
          <div key={project.slug} className="flex flex-col md:flex-row gap-6 border-b pb-8 last:border-b-0">
            {/* Project Image */}
            <div className="w-full md:w-64 h-48 bg-gray-200 relative flex-shrink-0 overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 256px"
                priority
                id={`image-${project.slug}`}
              />
            </div>
            {/* Project Info */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className={`px-3 py-1 text-xs font-medium ${statusColors[project.status]}`}>{project.status.toUpperCase()}</span>
                  <span className="px-3 py-1 text-xs font-medium bg-white text-black border-gray-300">{project.type.toUpperCase()}</span>
                  <span className="px-3 py-1 text-xs font-medium bg-white text-black border-gray-300">{project.class.toUpperCase()}</span>
                </div>
                <h3 className="text-2xl font-medium tracking-wide mb-1">{project.name}</h3>
                <p className="italic text-gray-700 mb-2">{project.description}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-4">{project.location}</p>
              </div>
              <div>
                <Link href={`/projects/${project.slug}`}>
                  <button 
                    className="mt-2 px-6 py-2 bg-black text-white font-normal rounded-sm flex items-center gap-2 hover:bg-accent-blue hover:text-off-white transition-colors duration-300"
                    onMouseEnter={() => {
                      const image = document.getElementById(`image-${project.slug}`);
                      if (image) {
                        image.style.transform = 'scale(1.05)';
                      }
                    }}
                    onMouseLeave={() => {
                      const image = document.getElementById(`image-${project.slug}`);
                      if (image) {
                        image.style.transform = 'scale(1)';
                      }
                    }}
                  >
                    Learn More
                    <span className="inline-block ml-1">›</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 