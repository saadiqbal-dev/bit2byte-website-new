import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, BarChart, PieChart, TrendingUp } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Card } from '../../components/ui/Card';

const features = [
  {
    title: 'Real-time Monitoring',
    description: 'Track performance metrics and user behavior in real-time with advanced analytics.',
    icon: LineChart
  },
  {
    title: 'Custom Reports',
    description: 'Generate detailed, customizable reports with AI-powered insights.',
    icon: BarChart
  },
  {
    title: 'Data Visualization',
    description: 'Transform complex data into clear, actionable visualizations.',
    icon: PieChart
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast trends and optimize performance with machine learning models.',
    icon: TrendingUp
  }
];

export const PerformanceAnalytics = () => {
  return (
    <Section className="py-32">
      <Container>
        <SectionTitle
          title="Performance Analytics"
          subtitle="Gain deep insights into your digital performance with AI-powered analytics"
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