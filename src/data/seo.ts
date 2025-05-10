import type { SEOData } from '../types/seo';

export const seoData: Record<string, SEOData> = {
  home: {
    pageTitle: 'Bit2Byte | Digital Solutions & Web Development',
    metaDescription: 'Transform your digital presence with Bit2Byte\'s innovative web development and design solutions. Expert services in web development, eCommerce, and digital transformation.',
    keywords: [
      'web development',
      'digital solutions',
      'web design',
      'eCommerce development',
      'UK web agency',
      'digital transformation',
      'custom web development',
      'responsive design',
      'website optimization',
      'SEO services'
    ],
    headings: {
      h1: 'Transform Your Digital Presence with Expert Web Solutions',
      h2: [
        'Innovative Digital Solutions',
        'Custom Web Development',
        'eCommerce Excellence',
        'Digital Transformation Services'
      ]
    },
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Bit2Byte',
      description: 'Professional web development and digital solutions agency.',
      url: 'https://bit2bytesolutions.com',
      telephone: '+447300792357',
      email: 'contact@bit2bytesolutions.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'UK'
      },
      sameAs: [
        'https://x.com/Bit2Byte_Ltd',
        'https://www.facebook.com/bit2bytesolution/',
        'https://www.instagram.com/bit2bytesolutions/',
        'https://www.linkedin.com/company/bit2bytesolutions/'
      ]
    }
  }
};