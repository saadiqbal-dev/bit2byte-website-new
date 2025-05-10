export interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  date: string;
  text: string;
  image: string;
}

export type SortOption = 'newest' | 'highest' | 'lowest';
export type FilterOption = 'all' | '5' | '4' | '3' | '2' | '1';