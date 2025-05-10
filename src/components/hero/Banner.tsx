import React from 'react';
import { motion } from 'framer-motion';
import { Building } from 'lucide-react';

export const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-blue-500/10 border-b border-blue-500/20 py-2"
    >
      <div className="container mx-auto px-6 flex items-center justify-center gap-2 text-sm text-blue-400">
        <Building className="w-4 h-4" />
        <span>Registered in UK under Company Registration # 15837634</span>
      </div>
    </motion.div>
  );
};