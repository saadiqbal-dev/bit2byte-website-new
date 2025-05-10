import React from 'react';
import { motion } from 'framer-motion';
import { Code, GitBranch, Terminal, Cpu } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Card } from '../../components/ui/Card';

const features = [
  {
    title: 'Automated Code Generation',
    description: 'Accelerate development with AI-powered code generation and optimization.',
    icon: Code
  },
  {
    title: 'Intelligent Version Control',
    description: 'Smart branching and merging strategies with automated conflict resolution.',
    icon: GitBranch
  },
  {
    title: 'Advanced CLI Tools',
    description: 'Custom command-line tools for increased developer productivity.',
    icon: Terminal
  },
  {
    title: 'AI-Assisted Testing',
    description: 'Automated test generation and execution powered by machine learning.',
    icon: Cpu
  }
];

export const SmartDevelopment = () => {
  return (
    <Section className="py-32">
      <Container>
        <SectionTitle
          title="Smart Development"
          subtitle="Accelerate your development process with AI-powered tools and automation"
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