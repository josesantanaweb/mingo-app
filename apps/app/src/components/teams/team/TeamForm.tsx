'use client';
import React, { ReactElement, useMemo } from 'react';
import { StreakType } from '@/types';

interface TeamFormProps {
  streak?: StreakType[];
}

const StreakBadge = ({ value }: { value: StreakType }) => (
  <span
    aria-hidden="true"
    className={`flex items-center justify-center w-10 h-10 rounded-lg border border-stroke font-semibold ${
      value === StreakType.WIN ? 'bg-surface text-primary' : 'bg-surface text-error'
    }`}
  >
    {value === StreakType.WIN ? 'W' : 'L'}
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
