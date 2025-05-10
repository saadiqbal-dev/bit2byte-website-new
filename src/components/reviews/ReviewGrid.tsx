import React from 'react';
import { ReviewCard } from './ReviewCard';
import type { Review } from '../../types/reviews';

interface ReviewGridProps {
  reviews: Review[];
}

export const ReviewGrid: React.FC<ReviewGridProps> = ({ reviews }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reviews.map((review, index) => (
        <ReviewCard key={review.id} review={review} index={index} />
      ))}
    </div>
  );
};