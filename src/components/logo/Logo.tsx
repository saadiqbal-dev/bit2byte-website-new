import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogoIcon } from './LogoIcon';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link 
      to="/"
      className={`group cursor-pointer ${className}`}
      aria-label="Go to homepage"
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3 transition-transform hover:scale-105"
      >
        <LogoIcon />
        <div className="flex flex-col">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold tracking-tight group-hover:text-blue-400 transition-colors"
          >
            Bit2Byte
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xs text-slate-400 tracking-widest uppercase"
          >
            Solutions
          </motion.span>
        </div>
      </motion.div>
    </Link>
  );
};