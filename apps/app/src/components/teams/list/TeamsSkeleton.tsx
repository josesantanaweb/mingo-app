'use client';
import type { ReactElement } from 'react';

type TeamSkeletonProps = {
  count?: number;
};

const TeamSkeletonItem = (): ReactElement => (
  <div className="flex items-center justify-between gap-3 w-full h-18 rounded-xl border border-stroke/30 px-3 bg-surface">
    <div className="flex gap-3 items-center">
      <div className="w-10 h-10 rounded-full skeleton-shimmer" />
      <div className="flex flex-col gap-1">
        <div className="w-10 h-3 rounded-2xl skeleton-shimmer" />
        <div className="w-6 h-2 rounded-2xl skeleton-shimmer" />
      </div>
    </div>

    <div className="flex items-center gap-3">
      <div className="flex flex-col gap-1">
        <p className="text-body uppercase text-xs font-semibold">win streak</p>
        <div className="flex gap-1.5 items-center justify-end">
          <div className="h-6 w-2 rounded-full skeleton-shimmer" />
          <div className="h-6 w-2 rounded-full skeleton-shimmer" />
          <div className="h-6 w-2 rounded-full skeleton-shimmer" />
          <div className="h-6 w-2 rounded-full skeleton-shimmer" />
          <div className="h-6 w-2 rounded-full skeleton-shimmer" />
        </div>
      </div>
    </div>
  </div>
);

export const TeamsSkeleton = ({ count = 5 }: TeamSkeletonProps): ReactElement => (
  <div className="flex flex-col gap-3">
    {Array.from({ length: count }).map((_, index) => (
      <TeamSkeletonItem key={index} />
    ))}
  </div>
);
