'use client';
import type { ReactElement } from 'react';
import Image from 'next/image';
import { Star } from '@boxicons/react';
import { Team } from '@/types';

interface MatchBoxProps {
  team?: Team;
}

export const MatchBox = ({ team }: MatchBoxProps): ReactElement => {
  return (
    <div className="flex flex-col p-6 items-center gap-5 rounded-xl border border-stroke/30 bg-surface w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6">
            {team?.league?.logo ? (
              <Image
                src={team.league.logo}
                alt={`${team?.league?.name} logo`}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            ) : null}
          </div>
          <h6 className="text-white font-semibold text-base">La Liga</h6>
        </div>
        <span className="cursor-pointer" onClick={() => alert('Feature coming soon!')}>
          <Star className="w-6 h-6 text-primary" />
        </span>
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-1 items-center">
          <div className="w-10 h-10">
            {team?.logo ? (
              <Image
                src={team.logo}
                alt={`${team?.name} logo`}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            ) : null}
          </div>
          <h3 className="text-base text-white font-semibold">{team?.name}</h3>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-primary font-bold">09:00 AM</p>
          <p className="text-sm text-body">30 Apr</p>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <div className="w-10 h-10">
            {team?.logo ? (
              <Image
                src={team.logo}
                alt={`${team?.name} logo`}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            ) : null}
          </div>
          <h3 className="text-base text-white font-semibold">{team?.name}</h3>
        </div>
      </div>

      <div className="items-center gap-3 grid grid-cols-3 w-full">
        <div className="flex flex-col items-center justify-center border border-stroke/30 rounded-lg w-full p-1">
          <p className="text-body text-sm">1</p>
          <p className="text-white font-bold text-base">2.10</p>
        </div>
        <div className="flex flex-col items-center justify-center border border-stroke/30 rounded-lg w-full p-1">
          <p className="text-body text-sm">1</p>
          <p className="text-white font-bold text-base">2.00</p>
        </div>
        <div className="flex flex-col items-center justify-center border border-stroke/30 rounded-lg w-full p-1">
          <p className="text-body text-sm">1</p>
          <p className="text-white font-bold text-base">1.10</p>
        </div>
      </div>
    </div>
  );
};
