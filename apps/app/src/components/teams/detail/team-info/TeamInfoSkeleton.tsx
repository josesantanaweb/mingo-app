'use client';
import type { ReactElement } from 'react';

export const TeamInfoSkeleton = (): ReactElement => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="w-15 h-15 skeleton-shimmer rounded-full" />
        <div className="flex flex-col gap-3">
          <span className="w-20 h-5 skeleton-shimmer rounded-xl" />
          <span className="w-20 h-3 skeleton-shimmer rounded-xl" />
        </div>
      </div>
      <span className="w-6 h-6 skeleton-shimmer rounded-2xl" />
    </div>
  );
};
