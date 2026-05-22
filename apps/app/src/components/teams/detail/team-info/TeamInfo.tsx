'use client';
import Image from 'next/image';
import type { ReactElement } from 'react';
import { useAnimationControls } from 'framer-motion';
import { Team } from '@/types';
import { useUpdateTeam } from '@/hooks';
import { AddFavoriteButton } from '@/components/common';

interface TeamInfoProps {
  team: Team;
}

export const TeamInfo = ({ team }: TeamInfoProps): ReactElement => {
  const controls = useAnimationControls();
  const isFavorite = team.isFavorite ?? false;
  const { updateTeam } = useUpdateTeam();

  const handleFavorite = async () => {
    controls.start({ scale: [1, 1.25, 1], rotate: [0, 10, -10, 0] });

    try {
      await updateTeam(team.id, { isFavorite: !isFavorite });
    } catch (error) {
      controls.start({ scale: 1, rotate: 0 });
      console.error('Update favorite failed', error);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-15 h-15">
          {team.logo ? (
            <Image
              src={team.logo}
              alt={`${team.name} logo`}
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          ) : null}
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl text-white font-bold">{team.name}</h2>
          {team.league ? (
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
      <AddFavoriteButton onFavorite={handleFavorite} isFavorite={isFavorite} />
    </div>
  );
};
