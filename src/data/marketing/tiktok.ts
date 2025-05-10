import { MarketingPlatform } from '../../types/marketing';

export const tiktokStrategy: MarketingPlatform = {
  name: 'TikTok Ads',
  objectives: [
    {
      name: 'Brand Awareness',
      budget: 2000,
      kpis: ['Video Views', 'Engagement Rate', 'Follower Growth'],
      timeline: '3 months'
    },
    {
      name: 'Website Traffic',
      budget: 1500,
      kpis: ['Click-through Rate', 'Website Visits', 'Time on Site'],
      timeline: '3 months'
    }
  ],
  targeting: {
    demographics: {
      age: '18-34',
      gender: 'All',
      locations: ['United States', 'United Kingdom', 'Canada'],
      interests: ['Technology', 'Business', 'Innovation']
    },
    placements: [
      'In-Feed Ads',
      'TopView',
      'Brand Takeover',
      'Branded Effects'
    ]
  },
  adFormats: [
    'Short-form Videos',
    'Spark Ads',
    'Branded Effects',
    'Hashtag Challenges'
  ],
  bestPractices: [
    'Create native-looking content',
    'Use trending music and effects',
    'Keep videos under 30 seconds',
    'Include clear call-to-actions'
  ]
};