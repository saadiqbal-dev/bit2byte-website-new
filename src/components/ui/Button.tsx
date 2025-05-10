import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon: Icon,
  className = '',
  onClick,
}) => {
  const baseStyles = 'px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2';
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90',
    secondary: 'glass-panel hover:bg-slate-800/50',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};