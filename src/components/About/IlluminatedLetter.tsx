import React from 'react';
import { motion } from 'framer-motion';

interface IlluminatedLetterProps {
  letter: string;
}

export const IlluminatedLetter: React.FC<IlluminatedLetterProps> = ({ letter }) => {
  return (
    <motion.span
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      className="inline-block float-left mr-4 mb-1 w-16 h-16 text-4xl font-medieval text-amber-900 bg-white/50 rounded-lg border-2 border-amber-900/20 flex items-center justify-center relative overflow-hidden"
    >
      <span className="relative z-10">{letter}</span>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80')] opacity-20" />
    </motion.span>
  );
};