import React from 'react';
import { SortOption, FilterOption } from '../../types/reviews';

interface ReviewFiltersProps {
  sortOption: SortOption;
  filterOption: FilterOption;
  onSortChange: (option: SortOption) => void;
  onFilterChange: (option: FilterOption) => void;
}

export const ReviewFilters: React.FC<ReviewFiltersProps> = ({
  sortOption,
  filterOption,
  onSortChange,
  onFilterChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="flex-1">
        <label className="block text-sm font-medium mb-2">Sort By</label>
        <select
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="newest">Newest First</option>
          <option value="highest">Highest Rated</option>
          <option value="lowest">Lowest Rated</option>
        </select>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium mb-2">Filter by Rating</label>
        <select
          value={filterOption}
          onChange={(e) => onFilterChange(e.target.value as FilterOption)}
          className="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="all">All Ratings</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>
      </div>
    </div>
  );
};