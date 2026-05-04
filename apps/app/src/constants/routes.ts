export const ROUTES = {
  TEAMS: {
    LIST: '/teams',
    TEAM: (id: string) => `/teams/${id}`,
  },
  LEAGUES: {
    LIST: '/leagues',
    LEAGUE: (id: string) => `/leagues/${id}`,
  },
};
