'use client';

import type { ComponentType } from 'react';
import type { BoxIconProps } from '@boxicons/react';
import { Dashboard, Football, Calendar, FlagAlt2, DollarCircle } from '@boxicons/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib';

type NavIcon = ComponentType<BoxIconProps>;

type TabItem = {
  href: string;
  icon: NavIcon;
  label: string;
  isCenter?: boolean;
};

const TABS: TabItem[] = [
  { href: '/', icon: Dashboard, label: 'Dashboard' },
  { href: '/leagues', icon: FlagAlt2, label: 'Leagues' },
  { href: '/bets', icon: DollarCircle, label: 'Bets', isCenter: true },
  { href: '/teams', icon: Football, label: 'Teams' },
  { href: '/matches', icon: Calendar, label: 'Matches' },
];

interface NavButtonProps {
  href: string;
  icon: NavIcon;
  label: string;
  isActive: boolean;
}

export const BottomNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 mx-auto h-16 max-w-md bg-surface px-2">
      <div className="flex h-full items-center justify-between">
        {TABS.map((tab) => {
          const isActive = pathname === tab.href;

          if (tab.isCenter) {
            return <CenterButton key={tab.href} href={tab.href} icon={tab.icon} label={tab.label} isActive={isActive} />;
          }

          return <NavButton key={tab.href} {...tab} isActive={isActive} />;
        })}
      </div>
    </nav>
  );
};

const CenterButton = ({ href, icon: Icon, label, isActive }: NavButtonProps) => (
  <Link href={href} aria-label={label} className="relative flex flex-1 justify-center">
    <div
      className={cn(
        "absolute -top-15 flex h-14 w-14 rotate-45 items-center justify-center rounded-xl transition-all duration-300 bg-linear-to-t from-secondary to-primary text-on-accent",
        isActive 
          ? "scale-110" 
          : "hover:scale-105 active:scale-95"
      )}
    >
      <div className="-rotate-45 flex items-center justify-center">
        <Icon pack="filled" className="h-8 w-8" />
      </div>
    </div>
  </Link>
);


const NavButton = ({ href, icon: Icon, label, isActive }: NavButtonProps) => (
  <Link
    href={href}
    className={cn(
      "flex flex-1 flex-col items-center justify-center gap-1 transition-all duration-200",
      isActive ? "text-primary scale-105" : "text-white hover:text-primary/80"
    )}
  >
    <Icon pack="filled" className={cn("h-6 w-6", isActive && "drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]")} />
    <span className="text-xs font-medium tracking-wider">{label}</span>
  </Link>
);