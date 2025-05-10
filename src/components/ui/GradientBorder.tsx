import React from 'react';
import { motion } from 'framer-motion';

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientBorder: React.FC<GradientBorderProps> = ({ children, className = '' }) => {
  return (
    <div className={`gradient-border ${className}`}>
      <div className="glass-panel w-full h-full">
        {children}
      </div>
    </div>
  );
};