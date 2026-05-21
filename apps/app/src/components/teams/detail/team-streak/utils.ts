
import { StreakType } from '@/types';

export const STREAK_BADGE_CLASS: Record<StreakType, string> = {
  [StreakType.WIN]: 'bg-success/10 text-success border-success',
  [StreakType.DRAW]: 'bg-surface text-body border-stroke',
  [StreakType.LOSE]: 'bg-error/10 text-error border-error',
};

export const STREAK_BADGE_LABEL: Record<StreakType, string> = {
  [StreakType.WIN]: 'W',
  [StreakType.DRAW]: 'D',
  [StreakType.LOSE]: 'L',
};
