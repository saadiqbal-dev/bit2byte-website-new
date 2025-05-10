import { MarketingPlatform } from '../../types/marketing';

export const metaStrategy: MarketingPlatform = {
  name: 'Meta Ads',
  objectives: [
    {
      name: 'Brand Awareness',
      budget: 2000,
      kpis: ['Reach', 'Impressions', 'Brand Lift'],
      timeline: '3 months'
    },
    {
      name: 'Lead Generation',
      budget: 3000,
      kpis: ['Lead Form Submissions', 'Cost per Lead', 'Lead Quality Score'],
      timeline: '6 months'
    },
    {
      name: 'Website Traffic',
      budget: 1500,
      kpis: ['Click-through Rate', 'Landing Page Views', 'Bounce Rate'],
      timeline: '3 months'
    }
  ],
  targeting: {
    demographics: {
      age: '25-54',
      gender: 'All',
      locations: ['United States', 'United Kingdom', 'Canada'],
      interests: ['Technology', 'Business', 'Software Development']
    },
    placements: [
      'Facebook News Feed',
      'Instagram Feed',
      'Facebook Marketplace',
      'Stories'
    ]
  },
  adFormats: [
    'Single Image',
    'Carousel',
    'Video',
    'Collection'
  ],
  bestPractices: [
    'Use high-quality visuals with minimal text',
    'Include clear call-to-actions',
    'Test multiple ad variations',
    'Optimize for mobile viewing'
  ]
};