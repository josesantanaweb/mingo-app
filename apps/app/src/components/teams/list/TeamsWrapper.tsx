import type { ReactElement } from 'react';
import { query } from '@/lib/apollo/rsc';
import { GET_LEAGUES, GET_TEAMS } from '@/graphql/queries';
import type { ILeague, ITeam } from '@/types';
import { Teams } from './Teams';

type TeamsQuery = { teams: ITeam[] };
type LeaguesQuery = { leagues: ILeague[] };

export const TeamsWrapper = async (): Promise<ReactElement> => {
  const [teamsResult, leaguesResult] = await Promise.all([
    query<TeamsQuery>({ query: GET_TEAMS }),
    query<LeaguesQuery>({ query: GET_LEAGUES }),
  ]);

  const initialTeams = teamsResult.data?.teams ?? [];
  const initialLeagues = leaguesResult.data?.leagues ?? [];

  return <Teams initialTeams={initialTeams} initialLeagues={initialLeagues} />;
};
