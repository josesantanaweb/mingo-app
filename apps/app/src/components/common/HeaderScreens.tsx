'use client';
import type { ReactElement } from 'react';

interface HeaderScreensProps {
  title: string;
  value?: string;
  description: string;
}

export const HeaderScreens = ({ title, value, description }: HeaderScreensProps): ReactElement => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-white font-bold text-2xl">{title}</h3>
      <div className="flex flex-col">
        <h3 className="text-primary font-bold text-xl">{value}</h3>
        <p className="uppercase text-sm text-body font-semibold">{description}</p>
      </div>
    </div>
  );
};
