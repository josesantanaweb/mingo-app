'use client';
import React, { ReactElement, useMemo } from 'react';
import { StreakType } from '@/types';
import { STREAK_BADGE_CLASS, STREAK_BADGE_LABEL } from './utils';

interface TeamStreakProps {
  streak?: StreakType[];
}

const StreakBadge = ({ value }: { value: StreakType }) => (
  <span
    className={`flex items-center justify-center w-10 h-10 rounded-lg border font-semibold ${STREAK_BADGE_CLASS[value]}`}
  >
    {STREAK_BADGE_LABEL[value]}
  </span>
);

export const TeamStreak = ({ streak = [] }: TeamStreakProps): ReactElement => {

  const badges = useMemo(
    () => (Array.isArray(streak) && streak.length ? streak.map((s, i) => <StreakBadge key={i} value={s} />) : []),
    [streak]
  );

  return (
    <section className="flex flex-col gap-3">
      <h3 className="text-base text-white uppercase font-semibold">
        Recent form
      </h3>
      <div className="flex items-center gap-2" role="list" aria-label="Recent form results">
        {badges.length ? (
          badges.map((b, i) => (
            <span role="listitem" key={i}>
              {b}
            </span>
          ))
        ) : (
          <p className="text-body text-sm">No recent form available</p>
        )}
      </div>
    </section>
  );
};
