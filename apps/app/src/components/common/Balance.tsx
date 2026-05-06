'use client';
import { Pencil } from '@boxicons/react';

export const Balance = () => {
  return (
    <div className="flex items-center justify-between border border-stroke/30 rounded-xl h-10 px-1 gap-2 bg-canvas w-45">
      <div className="flex items-center gap-2">
        <span className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-white font-bold text-base">
          $
        </span>
        <h6 className="text-sm font-semibold text-white">$ 200.00</h6>
      </div>
      <button className="rounded-lg text-on-accent cursor-pointer w-8 h-8 hover:bg-secondary/80 transition-all duration-300 bg-linear-to-t from-secondary to-primary flex items-center justify-center">
        <Pencil pack="filled" size="sm" />
      </button>
    </div>
  );
};
