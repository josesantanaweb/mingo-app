'use client';
import { useParams } from 'next/navigation';
import type { ReactElement } from 'react';
import { MetricsBox } from '@/components/common';
import { useTeam } from '@/hooks';

export const TeamWrapper = (): ReactElement => {
  const params = useParams();
  const idParam = params?.id;
  const teamId = Array.isArray(idParam) ? idParam[0] : idParam;

  const { data: team, loading, error } = useTeam(teamId);

  return (
    <div className="w-full h-full flex flex-col gap-6 pb-12 relative">
      <div className="grid grid-cols-2 items-center justify-between gap-3 w-full">
        <MetricsBox title="win rate" value="14.10%" />
        <MetricsBox title="profit" value="+2.6K" />
        <MetricsBox title="win rate" value="14.10%" />
        <MetricsBox title="profit" value="+2.6K" />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-lg text-white uppercase font-semibold">Recent form</h3>
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-10 h-10 bg-surface text-primary font-semibold rounded-lg border border-stroke">W</span>
          <span className="flex items-center justify-center w-10 h-10 bg-surface text-error font-semibold rounded-lg border border-stroke">L</span>
          <span className="flex items-center justify-center w-10 h-10 bg-surface text-primary font-semibold rounded-lg border border-stroke">W</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-lg text-white uppercase font-semibold">Upcoming games</h3>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 rounded-xl border border-stroke/30 px-3 bg-surface w-full h-52.5">
            <div className="flex flex-col">
              <h6 className="text-white font-semibold text-base">Team A</h6>
              <p className="text-body text-sm">League name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
