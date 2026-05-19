'use client';
import type { ReactElement } from 'react';
import { LeaguesFilter } from '@/components/leagues';
import { SliderAlt } from '@boxicons/react';
import type { League } from '@/types';


interface TeamsFilterProps {
  leagues: League[];
  activeLeague: League | null;
  setActiveLeague: (league: League | null) => void;
  loading: boolean;
}

export const TeamsFilter = ({ leagues, activeLeague, setActiveLeague, loading }: TeamsFilterProps): ReactElement => {
  return (
    <div className="flex items-center gap-3">
      <button className="cursor-pointer text-body">
        <SliderAlt size="sm" />
      </button>
      <LeaguesFilter
        leagues={leagues}
        activeLeague={activeLeague}
        setActiveLeague={setActiveLeague}
        loading={loading}
      />
    </div>
  );
};
