import { MarketingPlatform } from '../../types/marketing';

export const googleStrategy: MarketingPlatform = {
  name: 'Google Ads',
  objectives: [
    {
      name: 'Search Campaigns',
      budget: 3500,
      kpis: ['Click-through Rate', 'Conversion Rate', 'Cost per Conversion'],
      timeline: '6 months'
    },
    {
      name: 'Display Network',
      budget: 1500,
      kpis: ['Impressions', 'Reach', 'Brand Awareness'],
      timeline: '3 months'
    },
    {
      name: 'Remarketing',
      budget: 1000,
      kpis: ['Return Rate', 'Conversion Rate', 'Cost per Acquisition'],
      timeline: 'Ongoing'
    }
  ],
  targeting: {
    demographics: {
      age: '25-65',
      gender: 'All',
      locations: ['United States', 'United Kingdom', 'Canada'],
      interests: ['Business Technology', 'Enterprise Software', 'Web Development']
    },
    keywords: [
      'web development services',
      'custom software development',
      'enterprise web solutions',
      'digital transformation services'
    ]
  },
  adFormats: [
    'Responsive Search Ads',
    'Responsive Display Ads',
    'Discovery Ads',
    'Video Campaigns'
  ],
  bestPractices: [
    'Implement proper keyword research and segmentation',
    'Use negative keywords to prevent irrelevant clicks',
    'Create targeted ad groups',
    'Regular bid optimization'
  ]
};