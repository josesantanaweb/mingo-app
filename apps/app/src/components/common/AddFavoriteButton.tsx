'use client';
import type { ReactElement } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Star } from '@boxicons/react';

interface AddFavoriteButtonProps {
  onFavorite: () => void;
  isFavorite: boolean;
}

export const AddFavoriteButton = ({
  onFavorite,
  isFavorite,
}: AddFavoriteButtonProps): ReactElement => {
  const controls = useAnimationControls();

  return (
    <motion.button
      type="button"
      className="inline-flex cursor-pointer rounded-full p-1 text-current"
      onClick={onFavorite}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.1 }}
      animate={controls}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Star pack={isFavorite ? 'filled' : 'basic'} className="w-6 h-6 text-primary" />
    </motion.button>
  );
};
