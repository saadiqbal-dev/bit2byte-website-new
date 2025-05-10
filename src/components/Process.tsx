import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProcessStep } from './process/ProcessStep';
import { ProcessTimeline } from './process/ProcessTimeline';
import { processSteps } from '../data/process';

export const Process = () => {
  return (
    <section id="process" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto relative">
        <SectionTitle
          title="Our Client-Centric Process"
          subtitle="Experience our streamlined approach that combines human creativity with advanced technology to deliver exceptional results."
        />

        <div className="max-w-5xl mx-auto">
          <ProcessTimeline>
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                {...step}
                index={index}
                className="p-2"
                isLast={index === processSteps.length - 1}
              />
            ))}
          </ProcessTimeline>
        </div>
      </div>
    </section>
  );
};