'use client';
import type { ReactElement } from 'react';
import { TShirt } from '@boxicons/react';

export const EmptyState = (): ReactElement => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full p-6 border border-stroke/50 rounded-xl bg-surface">
      <TShirt pack="filled" className="text-body/20 w-12 h-12" />
      <div className="flex flex-col gap-2 justify-center items-center">
        <h6 className="text-white font-semibold text-base">Add more teams</h6>
        <p className="text-sm text-body">Add a team to get started</p>
      </div>
      <button className="w-full text-base uppercase cursor-pointer text-on-accent font-bold h-12 rounded-md bg-linear-to-t from-secondary to-primary transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-none hover:bg-primary hover:shadow-[0_10px_24px_rgba(224,251,50,0.18)] active:translate-y-0">
        Add Team
      </button>
    </div>
  );
};
