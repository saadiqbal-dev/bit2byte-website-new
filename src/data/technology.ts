import { 
  Blocks, 
  Server, 
  Database,
  Cpu,
  Code,
  FileCode,
  Globe,
  Megaphone,
  Facebook,
  Instagram,
  Video,
  BarChart
} from 'lucide-react';
import type { Technology, TechFeature, TechCategory } from '../types/technology';

export const techCategories: TechCategory[] = [
  {
    name: 'Frontend',
    icon: Blocks,
    technologies: [
      { name: 'React', icon: Code },
      { name: 'TypeScript', icon: FileCode },
      { name: 'Tailwind CSS', icon: Blocks },
      { name: 'Next.js', icon: Globe }
    ]
  },
  {
    name: 'Backend',
    icon: Server,
    technologies: [
      { name: 'Node.js', icon: Server },
      { name: 'Python', icon: FileCode },
      { name: 'GraphQL', icon: Database },
      { name: 'REST APIs', icon: Globe }
    ]
  },
  {
    name: 'Database',
    icon: Database,
    technologies: [
      { name: 'PostgreSQL', icon: Database },
      { name: 'MongoDB', icon: Database },
      { name: 'Redis', icon: Database },
      { name: 'Prisma', icon: Database }
    ]
  },
  {
    name: 'Embedded Systems',
    icon: Cpu,
    technologies: [
      { name: 'C Language', icon: Code },
      { name: 'Python', icon: FileCode }
    ]
  },
  {
    name: 'Marketing',
    icon: Megaphone,
    technologies: [
      { name: 'Meta Ads', icon: Facebook },
      { name: 'Google Ads', icon: BarChart },
      { name: 'TikTok Ads', icon: Video },
      { name: 'Instagram Ads', icon: Instagram }
    ]
  }
];

export const features: TechFeature[] = [
  {
    title: 'Full-Stack Excellence',
    description: 'End-to-end development capabilities using modern frameworks and tools.',
    icon: Blocks
  },
  {
    title: 'Database Solutions',
    description: 'Robust and scalable database architectures for your applications.',
    icon: Database
  },
  {
    title: 'Embedded Systems',
    description: 'Expert development of firmware and embedded solutions.',
    icon: Cpu
  },
  {
    title: 'Marketing Integration',
    description: 'Seamless integration with major advertising platforms.',
    icon: Megaphone
  }
];