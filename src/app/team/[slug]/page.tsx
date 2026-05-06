import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllTeamMembers, getTeamMemberBySlug } from '@/lib/team';

export const revalidate = 60;

interface TeamMemberProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const members = await getAllTeamMembers();
  return members.map((member) => ({ slug: member.slug }));
}

export default async function TeamMemberPage({ params }: TeamMemberProps) {
  const member = await getTeamMemberBySlug(params.slug);
  if (!member) return notFound();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto pt-32 pb-8 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0 w-48 h-60 relative rounded-xl overflow-hidden border-4 border-[#008DB7] bg-gray-100">
            {member.image && (
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
          <div className="flex-1">
            <p className="uppercase text-xs tracking-widest text-black-primary font-semibold mb-2">Team Bio</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">{member.name}</h1>
            <h2 className="text-lg text-accent-blue font-semibold mb-4">{member.position}</h2>
            <div className="prose max-w-none text-gray-800 mb-6">
              {member.bio}
            </div>
            {member.linkedinId && member.linkedinId.trim() !== '' && (
              <a
                href={`https://www.linkedin.com/in/${member.linkedinId}`}
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
