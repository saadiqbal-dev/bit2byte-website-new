import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Card } from '../../components/ui/Card';

const features = [
  {
    title: 'Threat Detection',
    description: 'AI-powered system for identifying and preventing security threats in real-time.',
    icon: Shield
  },
  {
    title: 'Access Control',
    description: 'Advanced authentication and authorization systems for secure access management.',
    icon: Lock
  },
  {
    title: 'Security Monitoring',
    description: '24/7 automated monitoring and alert system for potential security breaches.',
    icon: Eye
  },
  {
    title: 'Incident Response',
    description: 'Automated incident response and recovery procedures for quick resolution.',
    icon: AlertTriangle
  }
];

export const Security = () => {
  return (
    <Section className="py-32">
      <Container>
        <SectionTitle
          title="Security Solutions"
          subtitle="Protect your digital assets with AI-enhanced security measures"
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