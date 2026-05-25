'use client';
import React, { ReactElement, useMemo } from 'react';
import { StreakType } from '@/types';
import { StreakBadge } from './StreakBadge';

type TeamStreakProps = {
  streak?: StreakType[];
};

export const TeamStreak = ({ streak = [] }: TeamStreakProps): ReactElement => {
  const streakValues = streak ?? [];
  const hasStreak = streakValues.length > 0;

  const streakBadges = useMemo(
    () => streakValues.map((value, index) => <StreakBadge key={index} value={value} />),
    [streakValues]
  );

  return (
    <section className="flex flex-col gap-3">
      <h3 className="text-base text-white uppercase font-semibold">Recent form</h3>
      <div className="flex items-center gap-2" role="list" aria-label="Recent form results">
        {hasStreak ? (
          streakBadges
        ) : (
          <p className="text-body text-sm">No recent form available</p>
        )}
      </div>
    </section>
  );
};
