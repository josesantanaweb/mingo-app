export const formatValue = (val: number | string, isPercentage: boolean = false) => {
  if (isPercentage) {
    if (typeof val === 'number') return `${val}%`;
    const s = String(val);
    return s.includes('%') ? s : `${s}%`;
  }

  return String(val);
};
