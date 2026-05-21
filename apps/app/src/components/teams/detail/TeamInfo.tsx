'use client';
import Image from 'next/image';
import type { ReactElement } from 'react';
import { Star } from '@boxicons/react';
import { Team } from '@/types';

interface TeamInfoProps {
  team?: Team;
}

export const TeamInfo = ({ team }: TeamInfoProps): ReactElement => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-15 h-15">
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
        <div className="flex flex-col">
          <h2 className="text-2xl text-white font-bold">{team?.name}</h2>
          {team?.league ? (
            <div className="flex items-center gap-2">
              {team.league.logo && (
                <div className="w-6 h-6">
                  <Image
                    src={team.league.logo}
                    alt={`${team.league.name} logo`}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <p className="text-lg text-body">{team.league.name}</p>
            </div>
          ) : null}
        </div>
      </div>
      <span className="cursor-pointer" onClick={() => alert('Feature coming soon!')}>
        <Star className="w-6 h-6 text-primary" />
      </span>
    </div>
  );
};
