import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../../types/portfolio';
import { GradientBorder } from '../ui/GradientBorder';

interface CarouselSlideProps {
  project: Project;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({ project }) => {
  return (
    <GradientBorder className="h-full group">
      <div className="flex flex-col h-full">
        {/* Image Section */}
        <div className="relative h-[400px] overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} interface screenshot - ${project.description}`}
            className="w-full h-full object-contain object-center"
            loading="lazy"
          />
        </div>
        
        {/* Content Section */}
        <div className="p-8 bg-slate-900/50">
          <div className="flex gap-2 flex-wrap mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm glass-panel text-blue-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-slate-400 font-body mb-4">{project.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {project.metrics.map((metric) => (
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

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/btn"
            aria-label={`Visit ${project.title} website`}
          >
            Visit Website
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </GradientBorder>
  );
};