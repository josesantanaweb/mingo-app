'use client';
import type { ReactElement } from 'react';
import { StreakType } from '@/types';
import { cn } from '@/lib/cn';

const STREAK_BAR_CLASS: Record<StreakType, string> = {
  [StreakType.WIN]: 'bg-streak-win',
  [StreakType.DRAW]: 'bg-streak-draw',
  [StreakType.LOSE]: 'bg-streak-lose',
};

const DEFAULT_PLACEHOLDER_COUNT = 5;

type TeamStreakProps = {
  streak?: StreakType[] | null;
  placeholderCount?: number;
  keyPrefix?: string;
  className?: string;
};

export const TeamStreak = ({
  streak,
  placeholderCount = DEFAULT_PLACEHOLDER_COUNT,
  keyPrefix = 'streak',
  className,
}: TeamStreakProps): ReactElement => {
  const items =
    streak && streak.length > 0
      ? streak
      : Array.from({ length: placeholderCount }, () => StreakType.DRAW);

  return (
    <div className="flex flex-col gap-1">
      <p className="text-body uppercase text-xs font-semibold">win streak</p>
      <div className={cn('flex gap-1.5 items-center justify-end', className)}>
        {items.map((streakType, index) => (
          <span
            key={`${keyPrefix}-${index}`}
            className={cn('h-6 w-2 rounded-full', STREAK_BAR_CLASS[streakType])}
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
};
