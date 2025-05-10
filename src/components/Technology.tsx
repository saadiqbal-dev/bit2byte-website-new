import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';
import { TechCategory } from './technology/TechCategory';
import { TechFeature } from './technology/TechFeature';
import { techCategories, features } from '../data/technology';
import { GradientBorder } from './ui/GradientBorder';

export const Technology = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="technology">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto relative">
        <SectionTitle
          title="Our Technology Stack"
          subtitle="Building the future with modern tools and frameworks"
        />

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            {techCategories.map((category, index) => (
              <TechCategory
                key={category.name}
                category={category}
                index={index}
              />
            ))}
          </div>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <GradientBorder className="p-8">
                <h3 className="text-2xl font-bold mb-6">Core Capabilities</h3>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <TechFeature key={feature.title} {...feature} index={index} />
                  ))}
                </div>
              </GradientBorder>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};