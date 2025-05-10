import React from 'react';
import { motion } from 'framer-motion';
import type { TechCategory as TechCategoryType } from '../../types/technology';
import { GradientBorder } from '../ui/GradientBorder';

interface TechCategoryProps {
  category: TechCategoryType;
  index: number;
}

export const TechCategory: React.FC<TechCategoryProps> = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center">
          <category.icon className="w-7 h-7 text-blue-500" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
          <p className="text-slate-400 text-sm">Latest stable versions</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {category.technologies.map((tech, techIndex) => (
          <GradientBorder 
            key={tech.name}
            className="p-6 hover-gradient group"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
              className="flex flex-col items-center text-center"
            >
              <tech.icon className="w-12 h-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-medium text-lg mb-1">{tech.name}</h4>
              <div className="px-3 py-1 bg-blue-500/10 rounded-full">
                <span className="text-xs text-blue-400">Production Ready</span>
              </div>
            </motion.div>
          </GradientBorder>
        ))}
      </div>
    </motion.div>
  );
};