import type { Project } from '../types/portfolio';

export const projects: Project[] = [
  {
    title: 'Slavic Books for Kids',
    description: 'Educational platform offering curated Russian literature for children with subscription-based delivery.',
    image: 'https://github.com/saadiqbal-dev/bit2byte-updated/blob/main/public/screenshots/1.png?raw=true',
    url: 'https://slavic-book-membership.vercel.app/#',
    metrics: [
      { label: 'Leads Conversion', value: '+120%' },
      { label: 'Customer Satisfaction', value: '4.9/5' }
    ],
    tags: ['Next.js', 'React', 'Tailwind CSS']
  },
  {
    title: 'Spryntt',
    description: 'Modern task management platform with AI-powered productivity features.',
    image: 'https://github.com/saadiqbal-dev/bit2byte-updated/blob/main/public/screenshots/2.png?raw=true',
    url: 'https://spryntt.com',
    metrics: [
      { label: 'User Sign-Ups', value: '+75%' },
      { label: 'Customer Satisfaction', value: '5/5' }
    ],
    tags: ['React', 'ShadCN UI', 'Typescript']
  },
  {
    title: 'Claratti',
    description: 'Enterprise-grade cybersecurity solutions with real-time threat monitoring.',
    image: 'https://github.com/saadiqbal-dev/bit2byte-updated/blob/main/public/screenshots/3.png?raw=true',
    url: 'https://claratti.discerningdigital.com.au/cyber-security/',
    metrics: [
      { label: 'Sales', value: '+90%' },
      { label: 'Customer Satisfaction', value: '5/5' }
    ],
    tags: ['WordPress', 'WP-Bakery', 'Figma']
  },
  {
    title: 'United Direct Lending',
    description: 'Streamlined mortgage and lending platform with AI-powered application processing.',
    image: 'https://github.com/saadiqbal-dev/bit2byte-updated/blob/main/public/screenshots/5.png?raw=true',
    url: 'https://my.uniteddirectlending.com',
    metrics: [
      { label: 'Leads', value: '+65%' },
      { label: 'Customer Satisfaction', value: '4.9/5' }
    ],
    tags: ['WordPress', 'Elementor Pro', 'Gravity Forms']
  },
  {
    title: 'Bonaventure',
    description: 'Advanced RF and microwave design simulation platform for engineering professionals.',
    image: 'https://github.com/saadiqbal-dev/bit2byte-updated/blob/main/public/screenshots/6.png?raw=true',
    url: 'https://bonaventurem.com',
    metrics: [
      { label: 'Sales', value: '+80%' },
      { label: 'Customer Satisfaction', value: '4.9/5' }
    ],
    tags: ['WordPress', 'Elementor', 'Astra']
  }
];