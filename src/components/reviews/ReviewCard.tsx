import React from 'react';
import { motion } from 'framer-motion';
import { Star, StarHalf } from 'lucide-react';
import type { Review } from '../../types/reviews';

interface ReviewCardProps {
  review: Review;
  index: number;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review, index }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`star-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half-star" className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-star-${i}`} className="w-5 h-5 text-slate-600" />
      );
    }

    return stars;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="w-full"
    >
      <div className="glass-panel p-6 h-full">
        <div className="flex items-start gap-4 mb-4">
          <img
            src={review.image}
            alt={review.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold text-lg">{review.name}</h3>
            <p className="text-slate-400 text-sm">{review.role}</p>
            <p className="text-blue-400 text-sm">{review.company}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 mb-4">
          {renderStars(review.rating)}
        </div>

        <p className="text-slate-300 mb-4">{review.text}</p>

        <div className="text-sm text-slate-400">
          {new Date(review.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>
      </div>
    </motion.div>
  );
};