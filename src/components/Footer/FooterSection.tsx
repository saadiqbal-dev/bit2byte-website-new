import React from 'react';
import { motion } from 'framer-motion';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <h3 className="font-medieval text-xl text-amber-900">{title}</h3>
      {children}
    </motion.div>
  );
};