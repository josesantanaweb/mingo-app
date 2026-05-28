import type { ILeague } from '@/types/league';

export enum StreakType {
  WIN = 'WIN',
  LOSE = 'LOSE',
  DRAW = 'DRAW',
}

export interface ITag {
  label: string;
}

export interface ITeam {
  id: string;
  isFavorite?: boolean | null;
  league?: ILeague | null;
  logo: string;
  name: string;
  streak?: StreakType[] | null;
  tags?: ITag[] | null;
}
