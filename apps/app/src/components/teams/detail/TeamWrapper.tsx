'use client';
import { Pencil, Trash } from '@boxicons/react';
import { useParams } from 'next/navigation';
import type { ReactElement } from 'react';
import { Button } from '@/components/ui';
import { MetricsBox } from '@/components/common';
import { useTeam } from '@/hooks';
import { TeamStreak, TeamStreakSkeleton } from './team-streak';
import { TeamInfo, TeamInfoSkeleton } from './team-info';
import { TeamUpcomingGames } from './TeamUpcomingGames';
import { TeamStats } from './team-stats';

export const TeamWrapper = (): ReactElement => {
  const params = useParams();
  const idParam = params?.id;
  const teamId = Array.isArray(idParam) ? idParam[0] : idParam;

  const { data: team, loading, error } = useTeam(teamId);

  const renderSection = (
    content: () => ReactElement,
    skeleton: ReactElement,
    requireTeam = true,
  ) => (loading || (requireTeam && !team) ? skeleton : content());

  if (error && !loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-red-500">Failed to load team data. Please try again later.</p>
      </div>
    );
  }

  if (!team && !loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-body">Team not found.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col gap-6 pt-6 pb-30 relative">
      <div className="flex gap-3 items-center flex-col">
        {renderSection(
          () => (
            <TeamInfo team={team!} />
          ),
          <TeamInfoSkeleton />,
        )}

        <div className="grid grid-cols-2 items-center justify-between gap-3 w-full">
          <MetricsBox title="win rate" value="14.10%" />
          <MetricsBox title="profit" value="+2.6K" />
          <MetricsBox title="win rate" value="14.10%" />
          <MetricsBox title="profit" value="+2.6K" />
        </div>
      </div>

      {renderSection(
        () => (
          <TeamStreak streak={team!.streak || []} />
        ),
        <TeamStreakSkeleton />,
      )}

      <TeamUpcomingGames team={team} />

      <TeamStats />

      <div className="flex flex-col gap-3">
        <Button size="lg" variant="primary">
          <Pencil />
          Edit team
        </Button>
        <Button size="lg" variant="danger">
          <Trash />
          Delete team
        </Button>
      </div>
    </div>
  );
};
