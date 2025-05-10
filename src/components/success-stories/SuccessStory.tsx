import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Home, Users, Star } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';

const metrics = [
  {
    icon: Heart,
    value: '95%',
    label: 'Resident Satisfaction'
  },
  {
    icon: Home,
    value: '80%',
    label: 'Increased Independence'
  },
  {
    icon: Users,
    value: '24/7',
    label: 'Professional Support'
  },
  {
    icon: Star,
    value: '4.8/5',
    label: 'Family Rating'
  }
];

export const SuccessStory = () => {
  return (
    <section id="success-stories" className="py-24 relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&q=80&w=1920&h=1080"
              alt="Residents enjoying community activities in a supportive group home environment"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Transforming Lives Through Supportive Community Living
              </h2>
              <p className="text-slate-400 mb-6">
                At our group home, we've witnessed remarkable transformations in our residents' lives. 
                Through personalized care, structured support, and a vibrant community atmosphere, 
                we're helping individuals achieve greater independence and quality of life.
              </p>
              <p className="text-slate-400">
                Our success story is built on the foundation of professional care, meaningful 
                relationships, and a commitment to fostering independence. Residents have shown 
                significant improvements in daily living skills, social interactions, and overall 
                well-being since joining our community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center">
                    <metric.icon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-blue-500 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-slate-400">
                      {metric.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <blockquote className="border-l-4 border-blue-500 pl-6 italic text-slate-400">
              "The support and care provided here has made an incredible difference in my brother's life. 
              He's more confident, independent, and happier than ever before."
              <footer className="mt-2 text-sm">
                - Sarah M., Family Member
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};