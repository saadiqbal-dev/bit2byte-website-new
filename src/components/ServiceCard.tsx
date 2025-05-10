import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  price?: string;
  features: string[];
  index: number;
  inView: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  price,
  features,
  index,
  inView
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="p-8 rounded-lg bg-white/50 backdrop-blur-sm border border-amber-900/20 hover:bg-white/70 transition-all group"
    >
      <div className="mb-6 relative">
        <div className="w-16 h-16 bg-amber-900/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <Icon className="w-8 h-8 text-amber-900" />
        </div>
      </div>
      
      <h3 className="text-xl font-medieval text-amber-900 mb-4">{title}</h3>
      <p className="text-amber-800 font-serif mb-6">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-amber-800 font-serif">
            <span className="text-amber-900">•</span>
            {feature}
          </li>
        ))}
      </ul>

      {price && (
        <div className="mb-6">
          <span className="text-2xl font-medieval text-amber-900">{price}</span>
          <span className="text-amber-800 font-serif">/project</span>
        </div>
      )}

      <button className="w-full px-6 py-3 bg-amber-900 text-[#f4e4bc] rounded-lg hover:bg-amber-800 transition-colors font-medieval">
        Request Service
      </button>
    </motion.div>
  );
};