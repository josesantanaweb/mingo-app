import { gql } from '@apollo/client';
import { LEAGUES_FRAGMENT } from '../fragments';

export const GET_LEAGUES = gql`
  query Leagues {
    leagues {
      ...LeagueFragment
    }
  }
  ${LEAGUES_FRAGMENT}
`;

export const GET_LEAGUE = gql`
  query League($id: String!) {
    league(id: $id) {
      ...LeagueFragment
    }
  }
  ${LEAGUES_FRAGMENT}
`;