'use client';
import type { ReactElement } from 'react';
import { Plus } from '@boxicons/react';

interface AddButtonProps {
  onClick?: () => void;
}

export const AddButton = ({ onClick }: AddButtonProps): ReactElement => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center rounded-full transition-all duration-300 bg-linear-to-t from-secondary to-primary text-on-accent cursor-pointer fixed z-20 bottom-20 right-6 w-12 h-12 text-base shadow-[0_8px_8px_color-mix(in_srgb,var(--color-primary)_10%,transparent)]"
    >
      <Plus />
    </button>
  );
};
