'use client';
import { Menu } from '@boxicons/react';
import { Balance } from '@/components/common';
import { Logo } from '@/components/ui';

export const Header = () => {
  return (
    <div className="fixed right-0 top-0 left-0 z-50 h-15 bg-surface max-w-md mx-auto">
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <button className="cursor-pointer text-white">
            <Menu pack="filled" className="h-6 w-6" />
          </button>
          <Logo />
        </div>
        <Balance />
      </div>
    </div>
  );
};
