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
      className="flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer fixed z-20 bottom-20 w-12 h-12 text-base bg-linear-to-t from-secondary to-primary text-on-accent shadow-[0_5px_8px_rgba(var(--tw-shadow-color),0.1)] shadow-primary/10 hover:bg-linear-to-t hover:from-secondary/90 hover:to-primary/90 hover:shadow-[0_6px_10px_rgba(var(--tw-shadow-color),0.15)]"
      style={{ right: 'max(1.5rem, calc((100vw - 28rem) / 2 + 1.5rem))' }}
    >
      <Plus />
    </button>
  );
};
