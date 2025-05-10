import { MarketingPlatform } from '../../types/marketing';

export const instagramStrategy: MarketingPlatform = {
  name: 'Instagram Ads',
  objectives: [
    {
      name: 'Brand Awareness',
      budget: 2500,
      kpis: ['Reach', 'Story Views', 'Profile Visits'],
      timeline: '3 months'
    },
    {
      name: 'Engagement',
      budget: 2000,
      kpis: ['Likes', 'Comments', 'Saves', 'Shares'],
      timeline: '6 months'
    }
  ],
  targeting: {
    demographics: {
      age: '25-44',
      gender: 'All',
      locations: ['United States', 'United Kingdom', 'Canada'],
      interests: ['Technology', 'Business', 'Design']
    },
    placements: [
      'Instagram Feed',
      'Instagram Stories',
      'Instagram Reels',
      'Instagram Explore'
    ]
  },
  adFormats: [
    'Single Image',
    'Carousel',
    'Stories',
    'Reels'
  ],
  bestPractices: [
    'Use high-quality visuals',
    'Maintain brand consistency',
    'Leverage Instagram Shopping features',
    'Engage with audience comments'
  ]
};