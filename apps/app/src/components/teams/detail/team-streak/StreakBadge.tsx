 'use client';
import type { ReactElement } from 'react';
import { StreakType } from '@/types';
import { STREAK_BADGE_CLASS, STREAK_BADGE_LABEL } from './utils';

interface StreakBadgeProps {
	value: StreakType;
};

export const StreakBadge = ({ value }: StreakBadgeProps): ReactElement => (
	<span
		role="listitem"
		className={`flex items-center justify-center w-10 h-10 rounded-lg border font-semibold ${STREAK_BADGE_CLASS[value]}`}
	>
		{STREAK_BADGE_LABEL[value]}
	</span>
);
