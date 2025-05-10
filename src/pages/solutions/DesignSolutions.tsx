import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Wand2, Layout, Eye } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Card } from '../../components/ui/Card';

const features = [
  {
    title: 'AI-Powered Design Generation',
    description: 'Leverage machine learning algorithms to create unique, conversion-optimized designs tailored to your brand.',
    icon: Wand2
  },
  {
    title: 'Smart Layout Optimization',
    description: 'Automatically optimize layouts based on user behavior and engagement metrics.',
    icon: Layout
  },
  {
    title: 'Intelligent Color Selection',
    description: 'Data-driven color palette generation that aligns with your brand and maximizes user engagement.',
    icon: Palette
  },
  {
    title: 'UX Enhancement',
    description: 'Continuous improvement of user experience through AI-powered analysis and recommendations.',
    icon: Eye
  }
];

export const DesignSolutions = () => {
  return (
    <Section className="py-32">
      <Container>
        <SectionTitle
          title="Design Solutions"
          subtitle="Transform your digital presence with AI-powered design innovation"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-slate-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};