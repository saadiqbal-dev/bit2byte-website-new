import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { GradientBorder } from '../ui/GradientBorder';

interface ProcessStepProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  isLast: boolean;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  title,
  description,
  icon: Icon,
  index,
  isLast,
}) => {
  return (
    <div className="flex gap-8 items-start">

      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        className="flex-1 pb-3"
      >
        <GradientBorder className="p-6">
<div className="flex flex-col gap-3 p-6">
            <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-slate-400 font-body">{description}</p>
</div>
        </GradientBorder>
      </motion.div>
    </div>
  );
};