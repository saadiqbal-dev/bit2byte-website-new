import { MetaTag } from '../types/seo';

export const generateMetaTags = (pageMetadata: MetaTag) => {
  const { title, description, keywords, ogImage } = pageMetadata;
  
  return [
    { name: 'description', content: description },
    { name: 'keywords', content: keywords.join(', ') },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: ogImage },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage },
  ];
};