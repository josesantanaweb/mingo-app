'use client';
import type { ReactElement } from 'react';

interface MetricsBoxProps {
  title: string;
  value: string;
}

export const MetricsBox = ({ title, value }: MetricsBoxProps): ReactElement => {
  return (
    <div className="flex flex-col border border-stroke/30 rounded-xl w-1/2 bg-surface p-4">
      <p className="uppercase text-sm text-body font-semibold">{title}</p>
      <h3 className="text-primary font-bold text-xl">{value}</h3>
    </div>
  );
};
