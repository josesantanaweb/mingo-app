import { useQuery } from '@apollo/client/react';
import { GET_TEAMS } from '@/graphql/queries';
import type { Team } from '@/types';

type GetTeamsQuery = {
  teams: Team[];
};

export const useTeams = () => {
  const { data, error, loading } = useQuery<GetTeamsQuery>(GET_TEAMS, {
    variables: {},
    fetchPolicy: 'network-only',
  });

  return {
    data: data?.teams || null,
    error,
    loading,
  };
};