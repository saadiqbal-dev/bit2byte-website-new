export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  metrics: ProjectMetric[];
  tags: string[];
}