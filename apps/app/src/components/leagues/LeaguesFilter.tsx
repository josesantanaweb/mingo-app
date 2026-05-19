'use client';
import type { ReactElement } from 'react';
import { LeagueButton } from '@/components/common';
import { League } from '@/types';
import { LeaguesFilterSkeleton } from './LeaguesFilterSkeleton';

interface LeaguesFilterProps {
  leagues: League[];
  activeLeague: League | null;
  setActiveLeague: (league: League | null) => void;
  loading: boolean;
}

export const LeaguesFilter = ({ leagues, activeLeague, setActiveLeague, loading }: LeaguesFilterProps): ReactElement => {

  return (
    <div className="flex items-center gap-3 max-w-md overflow-x-auto scrollbar-hide">
      <LeagueButton
        key="all-leagues"
        label="All"
        active={activeLeague === null}
        onClick={() => setActiveLeague(null)}
      />

      {loading && (
        <LeaguesFilterSkeleton />
      )}

      {!loading && leagues.map((league) => (
        <LeagueButton
          key={league.id}
          label={league.name}
          active={activeLeague?.id === league.id}
          onClick={() => setActiveLeague(league)}
        />
      ))}
    </div>
  );
};
