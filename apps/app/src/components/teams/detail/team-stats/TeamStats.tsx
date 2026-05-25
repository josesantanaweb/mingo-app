'use client';
import type { ReactElement } from 'react';
import { TeamStatsItem } from './TeamStatsItem';

export const TeamStats = (): ReactElement => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-base text-white uppercase font-semibold">Season Stats</h3>
      </div>

      <div className="flex border border-stroke/30 flex-col gap-3 bg-surface rounded-xl p-4">
        <TeamStatsItem label="Gol Scored Per Game" value="2.5" width={2.5} />
        <TeamStatsItem label="Gol Conceded Per Game" value="1.5" width={1.5} />
        <TeamStatsItem label="BTTS" value="12" width={12} isPercentage={true} />
        <TeamStatsItem label="Over 1.5 Goals" value="12" width={12} isPercentage={true} />
        <TeamStatsItem label="Over 2.5 Goals" value="12" width={12} isPercentage={true} />
        <TeamStatsItem label="Fouls" value="60" width={60} />
        <TeamStatsItem label="Yellow Cards Per Game" value="3" width={3} />
        <TeamStatsItem label="Corners Kick Per Game" value="10" width={6} />
      </div>
    </div>
  );
};
