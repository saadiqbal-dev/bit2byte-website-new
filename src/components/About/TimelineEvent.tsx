import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export const TimelineEvent: React.FC<TimelineEventProps> = ({
  year,
  title,
  description,
  icon: Icon,
  index,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex gap-4 items-start relative"
    >
      <div className="w-12 h-12 bg-amber-900/10 rounded-full flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6 text-amber-900" />
      </div>
      <div>
        <span className="font-medieval text-amber-900 text-lg">{year}</span>
        <h4 className="font-medieval text-xl text-amber-900 mb-2">{title}</h4>
        <p className="text-amber-800 font-serif">{description}</p>
      </div>
    </motion.div>
  );
};