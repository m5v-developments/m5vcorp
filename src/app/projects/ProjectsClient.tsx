"use client";
import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectFilters from '@/components/ProjectFilters';
import { Project } from '@/types/project';

const statusColors: Record<string, string> = {
  'Active': 'bg-gray-300 text-gray-900',
  'Completed': 'bg-green-200 text-green-800',
  'Construction': 'bg-amber-200 text-gray-800',
  'Sales': 'bg-sky-200 text-sky-800',
  'Planning': 'bg-gray-300 text-gray-800'
};

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const [search, setSearch] = useState('');
  const [locations, setLocations] = useState<string[]>([]);
  const [statuses, setStatuses] = useState<string[]>([]);

  const CITY_OPTIONS = useMemo(() =>
    Array.from(new Set(projects.map(p => {
      const locationStat = p.stats.find(stat => stat.label === "Location");
      return locationStat ? locationStat.value.split(',')[0].trim() : '';
    }))),
    [projects]
  );

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());

      const locationStat = p.stats.find(stat => stat.label === "Location");
      const city = locationStat ? locationStat.value.split(',')[0].trim() : '';
      const matchesLocation = !locations.length || locations.includes(city);

      const statusStat = p.stats.find(stat => stat.label === "Status");
      const status = statusStat ? statusStat.value : '';
      const matchesStatus = !statuses.length || statuses.includes(status);

      return matchesSearch && matchesLocation && matchesStatus;
    });
  }, [search, locations, statuses, projects]);

  const selectedCities = locations;

  return (
    <div className="bg-off-white min-h-screen text-black-primary">
      {/* Hero Section */}
      <div className="w-full relative pt-56 pb-24 px-4 md:px-8 text-off-white h-[60vh] flex items-end">
        <Image
          src="/images/banner/niagara-banner.webp"
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
        {filteredProjects.map((project) => {
          const statusStat = project.stats.find(stat => stat.label === "Status");
          const status = statusStat ? statusStat.value : '';
          const locationStat = project.stats.find(stat => stat.label === "Location");
          const location = locationStat ? locationStat.value : '';
          const exitStrategyStat = project.stats.find(stat => stat.label === "Exit Strategy");
          const exitStrategy = exitStrategyStat ? exitStrategyStat.value : '';

          return (
            <div key={project.slug} className="flex flex-col md:flex-row gap-6 border-b pb-8 last:border-b-0">
              {/* Project Image */}
              <div className="w-full md:w-64 h-48 bg-gray-200 relative flex-shrink-0 overflow-hidden">
                <Image
                  src={project.images.feature}
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
                    <span className={`px-3 py-1 text-xs font-medium ${statusColors[status] || 'bg-gray-200 text-gray-900'}`}>{status.toUpperCase()}</span>
                    <span className="px-3 py-1 text-xs font-medium bg-white text-black border-gray-300">{exitStrategy.toUpperCase()}</span>
                    <span className="px-3 py-1 text-xs font-medium bg-white text-black border-gray-300">{project.subType.toUpperCase()}</span>
                  </div>
                  <h3 className="text-2xl font-medium tracking-widest mb-1">{project.name}</h3>
                  <p className="italic text-gray-700 mb-2">{project.description}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-4">{location}</p>
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
          );
        })}
      </div>
    </div>
  );
}
