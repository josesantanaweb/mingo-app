'use client';
import { Team } from '@/types';
import type { ReactElement } from 'react';
import { TeamBox } from './TeamBox';

interface TeamsListProps {
  teams: Team[];
}
export const TeamsList = ({ teams }: TeamsListProps): ReactElement => {
  return (
    <div className="flex flex-col gap-3">
      {teams.map((team) => (
        <TeamBox key={team.id} team={team} />
      ))}
    </div>
  );
};
