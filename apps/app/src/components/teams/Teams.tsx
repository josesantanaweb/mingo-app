'use client';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { MetricsBox, LeagueButton, Tabs } from '@/components/common';

const LEAGUES = [
  'All',
  'Premier League',
  'La Liga',
  'Serie A',
  'Bundesliga',
  'Ligue 1',
  'Eredivisie',
  'Primeira Liga',
];

export const Teams = (): ReactElement => {
  const [activeLeague, setActiveLeague] = useState<string>(LEAGUES[0]);

  return (
    <div className="w-full h-full flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-bold text-2xl">Teams</h3>
        <div className="flex flex-col">
          <h3 className="text-primary font-bold text-xl">12</h3>
          <p className="uppercase text-sm text-body font-semibold">total teams</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <MetricsBox title="win rate" value="14.10%" />
        <MetricsBox title="profit" value="+2.6K" />
      </div>

      <Tabs />

      <div className="flex flex-col">
        <div className="flex items-center gap-3 max-w-lg overflow-x-auto scrollbar-hide">
          {LEAGUES.map((league) => (
            <LeagueButton
              key={league}
              label={league}
              active={activeLeague === league}
              onClick={() => setActiveLeague(league)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
