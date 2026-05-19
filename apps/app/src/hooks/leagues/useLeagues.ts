import { useQuery } from '@apollo/client/react';
import { GET_LEAGUES } from '@/graphql/queries';
import type { League } from '@/types';

type GetLeaguesQuery = {
  leagues: League[];
};

export const useLeagues = () => {
  const { data, error, loading } = useQuery<GetLeaguesQuery>(GET_LEAGUES, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-first',
  });

  return {
    data: data?.leagues ?? [],
    error,
    loading,
  };
};