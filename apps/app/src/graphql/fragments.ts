
import { gql } from '@apollo/client';

export const TEAMS_FRAGMENT = gql`
  fragment TeamFragment on Team {
    id
    name
  }
`;