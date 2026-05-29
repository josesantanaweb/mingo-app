import type { ReactElement } from 'react';
import { query } from '@/lib/apollo/rsc';
import { GET_TEAM } from '@/graphql/queries';
import type { ITeam } from '@/types';
import { Team } from './Team';

type TeamQuery = { team: ITeam | null };

type TeamWrapperProps = {
  teamId: string;
};

export const TeamWrapper = async ({ teamId }: TeamWrapperProps): Promise<ReactElement> => {
  const { data } = await query<TeamQuery>({
    query: GET_TEAM,
    variables: { id: teamId },
  });

  const team = data?.team;

  if (!team) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-body">Team not found.</p>
      </div>
    );
  }

  return <Team team={team} />;
};
