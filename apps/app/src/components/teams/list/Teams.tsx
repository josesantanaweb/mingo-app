'use client';

import type { ReactElement } from 'react';
import { useState } from 'react';
import { MetricsBox, Tabs, HeaderScreens, AddButton, SearchInput } from '@/components/common';
import { useTeams, useDebounce } from '@/hooks';
import { TeamsFilter } from './TeamsFilter';
import { EmptyState } from './EmptyState';
import { TeamsList } from './TeamsList';
import { TeamsSkeleton } from './TeamsSkeleton';
import type { ILeague, ITeam } from '@/types';

const TABS = [
  { key: 'all' as const, label: 'all teams' },
  { key: 'favorites' as const, label: 'favorites' },
];

type TeamsViewProps = {
  initialTeams: ITeam[];
  initialLeagues: ILeague[];
};

export const Teams = ({
  initialTeams,
  initialLeagues,
}: TeamsViewProps): ReactElement => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [activeLeague, setActiveLeague] = useState<ILeague | null>(null);
  const [searchValue, setSearchValue] = useState('');

  const debouncedSearchValue = useDebounce(searchValue.trim(), 300);

  const hasActiveFilters =
    activeTab === 'favorites' || activeLeague !== null || debouncedSearchValue.length > 0;

  const {
    data: filteredTeams,
    loading: teamsLoading,
    error,
  } = useTeams({
    name: debouncedSearchValue,
    isFavorite: activeTab === 'favorites' ? true : undefined,
    leagueId: activeLeague?.id,
    skip: !hasActiveFilters,
  });

  const teams = hasActiveFilters ? filteredTeams : initialTeams;
  const showTeamsLoading = hasActiveFilters && teamsLoading;

  const renderContent = () => {
    if (showTeamsLoading) return <TeamsSkeleton count={5} />;
    if (error) {
      return (
        <div className="text-red-500 text-center py-4">
          Error loading teams. Please try again.
        </div>
      );
    }
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
        leagues={initialLeagues}
        activeLeague={activeLeague}
        setActiveLeague={setActiveLeague}
        loading={false}
      />

      {renderContent()}

      <AddButton onClick={() => {}} />
    </div>
  );
};
