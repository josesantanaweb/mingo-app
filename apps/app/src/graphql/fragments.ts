
import { gql } from '@apollo/client';

export const LEAGUES_FRAGMENT = gql`
  fragment LeagueFragment on League {
    id
    name
    logo
  }
`;

export const TEAMS_FRAGMENT = gql`
  fragment TeamFragment on Team {
    id
    name
    logo
    isFavorite
    streak
    league {
      ...LeagueFragment
    }
    tags {
      label
    }
  }
  ${LEAGUES_FRAGMENT}
`;