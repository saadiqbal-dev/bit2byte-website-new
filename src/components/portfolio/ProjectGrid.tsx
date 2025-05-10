import React from 'react';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../../types/portfolio';

interface ProjectGridProps {
  projects: Project[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} {...project} index={index} />
      ))}
    </div>
  );
};