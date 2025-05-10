import React from 'react';
import { motion } from 'framer-motion';
import { GradientBorder } from '../ui/GradientBorder';
import type { TechCategory } from '../../types/technology';

interface TechGridProps {
  categories: TechCategory[];
}

export const TechGrid: React.FC<TechGridProps> = ({ categories }) => {
  return (
    <div className="space-y-8">
      {categories.map((category, categoryIndex) => (
        <div key={category.name} className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <category.icon className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-bold">{category.name}</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {category.technologies.map((tech, techIndex) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
              >
                <GradientBorder className="p-4 h-full hover-gradient group">
                  <div className="flex flex-col items-center text-center">
                    <tech.icon className="w-8 h-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="text-sm font-medium">{tech.name}</h4>
                  </div>
                </GradientBorder>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};