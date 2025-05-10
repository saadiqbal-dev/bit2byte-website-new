import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Coffee, Heart, Zap } from 'lucide-react';
import { Container } from '../../components/ui/Container';
import { Section } from '../../components/ui/Section';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

const openings = [
  {
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time'
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time'
  },
  {
    title: 'DevOps Engineer',
    department: 'Operations',
    location: 'Remote',
    type: 'Full-time'
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time'
  }
];

const benefits = [
  {
    icon: Coffee,
    title: 'Flexible Work',
    description: 'Work from anywhere, anytime. We believe in work-life balance.'
  },
  {
    icon: Zap,
    title: 'Growth Opportunities',
    description: 'Continuous learning and career development programs.'
  }
];

export const Careers = () => {
  return (
    <Section className="py-32">
      <Container>
        <SectionTitle
          title="Join Our Team"
          subtitle="Build the future of digital solutions with us"
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
            <p>Sorry, we're not currently hiring any new positions.</p>
            {/* <div className="space-y-6">
              {openings.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                        <div className="flex gap-4 text-slate-400">
                          <span>{job.department}</span>
                          <span>•</span>
                          <span>{job.location}</span>
                          <span>•</span>
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <Button variant="primary">Apply Now</Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Why Join Us?</h2>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                        <p className="text-slate-400">{benefit.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};