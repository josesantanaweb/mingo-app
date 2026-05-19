import { useQuery } from '@apollo/client/react';
import { GET_TEAM } from '@/graphql/queries';
import type { Team } from '@/types';

type GetTeamQuery = {
  team: Team | null;
};

type GetTeamVariables = {
  id: string;
};

export const useTeam = (id?: string) => {
  const { data, error, loading } = useQuery<GetTeamQuery, GetTeamVariables>(GET_TEAM, {
    variables: { id: id ?? '' },
    skip: !id,
    fetchPolicy: 'cache-first',
  });

  return {
    data: data?.team ?? null,
    error,
    loading,
  };
};