'use client';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { MetricsBox, Tabs, HeaderScreens, AddButton, SearchInput } from '@/components/common';
import { useTeams, useLeagues, useDebounce } from '@/hooks';
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
  const [activeLeague, setActiveLeague] = useState<League | null>(null);
  const [searchValue, setSearchValue] = useState('');

  const debouncedSearchValue = useDebounce(searchValue.trim(), 300);

  const { data: teams, loading: teamsLoading, error } = useTeams({
    name: debouncedSearchValue,
    isFavorite: activeTab === 'favorites' ? true : undefined,
    leagueId: activeLeague?.id,
  });
  const { data: leagues, loading: leaguesLoading } = useLeagues();

  const renderContent = () => {
    if (teamsLoading) return <TeamsSkeleton count={5} />;
    if (error) return <div className="text-red-500 text-center py-4">Error loading teams. Please try again.</div>;
    if (teams.length === 0) return <EmptyState />;
    
    return <TeamsList teams={teams} />;
  };

  return (
    <div className="w-full h-full flex flex-col gap-4 pb-12 relative">
      <HeaderScreens
        title="Teams"
        description="total teams"
        value={teams.length.toString()}
      />

      <div className="flex items-center gap-3 flex-col">
        <div className="grid grid-cols-2 items-center justify-between gap-3 w-full">
          <MetricsBox title="win rate" value="14.10%" />
          <MetricsBox title="profit" value="+2.6K" />
        </div>

        <SearchInput
          placeholder="Search teams..."
          value={searchValue}
          onValueChange={setSearchValue}
        />
      </div>

      <Tabs activeTab={activeTab} onTabChange={setActiveTab} tabs={TABS} />

      <TeamsFilter
        leagues={leagues}
        activeLeague={activeLeague}
        setActiveLeague={setActiveLeague}
        loading={leaguesLoading}
      />

      {renderContent()}

      <AddButton onClick={() => {}} />
    </div>
  );
};
