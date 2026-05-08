'use client';
import Image from 'next/image';
import type { ReactElement } from 'react';
import { ChevronRight } from '@boxicons/react';
import { Team } from '@/types';

interface TeamItemProps {
  team: Team;
}

export const TeamItem = ({ team }: TeamItemProps): ReactElement => {
  return (
    <div className="flex items-center justify-between gap-3 w-full h-18 rounded-xl border border-stroke/30 px-3 bg-surface">
      <div className="flex gap-3 items-center">
        <div className="w-10 h-10">
          <Image
            src={team.logo}
            alt={`${team.name} logo`}
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h6 className="text-white font-semibold text-base">{team.name}</h6>
          <p className="text-body text-sm">{team.league.name}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex flex-col gap-1">
          <p className="text-body uppercase text-xs font-semibold">win streak</p>
          <div className="flex gap-1.5 items-center justify-end">
            <span className="h-6 w-2 bg-primary rounded-full" />
            <span className="h-6 w-2 bg-primary rounded-full" />
            <span className="h-6 w-2 bg-primary rounded-full" />
            <span className="h-6 w-2 bg-primary rounded-full" />
            <span className="h-6 w-2 bg-primary rounded-full" />
          </div>
        </div>
        <button className="text-white cursor-pointer">
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};
