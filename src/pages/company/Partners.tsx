import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Users, Building, Globe } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

const partnerTypes = [
  {
    title: 'Technology Partners',
    description: 'Join our ecosystem of technology providers and innovators.',
    icon: Globe,
    benefits: [
      'Access to our client network',
      'Joint marketing opportunities',
      'Technical integration support',
      'Partner portal access'
    ]
  },
  {
    title: 'Solution Partners',
    description: 'Collaborate on comprehensive client solutions.',
    icon: Building,
    benefits: [
      'Co-selling opportunities',
      'Solution architecture support',
      'Partner certification program',
      'Joint case studies'
    ]
  },
  {
    title: 'Implementation Partners',
    description: 'Help clients succeed with our solutions.',
    icon: Users,
    benefits: [
      'Implementation training',
      'Project support',
      'Partner community access',
      'Regular enablement sessions'
    ]
  }
];

export const Partners = () => {
  return (
    <Section className="py-32">
      <Container>
        <SectionTitle
          title="Partner with Us"
          subtitle="Join our partner ecosystem and grow your business with innovative solutions"
        />

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {partnerTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <type.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold">{type.title}</h3>
                </div>
                <p className="text-slate-400 mb-6">{type.description}</p>
                <ul className="space-y-4 mb-8">
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-slate-400">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button variant="primary" className="w-full">
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <Card className="p-12">
            <Handshake className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Ready to join our partner ecosystem? Get in touch with our partnership team
              to explore collaboration opportunities and grow together.
            </p>
            <Button variant="primary" className="mx-auto">
              Contact Partnership Team
            </Button>
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
};