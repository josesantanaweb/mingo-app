'use client';
import type { ReactElement } from 'react';
import { useState } from 'react';
import { MatchBox } from '@/components/common/MatchBox';
import { TeamsFilter } from '@/components/teams';
import type { ILeague, ITeam } from '@/types';

export const Teams = ({}): ReactElement => {
  const [activeLeague, setActiveLeague] = useState<ILeague | null>(null);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-items w-full border-b border-stroke/50">
        <div className="flex-col flex items-center justify-center p-3 cursor-pointer">
          <h6 className="text-primary text-sm font-semibold uppercase">THU</h6>
          <p className="text-body text-xs">30 Apr</p>
        </div>
        <div className="flex-col flex items-center justify-center p-3">
          <h6 className="text-primary text-sm font-semibold uppercase">THU</h6>
          <p className="text-body text-xs">30 Apr</p>
        </div>
      </div>

      {/* <TeamsFilter
        leagues={[]}
        activeLeague={activeLeague}
        setActiveLeague={setActiveLeague}
        loading={false}
      /> */}
      <MatchBox />
      <MatchBox />
    </div>
  );
};
