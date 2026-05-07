'use client';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { MetricsBox, Tabs } from '@/components/common';
import { LeaguesFilter } from '@/components/leagues';
import { EmptyState } from '@/components/teams';

const TABS = [
  { key: 'all' as const, label: 'all teams' },
  { key: 'favorites' as const, label: 'favorites' },
];

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
  const [activeTab, setActiveTab] = useState<string>('all');
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

      <Tabs activeTab={activeTab} onTabChange={setActiveTab} tabs={TABS} />

      <div className="flex flex-col">
        <LeaguesFilter
          leagues={LEAGUES}
          activeLeague={activeLeague}
          setActiveLeague={setActiveLeague}
        />
      </div>

      <EmptyState />
    </div>
  );
};
