import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const HeroContent = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center gap-2 mb-6"
      >
        <Sparkles className="w-5 h-5 text-blue-500" />
        <span className="text-blue-500 font-medium">Registered in UK under Company Registration # 15837634</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold mb-6"
      >
        Transforming Bits into <span className="gradient-text">Brilliant Solutions</span>
      </motion.h1>

    </div>
  );
};