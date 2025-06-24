import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// All team members with details
const teamMembers = [
  {
    slug: 'sherard-mcqueen',
    name: 'Sherard McQueen',
    position: 'Co-Founder, Managing Partner | Sales & Marketing',
    image: '/images/team/Sherard.png',
    bio: 'Experienced sales and marketing professional with a proven track record in business development.',
    linkedin_url: 'https://www.linkedin.com/in/sherard-mcqueen-32b76224/',
  },
  {
    slug: 'yaseen-nimjee',
    name: 'Yaseen Nimjee',
    position: 'Co-Founder | Construction & Development',
    image: '/images/team/Yaseen.png',
    bio: 'Expert in construction management and real estate development with extensive industry experience.',
    linkedin_url: 'https://www.linkedin.com/in/yaseen-nimjee/',
  },
  {
    slug: 'rajeev-viswanathan',
    name: 'Rajeev Viswanathan',
    position: 'CFO | Finance & Operations',
    image: '/images/team/Rajeev.png',
    bio: 'Strategic financial leader with expertise in corporate finance and operational excellence.',
    linkedin_url: 'https://www.linkedin.com/in/rajeev-viswanathan/',
  },
  {
    slug: 'linda-ford',
    name: 'Linda Ford',
    position: 'Director of Entitlement',
    image: '/images/team/Linda.png',
    bio: 'Specialized in navigating complex entitlement processes and regulatory compliance.',
    linkedin_url: '',
  },
  {
    slug: 'sophia-bailey',
    name: 'Sophia Bailey',
    position: 'Director of Sales',
    image: '/images/team/Sophie.png',
    bio: 'Sales leader with a focus on building strong client relationships and driving revenue growth.',
    linkedin_url: '',
  },
  {
    slug: 'leo-thomas',
    name: 'Leo Thomas',
    position: 'VP, Construction',
    image: '/images/team/Yogesh.png',
    bio: 'Construction management expert with a focus on quality, safety, and project delivery.',
    linkedin_url: '',
  },
  {
    slug: 'reza-farahdel-cpa',
    name: 'Reza Farahdel, CPA',
    position: 'Controller',
    image: '/images/team/Geoff.png',
    bio: 'Certified Public Accountant with extensive experience in financial management and reporting.',
    linkedin_url: '',
  },
];

interface TeamMemberProps {
  params: { slug: string };
}

export default function TeamMemberPage({ params }: TeamMemberProps) {
  const member = teamMembers.find((m) => m.slug === params.slug);
  if (!member) return notFound();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto pt-32 pb-8 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0 w-48 h-60 relative rounded-xl overflow-hidden border-4 border-[#008DB7] bg-gray-100">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1">
            <p className="uppercase text-xs tracking-widest text-black-primary font-semibold mb-2">Team Bio</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">{member.name}</h1>
            <h2 className="text-lg text-accent-blue font-semibold mb-4">{member.position}</h2>
            <div className="prose max-w-none text-gray-800 mb-6">
              {member.bio}
            </div>
            {member.linkedin_url && member.linkedin_url.length > 0 && (
              <a
                href={member.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#008DB7] hover:underline font-medium"
              >
                <img src="/images/icons/linkedin-icon-blue.svg" alt="LinkedIn" width={20} height={20} className="inline-block" />
                View LinkedIn
              </a>
            )}
          </div>
        </div>
        <div className="mt-10">
          <Link href="/team">
            <button className="border border-gray-800 px-6 py-2 rounded-md font-semibold hover:bg-[#F2F7F6] transition">
              BACK TO OUR TEAM
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
} 