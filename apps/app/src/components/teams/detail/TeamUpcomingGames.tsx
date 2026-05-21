'use client';
import type { ReactElement } from 'react';
import { Team } from '@/types';
import { MatchBox } from '@/components/common/MatchBox';

interface TeamUpcomingGamesProps {
  team?: Team;
}

export const TeamUpcomingGames = ({ team }: TeamUpcomingGamesProps): ReactElement => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-base text-white uppercase font-semibold">Upcoming games</h3>
        <span className="text-sm text-body cursor-pointer">View all</span>
      </div>

      <div className="flex flex-col gap-3">
        <MatchBox team={team} />
      </div>
    </div>
  );
};
