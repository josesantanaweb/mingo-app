'use client';
import React, { ReactElement, useMemo } from 'react';
import { StreakType } from '@/types';
import { STREAK_BADGE_CLASS, STREAK_BADGE_LABEL } from './utils';

type TeamStreakProps = {
  streak?: StreakType[];
};

type StreakBadgeProps = {
  value: StreakType;
};

const StreakBadge = ({ value }: StreakBadgeProps): ReactElement => (
  <span
    className={`flex items-center justify-center w-10 h-10 rounded-lg border font-semibold ${STREAK_BADGE_CLASS[value]}`}
  >
    {STREAK_BADGE_LABEL[value]}
  </span>
);

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
          streakBadges.map((badge, index) => (
            <span role="listitem" key={index}>
              {badge}
            </span>
          ))
        ) : (
          <p className="text-body text-sm">No recent form available</p>
        )}
      </div>
    </section>
  );
};
