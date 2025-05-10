export interface MetaTag {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

export interface SEOData {
  pageTitle: string;
  metaDescription: string;
  keywords: string[];
  headings: {
    h1: string;
    h2: string[];
  };
  structuredData: Record<string, unknown>;
}