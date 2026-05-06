'use client';
import type { ReactElement } from 'react';

const TABS = [
  'all teams',
  'favorites',
];

export type TeamsTabKey = 'all' | 'favorites'

interface TabsProps {
  activeTab: TeamsTabKey
  allCount: number
  favoritesCount: number
  onTabChange: (tab: TeamsTabKey) => void
}

export const Tabs = ({ activeTab, allCount, favoritesCount, onTabChange }: TabsProps) => {
  return (
    <div className="flex items-center border-b border-stroke/50 gap-6">
      <span className="text-white font-semibold uppercase flex-1 p-4 text-sm text-center cursor-pointer">
        all teams
      </span>
      <span className="text-body font-semibold uppercase flex-1 p-4 text-sm text-center cursor-pointer">
        favorites
      </span>
    </div>
  );
};
