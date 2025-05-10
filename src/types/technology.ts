import { LucideIcon } from 'lucide-react';

export interface Technology {
  name: string;
  icon: LucideIcon;
}

export interface TechCategory {
  name: string;
  icon: LucideIcon;
  technologies: Technology[];
}

export interface TechFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}