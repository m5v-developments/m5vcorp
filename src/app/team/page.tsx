import { getAllTeamMembers } from '@/lib/team';
import TeamClient from './TeamClient';

export const revalidate = 60;

export default async function TeamPage() {
  const teamMembers = await getAllTeamMembers();
  return <TeamClient teamMembers={teamMembers} />;
}
