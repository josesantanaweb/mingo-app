import { useQuery } from '@apollo/client/react';
import { GET_TEAMS } from '@/graphql/queries';
import type { ITeam } from '@/types';

type GetTeamsQuery = {
  teams: ITeam[];
};

type GetTeamsVariables = {
  filter?: {
    leagueId?: string;
    name?: string;
    isFavorite?: boolean;
  };
};

type UseTeamsOptions = {
  leagueId?: string;
  name?: string;
  isFavorite?: boolean;
  skip?: boolean;
};

export const useTeams = ({ leagueId, name, isFavorite, skip }: UseTeamsOptions = {}) => {
  const filter = {
    ...(leagueId ? { leagueId } : {}),
    ...(name ? { name } : {}),
    ...(typeof isFavorite === 'boolean' ? { isFavorite } : {}),
  };

  const { data, error, loading } = useQuery<GetTeamsQuery, GetTeamsVariables>(GET_TEAMS, {
    variables: { filter: Object.keys(filter).length > 0 ? filter : undefined },
    skip,
    fetchPolicy: 'cache-first',
    nextFetchPolicy: 'cache-first',
  });

  return {
    data: data?.teams ?? [],
    error,
    loading,
  };
};