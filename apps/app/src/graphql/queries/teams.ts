import { gql } from '@apollo/client';
import { TEAMS_FRAGMENT } from '../fragments';

export const GET_TEAMS = gql`
  query Teams {
    teams {
      ...TeamFragment
    }
  }
  ${TEAMS_FRAGMENT}
`;

export const GET_TEAM = gql`
  query Team($id: String!) {
    team(id: $id) {
      ...TeamFragment
    }
  }
  ${TEAMS_FRAGMENT}
`;