'use client';

import { useApolloClient } from '@apollo/client/react';
import { Pencil, Trash } from '@boxicons/react';
import type { ReactElement } from 'react';
import { useEffect } from 'react';
import { Button } from '@/components/ui';
import { GET_TEAM } from '@/graphql/queries';
import { MetricsBox } from '@/components/common';
import type { ITeam } from '@/types';
import { TeamStreak } from './team-streak';
import { TeamInfo } from './team-info';
import { TeamUpcomingGames } from './TeamUpcomingGames';
import { TeamStats } from './team-stats';

type TeamViewProps = {
  team: ITeam;
};

export const Team = ({ team }: TeamViewProps): ReactElement => {
  const client = useApolloClient();

  useEffect(() => {
    client.cache.writeQuery({
      query: GET_TEAM,
      variables: { id: team.id },
      data: { team },
    });
  }, [client, team]);

  return (
    <div className="w-full h-full flex flex-col gap-6 pt-6 pb-30 relative">
      <div className="flex gap-3 items-center flex-col">
        <TeamInfo team={team} />

        <div className="grid grid-cols-2 items-center justify-between gap-3 w-full">
          <MetricsBox title="win rate" value="14.10%" />
          <MetricsBox title="profit" value="+2.6K" />
          <MetricsBox title="win rate" value="14.10%" />
          <MetricsBox title="profit" value="+2.6K" />
        </div>
      </div>

      <TeamStreak streak={team.streak ?? []} />

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
