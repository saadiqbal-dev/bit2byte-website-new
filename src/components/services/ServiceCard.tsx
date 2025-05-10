import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { GradientBorder } from '../ui/GradientBorder';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  features,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <GradientBorder className="hover-gradient group">
        <div className="p-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{title}</h3>
          </div>

          <p className="text-slate-400 font-body mb-8 leading-relaxed min-h-[3rem]">
            {description}
          </p>

          <ul className="space-y-4">
            {features.map((feature, i) => (
              <li 
                key={i} 
                className="flex items-start gap-3 text-slate-300 font-body"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </GradientBorder>
    </motion.div>
  );
};