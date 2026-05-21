'use client';
import type { ReactElement } from 'react';

export const TeamUpcomingGames = (): ReactElement => {
  return (
   <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base text-white uppercase font-semibold">Upcoming games</h3>
          <span className="text-sm text-body cursor-pointer">View all</span>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 rounded-xl border border-stroke/30 px-3 bg-surface w-full h-52.5">
            <div className="flex flex-col">
              <h6 className="text-white font-semibold text-base">Team A</h6>
              <p className="text-body text-sm">League name</p>
            </div>
          </div>
        </div>
      </div>
  );
};
