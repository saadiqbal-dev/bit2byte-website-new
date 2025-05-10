import React from 'react';
import { GradientBorder } from './GradientBorder';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  return (
    <GradientBorder className={`${hover ? 'hover-gradient group' : ''} ${className}`}>
      {children}
    </GradientBorder>
  );
};