import React, { useState, useCallback } from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ReviewFilters } from './reviews/ReviewFilters';
import { ReviewGrid } from './reviews/ReviewGrid';
import { reviews as initialReviews } from '../data/reviews';
import type { SortOption, FilterOption } from '../types/reviews';

export const Reviews = () => {
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [filterOption, setFilterOption] = useState<FilterOption>('all');

  const sortedAndFilteredReviews = useCallback(() => {
    let filtered = [...initialReviews];

    // Apply rating filter
    if (filterOption !== 'all') {
      filtered = filtered.filter(review => review.rating === parseInt(filterOption));
    }

    // Apply sorting
    switch (sortOption) {
      case 'newest':
        return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      case 'highest':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'lowest':
        return filtered.sort((a, b) => a.rating - b.rating);
      default:
        return filtered;
    }
  }, [sortOption, filterOption]);

  return (
    <section id="reviews" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto relative">
        <SectionTitle
          title="Client Reviews"
          subtitle="See what our clients say about their experience working with us"
        />

        <ReviewFilters
          sortOption={sortOption}
          filterOption={filterOption}
          onSortChange={setSortOption}
          onFilterChange={setFilterOption}
        />

        <ReviewGrid reviews={sortedAndFilteredReviews()} />
      </div>
    </section>
  );
};