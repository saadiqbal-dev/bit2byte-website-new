import React from 'react';
import { motion } from 'framer-motion';
import type { TechFeature as TechFeatureType } from '../../types/technology';

interface TechFeatureProps extends TechFeatureType {
  index: number;
}

export const TechFeature: React.FC<TechFeatureProps> = ({
  title,
  description,
  icon: Icon,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex gap-4 group"
    >
      <div className="w-12 h-12  rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-blue-500" />
      </div>
      <div className="flex flex-col">
        <h4 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{title}</h4>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};