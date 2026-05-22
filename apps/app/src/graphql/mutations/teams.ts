import { gql } from '@apollo/client';
import { TEAMS_FRAGMENT } from '../fragments';

export const UPDATE_TEAM = gql`
  mutation UpdateTeam($id: String!, $input: UpdateTeamInput!) {
    updateTeam(id: $id, input: $input) {
      ...TeamFragment
    }
  }
  ${TEAMS_FRAGMENT}
`;
