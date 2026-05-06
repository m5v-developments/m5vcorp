'use client';

import Image from 'next/image';
import StickyHeader from '@/components/sticky-header';
import Link from 'next/link';
import { useState } from 'react';
import { TeamMember } from '@/lib/team';

export default function TeamClient({ teamMembers }: { teamMembers: TeamMember[] }) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

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
