'use client';
import { Team } from '@/types';
import type { ReactElement } from 'react';
import { TeamItem } from './TeamItem';

interface TeamsListProps {
  teams: Team[];
}
export const TeamsList = ({ teams }: TeamsListProps): ReactElement => {
  return (
    <div className="flex flex-col gap-3">
      {teams.map((team) => (
        <TeamItem key={team.id} team={team} />
      ))}
    </div>
  );
};
