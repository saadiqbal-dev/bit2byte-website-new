import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating?: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating = 4.9 }) => {
  const fullStars = Math.floor(rating);
  const partialStar = rating % 1;
  const remainingStars = 5 - Math.ceil(rating);

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
      {partialStar > 0 && (
        <div className="relative">
          <Star className="w-5 h-5 text-yellow-400" />
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${partialStar * 100}%` }}
          >
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      )}
      {[...Array(remainingStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-5 h-5 text-slate-600" />
      ))}
      <span className="ml-2 text-sm text-slate-400">({rating})</span>
    </div>
  );
};