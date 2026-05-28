import { Suspense } from 'react';
import { TeamWrapper } from '@/components/teams/detail/TeamWrapper';
import { TeamInfoSkeleton } from '@/components/teams/detail/team-info';

type TeamPageProps = {
  params: Promise<{ id: string }>;
};

export default async function TeamPage({ params }: TeamPageProps) {
  const { id } = await params;

  return (
    <Suspense fallback={<TeamInfoSkeleton />}>
      <TeamWrapper teamId={id} />
    </Suspense>
  );
}
