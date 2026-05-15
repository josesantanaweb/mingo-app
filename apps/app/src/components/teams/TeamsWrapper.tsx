'use client';
import type { ReactElement } from 'react';
import { useMemo, useState } from 'react';
import { MetricsBox, Tabs } from '@/components/common';
import { useTeams, useLeagues } from '@/hooks';
import { LeaguesFilter } from '@/components/leagues';
import { EmptyState } from '@/components/teams';
import type { League } from '@/types';
import { TeamsList } from './TeamsList';
import { TeamSkeleton } from './TeamSkeleton';

const TABS = [
  { key: 'all' as const, label: 'all teams' },
  { key: 'favorites' as const, label: 'favorites' },
];

export const TeamsWrapper = (): ReactElement => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const { data: teams, loading, error } = useTeams();
  const { data: leagues } = useLeagues();

  const [activeLeague, setActiveLeague] = useState<League | null>(null);

  const filteredTeams = useMemo(() => {

    return teams.filter((team) => {
      const matchesTab = activeTab === 'favorites' ? Boolean(team.isFavorite) : true;
      const matchesLeague = activeLeague ? team.league?.id === activeLeague.id : true;

      return matchesTab && matchesLeague;
    });
  }, [activeLeague, activeTab, teams]);

  return (
    <div className="w-full h-full flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-white font-bold text-2xl">Teams</h3>
        <div className="flex flex-col">
          <h3 className="text-primary font-bold text-xl">{filteredTeams.length}</h3>
          <p className="uppercase text-sm text-body font-semibold">total teams</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <MetricsBox title="win rate" value="14.10%" />
        <MetricsBox title="profit" value="+2.6K" />
      </div>

      <Tabs activeTab={activeTab} onTabChange={setActiveTab} tabs={TABS} />

      <LeaguesFilter
        leagues={leagues}
        activeLeague={activeLeague}
        setActiveLeague={setActiveLeague}
      />

      {!loading ? (
        <TeamSkeleton />
      ) : null}

      {error ? (
        <p className="text-red-400 text-sm">Could not load teams from API.</p>
      ) : null}

      {!loading && !error && filteredTeams.length > 0 ? <TeamsList teams={filteredTeams} /> : null}

      {!loading && !error && filteredTeams.length === 0 ? <EmptyState /> : null}
    </div>
  );
};
