'use client';
import React, { ReactElement, useMemo } from 'react';
import { StreakType } from '@/types';

interface TeamFormProps {
  streak?: StreakType[];
}

const STREAK_BADGE_CLASS: Record<StreakType, string> = {
  [StreakType.WIN]: 'bg-success/10 text-success border-success',
  [StreakType.DRAW]: 'bg-surface text-body border-stroke',
  [StreakType.LOSE]: 'bg-error/10 text-error border-error',
};

const STREAK_BADGE_LABEL: Record<StreakType, string> = {
  [StreakType.WIN]: 'W',
  [StreakType.DRAW]: 'D',
  [StreakType.LOSE]: 'L',
};

const StreakBadge = ({ value }: { value: StreakType }) => (
  <span
    aria-hidden="true"
    className={`flex items-center justify-center w-10 h-10 rounded-lg border font-semibold ${STREAK_BADGE_CLASS[value]}`}
  >
    {STREAK_BADGE_LABEL[value]}
  </span>
);

export const TeamForm = ({ streak = [] }: TeamFormProps): ReactElement => {
  const badges = useMemo(
    () => (Array.isArray(streak) && streak.length ? streak.map((s, i) => <StreakBadge key={i} value={s} />) : []),
    [streak]
  );

  return (
    <section aria-labelledby="recent-form-heading" className="flex flex-col gap-3">
      <h3 id="recent-form-heading" className="text-base text-white uppercase font-semibold">
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
