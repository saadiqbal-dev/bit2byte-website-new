import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Users, Star, Sparkles } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { MetricCard } from './MetricCard';
import { Testimonial } from './Testimonial';

const metrics = [
  {
    icon: Palette,
    value: '250+',
    label: 'Design Projects'
  },
  {
    icon: Users,
    value: '98%',
    label: 'Client Satisfaction'
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Average Rating'
  },
  {
    icon: Sparkles,
    value: '15+',
    label: 'Design Awards'
  }
];

export const BonaventureStory = () => {
  return (
    <section id="success-stories" className="py-24 relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://i.ibb.co/VxKN3Rj/bonaventure-hero.jpg"
                alt="Bonaventure's innovative design portfolio showcasing professional achievements and creative excellence"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Elevating Design Excellence with Bonaventure
              </h2>
              <p className="text-slate-400 mb-6">
                Bonaventure's success story exemplifies our commitment to delivering exceptional design solutions. Through innovative approaches and meticulous attention to detail, we transformed their digital presence into a compelling showcase of professional excellence.
              </p>
              <p className="text-slate-400">
                Our collaboration resulted in a sophisticated platform that not only highlights their portfolio but also strengthens their market position as a leading design firm. The seamless integration of modern design elements with intuitive functionality has significantly enhanced user engagement and conversion rates.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <MetricCard key={metric.label} {...metric} index={index} />
              ))}
            </div>

            <Testimonial
              quote="The expertise and creativity demonstrated by the team have significantly elevated our brand presence. The results have exceeded our expectations."
              author="Michael Bonaventure"
              role="Creative Director"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};