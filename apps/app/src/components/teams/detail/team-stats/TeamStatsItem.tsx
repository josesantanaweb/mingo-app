'use client';
import type { ReactElement } from 'react';
import { ProgressBar } from '@/components/common';
import { formatValue } from './utils';

interface TeamStatsItemProps {
  label: string;
  value: number | string;
  isPercentage?: boolean;
  width: number;
}

export const TeamStatsItem = ({ label, value, width, isPercentage = false }: TeamStatsItemProps): ReactElement => {
  const displayValue = formatValue(value, isPercentage);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-white font-semibold uppercase">{label}</span>
        <span className="text-sm text-white font-semibold">{displayValue}</span>
      </div>
      <ProgressBar width={width} />
    </div>
  );
};
