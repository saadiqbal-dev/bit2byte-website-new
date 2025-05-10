import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { MultiCardCarousel } from './portfolio/MultiCardCarousel';
import { projects } from '../data/portfolio';

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto relative">
        <SectionTitle
          title="Our Projects"
          subtitle="Explore our portfolio of innovative projects that showcase the perfect blend of human creativity and advanced technology."
        />

        <MultiCardCarousel projects={projects} />
      </div>
    </section>
  );
};