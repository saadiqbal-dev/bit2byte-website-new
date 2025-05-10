import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ServiceCard } from './services/ServiceCard';
import { services } from '../data/services';

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto relative">
        <SectionTitle
          title="Our Services"
          subtitle="Transforming Ideas into Digital Excellence with Tailored Solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};