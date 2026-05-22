import { useApolloClient, useMutation } from '@apollo/client/react';
import { UPDATE_TEAM } from '@/graphql/mutations';
import { TEAMS_FRAGMENT } from '@/graphql/fragments';
import type { Team } from '@/types';

type UpdateTeamMutation = {
  updateTeam: Team;
};

type UpdateTeamVariables = {
  id: string;
  input: {
    isFavorite?: boolean;
  };
};

export const useUpdateTeam = () => {
  const client = useApolloClient();
  const [mutate, result] = useMutation<UpdateTeamMutation, UpdateTeamVariables>(UPDATE_TEAM);

  const updateTeam = async (id: string, input: UpdateTeamVariables['input']) => {
    // try to read current team from cache to build a full optimistic response
    const cacheId = client.cache.identify({ __typename: 'Team', id });
    const currentTeam = cacheId
      ? (client.readFragment<Team>({ id: cacheId, fragment: TEAMS_FRAGMENT }) as Partial<Team> | null)
      : null;

    const optimisticTeam = {
      __typename: 'Team',
      id,
      ...(currentTeam ?? {}),
      ...input,
    };

    return mutate({
      variables: { id, input },
      optimisticResponse: {
        updateTeam: optimisticTeam,
      } as unknown as UpdateTeamMutation,
    });
  };

  return {
    updateTeam,
    ...result,
  };
};
