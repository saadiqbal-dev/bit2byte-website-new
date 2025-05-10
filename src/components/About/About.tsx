import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Globe, Wand2 } from 'lucide-react';
import { IlluminatedLetter } from './IlluminatedLetter';
import { TimelineEvent } from './TimelineEvent';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const timeline = [
  {
    year: '2020',
    title: 'The Digital Renaissance',
    description: 'Our guild was formed, bringing together master craftsmen of code and design.',
    icon: Code,
  },
  {
    year: '2021',
    title: 'The Great Cloud Migration',
    description: 'We pioneered new methods of cloud enchantments and digital transformations.',
    icon: Globe,
  },
  {
    year: '2022',
    title: 'The AI Awakening',
    description: 'Our artificers began incorporating machine learning into our digital spells.',
    icon: Cpu,
  },
  {
    year: '2023',
    title: 'The Quantum Leap',
    description: 'We ventured into quantum computing and advanced algorithmic sorcery.',
    icon: Wand2,
  },
];

export const About = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="py-24 bg-[#f4e4bc] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80')] opacity-10" />
      
      <div className="container mx-auto px-6 relative">
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-center mb-16 font-medieval text-amber-900"
        >
          The Chronicles of Our Guild
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Our Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-medieval text-amber-900 mb-8">Our Story</h3>
            <div className="prose prose-amber">
              <div className="text-amber-800 font-serif leading-relaxed">
                <IlluminatedLetter letter="I" />
                n the realm of digital craftsmanship, where ancient wisdom meets modern innovation, 
                our guild stands as a beacon of excellence. We are the Bit2Byte Guild, a fellowship 
                of digital artisans who blend the timeless principles of craftsmanship with the 
                cutting-edge technologies of today.
              </div>
              <p className="text-amber-800 font-serif leading-relaxed mt-6">
                Our master craftsmen are versed in the ancient arts of programming languages and the 
                mystical practices of user experience design. Each project we undertake is treated 
                with the same dedication and attention to detail that medieval artisans brought to 
                their masterpieces.
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div className="space-y-6">
            <h3 className="text-3xl font-medieval text-amber-900 mb-8">Our Values</h3>
            <div className="grid gap-8">
              {[
                {
                  title: 'Craftsmanship',
                  description: 'Every line of code is written with precision and purpose, like a master scribe crafting an illuminated manuscript.',
                },
                {
                  title: 'Innovation',
                  description: 'We push the boundaries of digital possibilities while honoring the wisdom of those who came before us.',
                },
                {
                  title: 'Excellence',
                  description: 'Our work reflects the highest standards of quality, tested by time and proven through results.',
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white/50 backdrop-blur-sm rounded-lg border border-amber-900/20"
                >
                  <h4 className="font-medieval text-xl text-amber-900 mb-2">{value.title}</h4>
                  <p className="text-amber-800 font-serif">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          <h3 className="text-3xl font-medieval text-amber-900 text-center mb-12">Our Journey</h3>
          <div className="grid gap-8 max-w-3xl mx-auto">
            {timeline.map((event, index) => (
              <TimelineEvent key={event.year} {...event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};