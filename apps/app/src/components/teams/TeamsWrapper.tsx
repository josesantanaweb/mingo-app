'use client';
import type { ReactElement } from 'react';
import { useMemo, useState } from 'react';
import { MetricsBox, Tabs, HeaderScreens, AddButton, SearchInput } from '@/components/common';
import { useTeams, useLeagues } from '@/hooks';
import { TeamsFilter } from '@/components/teams';
import { EmptyState } from '@/components/teams';
import type { League } from '@/types';
import { TeamsList } from './TeamsList';
import { TeamsSkeleton } from './TeamsSkeleton';

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
    <div className="w-full h-full flex flex-col gap-4 pb-12 relative">
      <HeaderScreens
        title="Teams"
        description="total teams"
        value={filteredTeams.length.toString()}
      />

      <div className="flex items-center gap-3 flex-col">
        <div className="flex items-center justify-between gap-3 w-full">
          <MetricsBox title="win rate" value="14.10%" />
          <MetricsBox title="profit" value="+2.6K" />
        </div>

        <SearchInput placeholder="Search teams..."  onSearch={(value) => console.log('Search for:', value)} />
      </div>

      <Tabs activeTab={activeTab} onTabChange={setActiveTab} tabs={TABS} />

      <TeamsFilter
        leagues={leagues}
        activeLeague={activeLeague}
        setActiveLeague={setActiveLeague}
      />

      {loading && <TeamsSkeleton count={5} />}

      {!loading && !error && filteredTeams.length > 0 && <TeamsList teams={filteredTeams} />}

      {!loading && !error && filteredTeams.length === 0 && <EmptyState />}

      <AddButton onClick={() => {}} />
    </div>
  );
};
