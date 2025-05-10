import React from 'react';
import { motion } from 'framer-motion';

export const LogoIcon = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-10 h-10"
    >
      <img 
        src="https://raw.githubusercontent.com/saadiqbal-dev/bit2byte-updated/0b105a6228c94023ef1d321fc3d1ec10aa13168b/Untitled%20design%20(6).png"
        alt="Bit2Byte Logo"
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
};