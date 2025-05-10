import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GradientBorder } from '../ui/GradientBorder';
import { StarRating } from './StarRating';
import type { Project } from '../../types/portfolio';

interface ProjectCardProps extends Project {
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  url,
  metrics,
  tags,
  index,
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const placeholderImage = 'https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&q=80';
  const displayImage = imageError ? placeholderImage : image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <GradientBorder className="group">
        <div className="relative">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={displayImage}
              alt={`${title} interface screenshot - ${description}`}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={handleImageError}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex gap-2 flex-wrap mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm glass-panel text-blue-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          
          <p className="text-slate-400 font-body mb-4">{description}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-2xl font-bold text-blue-500 mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-slate-400 font-body">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <span className="text-yellow-400 font-bold text-lg">4.9</span>
              <span className="text-slate-400 text-sm ml-1">/5.0</span>
              <span className="text-slate-400 text-sm ml-2">Customer Satisfaction</span>
            </div>
          </div>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/btn"
            aria-label={`Visit ${title} website`}
          >
            Visit Website
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </a>
        </div>
      </GradientBorder>
    </motion.div>
  );
};