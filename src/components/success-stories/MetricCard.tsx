import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card } from '../ui/Card';

interface MetricCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  index: number;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  icon: Icon,
  value,
  label,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="p-6 text-center">
        <Icon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
        <div className="text-2xl font-bold text-blue-500 mb-2">
          {value}
        </div>
        <div className="text-sm text-slate-400">
          {label}
        </div>
      </Card>
    </motion.div>
  );
};