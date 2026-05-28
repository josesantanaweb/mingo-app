import { Suspense } from 'react';
import { TeamsWrapper } from '@/components/teams';
import { TeamsSkeleton } from '@/components/teams';

export default function TeamsPage() {
  return (
    <Suspense fallback={<TeamsSkeleton count={5} />}>
      <TeamsWrapper />
    </Suspense>
  );
}
