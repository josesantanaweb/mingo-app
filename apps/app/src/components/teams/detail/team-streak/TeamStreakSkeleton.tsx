'use client';
import React, { ReactElement } from 'react';

export const TeamStreakSkeleton = (): ReactElement => {
  return (
    <section className="flex flex-col gap-3">
      <h3 className="text-base text-white uppercase font-semibold">
        Recent form
      </h3>
      <div className="flex items-center gap-2" role="list" aria-label="Recent form results">
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className="w-10 h-10 rounded-lg skeleton-shimmer" />
        ))}
      </div>
    </section>
  );
};
