'use client';
import { Pencil, Trash } from '@boxicons/react';
import { useParams } from 'next/navigation';
import type { ReactElement } from 'react';
import { Button } from '@/components/ui';
import { MetricsBox } from '@/components/common';
import { useTeam } from '@/hooks';
import { TeamForm } from './TeamForm';
import { TeamInfo } from './TeamInfo';
import { TeamUpcomingGames } from './TeamUpcomingGames';

export const TeamWrapper = (): ReactElement => {
  const params = useParams();
  const idParam = params?.id;
  const teamId = Array.isArray(idParam) ? idParam[0] : idParam;

  const { data: team, loading, error } = useTeam(teamId);

  return (
    <div className="w-full h-full flex flex-col gap-6 pt-6 pb-30 relative">
      <TeamInfo team={team} />

      <div className="grid grid-cols-2 items-center justify-between gap-3 w-full">
        <MetricsBox title="win rate" value="14.10%" />
        <MetricsBox title="profit" value="+2.6K" />
        <MetricsBox title="win rate" value="14.10%" />
        <MetricsBox title="profit" value="+2.6K" />
      </div>

      {<TeamForm streak={team?.streak || []} />}

      <TeamUpcomingGames />

      <div className="flex flex-col gap-3">
        <Button size="lg" variant="primary">
          <Pencil />
          edit team
        </Button>
        <Button size="lg" variant="danger">
          <Trash />
          delete team
        </Button>
      </div>
    </div>
  );
};
