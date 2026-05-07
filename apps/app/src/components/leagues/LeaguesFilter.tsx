'use client';
import type { ReactElement } from 'react';
import { LeagueButton } from '@/components/common';

interface LeaguesFilterProps {
  leagues: string[];
  activeLeague: string;
  setActiveLeague: (league: string) => void;
}

export const LeaguesFilter = ({ leagues, activeLeague, setActiveLeague }: LeaguesFilterProps): ReactElement => {

  return (
    <div className="flex items-center gap-3 max-w-md overflow-x-auto scrollbar-hide">
      {leagues.map((league) => (
        <LeagueButton
          key={league}
          label={league}
          active={activeLeague === league}
          onClick={() => setActiveLeague(league)}
        />
      ))}
    </div>
  );
};
