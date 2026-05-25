'use client';
import type { ReactElement } from 'react';

export const TeamInfoSkeleton = (): ReactElement => {
  return (
    <div className="w-full flex items-center relative border border-stroke/30 flex-col justify-center bg-surface rounded-xl p-4 gap-4">
      <div className="flex items-center gap-4 flex-col">
        <span className="w-20 h-20 skeleton-shimmer rounded-full" />
        <div className="flex flex-col gap-3">
          <span className="w-20 h-4 skeleton-shimmer rounded-xl" />
          <span className="w-20 h-3 skeleton-shimmer rounded-xl" />
        </div>
      </div>
      <span className="w-6 h-6 skeleton-shimmer rounded-2xl absolute top-4 right-4" />
    </div>
  );
};
