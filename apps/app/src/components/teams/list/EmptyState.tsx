'use client';
import type { ReactElement } from 'react';
import { TShirt } from '@boxicons/react';
import { Button } from '@/components/ui';

export const EmptyState = (): ReactElement => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full p-6 border border-stroke/50 rounded-xl bg-surface">
      <TShirt pack="filled" className="text-body/20 w-12 h-12" />
      <div className="flex flex-col gap-2 justify-center items-center">
        <h6 className="text-white font-semibold text-base">Add more teams</h6>
        <p className="text-sm text-body">Add a team to get started</p>
      </div>
      <Button size="lg" variant="primary">
        Add Team
      </Button>
    </div>
  );
};
