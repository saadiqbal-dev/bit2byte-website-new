export const generateGradient = (colors: string[], direction = 'to right') => {
  return `linear-gradient(${direction}, ${colors.join(', ')})`;
};

export const glassEffect = {
  background: 'rgba(15, 23, 42, 0.5)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(148, 163, 184, 0.1)',
};