interface Demographics {
  age: string;
  gender: string;
  locations: string[];
  interests: string[];
}

interface Targeting {
  demographics: Demographics;
  placements?: string[];
  keywords?: string[];
}

interface Campaign {
  name: string;
  budget: number;
  kpis: string[];
  timeline: string;
}

export interface MarketingPlatform {
  name: string;
  objectives: Campaign[];
  targeting: Targeting;
  adFormats: string[];
  bestPractices: string[];
}