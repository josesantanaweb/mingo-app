'use client';
import Image from 'next/image';
import type { ReactElement } from 'react';
import { ChevronRight } from '@boxicons/react';
import type { Team } from '@/types';
import { TeamStreak } from './TeamStreak';

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
          <p className="text-body text-sm">{team.league?.name ?? 'No league'}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <TeamStreak streak={team.streak} keyPrefix={team.id} />
        <button type="button" className="text-white cursor-pointer">
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};
